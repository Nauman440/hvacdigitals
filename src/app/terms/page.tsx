import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { LegalPage } from "@/components/site/LegalPage";

export const metadata = pageMetadata({
  title: "Terms of Use | HVAC Digitals",
  description: "The terms that apply when you use the HVAC Digitals website.",
  path: "/terms",
});

export default function Page() {
  return (
    <LegalPage
      title="Terms of Use"
      updated="November 17, 2026"
      intro="These terms apply to your use of hvacdigitals.com. By using the site, you agree to them. Our marketing services are provided under a separate written agreement, which controls if it conflicts with these terms."
      sections={[
        {
          h: "Using the site",
          body: ["You may use this site to learn about our services and contact us. Please don't misuse it: no attempts to disrupt it, access it without permission, scrape it at scale, or submit false information or someone else's contact details."],
        },
        {
          h: "Information on the site",
          body: [
            "Content on this site is for general information about our services. Results described on the site come from individual clients. Your results will depend on your market, competition, budget, service area, how quickly leads are followed up, and other factors outside our control.",
            "Calculators and estimates, including the ROI calculator, are illustrations based on the assumptions shown. They are not quotes or forecasts for your business. Your audit gives you numbers for your market.",
          ],
        },
        {
          h: "Free audits",
          body: ["Our free audit is offered without obligation. Its recommendations are general guidance based on the information available to us at the time. Whether to act on them is up to you."],
        },
        {
          h: "Communications",
          body: ["If you submit a form, you agree to be contacted as described on the form and in our Privacy Policy. You can opt out of texts by replying STOP."],
        },
        {
          h: "Intellectual property",
          body: ["The site's content, design, text, graphics and logo belong to HVAC Digitals or our licensors. You may not copy or reuse them without our written permission. Google, Meta, Facebook, Instagram and other product names belong to their respective owners and are used only to describe the platforms we work with."],
        },
        {
          h: "Third-party links",
          body: ["The site may link to other websites. We're not responsible for their content or practices."],
        },
        {
          h: "Disclaimer and limitation of liability",
          body: [
            "The site is provided “as is” and “as available.” To the fullest extent allowed by law, we disclaim all warranties, express or implied, about the site and its content.",
            "To the fullest extent allowed by law, HVAC Digitals is not liable for any indirect, incidental, special or consequential damages, or lost profits, arising from your use of the site.",
          ],
        },
        {
          h: "Governing law",
          body: ["These terms are governed by the laws of the State of Texas. Any dispute about them will be handled in the state or federal courts located in Dallas County, Texas."],
        },
        {
          h: "Changes",
          body: ["We may update these terms. The “last updated” date shows when they last changed. Continuing to use the site means you accept the updated terms."],
        },
        {
          h: "Contact",
          body: [`Questions? Email ${SITE.email} or call ${SITE.phone}.`],
        },
      ]}
    />
  );
}
