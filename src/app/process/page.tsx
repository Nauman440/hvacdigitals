import { pageMetadata } from "@/lib/seo";
import View from "@/views/process";

export const metadata = pageMetadata({
  title: "Our HVAC Marketing Process | How We Grow Your Business | HVAC Digitals",
  description: "A transparent look at how HVAC Digitals grows Texas HVAC companies — from free audit to full growth operation in 30 days. No black boxes.",
  path: "/process",
});

export default function Page() {
  return <View />;
}
