const express = require("express");
const cors = require("cors");

const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  response.json(repositories);
});

app.post("/repositories", (request, response) => {
  const {title, url, techs} = request.body;
    const repositorie = {id:uuid(), title, url, techs, likes:0};    
    repositories.push(repositorie);
    return response.json(repositorie);
  });

app.put("/repositories/:id", (request, response) => {
  const {id} = request.params;
  const {title, url, techs} = request.body;
  const repositorieIndex = repositories.findIndex(repo => repo.id == id);
  
  if(repositorieIndex < 0){
    return response.status(400).json({error: 'Repositorie not found'});  
  }

  const likes = repositories[repositorieIndex].likes
  const repositorie = {
    id,
    title,
    url,
    techs,
    likes,
  };

  repositories[repositorieIndex] = repositorie;
  return response.json(repositorie);
});

app.delete("/repositories/:id", (request, response) => {
  const {id} = request.params;
  const repositorieIndex = repositories.findIndex(repo => repo.id == id);

  if(repositorieIndex < 0){
    return response.status(400).json({error: 'Repositorie not found'});  
  }

  repositories.splice(repositorieIndex,1);
  return response.status(204).send();


});

app.post("/repositories/:id/:like", (request, response) => {
  const {id,like} = request.params;
  const repositorieIndex = repositories.findIndex(repo => repo.id == id);

  if(repositorieIndex < 0){
    return response.status(400).json({error: 'Repositorie not found'});  
  }
  repositories[repositorieIndex].likes ++;
  return response.status(200).json(repositories[repositorieIndex]);

});

module.exports = app;
