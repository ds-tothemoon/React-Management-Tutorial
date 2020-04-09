const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
          id : 1,
          image : 'https://placeimg.com/64/64/1',
          name : "문대성",
          birthday : '931202',
          job : "개발자",
          gender : "남자"
        },
        {
          id : 2,
          image : 'https://placeimg.com/64/64/2',
          name : "홍길동",
          birthday : '950613',
          job : "은행원",
          gender : "남자"
        },
        {
          id : 3,
          image : 'https://placeimg.com/64/64/3',
          name : "하상진",
          birthday : '880424',
          job : "개그맨",
          gender : "남자"
        }
      
      ]);
})
app.listen(port, () => console.log(`Listening on port ${port}`));

