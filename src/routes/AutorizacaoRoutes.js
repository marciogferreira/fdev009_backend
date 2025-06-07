import express from 'express'
import UsuarioModel from '../models/UsuarioModel.js';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();
const AutorizacaoRoutes = express.Router()

AutorizacaoRoutes.post('/login', async (request, response) => {
    const dados = request.body;
    const usuario = await UsuarioModel.findOne({
        where: {
            login: dados.login,
            senha: dados.senha
        }
    })

    if(usuario) {
        const dadosToken = {
            id: usuario.id,
            nome: usuario.nome,
            login: usuario.login
        }
        const token = await jwt.sign(dadosToken, process.env.TOKEN_KEY, {
            algorithm: 'HS256'
        } );
        return response.json({
            token: token,
            message: 'Usuário Logado com Sucesso!'
        })
    } else {
        return response.json({
            message: 'Login ou senha incorreto!'
        })
    }

})

export default AutorizacaoRoutes;