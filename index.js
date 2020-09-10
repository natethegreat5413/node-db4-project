const server = require('./api/server')

const port = process.env.PORT || 2001

server.listen(port, () => {
    console.log(`Listening on port ${port}....`)
})