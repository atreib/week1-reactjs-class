import React, { useState } from 'react';
import './App.css';
import logo from './assets/logo.jpg';
import MyButton from './components/MyButton';

function App () {
    const [projects, setProjects] = useState(['projeto1', 'projeto2']);

    const handleAddProject = () => {
        // o que não fazer: projects.push(`Novo projeto ${Date.now()}`);
        setProjects([...projects, `Novo projeto ${Date.now()}`]);
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
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>
        </>
    )
}

export default App;