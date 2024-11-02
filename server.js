import "dotenv/config"
import app from "./src/app.js"

const PORT = 3002;

const rotas = {
    "/": "Curso de node teste novo.js",
    "/livros": "entrei na rota livros",
    "/autores": "entrei na rota autores"
};

app.listen(PORT, () => {
    console.log("servidor escutando!"); 
});