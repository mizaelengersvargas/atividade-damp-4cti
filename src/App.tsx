import React, { useState } from 'react';
import Lista from './components/Lista';
import Pesquisar from './components/Pesquisar';

const App: React.FC = () => {
  const [nomesDosAlunos, setNomesDosAlunos] = useState<string[]>([]);

  const handleAdicionarNome = (nome: string) => {
    setNomesDosAlunos([...nomesDosAlunos, nome]);
  };

  const handleRemoverNome = (index: number) => {
    const nomesAtualizados = [...nomesDosAlunos];
    nomesAtualizados.splice(index, 1);
    setNomesDosAlunos(nomesAtualizados);
  };

  const handlePesquisarNome = (query: string) => {
    const nomesFiltrados = nomesDosAlunos.filter((nome) =>
      nome.toLowerCase().includes(query.toLowerCase())
    );
    setNomesDosAlunos(nomesFiltrados);
  };

  return (
    <div>
      <h2>Lista de Estudantes</h2>
      <Pesquisar onPesquisar={handlePesquisarNome} />
      <Lista nomes={nomesDosAlunos} onRemover={handleRemoverNome} />
      <input
        type="text"
        placeholder="Adicionar nome"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleAdicionarNome(e.currentTarget.value);
            e.currentTarget.value = '';
          }
        }}
      />
    </div>
  );
};

export default App;
