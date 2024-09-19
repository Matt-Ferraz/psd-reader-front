"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import SetaEsquerda from "./assets/icons/seta-esquerda.svg";
import SetaDireita from "./assets/icons/seta-direita.svg";

const DocumentationPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      <aside
        className={`bg-navbarBg shadow-lg transition-all duration-300 ${
          isMenuOpen ? "w-64" : "w-20"
        }`}
      >
        <div className="h-16 flex items-center justify-between px-4">
          <h2
            className={`text-xl font-bold transition-all ${
              isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            Menu
          </h2>
          <button onClick={toggleMenu} className="text-primary bg-white z-10 rounded-full w-10 h-10 flex justify-center items-center shadow-md hover:bg-gray-100">  {/* Tenho q ajustar a exibição da lista */}
            {isMenuOpen ? (
              <SetaEsquerda />
            ) : (
              <SetaDireita />
            )}
          </button>
        </div>
        <nav className="mt-10">
          <ul>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-200 transition"
              >
                Documentação
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-200 transition"
              >
                Criador de Artes
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-200 transition"
              >
                Templates
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <div className="flex-1">
        <header className="bg-primary text-white py-4 shadow-md">
          <div className="container mx-auto flex items-center justify-between px-4">
            <h1 className="text-3xl font-bold">Documentação</h1>
            <a
              href="#"
              className="bg-white text-primary px-4 py-2 rounded-full shadow-md hover:bg-gray-200"
            >
              Acessar Editor
            </a>
          </div>
        </header>

        <main className="container mx-auto h-svh py-10 px-4"> {/* Tenho q ajustar a altura */}
          <section className="mb-12" data-aos="fade-up">
            <h2 className="text-2xl font-semibold mb-4">Introdução</h2>
            <p className="text-gray-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, nihil! Voluptatibus blanditiis tempora enim eius necessitatibus sequi unde tempore fugiat commodi delectus? Dignissimos odit beatae saepe iusto corporis quisquam officiis.
            </p>
          </section>

          <section className="mb-12" data-aos="fade-up">
            <h2 className="text-2xl font-semibold mb-4">Como Funciona</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-2">Primeiro passo</h3>
              <p className="text-gray-700 mb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, nihil! Voluptatibus blanditiis tempora enim eius necessitatibus sequi unde tempore fugiat commodi delectus? Dignissimos odit beatae saepe iusto corporis quisquam officiis.
              </p>
              <a href="/editor" className="text-primary hover:underline">
                Ver Exemplo
              </a>
            </div>
          </section>

        </main>

        <footer className="bg-primary text-white py-4">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Bigou Delivery. Todos os direitos reservados.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default DocumentationPage;
