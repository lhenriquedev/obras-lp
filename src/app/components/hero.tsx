import Image from "next/image";
import rightBg from "../assets/right-bg.png";

export function Hero() {
  return (
    <section className="border-b h-full border-gray-800 px-6 py-4">
      <div className="max-w-sm md:max-w-7xl py-8 max-h-full mx-auto grid grid-cols-1 justify-between gap-8 md:grid-cols-2">
        <div className="flex flex-col md:justify-center gap-2 md:gap-6">
          <h1 className="text-3xl md:text-5xl font-bold md:leading-tight text-white">
            Construindo o Futuro: Obras que Impactam sua Cidade
          </h1>
          <p className="mb-4 leading-7">
            Explore nosso compromisso com projetos inovadores e sustentáveis,
            moldando um futuro vibrante para sua cidade
          </p>

          <div className="flex gap-4 items-center">
            <button className="bg-primary-900 md:w-56 self-start rounded-md px-4 py-4 text-lg hover:bg-primary-800 transition-all active:scale-95">
              Download &rarr;
            </button>
            <button className="bg-zinc-800 md:w-56 self-start rounded-md px-4 py-4 text-lg hover:bg-zinc-900 transition-all active:scale-95">
              Saiba mais &darr;
            </button>
          </div>
        </div>
        <Image
          className="rotate-6 h-[618px] object-contain"
          alt="Hero image"
          src={rightBg}
        />
      </div>
    </section>
  );
}
