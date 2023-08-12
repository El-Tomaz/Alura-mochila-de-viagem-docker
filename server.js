
const express = require('express')
const app = express()
const port = 3000
const fs = require('fs/promises')

app.use(express.static(`${__dirname}client`))

 app.get('/', async (req, res) => {
  const index = await fs.readFile(`${__dirname}client/index.html`,{enconding:'utf8'})
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(index)
  res.end
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
