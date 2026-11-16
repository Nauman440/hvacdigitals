import { pageMetadata } from "@/lib/seo";
import View from "@/views/contact";

export const metadata = pageMetadata({
  title: "Contact HVAC Digitals | Get Your Free HVAC Marketing Audit",
  description: "Ready to grow your Texas HVAC business? Get a free written audit of your website, Google Business Profile, and ad accounts within 48 hours.",
  path: "/contact",
});

export default function Page() {
  return <View />;
}
