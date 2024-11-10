"use client";
//@ts-ignore

import {
  Typography,
  Card,
  CardBody,
  Radio,
  Input,
  Textarea,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon, TicketIcon } from "@heroicons/react/24/solid";

export function ContactForm() {
  return (
    <section className="px-8 py-16">
      <div className="container mx-auto mb-20 text-center">
        {/* <Typography variant="h1" color="blue-gray" className="mb-4">
          Entre em contato!
        </Typography> */}
        {/* <Typography
          variant="lead"
          className="mx-auto w-full lg:w-5/12 !text-gray-500"
        >
          Ready to get started? Feel free to reach out through the contact form,
          and let&apos;s embark on a journey of innovation and success.
        </Typography> */}
      </div>
      <div>
        <div
          id="contact-footer"
          // shadow={true}
          className="container mx-auto border border-gray/50"
        >
          {/* @ts-ignore */}
          <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
            <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
              {/* @ts-ignore */}
              <Typography variant="h4" color="white" className="mb-2">
                Informações de contato
              </Typography>
              {/* @ts-ignore */}
              <Typography
                variant="lead"
                className="mx-auto mb-8 text-base !text-gray-500"
              >
                Entre em contato com nossa equipe retornará em breve.
              </Typography>
              <div className="flex gap-5">
                <PhoneIcon className="h-6 w-6 text-white" />
                {/* @ts-ignore */}
                <Typography variant="h6" color="white" className="mb-2">
                  <a href="https://wa.me/5585987450837?text=Quero%20saber%20mais!">
                    (85) 9 8745.0837 - Whatsapp
                  </a>
                </Typography>
              </div>
              <div className="flex my-2 gap-5">
                <EnvelopeIcon className="h-6 w-6 text-white" />
                {/* @ts-ignore */}
                <Typography variant="h6" color="white" className="mb-2">
                  gestaoproprius@gmail.com
                </Typography>
              </div>
              {/* <div className="flex mb-10 gap-5">
                <TicketIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  Open Support Ticket
                </Typography>
              </div> */}
              <div className="flex items-center gap-5">
                {/* @ts-ignore */}
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-facebook text-lg" />
                </IconButton>
                {/* @ts-ignore */}
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-instagram text-lg" />
                </IconButton>
                {/* @ts-ignore */}
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-github text-lg" />
                </IconButton>
              </div>
            </div>
            {/* <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
              <form action="#">
                <div className="mb-8 grid gap-4 lg:grid-cols-2">
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Nome"
                    name="nome"
                    placeholder="ex. Lucas"
                    containerProps={{
                      className: "!min-w-full mb-3 md:mb-0",
                    }}
                  />
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Sobrenome"
                    name="sobrenome"
                    placeholder="ex. Silva"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                  />
                </div>
                <Input
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Email"
                  name="email"
                  placeholder="ex. lucas@mail.com"
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                />
                <Textarea
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Sua mensagem"
                  name="first-name"
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                />
                <div className="w-full flex justify-end">
                  <Button className="w-full md:w-fit" color="gray" size="md">
                    Enviar
                  </Button>
                </div>
              </form>
            </div> */}
          </CardBody>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
