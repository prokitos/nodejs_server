const url = require('url');

const userRoute = (req,res) => {
    const parsedUrl = url.parse(req.url,true);
    const path = parsedUrl.pathname;
    const method = req.method

    res.setHeader('Content-Type', 'application/json');

    if (path === '/user' && method === 'GET'){
        res.end('GET')
    } else if (path === '/user' && method === 'POST'){
        res.end('POST')
    } else if (path === '/user' && method === 'DELETE'){
        res.end('DELETE')
    } else if (path === '/user' && method === 'PUT'){
        res.end('PUT')
    } else {
        res.end('nothing to return')
    }

};

module.exports = userRoute;
