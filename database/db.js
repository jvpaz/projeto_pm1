import * as SQLite from 'expo-sqlite';
import { seedDatabase } from './seed';

const db = SQLite.openDatabaseSync('app.db');

export function iniciarDatabase() {
  db.execSync(`
CREATE TABLE IF NOT EXISTS usuarios (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  senha TEXT NOT NULL,
  foto  TEXT  
);

    CREATE TABLE IF NOT EXISTS produtos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      descricao TEXT,
      preco REAL NOT NULL,
      imagem_url TEXT,
      latitude REAL,
      longitude REAL
    );

    CREATE TABLE IF NOT EXISTS carrinho (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      usuario_id INTEGER NOT NULL,
      produto_id INTEGER NOT NULL,
      quantidade INTEGER NOT NULL,
      FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
      FOREIGN KEY (produto_id) REFERENCES produtos(id) ON DELETE CASCADE,
      UNIQUE (usuario_id, produto_id)
    );
  `);

  seedDatabase(); //Coloca as infos do seed.js dentro do banco, eliminando as variavéis locais antigas.
}

export function criarUsuario(nome, email, senha) {
  const result = db.runSync(
    'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)',
    [nome, email, senha]
  );
  return result.lastInsertRowId;
}

export function listarUsuarios() {
  return db.getAllSync('SELECT id, nome, email FROM usuarios ORDER BY nome');
}

export function buscarUsuarioPorId(id) {
  return db.getFirstSync('SELECT * FROM usuarios WHERE id = ?', [id]) ?? null;
}

export function buscarUsuarioPorEmail(email) {
  return db.getFirstSync('SELECT * FROM usuarios WHERE email = ?', [email]) ?? null;
}

export function atualizarUsuario(id, { nome, senha, foto }) {
  db.runSync(
    `UPDATE usuarios SET
      nome  = COALESCE(?, nome),
      senha = COALESCE(?, senha),
      foto = COALESCE(?, foto)
    WHERE id = ?`,
    [nome ?? null, senha ?? null, foto ?? null, id]
  );
}

export function deletarUsuario(id) {
  db.runSync('DELETE FROM usuarios WHERE id = ?', [id]);
}


export function adicionarAoCarrinho(usuarioId, produtoId, quantidade = 1) {
  db.runSync(
    `INSERT INTO carrinho (usuario_id, produto_id, quantidade)
     VALUES (?, ?, ?)
     ON CONFLICT(usuario_id, produto_id)
     DO UPDATE SET quantidade = quantidade + excluded.quantidade`,
    [usuarioId, produtoId, quantidade]
  );
}

export function listarProdutos()
{
    return db.getAllSync(
        `
        SELECT * FROM produtos;
        `
    )
}

export function listarProdutosLimitados()
{
    return db.getAllSync(
        `
        SELECT * FROM produtos ORDER BY preco DESC LIMIT 4;
        `
    )
}

export function listarCarrinho(usuarioId) {
  return db.getAllSync(
    `SELECT
       c.id, c.quantidade,
       p.id AS produto_id, p.nome, p.preco, p.imagem_url,
       (p.preco * c.quantidade) AS subtotal
     FROM carrinho c
     JOIN produtos p ON p.id = c.produto_id
     WHERE c.usuario_id = ?`,
    [usuarioId]
  );
}

export function resumoCarrinho(usuarioId) {
  return db.getFirstSync(
    `SELECT
       COALESCE(SUM(p.preco * c.quantidade), 0) AS total,
       COALESCE(SUM(c.quantidade), 0)            AS total_itens
     FROM carrinho c
     JOIN produtos p ON p.id = c.produto_id
     WHERE c.usuario_id = ?`,
    [usuarioId]
  );
}


export function atualizarQuantidadeCarrinho(usuarioId, produtoId, quantidade) {
  if (quantidade <= 0) {
    removerDoCarrinho(usuarioId, produtoId);
    return;
  }
  db.runSync(
    'UPDATE carrinho SET quantidade = ? WHERE usuario_id = ? AND produto_id = ?',
    [quantidade, usuarioId, produtoId]
  );
}

export function removerDoCarrinho(usuarioId, produtoId) {
  db.runSync(
    'DELETE FROM carrinho WHERE usuario_id = ? AND produto_id = ?',
    [usuarioId, produtoId]
  );
}

export function limparCarrinho(usuarioId) {
  db.runSync('DELETE FROM carrinho WHERE usuario_id = ?', [usuarioId]);
}

export default db;