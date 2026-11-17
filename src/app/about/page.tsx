import { pageMetadata } from "@/lib/seo";
import View from "@/views/about";

export const metadata = pageMetadata({
  title: "About HVAC Digitals | Built by HVAC Pros, For HVAC Pros",
  description: "Meet Muhammad Nauman and the Dallas team behind HVAC Digitals. Since 2021 we've done one thing: lead generation for HVAC contractors in Texas, one company per city.",
  path: "/about",
});

export default function Page() {
  return <View />;
}
