import React ,{useState, useEffect} from "react";
import api from './services/api';
import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    url: '',
    techs: [''], 
  });
  
  useEffect(()=>{
    api.get('repositories').then(response =>{
      setRepositories(response.data);
      });
  },[])

  function handleInputChange(event){
    const {name, value} = event.target;
    if (name === "techs"){
        const techsArray = value.split(',');
        setFormData({...formData, [name]:techsArray});
    }else{
      setFormData({...formData, [name]:value});
    }
    
  } 
  
  async function handleAddRepository(event) {

    event.preventDefault();
        
    const  {title, url,techs} = formData;

    const data = {};
    data.title = title;
    data.url = url;
    data.techs = [techs];

    const response = await api.post('repositories', data);
  
    if (response.status === 200){
      setRepositories([...repositories,response.data]);
    }
  }

  async function handleRemoveRepository(id) {
    const response = await api.delete(`repositories/${id}`);
    
    if (response.status===204){
        const repositorieIndex = repositories.findIndex(repo => repo.id === id);
        const newRepositories = [...repositories]
        newRepositories.splice(repositorieIndex,1);
        setRepositories(newRepositories);
      

    }else if (response.status === 400){
        alert('Repositorie not found');
    }
    
  }

  return (
    <>
    
    <div className="divNewRepositorie">
      <h1>Novo repositório</h1><br/>
      <form onSubmit={handleAddRepository}>
        <label>Título</label>
        <input id="title" name="title" onChange={handleInputChange} type="text" />
        <label>URL</label>
        <input id="url" name="url" onChange={handleInputChange} type="text"/>
        <label>Techs</label>
        <input id="techs" name="techs" onChange={handleInputChange} type="text"/>
        <button type={"submit"}>Adicionar</button>
      </form>
    </div>
    <div >
      <ul data-testid="repository-list">
      {repositories.map(repositorie => (
      <li key={repositorie.id}>
          <h3>{repositorie.title}</h3><br/><br/>
          <p>{repositorie.url}</p>
          {repositorie.techs.map(tech => (
              <span key={tech} className="tech">{tech}</span>
            ))}
          <button onClick={() => handleRemoveRepository(repositorie.id)}>
            Remover
          </button>
        </li>))}
        
      </ul>
    </div>
    
    </>
  );
}

export default App;
