import { pageMetadata } from "@/lib/seo";
import ServicePage from "@/views/service-page";
import { SERVICES } from "@/data/services";

export const metadata = pageMetadata({
  title: "HVAC Website Design Texas | Fast, AEO-Ready Sites | HVAC Digitals",
  description: "Custom HVAC websites built to rank, convert, and load fast. Designed exclusively for Texas HVAC contractors. Full source code ownership, delivered in 30 days.",
  path: "/services/website-development",
});

export default function Page() {
  return <ServicePage service={SERVICES["website-development"]} />;
}
