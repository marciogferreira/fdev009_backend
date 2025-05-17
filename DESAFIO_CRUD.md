
````markdown
# 🚀 Desafio: CRUD de Categorias

## 🎯 Objetivo

Você deve implementar o CRUD completo do recurso **Categoria** no backend [`fdev009_backend`](https://github.com/marciogferreira/fdev009_backend), seguindo o mesmo padrão de rotas e controllers usado para `Usuários`.

---

## 📁 Estrutura Esperada

### 1. Criar o `CategoriaController.js`

No diretório `src/controllers`, crie o arquivo `CategoriaController.js` com os seguintes métodos:

```js
import CategoriaModel from '../models/CategoriaModel.js';

const CategoriaController = {
    findAll: async (request, response) => {
        try {
            const dados = await CategoriaModel.findAll();
            return response.json(dados);
        } catch (error) {
            return response.status(500).json({ erro: 'Erro ao buscar categorias', detalhes: error.message });
        }
    },

    findByPk: async (request, response) => {
        try {
            const { id } = request.params;
            const categoria = await CategoriaModel.findByPk(id);

            if (!categoria) {
                return response.status(404).json({ erro: 'Categoria não encontrada' });
            }

            return response.json(categoria);
        } catch (error) {
            return response.status(500).json({ erro: 'Erro ao buscar categoria', detalhes: error.message });
        }
    },

    create: async (request, response) => {
        try {
            const { nome } = request.body;

            if (!nome) {
                return response.status(400).json({ erro: 'Campo nome é obrigatório' });
            }

            const novaCategoria = await CategoriaModel.create({ nome });
            return response.status(201).json(novaCategoria);
        } catch (error) {
            return response.status(500).json({ erro: 'Erro ao criar categoria', detalhes: error.message });
        }
    },

    update: async (request, response) => {
        try {
            const { id } = request.params;
            const { nome } = request.body;

            const categoria = await CategoriaModel.findByPk(id);

            if (!categoria) {
                return response.status(404).json({ erro: 'Categoria não encontrada' });
            }

            categoria.nome = nome || categoria.nome;
            await categoria.save();

            return response.json(categoria);
        } catch (error) {
            return response.status(500).json({ erro: 'Erro ao atualizar categoria', detalhes: error.message });
        }
    },

    delete: async (request, response) => {
        try {
            const { id } = request.params;

            const categoria = await CategoriaModel.findByPk(id);

            if (!categoria) {
                return response.status(404).json({ erro: 'Categoria não encontrada' });
            }

            await categoria.destroy();
            return response.status(204).send();
        } catch (error) {
            return response.status(500).json({ erro: 'Erro ao deletar categoria', detalhes: error.message });
        }
    },
};

export default CategoriaController;

````

> Utilize o padrão `async/await` com `try/catch` para tratamento de erros.

---

### 2. Criar o `CategoriaRoutes.js`

No diretório `src/routes`, crie o arquivo `CategoriaRoutes.js` com as rotas abaixo:

```js
import express from  'express';
const CategoriaRoutes = express.Router();
import CategoriaController from '../controllers/CategoriaController';

CategoriaRoutes.get('/categorias', CategoriaController.findAll);
CategoriaRoutes.get('/categorias/:id', CategoriaController.findByPk);
CategoriaRoutes.post('/categorias', CategoriaController.create);
CategoriaRoutes.put('/categorias/:id', CategoriaController.update);
CategoriaRoutes.delete('/categorias/:id', CategoriaController.delete);

export default CategoriaRoutes;
```

---

### 3. Importar no `index.js`

No arquivo `src/index.js`, importe e utilize as rotas:

```js
import CategoriaRoutes from './routes/CategoriaRoutes';
app.use(CategoriaRoutes);
```

---

## 🛢️ Conexão com o Banco de Dados

A conexão é feita via Knex, configurado no arquivo:

```
src/config/conexao.js
```

Certifique-se de que o banco de dados esteja criado e que o arquivo `conexao.js` tenha as configurações corretas.

Execute as migrations com:

```bash
node src/database/Migration.js
```

Execute as Seeders para Criar Dados de Exemplo no Banco:

```bash
node src/database/Seeder.js
```
---

## ✅ Testando com Postman ou Insomnia

Após criar os arquivos e rodar as migrations, teste os endpoints:

| Método | Rota              | Descrição                         |
| ------ | ----------------- | --------------------------------- |
| GET    | `/categorias`     | Listar todas as categorias        |
| GET    | `/categorias/:id` | Buscar uma categoria por ID       |
| POST   | `/categorias`     | Criar uma nova categoria          |
| PUT    | `/categorias/:id` | Atualizar uma categoria existente |
| DELETE | `/categorias/:id` | Remover uma categoria             |

---

## 📌 Dicas Finais

* Utilize o mesmo padrão de código usado no `UsuarioController`.
* Sempre valide os dados recebidos via `request.body`.
* Trate erros com clareza e retorne os status HTTP corretos (200, 201, 400, 404, 500).
* Deixe seu código organizado e modular.

---

Bons estudos e boa prática! 💪🚀

```

