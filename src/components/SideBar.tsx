import React from "react";

export const SideBar = () => {
  return (
    <div className="bg-[#F2F2F2] dark:bg-slate-800 col-span-1 rounded-xl dark:text-white">
      <ul className="flex flex-col  py-3">
        <li className="py-1 text-lg hover:bg-slate-700 cursor-pointer rounded px-3">
          Inicio
        </li>
        <li className="py-1 text-lg hover:bg-slate-700 cursor-pointer rounded px-3">
          Cadastrar Animal
        </li>
        <li className="py-1 text-lg hover:bg-slate-700 cursor-pointer rounded px-3">
          Buscar Animais Perdidos
        </li>
        <li className="py-1 text-lg hover:bg-slate-700 cursor-pointer rounded px-3">
          Ajudar Projetos
        </li>
        <li className="py-1 text-lg hover:bg-slate-700 cursor-pointer rounded px-3">
          ONGs Parceiras
        </li>
      </ul>
    </div>
  );
};
