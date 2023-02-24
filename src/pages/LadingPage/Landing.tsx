import React from "react";
import { NavBarLanding } from "../../components/NavBarLanding";
import Hero from "../../assets/Hero.png";
import Panqueca from "../../assets/Panqueca.png";

export const Landing = () => {
  return (
    <>
      <header className="w-full bg-[#22C188]">
        <NavBarLanding />
      </header>
      <div className="w-full bg-[#22C188] pt-10">
        <div className="container mx-auto">
          <div className="flex flex-col items-center h-screen gap-2">
            <img src={Hero} alt="Hero" className="max-w-md" />
            <h1 className="text-6xl font-bold max-w-5xl text-center mx-auto text-[#F8D629] ">
              Adote um animal e ganhe um amigo para a vida toda!
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#F8D629] p-10">
        <div className="container mx-auto min-h-screen ">
          <div className="flex flex-col items-center gap-20">
            <h2 className="text-5xl font-semibold max-w-5xl text-center mx-auto text-[#22C188] ">
              Animais para adoção responsável
            </h2>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 ">
              <div className="rounded-2xl">
                <img src={Panqueca} alt="" />
              </div>
              <div className="rounded-2xl">
                <img src={Panqueca} alt="" />
              </div>
              <div className="rounded-2xl">
                <img src={Panqueca} className=" " alt="" />
              </div>
              <div className="rounded-2xl">
                <img src={Panqueca} className=" " alt="" />
              </div>
            </div>

            <button className="bg-[#22C188] py-2 rounded text-white font-semibold text-2xl min-w-[50%] ">
              Ver animais para adoção
            </button>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#22C188] p-10">
        <div className="container mx-auto min-h-screen">
          <div className="flex flex-col items-center gap-20">
            <h2 className="text-5xl font-semibold max-w-5xl text-center mx-auto text-[#F8D629] ">
              Contato
            </h2>
            <div className="flex flex-col lg:flex-row gap-16  ">
              <h3 className="text-3xl flex-wrap font-medium text-white  text-justify  w-full lg:w-[40%] ">
                Você pode entrar em contato conosco pelo telefone
                (XXX-XXX-XXXX), pelo e-mail (xxxxx@xxxx.com) ou preenchendo o
                formulário de contato abaixo. Se você tiver alguma dúvida sobre
                adoção de animais, ou se quiser saber mais sobre nossos animais
                disponíveis para adoção, entre em contato conosco.
              </h3>
              <div>
                <form className="">
                  <div className="flex flex-col gap-3  max-w-lg min-w-[50rem] py-2">
                    <input
                      className="rounded py-2 px-4"
                      type="text"
                      placeholder="Nome"
                    />
                    <input
                      className="rounded py-2 px-4"
                      type="text"
                      placeholder="E-mail"
                    />
                    <input
                      className="rounded py-2 px-4"
                      type="text"
                      placeholder="Telefone"
                    />
                    <textarea
                      className="rounded py-2 px-4"
                      name=""
                      id=""
                      cols={30}
                      rows={10}
                      placeholder="Mensagem"
                    ></textarea>
                    <button className="bg-[#F8D629] py-2 rounded text-white font-semibold text-2xl min-w-[50%] ">
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
