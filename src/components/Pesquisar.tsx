import React, { useState } from 'react';

interface PesquisarProps {
  onPesquisar: (query: string) => void;
}

const Pesquisar: React.FC<PesquisarProps> = ({ onPesquisar }) => {
  const [query, setQuery] = useState<string>('');

  const handlePesquisar = () => {
    onPesquisar(query);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handlePesquisar}>Pesquisar</button>
    </div>
  );
};

export default Pesquisar;
