function errorHandler(err, req, res, next) {
    console.error("Errore intercettato:", err.message);
    res.status(err.status || 500).json({
        error: "Internal server error",
        message: err.message || "Errore interno del server"
    });
}

export default errorHandler;