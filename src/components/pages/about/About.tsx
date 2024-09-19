export function About() {
    return (
        <div className='bg-[#f5fdf1] min-h-screen flex flex-col items-center justify-center px-4 py-24'>
            {/* Page title */}
            <h1 className="text-4xl font-bold text-green-600 mb-8">
                SOBRE
            </h1>

            {/* Main section container */}
            <div className="bg-[#ecf8e9] flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto p-8 rounded-lg shadow-lg">
                {/* Circular image */}
                <div className="w-80 h-80 overflow-hidden rounded-full mb-6 lg:mb-0 lg:mr-10">
                    <img 
                        src="/src/assets/about.png" 
                        alt="Sobre" 
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Text about section */}
                <div className="text-lg leading-8 text-justify text-gray-700 lg:w-1/2">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet
                        vehicula turpis a accumsan. Quisque pharetra est ut erat venenatis tempor.
                        Pellentesque elementum orci felis, id faucibus tortor commodo et.
                    </p>
                    <p className="mt-4">
                        Phasellus ultrices ante nec nisl pretium, tempor fringilla dolor dictum.
                        Nullam nisl tellus, aliquam a est sed, finibus posuere sapien. Aenean
                        dictum volutpat dictum. Donec porttitor, libero quis faucibus semper, nisi
                        augue sagittis quam.
                    </p>
                    <p className="mt-4">
                        Fundada em 2024, nossa missão é oferecer os melhores serviços na área da saúde.
                        Nosso compromisso é com qualidade e o bem-estar de nossos pacientes.
                    </p>
                </div>
            </div>

            {/* New section: Nosso Time */}
            <h2 className="text-3xl font-semibold text-green-600 mt-16 mb-8 text-center">
                Nosso Time
            </h2>

            <div className="shadow-lg bg-[#ecf8e9] flex flex-col lg:flex-row justify-center items-center gap-8 max-w-6xl p-8 mx-auto rounded-lg">
                {/* Card 1 */}
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                    <div className="w-40 h-40 overflow-hidden rounded-full mb-4">
                        <img 
                            src="/src/assets/service2.png"  
                            alt="João e Maria da Silva" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">João e Maria da Silva</h3>
                    <p className="text-gray-600">CEO & Fundador</p>
                    <p className="mt-2 text-center text-gray-700">
                        João e Maria têm mais de 20 anos de experiência no setor da saúde, trazendo uma visão inovadora e comprometimento com o bem-estar dos pacientes.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                    <div className="w-40 h-40 overflow-hidden rounded-full mb-4">
                        <img 
                            src="/src/assets/service3.png"  
                            alt="Romeu e Julieta" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Romeu e Julieta dos Santos</h3>
                    <p className="text-gray-600">Diretores de Operações</p>
                    <p className="mt-2 text-center text-gray-700">
                        Com mais de 15 anos de atuação, Romeu e Julieta são responsáveis por coordenar as operações da empresa, garantindo qualidade em todos os processos.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                    <div className="w-40 h-40 overflow-hidden rounded-full mb-4">
                        <img 
                            src="/src/assets/service3.png"  
                            alt="Jack e Rose" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Jack e Rose da Costa</h3>
                    <p className="text-gray-600">Gerentes de Marketing</p>
                    <p className="mt-2 text-center text-gray-700">
                        Jack e Rose são líderes do departamento de marketing, responsáveis por expandir nossa presença e comunicação com o público.
                    </p>
                </div>
            </div>
        </div>
    );
}
