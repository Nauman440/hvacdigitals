import { pageMetadata } from "@/lib/seo";
import View from "@/views/services/automation";

export const metadata = pageMetadata({
  title: "HVAC Marketing Automation Texas | AI-Powered Lead Follow-Up | HVAC Digitals",
  description: "Automate your HVAC lead follow-up, booking, and review requests with AI-powered tools. Never lose a lead again. Built for Texas HVAC contractors.",
  path: "/services/automation",
});

export default function Page() {
  return <View />;
}
