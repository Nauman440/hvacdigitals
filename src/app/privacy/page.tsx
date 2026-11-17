import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { CONSENT_TEXT } from "@/components/site/ConsentNote";
import { LegalPage } from "@/components/site/LegalPage";

export const metadata = pageMetadata({
  title: "Privacy Policy | HVAC Digitals",
  description: "How HVAC Digitals collects, uses and protects the information you share through our website, forms, calls and texts.",
  path: "/privacy",
});

export default function Page() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="November 17, 2026"
      intro="HVAC Digitals (“we”, “us”) is a marketing agency based in Dallas, Texas. This policy explains what information we collect when you use hvacdigitals.com, fill out a form, call or text us, and how we use and protect it. We do not sell your personal information."
      sections={[
        {
          h: "Information we collect",
          body: [
            "Information you give us when you fill out a form or contact us:",
            ["Your name, company name, email address and phone number", "Your city or service area, the services you're interested in, and your current marketing budget", "Anything else you choose to include in a message, call or text"],
            "Information collected automatically when you visit the site:",
            ["Device and browser type, pages visited, time on page, the site that referred you, and approximate location based on IP address", "Cookies and similar technologies used by analytics and advertising tools (see section 4)"],
          ],
        },
        {
          h: "How we use your information",
          body: [
            [
              "To respond to your request, check availability in your area and prepare your free audit",
              "To call, text or email you about your request and our services",
              "To run, measure and improve our website and our advertising",
              "To keep records of consent and communications, and to meet legal obligations",
            ],
          ],
        },
        {
          h: "Calls and text messages",
          body: [
            `When you submit a form with your phone number, you agree to the following: “${CONSENT_TEXT}”`,
            "You can opt out of text messages at any time by replying STOP, or ask us not to call by telling us on a call or emailing us. Opting out does not affect any services you've purchased. We do not share your mobile number or text-messaging consent with third parties for their own marketing purposes.",
          ],
        },
        {
          h: "Cookies, analytics and advertising",
          body: [
            "We use Google Analytics to understand how visitors use the site. We may use advertising tools such as Google Ads conversion tracking and the Meta (Facebook) Pixel to measure our ads and show relevant ads to people who visited the site.",
            "These tools may set cookies or collect information about your visit. You can block or delete cookies in your browser settings, opt out of Google Analytics with Google's browser add-on, and manage ad personalization in your Google and Meta account settings.",
          ],
        },
        {
          h: "How we share information",
          body: [
            "We share information only with service providers that help us run our business, under agreements that limit how they use it. These include website hosting, email, our CRM, call and text platforms, and analytics. We may also disclose information if required by law or to protect our rights, or as part of a merger or sale of the business.",
            "We do not sell your personal information, and we do not share it with other HVAC companies.",
          ],
        },
        {
          h: "How long we keep it",
          body: ["We keep your information for as long as needed to respond to you and provide our services, and as required for legal, tax and record-keeping purposes. Then we delete or anonymize it."],
        },
        {
          h: "Your choices and rights",
          body: [
            "Depending on where you live, including under the Texas Data Privacy and Security Act, you may have the right to access, correct or delete your personal information, get a copy of it, and opt out of targeted advertising. To make a request, email us at the address below. We'll respond within 45 days and won't treat you differently for using these rights.",
          ],
        },
        {
          h: "Security",
          body: ["We use reasonable technical and organizational measures to protect your information. No method of transmission or storage is completely secure, so we can't promise absolute security."],
        },
        {
          h: "Children",
          body: ["This site is meant for business owners and is not directed to children under 13. We don't knowingly collect their information."],
        },
        {
          h: "Changes to this policy",
          body: ["We may update this policy from time to time. The “last updated” date at the top shows when it last changed."],
        },
        {
          h: "Contact us",
          body: [`HVAC Digitals, ${SITE.city}. Email ${SITE.email} or call ${SITE.phone}.`],
        },
      ]}
    />
  );
}
