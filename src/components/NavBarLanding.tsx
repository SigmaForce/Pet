import React from "react";

export const NavBarLanding = () => {
  return (
    <div className="container mx-auto">
      <nav>
        <ul className="flex justify-between items-center py-3">
          <li className="text-white">Home</li>
          <li className="text-white">Adote um Cão</li>
          <li className="text-white">Adote um Gato</li>
          <li className="text-white">Processo de Adoção</li>
          <li className="text-white">Sobre Nós</li>
          <li className="text-white">Contato</li>
        </ul>
      </nav>
    </div>
  );
};
