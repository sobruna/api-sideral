const app = require("./src/app");
require('dotenv-safe').load();

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));