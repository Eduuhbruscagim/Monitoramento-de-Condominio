<div align="center">

# 🏢 Gestão Inteligente de Condomínios
**Plataforma web para transparência, organização e comunicação condominial, com UX moderna, tema claro/escuro e performance adaptativa.**

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

O **Gestão Inteligente de Condomínios** é um sistema web voltado para centralizar o que mais gera desconforto no dia a dia do condomínio: manutenção, gastos, reservas e ocorrências, com comunicação e acesso rápido às informações.
A aplicação é organizada por módulos (`about`, `auth` e `dashboard`) e usa uma base limpa (HTML/CSS/JS), desenvolvi assim para ter foco em desempenho, clareza visual e navegação fluida.


---

## 🧩 Módulos e funcionalidades

### 🔐 Autenticação (`src/auth`)
- Login e cadastro são intuitivos pela landing.
- Recuperação de senha funcional.

### 📊 Dashboard (`src/dashboard`)
- Painel principal do sistema (base para dados, telas, reservas, etc).
- Gerenciamento de tema (Modo Claro/Modo Escuro).

### 🧾 Operação do condomínio (conceito/UX já refletida na UI)
- Prestação de contas com visual bonito.
- Reservas online para áreas comuns.
- Seção de ocorrências/chamados que são vistos por todos, deixando todos cientes dos problemas, mas mantendo anonimato.
- Gestão de encomendas(Ainda em desenvolvimento.
- Controle de acesso (estrutura para evoluir com regras reais ainda em desenvolvimento).
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

### 🌗 Tema sem “bug de flash”
O tema é aplicado **antes** do CSS carregar (anti-flash), garantindo que vc nao fique cego ao alternar entre Light/Dark.

### ⚡ Performance adaptativa (FPS + hardware)
O arquivo `src/performance.js` implementa um detector de performance que:
- Cacheia o modo no `localStorage` (`performance_mode`).
- Detecta sinais de hardware fraco (memória baixa, poucos núcleos, mobile e suporte a `backdrop-filter`).
- Executa testes curtos de FPS, remove outliers e decide entre **low-performance** e **high-performance**.

> Resultado: interface pode ficar mais simples em dispositivos fracos, porem mantendo fluidez.

---

## 🗂️ Estrutura do projeto

```text
/
├── src/
│   ├── about/                # Página "Sobre"
│   ├── auth/                 # Login, Cadastro, Recuperação
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
