import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './assets/logo.jpg';
import MyButton from './components/MyButton';
import api from './services/api';

function App () {
    const [projects, setProjects] = useState([]);

    useEffect(async () => {
        const response = await api.get('projects');
        setProjects(response.data);
        console.log("response: ", response);
    }, []);

    const handleAddProject = async () => {
        
        const result = await api.post('projects', { id: Date.now(), name: `Novo projeto ${Date.now()}` });
        // setProjects([...projects, result.data]);
        setProjects(result.data);
    };

    return (
        <> 
            <h1>Olá dev</h1>
            <MyButton title="Botao 1">oi</MyButton>
            <img src={logo} />
            <br />

            <h2>Meus projetos:</h2>
            <button onClick={handleAddProject}>Adicionar novo projeto</button>
            <ul>
                {projects.map(project => <li key={project.id}>{project.name}</li>)}
            </ul>
        </>
    )
}

export default App;