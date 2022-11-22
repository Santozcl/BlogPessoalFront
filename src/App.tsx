import React from 'react';
import { Title } from './componentes/Title/Title';
import { Text } from './componentes/text/Text';
import './App.css';

function App() {
  const nome = 'Diogo'
  return (
    <>
    <h1>Hello {nome}!</h1>
    <p>
      teste de texto de paragrafo
    </p>
    </>
  );
}
    
export default App;
