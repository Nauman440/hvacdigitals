import { pageMetadata } from "@/lib/seo";
import ServicePage from "@/views/service-page";
import { SERVICES } from "@/data/services";

export const metadata = pageMetadata({
  title: "Facebook & Instagram Ads for HVAC Texas | Meta Lead Generation | HVAC Digitals",
  description: "Meta ads for Texas HVAC contractors: tune-up offers, maintenance plans and replacement campaigns on Facebook and Instagram, with instant lead follow-up. Free audit.",
  path: "/services/meta-ads",
});

export default function Page() {
  return <ServicePage service={SERVICES["meta-ads"]} />;
}
