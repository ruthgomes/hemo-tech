import { useState } from "react";
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import { Button } from '@/components/ui/button';

export function Menu() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <Menubar className='flex justify-between items-center px-4 py-7 bg-[#f5fdf1] shadow-none'>
            <div className='flex items-center'>
                <img 
                src='src/assets/hemotech-logo.png' 
                alt='HemoTech-Logo' 
                className='h-10 w-auto'
                />
            </div>

            {/* Menu completo, ocultado em telas pequenas */}
            <div className='hidden md:flex space-x-4'>
                <MenubarMenu>
                    <MenubarTrigger className='hover:text-green-500 outline-none focus:bg-transparent focus:ring-0 active:bg-transparent'>
                        HOME
                    </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger className='hover:text-green-500 outline-none focus:bg-[lightgreen] focus:ring-0 active:bg-[lightgreen]'>
                        SOBRE
                    </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger className='hover:text-green-500 outline-none focus:bg-[lightgreen] focus:ring-0 active:bg-[lightgreen]'>
                        SERVIÇOS
                    </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger className='hover:text-green-500 outline-none focus:bg-[lightgreen] focus:ring-0 active:bg-[lightgreen]'>
                        LOGIN
                    </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger className='bg-[#4caf50] text-white px-3 py-2 rounded-full hover:bg-[#45a049] hover:text-white'>
                        CONTATO
                    </MenubarTrigger>
                </MenubarMenu>
            </div>

            {/* Botão do menu "hambúrguer" visível em telas pequenas */}
            <div className='md:hidden'>
                <Button 
                    className='p-2 rounded-md focus:outline-none bg-[#4caf50] text-white'
                    onClick={() => setMenuOpen(!isMenuOpen)} // Alterna o estado do menu
                >
                    {/* Ícone de "hambúrguer" */}
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </Button>
            </div>

            {/* Menu suspenso para telas pequenas */}
            {isMenuOpen && (
                <div className='absolute top-16 left-0 w-full bg-[#f5fdf1] shadow-md md:hidden'>
                    <div className='flex flex-col items-center space-y-4 py-4'>
                        <MenubarMenu>
                            <MenubarTrigger className='hover:text-green-500 outline-none focus:bg-transparent focus:ring-0 active:bg-transparent'>
                                HOME
                            </MenubarTrigger>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger className='hover:text-green-500 outline-none focus:bg-[lightgreen] focus:ring-0 active:bg-[lightgreen]'>
                                SOBRE
                            </MenubarTrigger>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger className='hover:text-green-500 outline-none focus:bg-[lightgreen] focus:ring-0 active:bg-[lightgreen]'>
                                SERVIÇOS
                            </MenubarTrigger>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger className='hover:text-green-500 outline-none focus:bg-[lightgreen] focus:ring-0 active:bg-[lightgreen]'>
                                LOGIN
                            </MenubarTrigger>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger className='bg-[#4caf50] text-white px-3 py-2 rounded-full hover:bg-[#45a049] hover:text-white'>
                                CONTATO
                            </MenubarTrigger>
                        </MenubarMenu>
                    </div>
                </div>
            )}
        </Menubar>
    )
}