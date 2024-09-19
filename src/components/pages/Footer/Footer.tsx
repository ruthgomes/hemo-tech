export function Footer() {
    return (
        <footer className="bg-[#ecf8e9] mt-20 py-12">
          <div className="max-w-7xl mx-auto px-4">
            {/* Footer title */}
            <h2 className="text-2xl font-bold text-center mb-8 text-green-600">
                HEMOTECH
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Contact columns */}
              <div className="flex flex-col space-y">
                <div className="flex items-center space-x-4">
                  <div className="text-green-600">
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-8 w-8" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    >
                      <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M16 8a6 0 00-12 0v8a6 6 0 0012 0V8z" 
                      />
                    </svg>
                  </div>
                  <div className="text-lg">
                    hemotech@saude.org.br
                </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-green-600">
                    <svg  
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-8 w-8" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    >
                      <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M20 12a8 8 0 10-16 0 8 8 0 0016 0z"
                      />
                    </svg>
                  </div>
                  <div className="text-lg">
                    Github: @Hemotech
                </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-green-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-8 w-8" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M2 12l4 4 8-8 4 4" 
                      />
                    </svg>
                  </div>
                  <div className="text-lg">
                    092 9 4002-8922
                </div>
                </div>
              </div>
            </div>
            {/* Final message */}
            <div className="text-center text-gray-700 mt-12">
              <p>
                © 2024 HEMOTECH. Todos os direitos reservados.
            </p>
            </div>
          </div>
        </footer>
    );
}