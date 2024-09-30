const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    try {
        const token = req.headers['authorization'].split(' ')[1];  // Correct way to access headers
        jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
            if (err) {
                return res.status(200).send({ message: 'Auth failed', success: false });
            } else {
                req.body.userId = decode.id;  // Correct assignment
                next();
            }
        });
    } catch (error) {
        return res.status(401).send({ message: 'Authorization error', success: false });
    }
};
