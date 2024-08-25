const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())
 
const PORT = process.env.PORT || 3030;

let data=[{
     icon:'bi bi-android',title:'android device',text:"bala bala bla bla"
},{  icon:'bi bi-apple',title:'apple device',text:"bala bala bla bla"},
{    icon:'bi bi-gear',title:'setting',text:"bala bala bla bla"},
{    icon:'bi bi-briefcase',title:'document',text:"bala bala bla bla"}]

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
})

app.get('/', function (req, res) {
res.send(data)})

