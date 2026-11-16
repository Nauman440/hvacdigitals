import { pageMetadata } from "@/lib/seo";
import View from "@/views/services/ui-ux";

export const metadata = pageMetadata({
  title: "HVAC UI/UX Design Texas | Convert Visitors to Calls | HVAC Digitals",
  description: "Conversion-focused UI/UX design for HVAC contractor websites. Turn more Texas homeowners into booked appointments and phone calls.",
  path: "/services/ui-ux",
});

export default function Page() {
  return <View />;
}
