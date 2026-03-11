# 🎓 Sales Courses App — Frontend
![Next.js](https://img.shields.io/badge/Next.js-000?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?logo=nestjs)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker)

Interface web desenvolvida com **Next.js** para consumir a API do projeto **Sales-Courses-App**.

A aplicação permite que usuários explorem cursos, realizem compras e acessem conteúdos protegidos após a compra.

O sistema consome a API desenvolvida com **NestJS + Prisma + Postgres + Docker**.

## 🧩 Stack completa

Frontend: **Next.js + Server Actions**  
Backend: **NestJS + Prisma + PostgreSQL + Docker**

## 🖥️ Funcionalidades

- Autenticação de usuário
- Criação de cursos na plataforma
- Listagem de cursos publicados
- Página de detalhes do curso
- Compra de cursos
- Área do aluno com cursos comprados
- Visualização de módulos e aulas
- Controle de acesso baseado em autenticação

---

## 🛠 Tecnologias

- **Next.js**
- **React**
- **TypeScript**
- **CSS Modules**
- **Fetch API**
- **JWT Authentication**

---

## 🧠 Arquitetura da aplicação

A aplicação utiliza **Server Actions do Next.js** para executar operações que modificam dados no backend.

Essas ações são executadas **no servidor**, evitando expor lógica sensível no cliente e permitindo uma integração mais segura com a API.

As **Server Actions** são utilizadas principalmente para:

- Login de usuário
- Compra de cursos
- Requisições autenticadas
- Mutação de dados no backend

Essa abordagem reduz a necessidade de criar endpoints intermediários no frontend e mantém a lógica de comunicação com a API centralizada no servidor.

---

## 🚀 Como rodar o projeto

## 1. Clone o repositório

```bash
git clone https://github.com/seu-repo/sales-courses-front
cd sales-courses-front
````
## 2. Instale as dependências

Caso utilize pnpm:
```bash
pnpm install
```
Caso utilize npm:
```bash
npm install
```
## 3. Configure o `.env`

Crie um arquivo `.env.local` na raiz do projeto.

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## 4. Rode o projeto
```bash
pnpm dev
```
ou
```bash
npm run dev
```
A aplicação estará disponível em:
http://localhost:3001

# 🔗 Integração com o Backend

Este projeto consome a API desenvolvida em **NestJS**.

Repositório do backend:

https://github.com/EduardoAugustoFReis/sales-courses-app

## 📁 Estrutura do projeto

Exemplo simplificado:
```
src/
├── actions/ # Server Actions responsáveis por mutações de dados
│
├── app/ # Estrutura de rotas do Next.js (App Router)
│ ├── (private)/ # Rotas protegidas da aplicação
│ │ ├── account/
│ │ ├── admin/
│ │ ├── student/
│ │ └── teacher/
│ │
│ ├── signup/
│ │
│ └── page.tsx (página de entrada da aplicação, tela de Login)
│
├── components/ # Componentes reutilizáveis da interface
│
├── services/ # Camada de comunicação com a API
│
└── types/ # Tipagens globais da aplicação
```

### Rotas protegidas

As rotas dentro de `(private)` representam áreas da aplicação que exigem autenticação, como:

- Área do aluno
- Área do professor
- Painel administrativo
- Gerenciamento de conta

## 🔐 Middleware de Autenticação

A aplicação utiliza um **middleware do Next.js** para proteger rotas privadas.

Esse middleware verifica se o usuário possui um **token JWT armazenado em cookie** antes de permitir o acesso a determinadas áreas da aplicação.

### Funcionamento

1. O middleware intercepta requisições para rotas protegidas.
2. Ele verifica se existe um **cookie chamado `token`**.
3. Caso o token não exista, o usuário é redirecionado para a **página inicial (`/`)**.
4. Se o token estiver presente, o acesso à rota é permitido.

### Rotas protegidas

O middleware é aplicado apenas às seguintes rotas:

- `/admin/*`
- `/teacher/*`
- `/student/*`
- `/account/*`

Essas rotas representam áreas privadas da aplicação, como:

- Painel administrativo
- Área do professor
- Área do aluno
- Gerenciamento de conta

A configuração é feita através do `matcher` do middleware do Next.js.

## 🔐 Autenticação

A autenticação é feita utilizando JWT.

Fluxo de autenticação:

1. Usuário faz login  
2. Backend retorna o token JWT  
3. O token é armazenado em **cookie**  
4. As requisições autenticadas utilizam:
```
Authorization: Bearer token
```

## 🚨 Regras importantes da aplicação
- Apenas cursos publicados podem ser comprados
- Um aluno não pode comprar o mesmo curso duas vezes
- Apenas usuários autenticados podem acessar conteúdos protegidos
- Módulos e aulas só ficam disponíveis após a compra do curso

---

## 🚧 Status do projeto

Este projeto **ainda está em desenvolvimento**.

Algumas funcionalidades e melhorias ainda serão implementadas, incluindo:

- Responsividade das telas
- Controle de progresso do curso
- Deploy da aplicação
---

