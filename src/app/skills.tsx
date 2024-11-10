"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "CRM Integrado e Focado em Leads Imobiliários:",
    children:
      "Com um CRM intuitivo e feito para o setor imobiliário, você capta automaticamente leads de redes sociais e sites, visualiza todo o pipeline de vendas de forma prática e recebe notificações automáticas para que nenhum lead fique para trás. Chega de perder oportunidades por falta de organização!",
  },
  {
    icon: FingerPrintIcon,
    title: "Painel de Métricas e Insights de Desempenho",
    children:
      "Entenda o seu desempenho de forma clara e tome decisões estratégicas com um painel de métricas",
  },
  {
    icon: SwatchIcon,
    title: "Agendamento e Lembretes Automáticos",
    children:
      "Diga adeus aos esquecimentos! Agende visitas e follow-ups com facilidade e receba lembretes automáticos, sincronizados com seu Google Calendar. Você e seus clientes nunca mais perderão uma visita importante!",
  },
  {
    icon: HashtagIcon,
    title: "App Móvel para Gestão Diária",
    children:
      "Gerencie seus leads, imóveis e compromissos direto do celular. Ideal para quem está sempre em campo, o app te dá o controle total da sua agenda e das suas oportunidades de negócio, a qualquer momento, em qualquer lugar.",
  },
  // {
  //   icon: EyeIcon,
  //   title: "User-Centric Design",
  //   children:
  //     "My development goes hand-in-hand with an eye for design. I create user interfaces that are not only functional but also aesthetically pleasing, providing a seamless and enjoyable user journey.",
  // },
  // {
  //   icon: DocumentTextIcon,
  //   title: "Testing and Quality Assurance",
  //   children:
  //     "I rigorously test and debug applications to guarantee a bug-free and secure environment for users. Your peace of mind is as important to me as the functionality of your project.",
  // },
];

export function Skills() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          Funcionalidades
        </Typography>
        {/* <Typography variant="h1" color="blue-gray" className="mb-4">
          What I do
        </Typography> */}
        {/* <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          I&apos;m not just a developer; I&apos;m a digital dreamweaver.
          Crafting immersive online experiences is not just a job but my
          calling. Discover below how I can help you.
        </Typography> */}
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-2">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
