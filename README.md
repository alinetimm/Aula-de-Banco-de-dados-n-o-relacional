# 🚀 Projeto: API de Tarefas (CRUD Completo)

Este é um projeto educacional desenvolvido para demonstrar a criação de uma API RESTful completa utilizando Node.js, Express e um banco de dados NoSQL (MongoDB). A aplicação implementa todas as operações de um CRUD (Create, Read, Update, Delete) para um gerenciador de tarefas simples.

Além da API, o projeto inclui uma interface de front-end minimalista, construída com HTML e Tailwind CSS, para permitir a visualização e interação com os dados de forma prática e direta no navegador.

### ✨ Demonstração

![Captura de tela da aplicação de tarefas](tela.png)

---

## 📚 Tabela de Conteúdos

- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Como Executar o Projeto](#-como-executar-o-projeto)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Endpoints da API](#-endpoints-da-api)
- [Licença](#-licença)
- [Autor](#-autor)

---

## ✅ Funcionalidades

-   **Criar** novas tarefas com um título.
-   **Listar** todas as tarefas cadastradas.
-   **Atualizar** o status de uma tarefa (marcar como concluída ou pendente).
-   **Deletar** uma tarefa da lista.
-   Interface web simples para testar todas as funcionalidades do CRUD.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando uma stack moderna e robusta, focada em JavaScript e no ecossistema NoSQL.

### Back-end
-   **[Node.js](https://nodejs.org/)**: Ambiente de execução para JavaScript no servidor.
-   **[Express.js](https://expressjs.com/)**: Framework para Node.js que simplifica a criação de APIs e aplicações web.
-   **[MongoDB](https://www.mongodb.com/)**: Banco de dados NoSQL orientado a documentos, utilizado para persistir os dados das tarefas.
-   **[Mongoose](https://mongoosejs.com/)**: ODM (Object Document Mapper) para modelar e interagir com o MongoDB de forma estruturada e elegante.
-   **[Dotenv](https://github.com/motdotla/dotenv)**: Módulo para carregar variáveis de ambiente de um arquivo `.env`, mantendo as credenciais seguras.

### Front-end
-   **HTML5**: Linguagem de marcação para a estrutura da página.
-   **[Tailwind CSS](https://tailwindcss.com/)**: Framework de CSS utility-first, utilizado via CDN para uma estilização rápida e moderna.
-   **JavaScript (Vanilla)**: Utilizado para manipular o DOM e fazer requisições (`fetch`) para a API back-end.

---

## ⚙️ Como Executar o Projeto

Para executar este projeto em sua máquina local, siga os passos abaixo.

### Pré-requisitos

Você precisará ter as seguintes ferramentas instaladas:
-   [Node.js (versão 18 ou superior)](https://nodejs.org/en/download/)
-   [npm](https://www.npmjs.com/) (geralmente instalado junto com o Node.js)
-   Uma conta gratuita no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) para hospedar o banco de dados na nuvem.

### Passos para Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/seu-usuario/nome-do-repositorio.git)
    cd nome-do-repositorio
    ```

2.  **Instale as dependências do projeto:**
    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente:**
    -   Crie um arquivo chamado `.env` na raiz do projeto.
    -   Copie o conteúdo do arquivo `.env.example` (se houver) ou adicione a seguinte linha:

    ```ini
    # .env
    MONGO_URI=mongodb+srv://SEU_USUARIO:SUA_SENHA@SEU_CLUSTER.mongodb.net/NOME_DO_BANCO?retryWrites=true&w=majority
    ```
    -   **Importante:** Substitua os valores `SEU_USUARIO`, `SUA_SENHA`, `SEU_CLUSTER` e `NOME_DO_BANCO` pela sua *Connection String* do MongoDB Atlas.

4.  **Inicie o servidor:**
    ```bash
    node servidor.js
    ```

5.  **Acesse a aplicação:**
    -   Abra seu navegador e acesse [http://localhost:5000](http://localhost:5000).
    -   O servidor estará rodando e a interface web estará pronta para uso!

---

## 📁 Estrutura do Projeto

O projeto é organizado de forma modular para facilitar a manutenção e escalabilidade.