import posts from '../models/post.js'; // Importa array post
import connection from '../config/db.js';

function index(req, res) {
    const { tag } = req.query; // Estrae tag da query string
    let query = 'SELECT * FROM posts';
    if (tag) {
        query += ` WHERE tags LIKE '%${tag}%'`;
    }
    connection.query(query, (err, results) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        res.json(results);
      });
}


function show(req, res) {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);
    if (post) {
        res.json(post);
    } else {
        res.status(404).json({
            message: "Post non trovato"
        });
    }
}

function store(req, res) {
    const { titolo, contenuto, image, author, category, status } = req.body;

    console.log("Dati ricevuti dal client:", req.body);

    if (!titolo || !contenuto) {
        return res.status(400).json({ error: 'Titolo e contenuto obbligatori' });
    }

    const newPost = {
        id: posts.length + 1,
        title: titolo,
        content: contenuto,
        image: image || null, // Ora trattato come URL
        author: author || "Anonimo",
        category: category || "Senza categoria",
        status: status || "draft",
    };

    posts.push(newPost);
    console.log("Post aggiornati:", posts);
    res.status(201).json(newPost);
}

function update(req, res) {
    const id = parseInt(req.params.id);
    const { titolo, contenuto, image } = req.body;
    if (isNaN(id)) {
        return res.status(400).json({
            error: 'ID non valido'
        });
    }
    const post = posts.find(p => p.id === id);
    if (!post) {
        return res.status(404).json({
            error: "Post non trovato"
        });
    }
    if (titolo) post.titolo = titolo;
    if (contenuto) post.contenuto = contenuto;
    if (image) post.image = image;

    res.status(200).json(post);
};

function modify(req, res) {
    const id = parseInt(req.params.id);
    if (id >= 0 && id < posts.length) {
        res.send(`Modifica parziale del post con ID:${id}`);
    } else {
        res.status(404).json({
            message: 'Post non trovato'
        })
    }
};

function destroy(req, res) {
    const id = parseInt(req.params.id);
    const query = `DELETE FROM posts WHERE id = ?`;
    connection.query(query, [id], (err, results) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
    
        if (results.affectedRows === 0) {
          return res.status(404).json({ message: 'Post non trovato' });
        }
    
        res.status(204).send(); // Post eliminato correttamente
      });
};

export { index, show, store, update, modify, destroy };