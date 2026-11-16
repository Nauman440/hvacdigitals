import { pageMetadata } from "@/lib/seo";
import View from "@/views/services/seo";

export const metadata = pageMetadata({
  title: "HVAC SEO Services Texas | Rank #1 on Google | HVAC Digitals",
  description: "Dominate Google search for every HVAC keyword in your Texas market. Our SEO strategies are built exclusively for HVAC contractors across Houston, Dallas, San Antonio & beyond.",
  path: "/services/seo",
});

export default function Page() {
  return <View />;
}
