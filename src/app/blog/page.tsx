import { pageMetadata } from "@/lib/seo";
import View from "@/views/blog";

export const metadata = pageMetadata({
  title: "HVAC Marketing Blog | Tips, SEO & Growth for Texas Contractors | HVAC Digitals",
  description: "Expert HVAC marketing insights — local SEO, Google Ads, Meta Ads, AEO, and website strategy for Texas HVAC contractors. Updated regularly.",
  path: "/blog",
});

export default function Page() {
  return <View />;
}
