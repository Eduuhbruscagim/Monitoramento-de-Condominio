# 🏢 Sistema de Monitoramento de Condomínios

Sistema completo de gestão de condomínios desenvolvido como TCC, utilizando tecnologias modernas e boas práticas de desenvolvimento.

## ✨ Funcionalidades

- 🔐 **Autenticação segura** com Supabase Auth
- 📅 **Gestão de Reservas** de áreas comuns
- ⚠️ **Registro de Ocorrências** com sistema de status
- 💰 **Controle de Caixa** com histórico de movimentações
- 👥 **Administração de Moradores** com perfis e permissões
- 🔔 **Sistema de Notificações** em tempo real
- 🎨 **Interface moderna** com Glassmorphism
- ⚡ **Real-time** via Supabase Realtime

## 🛠️ Tecnologias

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Supabase (PostgreSQL + Auth + Realtime)
- **Build Tool**: Vite
- **Estilização**: CSS customizado com design system
- **Ícones**: Font Awesome 6
- **Tipografia**: Plus Jakarta Sans

## 🚀 Como Rodar o Projeto

### Pré-requisitos

- Node.js 18+ instalado
- Conta no Supabase

### 1️⃣ Instalação

```bash
# Clone o repositório
git clone https://github.com/Eduuhbruscagim/Monitoramento-de-Condominio.git
cd Monitoramento-de-Condominio

# Instale as dependências
npm install
```

### 2️⃣ Configuração

1. Copie o arquivo de exemplo:
```bash
cp .env.example .env
```

2. Abra o arquivo `.env` e preencha com suas credenciais do Supabase:
```env
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_KEY=sua-chave-anonima-aqui
```

**Onde encontrar as credenciais:**
1. Acesse [Supabase Dashboard](https://supabase.com/dashboard)
2. Selecione seu projeto
3. Vá em **Settings** → **API**
4. Copie:
   - **Project URL** → `VITE_SUPABASE_URL`
   - **anon public key** → `VITE_SUPABASE_KEY`

### 3️⃣ Rodar em Desenvolvimento

```bash
npm run dev
```

O projeto vai abrir automaticamente em `http://localhost:5173`

✅ **Hot Module Replacement ativado** - suas mudanças aparecerão instantaneamente!

### 4️⃣ Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`

### 5️⃣ Preview do Build

```bash
npm run preview
```

Vizualiza o build de produção localmente em `http://localhost:4173`

## 📁 Estrutura do Projeto

```
Monitoramento-de-Condominio/
├── src/
│   ├── auth/
│   │   ├── login.html          # Página de login
│   │   └── login.js            # Lógica de autenticação
│   ├── dashboard/
│   │   ├── dashboard.html      # Dashboard principal
│   │   └── dashboard.js        # Lógica do dashboard
│   ├── services/
│   │   └── supabase.js         # Configuração do Supabase
│   ├── global.css             # Estilos globais
│   └── performance.js         # Otimizações de performance
├── dist/                      # Build de produção (gerado)
├── node_modules/              # Dependências (ignorado no git)
├── .env                       # Suas credenciais (ignorado no git)
├── .env.example               # Template de credenciais
├── .gitignore                 # Arquivos ignorados
├── package.json               # Dependências e scripts
├── vite.config.js             # Configuração do Vite
└── README.md                  # Este arquivo
```

## 🔒 Segurança

- ✅ Credenciais em variáveis de ambiente
- ✅ `.env` no `.gitignore` (nunca commitado)
- ✅ XSS protection com sanitização de inputs
- ✅ Autenticação via Supabase Auth
- ✅ Row Level Security (RLS) no banco de dados

## 🚀 Deploy

### Vercel

1. Instale a Vercel CLI:
```bash
npm i -g vercel
```

2. Faça deploy:
```bash
vercel
```

3. Configure as variáveis de ambiente no dashboard da Vercel:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_KEY`

### Netlify

1. Build localmente:
```bash
npm run build
```

2. Faça deploy da pasta `dist/`

3. Configure as variáveis de ambiente no dashboard da Netlify

## 👨‍💻 Autor

**Eduardo Bruscagim**
- GitHub: [@Eduuhbruscagim](https://github.com/Eduuhbruscagim)
- Projeto: TCC 2025

## 📝 Licença

MIT License - Sinta-se livre para usar este projeto como referência!

---

❤️ Desenvolvido com dedicação para o TCC
