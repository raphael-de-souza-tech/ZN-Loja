


export function Navbar(){
    return(
        <nav className="bg-white shadow-md fixed w-full z-10 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
    
          <div id="logo" className="flex items-center">
            <a href="/" className="text-xl text-orange-600">
              ZN Roupas e Acessórios
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-600 hover:text-gray-900 font-inter font-bold">Início</a>
            <a href="/about" className="text-gray-600 hover:text-gray-900">Sobre nossa loja</a>
            <a href="/products" className="text-gray-600 hover:text-gray-900">Produtos</a>
            <a href="/contact" className="text-gray-600 hover:text-gray-900">Compre aqui!</a>
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              
            </button>
          </div>
        </div>
      </div>
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">Início</a>
            <a href="/about" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">Sobre</a>
            <a href="/services" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">Serviços</a>
            <a href="/contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">Contato</a>
          </div>
        </div>
    </nav>
    )
}