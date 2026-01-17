import { Database } from '../models/database.model';

export const DATABASE_KNOWLEDGE_BASE: Database[] = [
    // --- Relational & NewSQL ---
    {
        id: 'postgresql',
        name: 'PostgreSQL',
        type: 'Relational',
        logo: 'database',
        description: 'The world\'s most advanced open source relational database.',
        theorems: { cap: 'CP', pacelc: 'PC/EC' },
        strengths: ['ACID Compliance', 'Complex Queries', 'Extensibility (PostGIS, pgvector)', 'Reliability'],
        weaknesses: ['Horizontal scaling complexity', 'Write throughput at massive scale'],
        useCases: ['Financial Systems', 'E-commerce', 'Geospatial Data', 'General Purpose'],
        costTier: 1,
        complexity: 4,
        scalability: 'Vertical'
    },
    {
        id: 'cockroachdb',
        name: 'CockroachDB',
        type: 'Relational', // NewSQL
        logo: 'database',
        description: 'Distributed SQL database built to survive disk, machine, rack, and even datacenter failures.',
        theorems: { cap: 'CP', pacelc: 'PC/EC' },
        strengths: ['Geo-partitioning', 'Survival of region failures', 'Distributed ACID', 'Postgres compatible'],
        weaknesses: ['Higher latency than single-node SQL', 'Complexity of deployment'],
        useCases: ['Global Inventory', 'Financial Ledgers', 'Multi-region Apps'],
        costTier: 3,
        complexity: 7,
        scalability: 'Horizontal'
    },
    {
        id: 'tidb',
        name: 'TiDB',
        type: 'Relational',
        logo: 'database',
        description: 'Open-source, distributed SQL database that supports Hybrid Transactional and Analytical Processing (HTAP).',
        theorems: { cap: 'CP', pacelc: 'PC/EC' },
        strengths: ['HTAP (OLTP + OLAP)', 'MySQL Compatibility', 'Horizontal Scalability'],
        weaknesses: ['Operational complexity', 'Resource intensive'],
        useCases: ['Real-time Analytics', 'High-volume Transactional Systems'],
        costTier: 2,
        complexity: 7,
        scalability: 'Horizontal'
    },
    {
        id: 'yugabytedb',
        name: 'YugabyteDB',
        type: 'Relational',
        logo: 'database',
        description: 'High-performance, cloud-native distributed SQL database that guarantees 100% Postgres compatibility.',
        theorems: { cap: 'CP', pacelc: 'PC/EC' },
        strengths: ['Postgres & Cassandra APIs', 'Geo-distribution', 'Low latency writes'],
        weaknesses: ['Memory consumption', 'Learning curve for tuning'],
        useCases: ['Microservices', 'Internet Scale Apps', 'Edge Computing'],
        costTier: 2,
        complexity: 6,
        scalability: 'Horizontal'
    },
    {
        id: 'aurora-serverless',
        name: 'Amazon Aurora (Serverless)',
        type: 'Relational',
        logo: 'cloud',
        description: 'MySQL and PostgreSQL-compatible relational database built for the cloud.',
        theorems: { cap: 'CP', pacelc: 'PC/EC' },
        strengths: ['Auto-scaling', 'Storage separation', 'High Availability'],
        weaknesses: ['Cold starts (v1)', 'Cost predictability', 'Vendor Lock-in'],
        useCases: ['SaaS Applications', 'Variable Workloads', 'Enterprise ERP'],
        costTier: 3,
        complexity: 3,
        scalability: 'Vertical' // Auto-scaling vertical
    },

    // --- NoSQL (Document & Key-Value) ---
    {
        id: 'mongodb',
        name: 'MongoDB',
        type: 'Document',
        logo: 'file-json',
        description: 'The most popular modern database for flexible schemas.',
        theorems: { cap: 'CP', pacelc: 'PA/EC' },
        strengths: ['Flexible Schema', 'Developer Experience', 'Horizontal Scaling (Sharding)'],
        weaknesses: ['Complex Transactions', 'Joins performance'],
        useCases: ['Content Management', 'Log Data', 'Mobile Apps', 'Catalogs'],
        costTier: 2,
        complexity: 3,
        scalability: 'Horizontal'
    },
    {
        id: 'dynamodb',
        name: 'Amazon DynamoDB',
        type: 'Key-Value',
        logo: 'box',
        description: 'Serverless, NoSQL database with single-digit millisecond performance at any scale.',
        theorems: { cap: 'AP', pacelc: 'PA/EL' },
        strengths: ['Serverless', 'Auto-scaling', 'Integration with AWS'],
        weaknesses: ['Query flexibility', 'Vendor Lock-in', 'Cost at scale', 'Item size limits'],
        useCases: ['Serverless Apps', 'Gaming', 'Mobile Backends'],
        costTier: 2,
        complexity: 2,
        scalability: 'Horizontal'
    },
    {
        id: 'redis',
        name: 'Redis',
        type: 'Key-Value',
        logo: 'zap',
        description: 'In-memory data store used as a database, cache, and message broker.',
        theorems: { cap: 'CP', pacelc: 'PC/EC' }, // In Cluster
        strengths: ['Microsecond Latency', 'Simple Structures', 'Versatility'],
        weaknesses: ['RAM limited', 'Persistence complexity'],
        useCases: ['Caching', 'Session Store', 'Real-time Analytics', 'Leaderboards'],
        costTier: 2,
        complexity: 3,
        scalability: 'Horizontal'
    },

    // --- Wide Column & Time Series ---
    {
        id: 'cassandra',
        name: 'Apache Cassandra',
        type: 'Wide-Column',
        logo: 'table',
        description: 'Manage massive amounts of data across many servers without a single point of failure.',
        theorems: { cap: 'AP', pacelc: 'PA/EL' },
        strengths: ['Linear Scalability', 'High Write Throughput', 'Global Distribution', 'Zero Downtime'],
        weaknesses: ['No Joins', 'Rigid Schema Design', 'Complexity of operation'],
        useCases: ['IoT Sensor Data', 'Messaging Systems', 'Activity Tracking'],
        costTier: 1,
        complexity: 8,
        scalability: 'Horizontal'
    },
    {
        id: 'scylladb', // Bonus similar to Cassandra
        name: 'ScyllaDB',
        type: 'Wide-Column',
        logo: 'zap', // Using zap for speed
        description: 'High-performance NoSQL database API-compatible with Apache Cassandra.',
        theorems: { cap: 'AP', pacelc: 'PA/EL' },
        strengths: ['C++ Performance', 'Low Latency', 'Self-tuning'],
        weaknesses: ['Smaller ecosystem than Cassandra', 'Strict hardware requirements'],
        useCases: ['AdTech', 'High-frequency Trading', 'Real-time IoT'],
        costTier: 2,
        complexity: 6,
        scalability: 'Horizontal'
    },
    {
        id: 'influxdb',
        name: 'InfluxDB',
        type: 'Wide-Column', // Time Series
        logo: 'activity',
        description: 'Purpose-built time series database.',
        theorems: { cap: 'AP', pacelc: 'PA/EL' },
        strengths: ['High compression', 'Time-centric query language (Flux/SQL)', 'Built-in tasks'],
        weaknesses: ['Cardinality limits', 'Clustering is enterprise-only'],
        useCases: ['Infrastructure Monitoring', 'IoT', 'Sensor Networks'],
        costTier: 2,
        complexity: 4,
        scalability: 'Horizontal'
    },
    {
        id: 'timescaledb',
        name: 'TimescaleDB',
        type: 'Relational', // Time Series on Postgres
        logo: 'activity',
        description: 'PostgreSQL++ for time-series and events.',
        theorems: { cap: 'CP', pacelc: 'PC/EC' },
        strengths: ['Full SQL', 'Postgres ecosystem', 'Hypertables'],
        weaknesses: ['Write scaling vs Influx', 'Disk usage'],
        useCases: ['Financial Market Data', 'Industrial IoT', 'Metrics'],
        costTier: 2,
        complexity: 4,
        scalability: 'Vertical'
    },
    {
        id: 'prometheus',
        name: 'Prometheus',
        type: 'Wide-Column', // TSDB
        logo: 'activity',
        description: 'Monitoring system and time series database.',
        theorems: { cap: 'AP', pacelc: 'PA/EL' },
        strengths: ['Pull model', 'Alertmanager', 'Cloud Native Standard'],
        weaknesses: ['Long-term storage (needs Thanos)', 'Not for event logging'],
        useCases: ['Kubernetes Monitoring', 'System Metrics'],
        costTier: 1,
        complexity: 5,
        scalability: 'Vertical' // Federation for horizontal
    },

    // --- Vector & AI ---
    {
        id: 'pinecone',
        name: 'Pinecone',
        type: 'Vector',
        logo: 'brain-circuit',
        description: 'Managed vector database for machine learning applications.',
        theorems: { cap: 'AP', pacelc: 'PA/EL' }, // Emphasis on availability for inference
        strengths: ['Fully Managed', 'High performance search', 'Metadata filtering'],
        weaknesses: ['Cost at high volume', 'Fully proprietary'],
        useCases: ['Semantic Search', 'LLM RAG', 'Recommendation Systems'],
        costTier: 3,
        complexity: 2,
        scalability: 'Horizontal'
    },
    {
        id: 'milvus',
        name: 'Milvus',
        type: 'Vector',
        logo: 'brain-circuit',
        description: 'Cloud-native, open-source vector database built for scalable similarity search.',
        theorems: { cap: 'CP', pacelc: 'PC/EC' }, // Tunable consistency levels
        strengths: ['High throughput', 'Cloud-native architecture', 'Hybrid search'],
        weaknesses: ['Operational complexity', 'Resource hungry'],
        useCases: ['Visual Search', 'Biometrics', 'GenAI'],
        costTier: 1,
        complexity: 6,
        scalability: 'Horizontal'
    },
    {
        id: 'weaviate',
        name: 'Weaviate',
        type: 'Vector',
        logo: 'brain-circuit',
        description: 'Open source vector search engine with out-of-the-box modules.',
        theorems: { cap: 'AP', pacelc: 'PA/EL' }, // Tunable
        strengths: ['Modular ecosystem', 'GraphQL API', 'Hybrid search'],
        weaknesses: ['Learning curve of modules', 'Memory usage'],
        useCases: ['Knowledge base search', 'Classification', 'Image search'],
        costTier: 1,
        complexity: 5,
        scalability: 'Horizontal'
    },
    {
        id: 'chromadb',
        name: 'ChromaDB',
        type: 'Vector',
        logo: 'brain-circuit',
        description: 'The AI-native open-source embedding database.',
        theorems: { cap: 'AP', pacelc: 'PA/EL' },
        strengths: ['Developer friendly', 'Simple Python API', 'Lightweight'],
        weaknesses: ['Less mature for massive scale', 'Limited advanced features'],
        useCases: ['Local LLM development', 'Prototyping', 'Small-medium RAG'],
        costTier: 1,
        complexity: 1,
        scalability: 'Vertical'
    },
    {
        id: 'pgvector',
        name: 'pgvector (PostgreSQL)',
        type: 'Vector',
        logo: 'database',
        description: 'Open-source vector similarity search for PostgreSQL.',
        theorems: { cap: 'CP', pacelc: 'PC/EC' },
        strengths: ['Keep data in Postgres', 'ACID compliant vectors', 'No new infra'],
        weaknesses: ['Scale limit vs dedicated vector DBs', 'Index build time'],
        useCases: ['Hybrid SQL+Vector search', 'Simplifying stack'],
        costTier: 1,
        complexity: 3,
        scalability: 'Vertical'
    },

    // --- Graph & Multi-Model ---
    {
        id: 'neo4j',
        name: 'Neo4j',
        type: 'Graph',
        logo: 'share-2',
        description: 'The world\'s leading graph database.',
        theorems: { cap: 'CA', pacelc: 'PC/EC' },
        strengths: ['Relationship Traversal', 'Cypher Query Language', 'Data Visualization'],
        weaknesses: ['Horizontal Scaling (Sharding)', 'Write throughput'],
        useCases: ['Fraud Detection', 'Recommendation Engines', 'Knowledge Graphs'],
        costTier: 3, // Enterprise is expensive
        complexity: 5,
        scalability: 'Vertical'
    },
    {
        id: 'arangodb',
        name: 'ArangoDB',
        type: 'Document', // Multi-mode (Graph + Doc + KV)
        logo: 'layers',
        description: 'Native multi-model database for graph, document, and key-value.',
        theorems: { cap: 'CP', pacelc: 'PC/EC' },
        strengths: ['AQL (One query language for all)', 'Versatility', 'Foxx Microservices'],
        weaknesses: ['Master-Slave architecture limits write scale', 'Jack of all trades'],
        useCases: ['Complex Data Models', 'Graph + Metadata', 'Content Management'],
        costTier: 2,
        complexity: 5,
        scalability: 'Horizontal'
    },
    {
        id: 'dgraph',
        name: 'Dgraph',
        type: 'Graph',
        logo: 'share-2',
        description: 'Horizontal scalable, distributed, native graph database.',
        theorems: { cap: 'CP', pacelc: 'PC/EC' },
        strengths: ['Native Distributed Graph', 'GraphQL native', 'High throughput'],
        weaknesses: ['Newer ecosystem', 'Resource management'],
        useCases: ['Customer 360', 'Social Networks', 'Real-time Recommendation'],
        costTier: 2,
        complexity: 6,
        scalability: 'Horizontal'
    },
    {
        id: 'faunadb',
        name: 'Fauna',
        type: 'Document', // Client-serverless
        logo: 'cloud',
        description: 'Distributed document-relational database delivered as a global API.',
        theorems: { cap: 'CP', pacelc: 'PC/EC' }, // Strictly Serialized
        strengths: ['Global Strong Consistency', 'Serverless', 'ACID'],
        weaknesses: ['Proprietary Query Language (FQL)', 'Latency floor'],
        useCases: ['Global Apps', 'Financial Ledger', 'Gaming'],
        costTier: 2,
        complexity: 3,
        scalability: 'Horizontal'
    },

    // --- Cloud Native & Global ---
    {
        id: 'cosmosdb',
        name: 'Azure Cosmos DB',
        type: 'Document', // Multi-model
        logo: 'globe',
        description: 'Microsoft\'s globally distributed, multi-model database service.',
        theorems: { cap: 'AP', pacelc: 'PA/EL' }, // Tunable
        strengths: ['5 Consistency Levels', 'SLA guarantees', 'Multi-API (SQL, Mongo, Cassandra)'],
        weaknesses: ['Cost complexity', 'Throttling logic'],
        useCases: ['Global Retail', 'IoT Telemetry', 'Personalization'],
        costTier: 3,
        complexity: 4,
        scalability: 'Horizontal'
    },
    {
        id: 'firestore',
        name: 'Google Cloud Firestore',
        type: 'Document',
        logo: 'cloud',
        description: 'Flexible, scalable database for mobile, web, and server development.',
        theorems: { cap: 'CP', pacelc: 'PC/EC' },
        strengths: ['Real-time updates', 'Offline support', 'Integration with Firebase'],
        weaknesses: ['Write limits per document', 'Query limitations (No aggregation)'],
        useCases: ['Mobile Apps', 'Live Collaboration', 'User Profiles'],
        costTier: 2,
        complexity: 2,
        scalability: 'Horizontal'
    },
    {
        id: 'spanner',
        name: 'Google Cloud Spanner',
        type: 'Relational',
        logo: 'globe',
        description: 'Fully managed relational database with unlimited scale and strong consistency.',
        theorems: { cap: 'CP', pacelc: 'PC/EC' }, // "TrueTime" technically allows effectively CA capabilities
        strengths: ['Global ACID Transactions', 'Unlimited Scale', '99.999% Availability'],
        weaknesses: ['Very Expensive', 'High latency floor', 'Warm-up time'],
        useCases: ['Global Banking', 'Massive Scale Inventory', 'Critical Systems'],
        costTier: 4,
        complexity: 5,
        scalability: 'Horizontal'
    },

    // --- OLAP & Big Data ---
    {
        id: 'snowflake',
        name: 'Snowflake',
        type: 'Relational', // OLAP
        logo: 'table',
        description: 'Cloud computing-based data cloud company.',
        theorems: { cap: 'AP', pacelc: 'PA/EL' },
        strengths: ['Separation of Compute/Storage', 'Data Sharing', 'Zero Maintenance'],
        weaknesses: ['Cost can explode', 'Latency not for OLTP'],
        useCases: ['Data Warehousing', 'Data Lake', 'Business Intelligence'],
        costTier: 3,
        complexity: 3,
        scalability: 'Horizontal'
    },
    {
        id: 'clickhouse',
        name: 'ClickHouse',
        type: 'Wide-Column', // OLAP
        logo: 'columns',
        description: 'Fast open-source OLAP database management system.',
        theorems: { cap: 'AP', pacelc: 'PA/EL' },
        strengths: ['Incredible Query Speed', 'Compression', 'Real-time Analytics'],
        weaknesses: ['No full transactions', 'Deletes/Updates are expensive'],
        useCases: ['Log Analysis', 'AdTech', 'Telemetry visualization'],
        costTier: 1,
        complexity: 6,
        scalability: 'Horizontal'
    },
    {
        id: 'bigquery',
        name: 'Google BigQuery',
        type: 'Relational', // OLAP
        logo: 'search',
        description: 'Serverless, highly scalable, and cost-effective multi-cloud data warehouse.',
        theorems: { cap: 'AP', pacelc: 'PA/EL' },
        strengths: ['Serverless', 'Integration with Google ecosystem', 'ML capabilities'],
        weaknesses: ['Slot contention', 'Cost per query model'],
        useCases: ['Big Data Analytics', 'Predictive Modeling', 'Marketing Analytics'],
        costTier: 2,
        complexity: 2,
        scalability: 'Horizontal'
    },
    {
        id: 'duckdb',
        name: 'DuckDB',
        type: 'Relational', // OLAP
        logo: 'database',
        description: 'In-process SQL OLAP database management system.',
        theorems: { cap: 'CP', pacelc: 'PC/EC' }, // Single process usually
        strengths: ['Fast local analytics', 'Zero dependencies', 'Vectorized execution'],
        weaknesses: ['Not for distributed clusters', 'Single writer'],
        useCases: ['Local data analysis', 'Data pipelines', 'Embedded analytics'],
        costTier: 1,
        complexity: 1,
        scalability: 'Vertical'
    },

    // --- Embedded & Search ---
    {
        id: 'sqlite',
        name: 'SQLite',
        type: 'Relational',
        logo: 'database',
        description: 'C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine.',
        theorems: { cap: 'CA', pacelc: 'PC/EC' }, // Local
        strengths: ['Ubiquitous', 'Zero configuration', 'Single file'],
        weaknesses: ['Concurrency (High writes)', 'No network access built-in'],
        useCases: ['Mobile Apps', 'IoT', 'Desktop Apps', 'Testing'],
        costTier: 1,
        complexity: 1,
        scalability: 'Vertical'
    },
    {
        id: 'realm',
        name: 'Realm (Atlas Device SDK)',
        type: 'Document', // Object
        logo: 'smartphone',
        description: 'Mobile database enabling offline-first applications.',
        theorems: { cap: 'AP', pacelc: 'PA/EL' },
        strengths: ['Offline-first sync', 'Object-oriented', 'Reactive'],
        weaknesses: ['Vendor lock (MongoDB Atlas)', 'Schema migrations'],
        useCases: ['Mobile Offline Apps', 'Gaming', 'IoT Edge'],
        costTier: 2,
        complexity: 3,
        scalability: 'Vertical'
    },
    {
        id: 'elasticsearch',
        name: 'Elasticsearch',
        type: 'Search Engine',
        logo: 'search',
        description: 'Distributed, RESTful search and analytics engine.',
        theorems: { cap: 'AP', pacelc: 'PA/EL' },
        strengths: ['Full-text Search', 'Log Analytics', 'Complex Aggregations'],
        weaknesses: ['Data durability (not primary store)', 'Resource Heavy'],
        useCases: ['Search', 'Observability', 'Security analysis'],
        costTier: 2,
        complexity: 6,
        scalability: 'Horizontal'
    }
];
