# 📚 API REST - Cadastro de Alunos

Este projeto é uma API RESTful desenvolvida com Node.js, Express e Sequelize, que simula o backend de um sistema de cadastro de alunos. Ele permite criar, visualizar, editar e deletar informações de alunos, além de autenticação de usuários com JWT.

## 🚀 Tecnologias utilizadas

- Node.js
- Express
- Sequelize (ORM)
- MariaDB / MySQL
- JSON Web Token (JWT)
- Multer (upload de imagens)
- Helmet (segurança com headers HTTP)
- Sucrase (transpilador)
- Dotenv (variáveis de ambiente)

## ⚙️ Funcionalidades da API

### 👤 Usuários (`/users`)
- `POST /users/` → Cria um novo usuário (autenticado)
- `PUT /users/` → Atualiza os dados do usuário logado
- `DELETE /users/` → Deleta o usuário logado
- `GET /users/` → Lista todos os usuários (para fins de teste)

### 🔐 Autenticação (`/tokens`)
- `POST /tokens/` → Gera o token JWT a partir do login (email + senha)

### 🎓 Alunos (`/alunos`)
- `GET /alunos/` → Lista todos os alunos
- `GET /alunos/:id` → Exibe um aluno específico
- `POST /alunos/` → Cria um novo aluno (requer login)
- `PUT /alunos/:id` → Atualiza um aluno (requer login)
- `DELETE /alunos/:id` → Remove um aluno (requer login)

### 🖼️ Fotos (`/photos`)
- `POST /photos/` → Upload de imagem para um aluno (requer login)

## 🚀 Como rodar localmente

1. Clone o repositório:
    ```bash
    git clone https://github.com/dhayane/APIrest_CadastroAlunos.git
    ```

2. Acesse o diretório do projeto:
    ```bash
    cd APIrest_CadastroAlunos
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Configure as variáveis de ambiente no arquivo `.env`. Você pode utilizar as variáveis padrões do projeto ou configurar conforme necessário.

5. Rode o servidor localmente:
    ```bash
    npm run dev
    ```

O servidor estará disponível em `http://localhost:3001`.

## 📁 Organização do Projeto

- **src/**: Contém todos os arquivos fonte do projeto, incluindo controladores, rotas e configurações.
- **uploads/**: Diretório utilizado para armazenar arquivos carregados, como fotos.
- **dist/**: Arquivo compilado do projeto após a execução do processo de build.

Feito em **Curso Javascript e TypeScript - Front-end e Back-end (Full Stack)** - Node, Express, noSQL, React, hooks, Redux, Design Patterns - Professor Luiz Otávio - Curso Fullstack Udemy!
