import React from 'react';

interface ListaProps {
  nomes: string[];
  onRemover: (index: number) => void;
}

const Lista: React.FC<ListaProps> = ({ nomes, onRemover }) => (
  <ul>
    {nomes.map((nome, index) => (
      <li key={index}>
        {nome}
        <button onClick={() => onRemover(index)}>Remover</button>
      </li>
    ))}
  </ul>
);

export default Lista;
