import { pageMetadata } from "@/lib/seo";
import View from "@/views/services/local-seo";

export const metadata = pageMetadata({
  title: "HVAC Local SEO Texas | Dominate Google Map Pack | HVAC Digitals",
  description: "Get your HVAC company into Google's Map Pack top 3. We specialize in local SEO for Texas HVAC contractors in Houston, Dallas, San Antonio, Austin & Fort Worth.",
  path: "/services/local-seo",
});

export default function Page() {
  return <View />;
}
