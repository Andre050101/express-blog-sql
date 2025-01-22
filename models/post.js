//Array con lista di post
const posts = [
    {
        id: 0,
        author: "Giuseppe",
        status: "Published",
        title: "Primo post",
        content: "Questo è il contenuto del primo post",
        image: "/assets/ciambellone.jpeg",
        category: ["dolci", "zucchero"]
    },
    {
        id: 1,
        title: "Secondo post",
        author: "Alessio",
        status: "Published",
        content: "Questo è il contenuto del secondo post",
        image: "/assets/cracker_barbabietola.jpeg",
        category: ["dolci", "zucchero"]
    },
    {
        id: 2,
        title: "Terzo post",
        author: "Andrea",
        status: "Draft",
        content: "Questo è il contenuto del terzo post",
        image: "/assets/pane_fritto_dolce.jpeg",
        category: ["dolci", "zucchero"]
    },
    {
        id: 3,
        title: "Quarto post",
        author: "Davide",
        status: "Draft",
        content: "Questo è il contenuto del quarto post",
        image: "/assets/pasta_barbabietola.jpeg",
        category: ["dolci", "zucchero"]
    },
    {
        id: 4,
        title: "Quinto post",
        author: "Giuseppe",
        status: "Published",
        content: "Questo è il contenuto del quinto post",
        image: "/assets/torta_paesana.jpeg",
        category: ["dolci", "zucchero"]
    }
];

//Esportiamo array
export default posts;