import usuario from "../models/usuario.js";

class UsuarioController{

    static async listarUsuarios( req, res) {
        try{
            const listaUsuarios = await usuario.find({});
            res.status(200).json(listaUsuarios)
        }catch(erro){
            res.status(500).json({ message: `${erro.message} - falha na requisição`});

        }

    };

    static async listarUsuarioPorId( req, res) {
        try{
            const id = req.params.id;
            const usuarioEncontrado = await usuario.findById(id);
            res.status(200).json(usuarioEncontrado);
        }catch(erro){
            res.status(500).json({ message: `${erro.message} - usuario não encontrado`});

        }

    };


    static async cadastrarUsuario (req, res) {
        try{
            const novoUsuario = await usuario.create(req.body);
            res.status(201).json({ message: "usuario criado com sucesso", usuario: novoUsuario});
        }catch(erro){
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar usuario`});
        }
    };

    static async atualizarUsuario( req, res) {
        try{
            const id = req.params.id;
            await usuario.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Usuario atualizado!"});
        }catch(erro){
            res.status(500).json({ message: `${erro.message} - falha na atualização`});

        }

    };

    static async excluirUsuario( req, res) {
        try{
            const id = req.params.id;
            await usuario.findByIdAndDelete(id);
            res.status(200).json({ message: "Usuarui excluido!"});
        }catch(erro){
            res.status(500).json({ message: `${erro.message} - falha ao excluir`});

        }

    };


};






export default UsuarioController;