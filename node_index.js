import { createServer } from  "node:http";
import UsuarioModel from "./src/models/UsuarioModel";

const app = createServer(async (request, response) => {
    const { url, method } = request;

    if(url === '/usuarios') {
        const dados = await UsuarioModel.findAll();
        response.writeHead(200, { "Content-type": "application/json" });
        const Json = JSON.stringify(dados);
        return response.end(Json)
    }

      if(url === '/produtos') {
        response.writeHead(200, { "Content-type": "text/plain" });
        return response.end("Produtos")
    }

    response.writeHead(200, { "Content-type": "text/plain" });
    response.end(method + " - " + url)
});
app.listen(3000, 'localhost', () => {
    console.log("Servidor rodando...")
})