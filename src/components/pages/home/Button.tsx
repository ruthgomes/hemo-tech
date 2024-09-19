import { Button } from '@/components/ui/button';

export function ButtonComponent() {
    return (
        //Botão Comece Agora
      <div className="flex justify-center mt-20 py-12">
      <Button className="bg-[#4caf50] text-2xl text-white py-8 px-14 rounded-full hover:bg-[#45a049]">
        Comece Agora
      </Button>
    </div>
    );
}