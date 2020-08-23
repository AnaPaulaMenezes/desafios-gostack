<h2>Sobre</h2>
<p>Aplicação em Node.js utilizando banco de dados PostgreSQL para cadastro de cosumidores, produtos e pedidos.</p>

<h2>Pré-Requisitos</h2>
<ul>
  <li>node.js;</li>
  <li>yarn;</li>
  <li>PostgreSQL.</li>
</ul>

<h2>Como instalar</h2>
<ul>
  <li>
    Dentro da pasta raiz deste projeto execute o seguinte comando para instalar as depêndencias: 
   
   ```bash
   yarn
   
   ```
  
  </li>
  <li>Criar um banco de dados com o nome "gostack_desafio09";</li>
  <li>Altere as configurações do banco de dados no arquivo "ormconfig.json", localizado na raiz do projeto;</li>
  <li>Rodar as migrations com o comando:
  

   ```bash
   yarn typeorm migration:run
   ```
  </li>
  <li>
    Para rodar o projeto digite o seguinte comando:
    
   ```bash
   yarn dev:server
   ```

  </li>

<li>
    Para criar o cadastro de um usuário faça uma requisição POST para a rota "localhost:3333/customers" enviando como parâmetro body um JSON no seguinte formato:
   
   ```bash
    {
      "name": "Ana Paula Menezes",
      "email": "ana2@teste.com"
    }
   
   ```
  </li>


<li>
    Para criar o cadastro de um produto faça uma requisição POST para a rota "localhost:3333/products" enviando como parâmetro body um JSON no seguinte formato:
   
   ```bash
    {
      "name":"Teste 4",
      "price":20.99,
      "quantity":100
    }
   
   ```
</li>

<li>
    Para criar o cadastro de um pedido faça uma requisição POST para a rota "localhost:3333/orders" enviando como parâmetro body um JSON no seguinte formato:
   
   ```bash
      {
        "customer_id": "6a1922c8-af6e-470e-9a34-621cb0643911",
        "products": [
          {
            "id": "1422413c-01eb-4e31-9c5c-61fd523aeeab",
            "quantity": 5
          }

        ]
      }
   
   ```
</li>

 <li>
    Para listar os pedidos cadastrados faça uma requisição GET para a rota "localhost:3333/orders/id_pedido".
  </li>
</ul>



<h2>Licença</h2>
<p>Esse projeto está sob a licença MIT. Veja o arquivo <a href="../LICENSE.md">LICENSE</a> para mais detalhes.</p>
