import { pageMetadata } from "@/lib/seo";
import View from "@/views/services/paid-ads";

export const metadata = pageMetadata({
  title: "HVAC Google Ads Texas | More Calls, Lower Cost-Per-Lead | HVAC Digitals",
  description: "Stop wasting ad spend. Our HVAC-specific Google Ads and Local Services Ads campaigns deliver qualified calls for Texas contractors at a lower cost per lead.",
  path: "/services/paid-ads",
});

export default function Page() {
  return <View />;
}
