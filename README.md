# case2-frontend

Case 2 - Site do EstudoApp (Frontend)

## Sobre o projeto

O projeto foi desenvolvido com o intuito de criar um site para o EstudoApp, uma aplicação que ajuda os estudantes a se organizarem e estudarem melhor. O site foi desenvolvido com ReactJS e React Bootstrap. Para gestão do conteúdo é possível acessar a rota /login e informar usuário e senha cadastrados no back-end, essa rota recebe um token que fica armazenado no localStorage do navegador e é utilizado para acessar as rotas do admin.

## Pré-requisitos

- [Node.js](https://nodejs.org/en/) (na versão 16 ou superior)
- [NPM](https://www.npmjs.com/)

## Como executar?

```bash
npm install
npm run dev
```

## Passo a passo do desenvolvimento

### 1. Criar o projeto

```bash
npm create vite@latest estudoapp-site --template react
```

### 2. Instalar as dependências

```bash
cd estudoapp-site
npm install react-bootstrap bootstrap
npm install react-router-dom
npm install react-router-bootstrap
```

### 3. Ajustar os arquivos

- `index.html` - Adicionar o link para o CSS do Bootstrap
- `App.js` - Adicionar o `Router` e as rotas
- `App.css` - Remover o CSS padrão do Vite
- `index.css` - Adicionar o CSS do Bootstrap
- `components/` - Criar os componentes
- `pages/` - Criar as páginas
- `pages/admin/` - Criar as páginas do admin
- `api/` - Criar o arquivo que contém as rotas da API

### 4. Executar o projeto

```bash
npm run dev
```
