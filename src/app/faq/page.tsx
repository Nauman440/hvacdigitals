import { pageMetadata } from "@/lib/seo";
import View from "@/views/faq";

export const metadata = pageMetadata({
  title: "HVAC Marketing FAQ | Common Questions Answered | HVAC Digitals",
  description: "Answers to the most common questions about HVAC digital marketing, SEO, Google Ads, Meta Ads, website design, and working with HVAC Digitals in Texas.",
  path: "/faq",
});

export default function Page() {
  return <View />;
}
