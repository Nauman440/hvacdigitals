import { pageMetadata } from "@/lib/seo";
import View from "@/views/home";

export const metadata = pageMetadata({
  title: "HVAC Digitals | Texas's #1 HVAC Marketing Agency",
  description: "Grow your HVAC business in Texas with full-stack digital marketing — Google Ads, Meta Ads, local SEO, AEO, and websites built exclusively for HVAC contractors.",
  path: "/",
});

export default function Page() {
  return <View />;
}
