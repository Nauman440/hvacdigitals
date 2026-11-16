import { pageMetadata } from "@/lib/seo";
import View from "@/views/about";

export const metadata = pageMetadata({
  title: "About HVAC Digitals | Built by HVAC Pros, For HVAC Pros",
  description: "Meet Muhammad Nauman and the team behind Texas's #1 HVAC marketing agency. Founded in 2021, we work exclusively with HVAC contractors across Texas.",
  path: "/about",
});

export default function Page() {
  return <View />;
}
