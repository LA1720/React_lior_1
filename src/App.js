
import './App.css';

import React from "react";
import ReactDOM from "react-dom";




class App extends React.Component {

  state= {
    clients: [
      {id: 1, nom: "Yo"},
      {id: 2, nom: "Hello"},
      {id: 3, nom: "Bye"}
    ],
    compteur: 0,

    nouveauClient: ''

  };
  handleClick = () => {
    this.setState({compteur: this.state.compteur + 1}); 

    const clients = this.state.clients.slice();
    clients.push({id: 8, nom: "hi"});
    this.setState({clients: clients});
  }

  handleDelete = (id) => {
    const clients = this.state.clients.slice();
    const index = clients.findIndex(client => client.id === id);

    clients.splice(index, 1);
    this.setState({clients: clients});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const id = new Date().getTime();
    const nom = this.state.nouveauClient;

    const client = {id: id, nom: nom};

    const clients = this.state.clients.slice();
    clients.push(client);

    this.setState({clients:clients});
    
  }

  handleChange = (event) => {
    const value = event.currentTarget.value;
    this.setState({nouveauClient: value});
   
  }
  
  render() {
    const title = "Liste des mots";


    return(
      <div className="App">
        <h1>{title}</h1>
        <button onClick ={this.handleClick}>Click me</button> : {this.state.compteur}

        <ul>
          {this.state.clients.map(client => (
            <li>
              {client.nom} <button onClick={()=>this.handleDelete(client.id)}>X</button>
            </li>
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.nouveauClient} onChange={this.handleChange} type="text" placeholder="Ajouter un mot"/>
          <button>Ajouter</button>
        </form>
      </div>
    )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


export default App;
