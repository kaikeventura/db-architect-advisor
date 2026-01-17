# 🎯 DB Architect Advisor

Uma aplicação Single Page Application (SPA) moderna e inteligente projetada para ajudar arquitetos de software e desenvolvedores a escolher o banco de dados perfeito para seus casos de uso específicos. Construída com uma estética **Cyberpunk Clean** premium, apresentando Glassmorphism e efeitos Neon.

![Angular](https://img.shields.io/badge/Angular-21-red?logo=angular)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)
![i18n](https://img.shields.io/badge/i18n-English%20%7C%20Portuguese-blue)

🔗 **[Demo ao Vivo](https://kaikeventura.github.io/db-architect-advisor/)**

---

## ✨ Principais Funcionalidades

- **🧠 Wizard Inteligente**: Guia interativo multi-etapas que analisa seus requisitos arquiteturais
- **📚 Base de Conhecimento Massiva**: Informações detalhadas sobre mais de **30 bancos de dados**, incluindo Relacional, NoSQL, Vector, Graph, Wide-Column e Search Engines
- **⚡ Recomendação em Tempo Real**: Algoritmo de pontuação baseado nos princípios do **Teorema CAP** e **PACELC**
- **🌍 Suporte Completo i18n**: Alterne facilmente entre Inglês e Português com preferências persistentes do usuário
- **🎨 UI Premium**: 
  - Painéis com Glassmorphism e efeitos de blur
  - Bordas e tipografia com brilho neon
  - Layout responsivo (Mobile, Tablet, Desktop)
  - Integração com ícones Lucide

---

## 🚀 Stack Tecnológica

| Tecnologia | Versão | Propósito |
|------------|--------|-----------|
| [Angular](https://angular.dev/) | v21 | Framework principal |
| [Tailwind CSS](https://tailwindcss.com/) | v3.4 | Estilização e design system |
| [Lucide Angular](https://lucide.dev/) | v0.562 | Sistema de ícones |
| [@ngx-translate](https://github.com/ngx-translate/core) | v17 | Internacionalização |
| TypeScript | v5.9 | Linguagem de programação |

---

## 🧠 Arquitetura & Lógica

O motor de recomendação avalia bancos de dados com base em vetores críticos:

1. **Alinhamento com Teoremas**: Verifica preferência por Consistência (CP) vs Disponibilidade (AP)
2. **Estrutura de Dados**: Corresponde requisitos para Relacional, Document, Graph, Vector, etc.
3. **Latência vs Consistência**: Ajuste fino para PACELC (Crítico para Latência vs Crítico para Consistência)
4. **Orçamento/Tier**: Filtra resultados baseado em Custo/Esforço desde Open-Source (Baixo) até Enterprise (Alto)

### Bancos de Dados Suportados

PostgreSQL, MySQL, MongoDB, Redis, Cassandra, Neo4j, Elasticsearch, DynamoDB, CockroachDB, Spanner, Pinecone, Milvus, Dgraph, ArangoDB, RethinkDB, InfluxDB, TimescaleDB, ScyllaDB, Couchbase, MariaDB, Oracle, SQL Server, Firestore, Supabase, PlanetScale, Neon, Fauna, Weaviate, Qdrant, ChromaDB, SingleStore, ClickHouse

---

## 💻 Desenvolvimento Local

### Pré-requisitos
- Node.js (v18 ou superior)
- npm (v9 ou superior)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/kaikeventura/db-architect-advisor.git
cd db-architect-advisor

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm start
```

Abra seu navegador em `http://localhost:4200/`

---

## 📦 Build e Deploy

### Build de Produção
```bash
npm run build
```

### Deploy para GitHub Pages
```bash
# Build otimizado para GitHub Pages (com base-href correto)
npm run build:pages

# Deploy manual
npm run deploy
```

### Deploy Automático
O projeto está configurado com **GitHub Actions** para deploy automático. Cada push para a branch `main` dispara automaticamente o build e deploy para GitHub Pages.

---

## 🌍 Internacionalização

A aplicação suporta totalmente dois idiomas:
- 🇺🇸 **Inglês** (en)
- 🇧🇷 **Português** (pt)

Todas as strings da interface, descrições de bancos de dados, e conteúdo dinâmico são traduzidos. A preferência de idioma é salva no `localStorage` do navegador.

---

## 🎨 Design System

### Tema Cyberpunk Clean
- **Cores Primárias**: Cyan (#22d3ee) e Purple (#a855f7)
- **Background**: Slate 900 com gradientes sutis
- **Efeitos**: Glassmorphism, Neon glow, Blur backdrop
- **Tipografia**: Inter (sistema) com espaçamento wide para títulos

### Componentes Principais
- `WizardComponent`: Interface de perguntas interativas
- `ResultsComponent`: Exibição de recomendações com métricas
- `LanguageSwitcherComponent`: Toggle de idiomas

---

## 📝 Licença

Este projeto está licenciado sob a Licença MIT.

---

## 👨‍💻 Autor

**Desenvolvido com ❤️ por [Kaike Ventura](https://github.com/kaikeventura)**

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

1. Fork o projeto
2. Crie sua feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request
