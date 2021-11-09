function Logs(req, res, next) {
    const method = req.method;
    const url = req.url;
    const ip = req.ip;
    console.log(`${method} ${url} -- ${ip}`);
    next();
};

module.exports = { Logs };