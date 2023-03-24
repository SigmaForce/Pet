import React from "react";

export const NavBarLanding = () => {
  return (
    <div className="container mx-auto">
      <nav>
        <ul className="xl:flex justify-center gap-20 items-center py-3 hidden ">
          <li className="text-white font-semibold text-lg">Home</li>
          <li className="text-white font-semibold text-lg">Adote um Cão</li>
          <li className="text-white font-semibold text-lg">Adote um Gato</li>
          <li className="text-white font-semibold text-lg">
            Processo de Adoção
          </li>
          <li className="text-white font-semibold text-lg">Sobre Nós</li>
          <li className="text-white font-semibold text-lg">Contato</li>
        </ul>
      </nav>
    </div>
  );
};
