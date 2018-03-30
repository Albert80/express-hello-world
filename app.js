// app.js
// course at edx.org from Microsoft
// Introduction to Node.js
// Express Framework

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
	res.send('hello world')
})

app.listen(port)