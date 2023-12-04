interface FeaturesProps {}

import {
  Brush,
  Clock,
  FolderDown,
  FolderPlus,
  ListTodo,
  PenLine,
} from "lucide-react";

import Image from "next/image";
import rightBg from "../assets/right-bg.png";

export function Features(props: FeaturesProps) {
  return (
    <section className="py-24">
      <div className="grid grid-cols-[1fr_1fr] max-w-7xl mx-auto justify-between gap-8">
        <div className="flex-1 flex items-center justify-center">
          <Image className="h-[600px]" src={rightBg} alt="" />
        </div>
        <div>
          <h4 className="text-sm text-slate-600">Como funciona?</h4>
          <h2 className="text-3xl font-semibold leading-relaxed mb-10">
            Passos para usar o nosso serviço
          </h2>

          <ul className="grid grid-cols-2 gap-8">
            <li className="flex flex-col items-start gap-3">
              <div className="bg-primary-50 p-2 rounded-md">
                <FolderDown className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-slate-700 font-bold text-lg">
                  Baixe e cadastre-se
                </h3>
                <p className="text-xs text-slate-800">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, qui! Nobis dolorum mollitia consequuntur velit.
                </p>
              </div>
            </li>

            <li className="flex flex-col items-start gap-3">
              <div className="bg-primary-50 p-2 rounded-md">
                <PenLine className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-slate-700 font-bold text-lg">
                  Crie sua demanda
                </h3>
                <p className="text-xs text-slate-800">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, qui! Nobis dolorum mollitia consequuntur velit.
                </p>
              </div>
            </li>

            <li className="flex flex-col items-start gap-3">
              <div className="bg-primary-50 p-2 rounded-md">
                <Clock className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-slate-700 font-bold text-lg">
                  Aguarde a aprovação
                </h3>
                <p className="text-xs text-slate-800">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, qui! Nobis dolorum mollitia consequuntur velit.
                </p>
              </div>
            </li>

            <li className="flex flex-col items-start gap-3">
              <div className="bg-primary-50 p-2 rounded-md">
                <ListTodo className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-slate-700 font-bold text-lg">
                  Acompanhe todo o progresso
                </h3>
                <p className="text-xs text-slate-800">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, qui! Nobis dolorum mollitia consequuntur velit.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* <div className="flex flex-col gap-24">
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
        </div> */}
      </div>
    </section>
  );
}
