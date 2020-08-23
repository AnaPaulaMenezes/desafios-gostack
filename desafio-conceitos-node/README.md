<h2>Sobre</h2>
<p>Primeiro desafio do bootcamp, consistindo em criar uma API em Node.js para cadastro, edição, listagem e remoção de repositórios.</p>

<h2>Pré-Requisitos</h2>
<ul>
  <li>node.js;</li>
  <li>npm ou yarn.</li>
</ul>

<h2>Como instalar</h2>
<ul>
  <li>
    Dentro da pasta raiz deste projeto execute o seguinte comando para instalar as depêndencias: 
   
   ```bash
   yarn
   ```
   
   ou 
   
   ```bash
   npm install
   ```
  </li>
  
  <li>
    Para rodar o projeto digite o seguinte comando:
    
   ```bash
   yarn dev
   ```
   
   ou 
   
   ```bash
   npm run dev
   ```
  </li>
  <li>
    Para criar um repósitorio faça uma requisição POST para a rota "localhost:3333/repositories" enviando como parâmetro body um json no seguinte formato:
   
   ```bash
    { 
      "title": "Desafio Node.js",
      "url": "http://github.com/...", 
      "techs": ["Node.js", "..."]
    }
   
   ```
  </li>
  <li>
    Para editar um repósitorio faça uma requisição PUT para a rota "localhost:3333/repositories/id_repositorio" enviando como parâmetro body um JSON no mesmo formato da rota de criação;
  </li>
  <li>
    Para listar os repósitorios faça uma requisição GET para a rota "localhost:3333/repositories";
  </li>
  <li>
    Para adicionar likes a uma repósitorio faça um requisição GET para a rota "localhost:3333/repositories/id_repositorio/likes"; 
  </li>
  <li>
    Para deletar  um repósitorio faça uma requisição DELETE para a rota "localhost:3333/repositories/id_repositorio".
  </li>
</ul>



<h2>Licença</h2>
<p>Esse projeto está sob a licença MIT. Veja o arquivo <a href="../LICENSE.md">LICENSE</a> para mais detalhes.</p>
