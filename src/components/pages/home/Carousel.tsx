import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useRef, useState } from 'react';

export function CarouselComponent() {
    const [currentSlide, setCurrentSlide] = useState(0);
    // const totalSlides = 6; // Número total de slides
    const [isModalOpen, setIsModalOpen] = useState(false);
    const carouselContentRef = useRef<HTMLDivElement>(null); // Ref para o container dos slides
    
    // Array de objetos com as informações de cada slide
    const slides = [
        {
            img: '/src/assets/carousel.png',
            descripition: 'Notícia 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            link: '/news/1'
        },
        {
            img: '/src/assets/carousel.png',
            descripition: 'Notícia 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            link: '/news/2'
        },
        {
            img: '/src/assets/carousel.png',
            descripition: 'Notícia 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            link: '/news/3'
        },
        {
            img: '/src/assets/carousel.png',
            descripition: 'Notícia 4: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            link: '/news/4'
        },
        {
            img: '/src/assets/carousel.png',
            descripition: 'Notícia 5: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            link: '/news/5'
        },
        {
            img: '/src/assets/carousel.png',
            descripition: 'Notícia 6: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            link: '/news/6'
        },
    ];

    // Função para navegar até um slide específico
    const goToSlide = (index: number) => {
        setCurrentSlide(index);

        // Garantir que o slide atual esteja visível
        if (carouselContentRef.current) {
            const slideElement = carouselContentRef.current.children[index] as HTMLElement;
            slideElement?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    };

    // Função para abrir o modal
    const openModal = (index: number) => {
        setCurrentSlide(index);
        setIsModalOpen(true);
    };

    // Função para fechar o modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='flex flex-col justify-center items-center py-0 mt-28'>
            <Carousel 
            opts={{
                align: 'center', /* Ajustado para alinhar ao centro */
            }}
            className='w-full max-w-7xl' /* Ajustado para aumentar a largua máxima */
            > 
                <CarouselContent ref={carouselContentRef} className='-ml-1'>
                    {slides.map((slide, index) => (
                        <CarouselItem 
                        key={index}
                        className={`md:basis-full lg:basis-1/2 transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-25'}`}
                        >
                            <div className='p-1'>
                                <Card className='bg-transparent border-spacing-96'> {/* Cor de fundo do card alterada, para testes troque por black */}
                                    <CardContent className='flex justify-center p-6'>
                                        <img 
                                        src={slide.img}
                                        alt={`Slide ${index + 1}`} 
                                        className='w-full h-auto object-cover bg-transparent cursor-pointer'
                                        onClick = {() => openModal(index)} // Abrir modal ao clicar na imagem
                                        />
                                        <p className='mt-4 text-center text-lg text-white'>
                                            {slide.descripition} {/* Descrição do slide */}
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>                            
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious className='size-10 text-white bg-[#4caf50] hover:bg-[#45a049] p-2'
                style={{ marginLeft: '-20px' }}
                onClick = {() => goToSlide((currentSlide - 1 + slides.length) % slides.length)} // Navega para o slide anterior
                // onClick = {() => console.log("Está funcionando")}
                >
                    <span className='text-8xl'>&#x276E;</span> {/* Custom arrow left */}
                </CarouselPrevious>

                <CarouselNext className='size-10 text-white bg-[#4caf50] hover:bg-[#45a049] p-2'
                style={{ marginRight: '-20px' }}
                onClick = {() => goToSlide((currentSlide + 1) % slides.length)} // Navega para o próximo slide
                // onClick = {() => console.log("Está funcionando")}
                >
                    <span className='text-8xl'>&#x276F;</span> {/* Custom arrow right */}
                </CarouselNext>
            </Carousel> 

            {/* Indicators (bolinhas / indicadores) */}
            <div className='mt-4 flex space-x-2'>
                {slides.map((_, index) => (
                    <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors duration-500 ${
                        currentSlide === index ? 'bg-green-500' : 'bg-green-300'}`}
                    onClick={() => goToSlide(index)} // Navega até o slide ao clicar no dot
                    ></button>
                ))}
            </div>

            {/* Modal para exebir o slide em tela cheia */}
            {isModalOpen && (
                <div className='fixed inset-0 z-50 bg-black bg-opacity-75 flex justify-center'>
                    <div className='relative w-full max-w-4xl'>
                        <img 
                        src={slides[currentSlide].img} 
                        alt={`Slide ${currentSlide + 1}`} 
                        className='w-full h-auto object-cover'
                        />
                        <div className='absolute top-0 right-0 p-4'>
                            <button className='text-white text-2xl' onClick={closeModal}>✖</button>
                        </div>
                        <div className='absolute bottom-o left-0 right-0 p-4 bg-black bg-opacity-50 flex justify-between items-center'>
                            <p className='text-white text-lg'>{slides[currentSlide].descripition}</p>
                            <button
                            className='bg-green-500 text-white px-4 py-2 rounded'
                            onClick={() => window.location.href = slides[currentSlide].link} // Redirecionar para a página completa
                            >
                                Ler mais
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}