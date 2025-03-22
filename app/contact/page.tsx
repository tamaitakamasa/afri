import ContactForm from "@/components/form/contact-form";
import React from "react";

export default function Page() {
  return (
    <div className="py-40">
      <div className="container mx-auto px-4">
        <h1 className="font-en text-4xl font-bold uppercase tracking-widest text-center">
          Contact
        </h1>
      </div>
      <div className="container-xl mt-20">
        <p className="mb-20">
          食の研修や本プロジェクトにご興味のある方、自治体・企業・団体様、ぜひご連絡ください。
        </p>
        <ContactForm />
      </div>
    </div>
  );
}
