import Image from "next/image";
import phones from "../assets/phones.png";

interface CtaProps {}
export function Cta(props: CtaProps) {
  return (
    <section className="px-6 py-16">
      <div className="max-w-7xl px-16 mx-auto bg-zinc-900 mt-8 flex items-center gap-8 justify-between rounded-md h-full">
        <div className="py-8 max-w-2xl flex flex-col gap-4">
          <h2 className="text-white uppercase font-bold text-4xl">
            Baixe nosso aplicativo e comece a participar
          </h2>
          <p className="text-sm text-gra mb-4">
            Transforme sua cidade agora! Baixe o aplicativo, crie sua demanda em
            segundos e acompanhe o progresso em tempo real. Sua participação faz
            a diferença! Juntos, construímos um futuro urbano mais conectado e
            eficiente. Clique para fazer parte da transformação!
          </p>
          <button className="bg-primary-700 w-64 rounded-md px-4 py-4 text-lg hover:bg-primary-600 transition-all active:scale-95">
            Download &rarr;
          </button>
        </div>
        <Image src={phones} alt="" className="" />
      </div>
    </section>
  );
}
