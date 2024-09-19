import { useState } from 'react';

export function Services() {
    const [expandedService, setExpandedService] = useState<number | null>(null);

    const toggleServiceDetails = (index: number) => {
        setExpandedService(expandedService === index ? null : index);
    };

    return (
        // Our Services
        <div className='bg-[#f5fdf1] min-h-screen flex flex-col items-center justify-center px-4 py-4'>
            {/* Page title */}
            <h1 className='text-4xl font-bold text-green-600 mb-8'>
                Nossos Serviços
            </h1>
            {/* Service container */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto'>

                {/* Card 1 */}
                <div className='bg-[#f7fdf3] rounded-lg shadow-lg p-8 text-center transform transition-all duration-300 hover:scale-105'
                >
                    <img 
                    src='/src/assets/service1.png' 
                    alt="Serviço 1" 
                    className='w-full h-64 object-cover mb-6 rounded-md'
                    />
                    <h2 className='text-2xl font-semibold text-green-600 mb-4'>
                        Serviço 1
                    </h2>
                    <button
                    onClick={() => toggleServiceDetails(0)}
                    className='mt-4 text-green-600 flex items-center justify-center hover:text-green-400'
                    >
                        <span className='mr-2'>
                            {expandedService === 0 ? "Menos detalhes" :  "Mais detalhes"}
                        </span>
                        <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className={`h-6 w-6 transition-transform duration-200 ${expandedService === 0 ? "rotate-180" : ""}`}
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        >
                            <path 
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M19 91-7 7-7-7'
                            />
                        </svg>
                    </button>
                    {expandedService === 0 && (
                        <div className='mt-4 text-gray-600'>
                            <p>Descrição detalhada do Serviço 1</p>
                        </div>
                    )}
                </div>

                {/* Card 2 */}
                <div className='bg-[#d4ebc8] rounded-lg shadow-lg p-8 text-center transform transition-all duration-300 hover:scale-105'
                >
                    <img 
                    src='/src/assets/service1.png'
                    alt='Serviço 2'
                    className='w-full h-64 object-cover mb-6 rounded-md'
                    />
                    <h2 className='text-2xl font-semibold text-green-600 mb-4'>
                        Serviço 2
                    </h2>
                    <button 
                    onClick={() => toggleServiceDetails(1)}
                    className='mt-4 text-green-600 flex items-center justify-center hover:text-green-400'
                    >
                        <span className='nr-2'>
                            {expandedService === 1 ? "Menos detalhes" : "Mais detalhes"}
                        </span>
                        <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className={`h-6 w-6 transition-transform duration-200 ${expandedService === 1 ? "rotate-180" : ""}`}
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        >
                            <path 
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M19 91-7 7-7-7'
                            />
                        </svg>
                    </button>
                    {expandedService === 1 && (
                        <div className='mt-4 text-gray-600'>
                            <p>Descrição detalhada do Serviço 2</p>
                        </div>
                    )}
                </div>

                {/* Card 3 */}
                <div className='bg-[#d8f4b9] rounded-lg shadow-lg p-8 text-center transform transition-all duration-300 hover:scale-105'
                >
                    <img 
                    src='/src/assets/service3.png'
                    alt='Serviço 3'
                    className='w-full h-64 object-cover mb-6 rounded-md'
                    />
                    <h2 className='text-2xl font-semibold text-green-600 mb-4'>
                        Serviço 3
                    </h2>
                    <button 
                    onClick={() => toggleServiceDetails(2)}
                    className='mt-4 text-green-600 flex items-center justify-center hover:text-green-400'
                    >
                        <span className='mr-2'>
                            {expandedService === 2 ? "Menos detalhes" : "Mais detalhes"}
                        </span>
                        <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className={`h-6 w-6 transition-transform duration-200 ${expandedService === 2 ? "rotate-180" : ""}`}
                        fill='none'
                        viewBox='0 0 24 24'
                        >
                            <path 
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M19 91-7 7-7-7'
                            />
                        </svg>
                    </button>
                    {expandedService === 2 && (
                        <div className='mt-4 text-gray-600'>
                            <p>Descrição detalhada do Serviço 3</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};