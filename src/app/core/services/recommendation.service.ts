import { Injectable, computed, signal } from '@angular/core';
import { Database, QuestionnaireInput, RecommendationResult } from '../models/database.model';
import { DATABASE_KNOWLEDGE_BASE } from '../data/db-knowledge';

@Injectable({
    providedIn: 'root'
})
export class RecommendationEngineService {
    private knowledgeBase = signal<Database[]>(DATABASE_KNOWLEDGE_BASE);

    constructor() { }

    calculateRecommendations(input: QuestionnaireInput): RecommendationResult[] {
        const dbs = this.knowledgeBase();

        return dbs.map(db => {
            let score = 0;
            const reasons: string[] = [];
            const tradeOffs: string[] = [];

            // 1. Consistency & CAP Theorem
            if (input.consistencyPreference === 'Strong') {
                if (db.theorems.cap === 'CP' || db.theorems.cap === 'CA' || db.theorems.pacelc?.includes('PC')) {
                    score += 30;
                    reasons.push('RESULTS.REASONS.PRIORITIZES_CONSISTENCY');
                } else {
                    score -= 10;
                    tradeOffs.push('RESULTS.TRADEOFFS.CONSISTENCY_CONFLICT');
                }
            } else { // Eventual
                if (db.theorems.cap === 'AP' || db.theorems.pacelc?.includes('PA')) {
                    score += 30;
                    reasons.push('RESULTS.REASONS.PRIORITIZES_AVAILABILITY');
                } else {
                    score += 10;
                }
            }

            // 2. Data Structure
            if (db.type === input.dataStructure) {
                score += 25;
                reasons.push('RESULTS.REASONS.NATIVE_SUPPORT');
            } else if (this.isCompatible(input.dataStructure, db.type)) {
                score += 10;
                reasons.push('RESULTS.REASONS.COMPATIBLE_SUPPORT');
            } else {
                score -= 20;
            }

            // 3. Latency (PACELC)
            if (input.latencySensitivity === 'High') {
                if (db.id === 'redis' || db.id === 'dynamodb' || db.theorems.pacelc?.includes('EL')) {
                    score += 20;
                    reasons.push('RESULTS.REASONS.LOW_LATENCY');
                } else if (db.id === 'postgresql' || db.theorems.pacelc?.includes('EC')) {
                    score += 10;
                    tradeOffs.push('RESULTS.TRADEOFFS.LATENCY_IMPACT');
                }
            }

            // 4. Budget
            const budgetMap = { 'Low': 1, 'Medium': 2, 'High': 3 };
            const userBudget = budgetMap[input.budget];

            if (db.costTier <= userBudget) {
                score += 15;
                reasons.push('RESULTS.REASONS.FITS_BUDGET');
            } else {
                score -= 10;
                tradeOffs.push('RESULTS.TRADEOFFS.HIGHER_COST');
            }

            return {
                matchScore: Math.max(0, score),
                database: db,
                matchReasons: reasons,
                tradeOffs: tradeOffs
            };
        }).sort((a, b) => b.matchScore - a.matchScore);
    }

    private isCompatible(required: string, actual: string): boolean {
        // Basic compatibility logic
        if (required === 'JSON' && (actual === 'Document' || actual === 'Relational')) return true; // many SQL dbs support JSON now
        if (required === 'Relational' && actual === 'Distributed SQL') return true;
        return false;
    }
}
