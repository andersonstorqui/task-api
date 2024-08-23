const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const taskRoutes = require('./Routes/TaskRouter')
const cors = require('cors');

app.use(express.json());

app.use(cors());

app.use('/api', taskRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
