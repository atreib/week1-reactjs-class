import React from 'react';

import MyButton from './components/MyButton';

function App () {
    return (
        <> 
            <h1>Olá dev</h1>
            <hr />
            <MyButton title="Botao 1">oi</MyButton>
            <MyButton title="Botao 2" />
        </>
    )
}

export default App;