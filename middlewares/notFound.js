function notFound(req, res, next) {
    res.status(404).json({
        error: 'Pagina non trovata',
        message: "La risorsa non è disponibile"
    });
}

export default notFound;