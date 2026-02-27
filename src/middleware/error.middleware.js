module.exports = (err, req, res, next) => {
    console.error(err);
    res
    .status(err.status || 500)
    .json({messafe: err.message || "Server Error"});
};