# 📚 API REST - Cadastro de Alunos

Este projeto é uma API RESTful desenvolvida com Node.js, Express e Sequelize, que simula o backend de um sistema de cadastro de alunos. Ele permite criar, visualizar, editar e deletar informações de alunos, além de autenticação de usuários com JWT.

## 🚀 Tecnologias utilizadas

- **Node.js**: Ambiente de execução JavaScript no lado do servidor.
- **Express**: Framework web para Node.js, utilizado para estruturar as rotas da API.
- **Sequelize**: ORM (Object-Relational Mapping) para interação com o banco de dados MariaDB/MySQL.
- **MariaDB / MySQL**: Banco de dados relacional para armazenamento das informações dos alunos.
- **JSON Web Token (JWT)**: Técnica para autenticação de usuários com tokens seguros.
- **Multer**: Middleware para upload de arquivos, utilizado para gerenciar o envio de fotos.
- **Helmet**: Biblioteca para adicionar segurança nos cabeçalhos HTTP.
- **Sucrase**: Transpilador que converte código moderno JavaScript/TypeScript para versões compatíveis com Node.js.
- **Dotenv**: Carregamento de variáveis de ambiente a partir de arquivos `.env`.

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

## 📝 Observações

- A API utiliza JWT para autenticação. É necessário adicionar o token JWT no header das requisições protegidas (`Authorization: Bearer SEU_TOKEN_AQUI`).
- As rotas de **alunos**, **usuários** e **fotos** requerem autenticação.

---

Feito em **Curso Javascript e TypeScript - front-end e back-end (Full Stack) - Node, Express, noSQL, React, hooks, Redux, Design Patterns** com o professor Luiz Otávio (Udemy).
