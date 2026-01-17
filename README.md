# Monitoramento de Condomínio - Enterprise Management System


> **Enterprise Overview:** Plataforma de gestão condominial *Fullstack* de alta performance, focada em segurança de dados (LGPD), automação de processos e experiência de usuário fluida (Apple-like UX).

![Interface Preview](src/imagens/Mac.webp)

## 🛡️ Segurança e Privacidade (Security First)

A arquitetura de segurança foi desenhada seguindo o princípio de *Zero Trust*. A validação de regras de negócio ocorre na camada de persistência, garantindo integridade independente da interface do cliente.

* **Row Level Security (RLS):** O sistema implementa isolamento estrito de dados. Um morador jamais consegue acessar dados financeiros sensíveis ou perfis de terceiros, pois a barreira é imposta no nível do banco de dados.
* **Role-Based Access Control (RBAC):** Hierarquia de permissões granular (Dono > Síndico > Morador), onde cada nível possui escopos de leitura e escrita rigidamente definidos.
* **Proteção contra Conflitos:** O sistema de reservas utiliza validações atômicas para impedir duplicidade de agendamentos em tempo real (*Race Conditions*), garantindo que duas pessoas não reservem a mesma área simultaneamente.
* **Conformidade LGPD:** Ferramentas nativas para o "Direito ao Esquecimento", permitindo a exclusão segura e completa dos dados de usuários e logs de acesso.

## ⚡ Diferenciais de Engenharia

O projeto abandona frameworks pesados em favor de uma arquitetura "Vanilla" otimizada, resultando em métricas de *Lighthouse* superiores.

### 1. Motor de Performance Adaptativo
O sistema inclui um módulo de telemetria (`performance.js`) que analisa o hardware do usuário em tempo real.
* **Dispositivos High-End:** Ativa efeitos de vidro (*Glassmorphism*), sombras dinâmicas e animações complexas.
* **Dispositivos Low-End:** Degrada graciosamente a interface, removendo filtros custosos para manter a taxa de quadros (FPS) estável e a usabilidade fluida.

### 2. Sincronização em Tempo Real
Utilização de *WebSockets* para manter todos os painéis administrativos sincronizados.
* Novas ocorrências e movimentações de caixa são propagadas instantaneamente para todos os administradores conectados, eliminando a necessidade de recarregar a página.

### 3. UX/UI Design System
* **Física de Interface:** As animações utilizam curvas de Bézier customizadas (`--ease-spring`) para replicar a sensação tátil de sistemas operacionais nativos.
* **Temas Dinâmicos:** Suporte nativo a *Dark Mode* e *Light Mode* com persistência de preferências.

---

## 🛠️ Stack Tecnológica

| Componente | Tecnologia | Detalhes |
| :--- | :--- | :--- |
| **Frontend** | Vanilla JS (ES6+) | Arquitetura baseada em módulos, sem dependências de frameworks monolíticos. |
| **Backend** | Supabase (BaaS) | Infraestrutura *Serverless* escalável (PostgreSQL). |
| **Auth** | JWT & OAuth | Sistema de autenticação robusto e gerenciamento de sessões. |
| **Assets** | WebP & Vetores | Otimização agressiva de mídia para carregamento instantâneo. |

---

## 💎 Módulos do Sistema

### 📊 Gestão Financeira
* **Livro Caixa Digital:** Interface limpa para visualização de fluxo de caixa (entradas e saídas).
* **Transparência:** Extratos públicos simplificados para prestação de contas aos condôminos.

### 📅 Central de Reservas
* Calendário interativo para áreas comuns (Salão de Festas, Churrasqueiras, Quadras).
* Feedback visual imediato sobre disponibilidade de datas.

### 📝 Controle de Ocorrências
* Workflow completo de zeladoria: Abertura de chamado -> Análise do Síndico -> Resolução.
* Histórico imutável de ações para auditoria interna.

### 👥 Gestão de Comunidade
* Diretório de moradores com busca rápida por unidade.
* Onboarding automatizado com geração de avatares e credenciais.

---

## 📂 Estrutura do Projeto

A organização do código segue o padrão de separação por domínio (*Domain-Driven*), facilitando a escalabilidade.

```text
/
├── src/
│   ├── about/              # Landing Page Institucional
│   ├── auth/               # Módulos de Identidade (Login, Registro, Recuperação)
│   ├── dashboard/          # Núcleo da Aplicação (SPA Logic)
│   │   ├── dashboard.js    # Gerenciamento de Estado & Controladores
│   │   ├── dashboard.css   # Estilização do Painel
│   │   └── theme.js        # Logic de Temas (Dark/Light)
│   ├── services/           # Camada de Infraestrutura (API Client)
│   ├── imagens/            # Assets Otimizados
│   ├── global.css          # Design Tokens & Variáveis CSS
│   ├── index.html          # Ponto de Entrada
│   └── performance.js      # Motor de Detecção de Hardware
├── .gitignore
├── LICENSE
└── README.md