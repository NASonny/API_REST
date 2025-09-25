const { rateLimit } = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 10000, // 10 secondes
    limit: 5, // Limite chaque IP à 5 requêtes par fenêtre
    standardHeaders: 'draft-8',
    message: {
        error: 'Trop de requêtes, veuillez réessayer plus tard.'
    }
});

module.exports = limiter;