"use client";

// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Skills from "./skills";
import ContactForm from "./contact-form";
import { useEffect } from "react";
import { initFirebase } from "@/lib/firebase";

export default function Portfolio() {
  useEffect(() => {
    initFirebase();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <ContactForm />
      <Footer />
    </>
  );
}
