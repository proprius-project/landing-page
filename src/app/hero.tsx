"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          {/* @ts-ignore */}
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            Revolucione sua rotina <br /> de corretor de imóveis!
          </Typography>
          {/* @ts-ignore */}
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            Conheça a plataforma que foi desenvolvida exclusivamente para
            facilitar seu dia a dia como corretor e te ajudar a vender mais
            imóveis.
          </Typography>
          <div className="grid">
            {/* <Typography
              variant="small"
              className="mb-2 text-gray-900 font-medium"
            >
              Tenho interesse
            </Typography> */}
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              {/* @ts-ignore */}
              {/* <Input color="gray" label="Digite seu e-mail" size="lg" /> */}
              {/* @ts-ignore */}
              <Button
                color="gray"
                className="w-full px-4 md:w-[12rem]"
                onClick={() => {
                  window.location.href = "#contact-footer";
                }}
              >
                Eu quero!
              </Button>
            </div>
          </div>
          {/* <Typography variant="small" className="font-normal !text-gray-500">
            Read my{" "}
            <a href="#" className="font-medium underline transition-colors">
              Terms and Conditions
            </a>
          </Typography> */}
        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src="/image/avatar-5.png"
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
