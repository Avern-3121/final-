// ติดตั้งแพ็กเกจที่จำเป็นก่อน
// npm init -y
// npm install express ejs body-parser

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/submit', (req, res) => {
    console.log(req.body);
    res.send('ຂໍ້ມູນທີ່ຖືກສົ່ງຮຽບຮ້ອຍ');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
