import ContactForm from "@/components/form/contact-form";
import { PageLayout } from "@/components/layout/page-layout";
import React from "react";

export default function Page() {
  return (
    <PageLayout title="Contact">
      <p className="mb-10 md:mb-20 text-sm md:text-base">
        食の研修や本プロジェクトにご興味のある方、自治体・企業・団体様、ぜひご連絡ください。
      </p>
      <ContactForm />
    </PageLayout>
  );
}
