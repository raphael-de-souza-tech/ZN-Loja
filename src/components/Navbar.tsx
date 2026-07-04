// useState é uma ferramenta que serve pra criar estados dentro de componentes funcionais do React. Ele permite que você armazene e gerencie valores que podem mudar ao longo do tempo, como o estado de um menu aberto ou fechado, o valor de um input, entre outros.
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <div id="logo">
            <a href="/" className="text-xl font-bold text-orange-600">
              ZN Roupas e Acessórios
            </a>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-600 hover:text-orange-600 font-bold">
              Início
            </a>

            <a href="/about" className="text-gray-600 hover:text-orange-600">
              Sobre nossa loja
            </a>

            <a href="/products" className="text-gray-600 hover:text-orange-600">
              Produtos
            </a>

            <a href="/contact" className="text-gray-600 hover:text-orange-600">
              Compre aqui!
            </a>
          </div>

          {/* Botão Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 hover:text-orange-600"
            >
              {menuOpen ? <X size={25} /> : <Menu size={25} />}
            </button>
          </div>

        </div>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="flex flex-col px-4 py-3 space-y-2">

            <a
              href="/"
              className="py-2 text-gray-600 hover:text-orange-600 font-bold"
            >
              Início
            </a>

            <a
              href="/about"
              className="py-2 text-gray-600 hover:text-orange-600"
            >
              Sobre nossa loja
            </a>

            <a
              href="/products"
              className="py-2 text-gray-600 hover:text-orange-600"
            >
              Produtos
            </a>

            <a
              href="/contact"
              className="py-2 text-gray-600 hover:text-orange-600"
            >
              Compre aqui!
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}