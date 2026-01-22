<div align="center">

# 🏢 Gestão Inteligente de Condomínios
**Plataforma web para transparência, organização e comunicação condominial — com UX moderna, tema claro/escuro e performance adaptativa.**

<!-- Badges -->
<a href="LICENSE"><img alt="Licença" src="https://img.shields.io/badge/license-MIT-yellow.svg"></a>
<img alt="Stack" src="https://img.shields.io/badge/stack-HTML%20%7C%20CSS%20%7C%20JS-0B1220">
<img alt="Deploy" src="https://img.shields.io/badge/deploy-Vercel-black?logo=vercel">

<br/>
<br/>

<!-- Hero image (usa asset real do projeto) -->
<img src="src/imagens/Mac.webp" alt="Preview do sistema (Landing/Dashboard)" width="920" />

<br/>

<p>
  <a href="#-visão-geral">Visão geral</a> •
  <a href="#-módulos-e-funcionalidades">Funcionalidades</a> •
  <a href="#-stack-tecnológica">Stack</a> •
  <a href="#-arquitetura--diferenciais">Diferenciais</a> •
  <a href="#-rotas-e-navegação-vercel">Rotas</a> •
  <a href="#-como-rodar-localmente">Rodar local</a> •
  <a href="#-deploy">Deploy</a> •
  <a href="#-contribuição">Contribuir</a>
</p>

</div>

---

## ✨ Visão geral

O **Gestão Inteligente de Condomínios** é um sistema web voltado para centralizar o que mais gera atrito no dia a dia do condomínio: manutenção, gastos, reservas e ocorrências — com comunicação objetiva e acesso rápido às informações.  
A aplicação é organizada por módulos (`about`, `auth` e `dashboard`) e usa uma base “vanilla” (HTML/CSS/JS), priorizando performance, clareza visual e navegação responsiva.

> 💡 Dica de apresentação: mantenha `src/imagens/Mac.webp` como capa e adicione prints reais em `src/imagens/` (ex.: `screenshot-login.webp`, `screenshot-dashboard.webp`) para enriquecer a documentação.

---

## 🧩 Módulos e funcionalidades

Pelo que já aparece na interface (landing) e na estrutura do repositório:

### 🔐 Autenticação (`src/auth`)
- Login e cadastro com CTA direto pela landing.
- Fluxo de recuperação de senha (rota dedicada).

### 📊 Dashboard (`src/dashboard`)
- Painel principal do sistema (base para dados, cartões, telas e rotinas).
- Gerenciamento de tema (Light/Dark) com script dedicado.

### 🧾 Operação do condomínio (conceito/UX já refletida na UI)
- Prestação de contas com visual simplificado.
- Reservas online para áreas comuns.
- Livro de ocorrências (chamados) com acompanhamento.
- Comunicados/avisos para moradores.
- Gestão de encomendas.
- Controle de acesso (estrutura pronta para evoluir com regras reais).

---

## 🧰 Stack tecnológica

<div align="center">

| Camada | Tecnologias |
|---|---|
| UI | <img src="https://img.shields.io/badge/HTML5-e34f26?logo=html5&logoColor=fff"> <img src="https://img.shields.io/badge/CSS3-1572b6?logo=css3&logoColor=fff"> <img src="https://img.shields.io/badge/JavaScript-f7df1e?logo=javascript&logoColor=000"> |
| Tipografia e ícones | <img src="https://img.shields.io/badge/Google%20Fonts-4285F4?logo=google&logoColor=fff"> <img src="https://img.shields.io/badge/Font%20Awesome-528dd7?logo=fontawesome&logoColor=fff"> |
| Deploy | <img src="https://img.shields.io/badge/Vercel-000?logo=vercel&logoColor=fff"> |

</div>

---

## 🧠 Arquitetura & diferenciais

### 🌗 Tema sem “flash”
O tema é aplicado **antes** do CSS carregar (anti-flash), garantindo experiência consistente ao alternar entre Light/Dark.

### ⚡ Performance adaptativa (FPS + hardware)
O arquivo `src/performance.js` implementa um “detector de performance” que:
- Cacheia o modo no `localStorage` (`performance_mode`).
- Detecta sinais de hardware fraco (memória baixa, poucos núcleos, mobile e suporte a `backdrop-filter`).
- Executa múltiplos testes curtos de FPS, remove outliers e decide entre **low-performance** e **high-performance**.

> Resultado: interface pode degradar graciosamente em dispositivos fracos, mantendo fluidez.

---

## 🗂️ Estrutura do projeto

```text
/
├── src/
│   ├── about/                # Página "Sobre"
│   ├── auth/                 # Login, Registro, Recuperação
│   ├── dashboard/            # Painel (inclui theme.js)
│   ├── services/             # Camada de serviços/integrações
│   ├── imagens/              # Assets (Logo, mockups etc.)
│   ├── global.css            # Tokens/variáveis e estilos globais
│   ├── index.css             # Estilos da landing
│   ├── index.html            # Entrada (landing)
│   └── performance.js        # Detector de performance (FPS + hardware)
├── vercel.json               # Rotas amigáveis + headers + cache
├── LICENSE
└── README.md
