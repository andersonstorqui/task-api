const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const taskRoutes = require('./Routes/TaskRouter')

app.use(express.json());

app.use('/api', taskRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
