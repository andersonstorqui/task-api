

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/andersonstorqui/task-api.git


src/ │
     ├── Config/ │
                 └── database.js # Configurações da aplicação, como variáveis de ambiente, banco de dados, etc. │ 
     ├── Controllers/ │ └── TaskController.js # Controladores que lidam com a lógica de negócios │ 
     ├── Models/ │ └── TaskModel.js # Modelos que representam as entidades e interagem com o banco de dados │ 
     ├── Routers/ │ └── TaskRouter.js # Definição das rotas da aplicação │ 
     └── server.js # Arquivo principal que inicia o servidor

     Faça um fork do projeto
      Crie uma nova branch (git checkout -b feature/nova-funcionalidade)
      Faça suas alterações e commit (git commit -m 'Adiciona nova funcionalidade')
      Envie para a branch (git push origin feature/nova-funcionalidade)
      Abra um Pull Request

      npm start: Inicia a aplicação.

      
