import posts from '../models/post.js'; // Importa array post

function index(req, res) {
    const { tag } = req.query; // Estrae tag da query string
    let ris = posts;
    if (tag) {
        ris = posts.filter(post => post.tag.includes(tag.toLowerCase()));
    }
    res.json(ris);
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
    const index = posts.findIndex(post => post.id === id);
    if (index !== -1) {
        posts.splice(index, 1);
        console.log("Lista aggiornata dei post:", posts);
        res.status(204).send();
    } else {
        res.status(404).json({
            message: 'Post non trovato'
        })
    }
};

export { index, show, store, update, modify, destroy };