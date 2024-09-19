import { Menu } from './Menu';
import { ButtonComponent } from './Button';
import { CarouselComponent } from './Carousel';

export function Home() {
    return (
        <div className='bg-[#f5fdf1] min-h-screen'>
            {/* Menu */}
            <Menu />

            {/* Content wrapper*/}
            <div className='flex flex-col items-center mt-8 py-20 px-4'>
                {/* Phrase above the carousel */}
                <h1 className='text-4xl font-bold text-green-500 mb-8 text-center'>
                    Lorem ipsum dolor sit amet
                </h1>

                {/* Carousel */}
                <CarouselComponent />

                {/* Button Comece Agora */}
                <ButtonComponent />
            </div>
        </div>
    );
}