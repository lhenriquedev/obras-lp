interface FeaturesProps {}

import { Brush } from "lucide-react";
import Image from "next/image";
import rightBg from "../assets/right-bg.png";

export function Features(props: FeaturesProps) {
  return (
    <section className="px-6 mt-16 py-4 border-b border-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="uppercase tracking-wider text-2xl mb-20">
          Como funciona?
        </h2>

        <div className="flex flex-col gap-24">
          <div className="flex flex-col justify-between md:items-start  md:flex-row gap-20">
            <div className="mb-6 max-w-lg">
              <h3 className="text-primary-200 font-medium text-8xl mb-1">01</h3>
              <h2 className="text-3xl mb-8 font-bold">
                Crie uma solicitação de demanda
              </h2>
              <p className="leading-relaxed">
                Capacite-se! Com nosso aplicativo intuitivo, os cidadãos podem
                facilmente criar solicitações de demanda para a Secretaria de
                Obras. Participe ativamente na melhoria da sua cidade,
                compartilhando suas necessidades e contribuindo para um ambiente
                urbano melhor e mais eficiente. Junte-se a nós na construção de
                um futuro coletivo!
              </p>
            </div>

            <Image
              src={rightBg}
              alt="Features image"
              className="rotate-6 h-[618px] object-contain"
            />
          </div>

          <div className="flex flex-col justify-between md:items-start  md:flex-row gap-20">
            <div className="mb-6 max-w-lg">
              <h3 className="text-primary-200 font-medium text-8xl mb-1">02</h3>
              <h2 className="text-3xl mb-8 font-bold">
                Veja o progresso da sua demanda em tempo real
              </h2>
              <p className="leading-relaxed">
                Com a nossa plataforma inovadora, você tem o controle total
                sobre o andamento da sua demanda para a Secretaria de Obras.
                Acompanhe em tempo real cada etapa do processo, desde a
                submissão até a conclusão. Esteja informado e conectado à
                transformação da sua comunidade. Sua voz, sua cidade, seu
                progresso!
              </p>
            </div>

            <Image
              src={rightBg}
              alt="Features image"
              className="rotate-6 h-[618px] object-contain -order-1"
            />
          </div>

          <div className="flex flex-col justify-between md:items-start  md:flex-row gap-20">
            <div className="mb-6 max-w-lg">
              <h3 className="text-primary-200 font-medium text-8xl mb-1">03</h3>
              <h2 className="text-3xl mb-8 font-bold">
                Aproveite o poder da tecnologia
              </h2>
              <p className="leading-relaxed">
                Simplificamos o processo para você! Aproveite o poder da
                tecnologia ao criar e monitorar suas demandas para a Secretaria
                de Obras. Com apenas alguns cliques, sua voz é ouvida, e o
                progresso acontece em tempo real. Participe ativamente na
                construção de uma cidade mais inteligente e eficiente. Seu
                desejo, nossa ação!
              </p>
            </div>

            <Image
              src={rightBg}
              alt="Features image"
              className="rotate-6 h-[618px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
