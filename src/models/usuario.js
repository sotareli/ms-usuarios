import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    email: { type: String },
    telefone: { type: Number },
    usuario: { type: String},
    senha: { type: String}

}, { versionKey: false});

const usuario = mongoose.model("usuarios", usuarioSchema);

export default usuario;