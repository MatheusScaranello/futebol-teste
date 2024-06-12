import { useState, useEffect } from 'react';

export function useKeyPress(targetKey) {
  // Estado para armazenar se a tecla alvo está pressionada
  const [keyPressed, setKeyPressed] = useState(false);

  // Função para lidar com o evento de pressionar a tecla
  const downHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  };

  // Função para lidar com o evento de soltar a tecla
  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  // Adiciona os event listeners quando o componente é montado
  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    // Remove os event listeners quando o componente é desmontado
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [targetKey]); // Dependência targetKey para garantir que os listeners sejam atualizados quando a tecla alvo muda

  return keyPressed; // Retorna o estado atual da tecla pressionada
}

// export default useKeyPress;