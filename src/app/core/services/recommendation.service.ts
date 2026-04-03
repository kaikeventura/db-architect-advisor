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

            // 1. CAP Theorem (Partition Strategy) - WEIGHT 35
            if (input.partitionStrategy === 'Consistency') {
                if (db.theorems.cap === 'CP' || db.theorems.cap === 'CA') {
                    score += 35;
                    reasons.push('RESULTS.REASONS.CONSISTENCY_PARTITION');
                } else {
                    score -= 15;
                    tradeOffs.push('RESULTS.TRADEOFFS.CONSISTENCY_CONFLICT');
                }
            } else { // Availability
                if (db.theorems.cap === 'AP') {
                    score += 35;
                    reasons.push('RESULTS.REASONS.AVAILABILITY_PARTITION');
                } else {
                    score += 5; // CP systems can still be used but won't be as available
                }
            }

            // 2. PACELC (Normal Operation) - WEIGHT 25
            if (input.normalOperationPriority === 'Latency') {
                if (db.theorems.pacelc?.includes('EL') || db.id === 'redis') {
                    score += 25;
                    reasons.push('RESULTS.REASONS.LOW_LATENCY');
                } else {
                    score -= 5;
                }
            } else { // Consistency (EC)
                if (db.theorems.pacelc?.includes('EC')) {
                    score += 25;
                    reasons.push('RESULTS.REASONS.CONSISTENCY_NORMAL');
                } else {
                    score -= 10;
                    tradeOffs.push('RESULTS.TRADEOFFS.LATENCY_TRADE');
                }
            }

            // 3. Data Structure - WEIGHT 20
            if (db.type === input.dataStructure) {
                score += 20;
                reasons.push('RESULTS.REASONS.NATIVE_SUPPORT');
            } else if (this.isCompatible(input.dataStructure, db.type)) {
                score += 10;
                reasons.push('RESULTS.REASONS.COMPATIBLE_SUPPORT');
            } else {
                score -= 15;
            }

            // 4. Scalability - WEIGHT 15
            if (input.scalabilityNeed === 'Horizontal') {
                if (db.scalability === 'Horizontal' || db.scalability === 'Both') {
                    score += 15;
                    reasons.push('RESULTS.REASONS.HORIZONTAL_SCALE');
                } else {
                    score -= 10;
                    tradeOffs.push('RESULTS.TRADEOFFS.VERTICAL_LIMIT');
                }
            } else {
                score += 5; // Vertical scale-up is supported by almost all
            }

            // 5. Transactions - WEIGHT 15
            if (input.transactionType === 'ACID') {
                if (db.distributedTransactions) {
                    score += 15;
                    reasons.push('RESULTS.REASONS.DISTRIBUTED_ACID');
                } else {
                    score -= 15;
                }
            } else {
                score += 10;
            }

            // 6. Budget - WEIGHT 10
            const budgetMap = { 'Low': 1, 'Medium': 2, 'High': 3 };
            const userBudget = budgetMap[input.budget];

            if (db.costTier <= userBudget) {
                score += 10;
                reasons.push('RESULTS.REASONS.FITS_BUDGET');
            } else {
                score -= 10;
                tradeOffs.push('RESULTS.TRADEOFFS.HIGHER_COST');
            }

            // Normalize score to 0-100 (Max possible is around 125 with bonuses)
            const normalizedScore = Math.min(100, Math.max(0, score));

            return {
                matchScore: normalizedScore,
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
