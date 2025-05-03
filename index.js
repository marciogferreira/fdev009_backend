import { createServer } from 'node:http';
import UsuarioModel from './src/models/UsuarioModel.js'


const app = createServer((request, response) => {

    const { url, method }  = request;
    // GET - http://localhost:3000/usuarios
    if(url === '/usuarios' && method === 'get') {
        const retorno = UsuarioModel.findAll();
        response.writeHead(200, { 'content-type': 'text/json' })
        response.end({ 
            message: 'Lista de Usuario',
            data: retorno
        })
    }

    // POST - http://localhost:3000/usuarios
    if(url === '/usuarios' && method === 'post') {
        const dados = request.body;
        const retorno = UsuarioModel.create(dados);
        response.writeHead(200, { 'content-type': 'text/json' })
        response.end({ 
            message: 'Usuario Cadastrado com Sucesso',
            data: retorno
        })
    }

    // PUT - http://localhost:3000/usuarios/2
    if(url === '/usuarios' && method === 'put') {
        const dados = request.body;
        const id = request.params.id;
        const retorno = UsuarioModel.update(dados, { id: id });
        response.writeHead(200, { 'content-type': 'text/json' })
        response.end({ 
            message: 'Usuario Atualizado com Sucesso',
            data: retorno
        })
    }

     // DELETE - http://localhost:3000/usuarios/2
     if(url === '/usuarios' && method === 'delete') {
        const id = request.params.id;
        const retorno = UsuarioModel.destroy({ id: id });
        response.writeHead(200, { 'content-type': 'text/json' })
        response.end({ 
            message: 'Usuario Deletado com Sucesso',
            data: retorno
        })
    }

    // CRUD DE CATEGORIAS
    

    response.writeHead(200, { 'content-type': 'text/plain' })
    response.end('Hello NodeJs FS 009')
});

app.listen(3000, 'localhost', () => {
    console.log("Servidor executando em http://localhost:3000")
})