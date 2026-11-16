import { pageMetadata } from "@/lib/seo";
import View from "@/views/services/website-development";

export const metadata = pageMetadata({
  title: "HVAC Website Design Texas | Fast, AEO-Ready Sites | HVAC Digitals",
  description: "Custom HVAC websites built to rank, convert, and load fast. Designed exclusively for Texas HVAC contractors. Full source code ownership, delivered in 30 days.",
  path: "/services/website-development",
});

export default function Page() {
  return <View />;
}
