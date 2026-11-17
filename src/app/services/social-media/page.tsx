import { pageMetadata } from "@/lib/seo";
import ServicePage from "@/views/service-page";
import { SERVICES } from "@/data/services";

export const metadata = pageMetadata({
  title: "HVAC Social Media Marketing Texas | Build Your Brand | HVAC Digitals",
  description: "Full-service social media management for Texas HVAC contractors. Facebook, Instagram, Nextdoor, and Google Business Profile — real content, real results.",
  path: "/services/social-media",
});

export default function Page() {
  return <ServicePage service={SERVICES["social-media"]} />;
}
