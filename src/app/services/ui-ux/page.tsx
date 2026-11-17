import { pageMetadata } from "@/lib/seo";
import ServicePage from "@/views/service-page";
import { SERVICES } from "@/data/services";

export const metadata = pageMetadata({
  title: "HVAC UI/UX Design Texas | Convert Visitors to Calls | HVAC Digitals",
  description: "Conversion-focused UI/UX design for HVAC contractor websites. Turn more Texas homeowners into booked appointments and phone calls.",
  path: "/services/ui-ux",
});

export default function Page() {
  return <ServicePage service={SERVICES["ui-ux"]} />;
}
