const checkAdmin = (req, res, next) => {
    try {
        if (req.user.role !== "admin") {
            throw new Error("You are not authorized to access this route");
        }
        next();
    } catch (error) {
        res.status(401).send({ error: error.message });
    }
};

module.exports = checkAdmin;
