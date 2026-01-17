export type CAPType = 'CP' | 'AP' | 'CA'; // CA is theoretical mostly in distributed systems, but keeping for completeness
export type PACELCType = 'PC/EC' | 'PC/EL' | 'PA/EC' | 'PA/EL'; // Partial representation
export type DataStructure = 'Relational' | 'Document' | 'Key-Value' | 'Graph' | 'Wide-Column' | 'Vector' | 'Search Engine';
export type CausalConsistency = 'Strong' | 'Eventual' | 'Causal' | 'Read-Your-Writes';

export interface TheoremMetrics {
  cap: CAPType;
  pacelc?: string; // e.g., "PC/EC"
}

export interface Database {
  id: string;
  name: string;
  type: DataStructure;
  logo: string; // Icon name from Lucide or path
  description: string;
  theorems: TheoremMetrics;
  strengths: string[];
  weaknesses: string[];
  useCases: string[];
  costTier: 1 | 2 | 3 | 4; // 1 = $, 4 = $$$$
  complexity: number; // 1-10
  scalability: 'Vertical' | 'Horizontal' | 'Both';
}

export interface QuestionnaireInput {
  consistencyPreference: 'Strong' | 'Eventual';
  partitionTolerance: boolean; // Almost always yes for distributed
  latencySensitivity: 'Low' | 'High'; // High means we need low latency
  dataStructure: DataStructure;
  budget: 'Low' | 'Medium' | 'High';
}

export interface RecommendationResult {
  matchScore: number; // 0-100
  database: Database;
  matchReasons: string[];
  tradeOffs: string[];
}
