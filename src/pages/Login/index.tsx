import React from "react";
import Hero from "../../assets/Hero.png";
import Golden from "../../assets/Golden.png";

export const Login = () => {
  return (
    <>
      <div className="grid grid-cols-1 h-screen lg:grid-cols-2">
        <div className="bg-[#242424] ">
          <div className="container w-[50%] mx-auto">
            <div className="ml-8 mt-20 mb-10">
              <img src={Hero} alt="" className="w-80 mx-auto" />
            </div>
            <form className="flex flex-col gap-2 ">
              <div className="flex flex-col">
                <label htmlFor="email" className="text-white">
                  E-mail
                </label>
                <input
                  className="rounded py-2 px-4 bg-[#FDFDFD] text-[#242424] text-xs outline-none focus:px-6 focus:ring-1 focus:ring-offset-1 focus:ring-[#22C188] transition-all duration-300"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Insira o seu e-mail"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="senha" className="text-white">
                  Senha
                </label>
                <input
                  className="rounded py-2 px-4 bg-[#FDFDFD] text-[#242424] text-xs outline-none focus:px-6 focus:ring-1 focus:ring-[#22C188] transition-all duration-300"
                  type="password"
                  name="senha"
                  id="senha"
                  placeholder="********"
                />
              </div>

              <button className="bg-[#22c188] rounded px-4 py-1 font-medium text-[#FDFDFD] mt-2 h-8">
                Entrar
              </button>

              <div className="flex justify-between text-sm">
                <div className="flex gap-2">
                  <input
                    className="w-4 accent-[#22c188] bg-[#FDFDFD] "
                    type="checkbox"
                    name="remind"
                    id="remind"
                  />
                  <label htmlFor="remind" className="text-[#FDFDFD] ">
                    Lembrar-me
                  </label>
                </div>
                <div>
                  <a href="" className="text-[#22c188] font-medium ">
                    Esqueceu a Senha?
                  </a>
                </div>
              </div>
              <div className="text-center text-white mt-4">
                <span>
                  Não tem uma conta?{" "}
                  <a href="" className="text-[#22c188] ">
                    Clique aqui para registrar-se
                  </a>
                </span>
              </div>
            </form>
          </div>
        </div>
        <div className="bg-[#22C188] hidden lg:block">
          <div className="container w-[80%] mx-auto">
            <div className="flex flex-col justify-between h-screen">
              <div>
                <h1 className="text-[#FDFDFD] text-5xl font-bold text-center my-6 block">
                  Pets Sem Fronteiras
                </h1>
                <h2 className="text-2xl text-center text-white">
                  Aplicação para auxiliar na adoção de animais de estimação e
                  resgate de animais em situação de rua ou abandono.
                </h2>
              </div>
              <div>
                <img src={Golden} alt="" className="mx-auto w-[60%]" />
              </div>
              <div className="mb-3">
                <h1>
                  <a
                    href="https://www.instagram.com/sigmaforc3/"
                    target="_blank"
                    className="text-[#FDFDFD] font-medium float-right "
                  >
                    Desenvolvido por Leonardo Lucas
                  </a>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
