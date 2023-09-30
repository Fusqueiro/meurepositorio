const express = require ('express');
const bodyParser = require ('body-parser');
const app = express();
const port = 3000;

// use o body-parser para processar dados JSON nas solicitações POST e PUT
app.use(bodyParser.json());

app.get('/', (req, res)=> { 
    res.send('ola mundo');
});

app.listen(port, () => {console.log(`o servidor esta rodando em http://localhost:${port}`);
});