📦 Microfrontends com Module Federation (Angular)

Este projeto demonstra uma arquitetura de **Microfrontends (MFEs)** usando **Module Federation** no Angular, com consumo de API simulada via `json-server`.

## 🧱 Estrutura do Projeto

- **Shell App** – Orquestra os MFEs e provê navegação
- **MFE Cadastro** – Formulário de cadastro de usuários
- **MFE Sucesso** – Exibe a lista de usuários cadastrados
- **json-server** – Mock de backend com endpoints REST

---

## 🚀 Pré-requisitos

- Node.js 18+
- Angular CLI 15+
- `npm` ou `yarn`

---

## 🔧 Instalação

Clone o repositório:

```bash
git clone https://github.com/brunomouranascimento/microfrontends-challenge.git
cd microfrontends-challenge
```

Instale as dependências em todos os projetos:

```bash
npm install
```

---

## ▶️ Rodando todos os projetos ao mesmo tempo

Na raiz do projeto, execute:

```bash
npm run run:all
```

> Este comando compila e sobe os projetos **Shell**, **MFE-Cadastro** e **MFE-Sucesso** simultaneamente.

---

## 📦 Scripts Individuais

Para executar cada projeto individualmente, ainda na raiz do projeto:

### 🔹 Shell

```bash
ng serve shell
```

### 🔹 MFE Cadastro

```bash
ng serve mfe-cadastro
```

### 🔹 MFE Sucesso

```bash
ng serve mfe-sucesso
```

---

## 📡 Iniciando o json-server

Simulando a API REST e backend em `localhost:3000`:

```bash
npx json-server --watch shared-data/backend/db.json --port 3000
```

O arquivo `db.json` de exemplo já contém:

```json
{
  "users": [
    { "id": 1, "name": "João", "email": "joao@email.com" },
    { "id": 2, "name": "Maria", "email": "maria@email.com" }
  ]
}
```

---

## 🧭 Acesso às rotas

- [http://localhost:4200/cadastro](http://localhost:4200/cadastro) – Formulário de cadastro de usuário
- [http://localhost:4200/sucesso](http://localhost:4200/sucesso) – Lista os usuários cadastrados

#### OBS: Ao acessar o endereço padrão http://localhost:4200, a navegação é direcionada para /cadastro. O mesmo ocorre quando o usuário digita uma path inexistente: http://localhost:4200/usuario

---

## 🛠️ Tecnologias

- Angular 19
- Module Federation
- Standalone Components
- Angular Material
- json-server

---

## 🎯 Objetivo

Este case técnico foi desenvolvido para demonstrar habilidades com:

- Arquitetura de Microfrontends
- Comunicação entre MFEs
- Consumo e manipulação de dados de APIs REST
- Uso de Angular moderno com boas práticas

