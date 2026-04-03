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
  type: DataStructure; // This will also be translated
  logo: string;
  description: string; // Translation Key
  theorems: TheoremMetrics;
  strengths: string[]; // Translation Keys
  weaknesses: string[]; // Translation Keys
  useCases: string[]; // Translation Keys
  costTier: 1 | 2 | 3 | 4;
  complexity: number;
  scalability: 'Vertical' | 'Horizontal' | 'Both';
  distributedTransactions: boolean;
}

export interface QuestionnaireInput {
  partitionStrategy: 'Consistency' | 'Availability';
  normalOperationPriority: 'Latency' | 'Consistency';
  dataStructure: DataStructure;
  budget: 'Low' | 'Medium' | 'High';
  scalabilityNeed: 'Vertical' | 'Horizontal';
  transactionType: 'ACID' | 'Eventual';
}

export interface RecommendationResult {
  matchScore: number; // 0-100
  database: Database;
  matchReasons: string[];
  tradeOffs: string[];
}
