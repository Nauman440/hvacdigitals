import { pageMetadata } from "@/lib/seo";
import View from "@/views/services/social-media";

export const metadata = pageMetadata({
  title: "HVAC Social Media Marketing Texas | Build Your Brand | HVAC Digitals",
  description: "Full-service social media management for Texas HVAC contractors. Facebook, Instagram, Nextdoor, and Google Business Profile — real content, real results.",
  path: "/services/social-media",
});

export default function Page() {
  return <View />;
}
