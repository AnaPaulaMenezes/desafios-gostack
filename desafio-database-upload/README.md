<h2>Sobre</h2>
<p>Aplicação em Node.js utilizando banco de dados PostgreSQL para cadastro, importação e listagem de transações financeiras.</p>

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
  <li>Criar um banco de dados com o nome "gostack_desafio06";</li>
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
    Para criar um transação faça uma requisição POST para a rota "localhost:3333/transactions" enviando como parâmetro body um json no seguinte formato:
   
   ```bash
    {
      "title": "Salário",
      "type": "income",
       "value": 6000,
      "category": "Others"
    }
   
   ```
  </li>
  
  <li>
    Para listar as transações faça uma requisição GET para a rota "localhost:3333/transactions";
  </li>
  
  <li>
    Para importar uma série de transações faça uma requisição POST para a rota "localhost:3333/transactions/import" enviando um arquivo csv com as transações a serem importadas, no seguinte formato:
    
      
      title, type, value, category
      Loan, income, 1500, Others
      Website Hosting, outcome, 50, Others
      Ice cream, outcome, 3, Food
      

 
    
  </li>
</ul>



<h2>Licença</h2>
<p>Esse projeto está sob a licença MIT. Veja o arquivo <a href="../LICENSE.md">LICENSE</a> para mais detalhes.</p>
