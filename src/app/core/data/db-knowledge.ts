import { Database } from '../models/database.model';

export const DATABASE_KNOWLEDGE_BASE: Database[] = [
    {
        id: 'postgresql',
        name: 'PostgreSQL',
        type: 'Relational',
        logo: 'database', // Lucide icon name fallback
        description: 'The world\'s most advanced open source relational database.',
        theorems: {
            cap: 'CP', // In cluster mode with sync replication
            pacelc: 'PC/EC' // Partition => Consistency, Else => Consistency
        },
        strengths: ['ACID Compliance', 'Complex Queries', 'Extensibility (PostGIS, pgvector)', 'Reliability'],
        weaknesses: ['Horizontal scaling complexity', 'Write throughput at massive scale'],
        useCases: ['Financial Systems', 'E-commerce', 'Geospatial Data', 'General Purpose'],
        costTier: 1, // Open Source
        complexity: 4,
        scalability: 'Vertical'
    },
    {
        id: 'mongodb',
        name: 'MongoDB',
        type: 'Document',
        logo: 'file-json',
        description: 'The most popular modern database for flexible schemas.',
        theorems: {
            cap: 'CP', // Default
            pacelc: 'PA/EC' // Can be tuned
        },
        strengths: ['Flexible Schema', 'Developer Experience', 'Horizontal Scaling (Sharding)'],
        weaknesses: ['Complex Transactions', 'Joins performance'],
        useCases: ['Content Management', 'Log Data', 'Mobile Apps', 'Catalogs'],
        costTier: 2, // Atlas can be pricey
        complexity: 3,
        scalability: 'Horizontal'
    },
    {
        id: 'cassandra',
        name: 'Apache Cassandra',
        type: 'Wide-Column',
        logo: 'table',
        description: 'Manage massive amounts of data across many servers without a single point of failure.',
        theorems: {
            cap: 'AP',
            pacelc: 'PA/EL'
        },
        strengths: ['Linear Scalability', 'High Write Throughput', 'Global Distribution', 'Zero Downtime'],
        weaknesses: ['No Joins', 'Rigid Schema Design', 'Complexity of operation'],
        useCases: ['IoT Sensor Data', 'Messaging Systems', 'Activity Tracking'],
        costTier: 1,
        complexity: 8,
        scalability: 'Horizontal'
    },
    {
        id: 'redis',
        name: 'Redis',
        type: 'Key-Value',
        logo: 'zap',
        description: 'In-memory data store used as a database, cache, and message broker.',
        theorems: {
            cap: 'CP', // Single node is CA, Cluster is CP (or AP depending on config)
            pacelc: 'PC/EC'
        },
        strengths: ['Microsecond Latency', 'Simple Structures', 'Versatility'],
        weaknesses: ['RAM limited', 'Persistence complexity'],
        useCases: ['Caching', 'Session Store', 'Real-time Analytics', 'Leaderboards'],
        costTier: 2,
        complexity: 3,
        scalability: 'Horizontal'
    },
    {
        id: 'neo4j',
        name: 'Neo4j',
        type: 'Graph',
        logo: 'share-2',
        description: 'The world\'s leading graph database.',
        theorems: {
            cap: 'CA', // Single instance. Causal Clustering is CP.
            pacelc: 'PC/EC'
        },
        strengths: ['Relationship Traversal', 'Cypher Query Language', 'Data Visualization'],
        weaknesses: ['Horizontal Scaling', 'Write throughput for non-graph data'],
        useCases: ['Fraud Detection', 'Recommendation Engines', 'Knowledge Graphs'],
        costTier: 2,
        complexity: 5,
        scalability: 'Vertical'
    },
    {
        id: 'dynamodb',
        name: 'Amazon DynamoDB',
        type: 'Key-Value', // and Document
        logo: 'box',
        description: 'Serverless, NoSQL database with single-digit millisecond performance at any scale.',
        theorems: {
            cap: 'AP',
            pacelc: 'PA/EL'
        },
        strengths: ['Serverless', 'Aoto-scaling', 'Integration with AWS'],
        weaknesses: ['Query flexibility', 'Vendor Lock-in', 'Cost at scale'],
        useCases: ['Serverless Apps', 'Gaming', 'Mobile Backends'],
        costTier: 2,
        complexity: 2, // Managed
        scalability: 'Horizontal'
    },
    {
        id: 'elasticsearch',
        name: 'Elasticsearch',
        type: 'Search Engine',
        logo: 'search',
        description: 'Distributed, RESTful search and analytics engine.',
        theorems: {
            cap: 'AP', // Generally favors availability and partition tolerance
            pacelc: 'PA/EL'
        },
        strengths: ['Full-text Search', 'Log Analytics', 'Complex Aggregations'],
        weaknesses: ['Data durability (not primary store)', 'Resource Heavy'],
        useCases: ['Search', 'Observability', 'Security analysis'],
        costTier: 2,
        complexity: 6,
        scalability: 'Horizontal'
    }
];
