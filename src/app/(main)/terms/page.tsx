import { SITE } from "@/lib/constants";
import { TermsClient } from "./TermsClient";

export const metadata = {
  title: "Terms of Service",
  description: `Terms of service, usage guidelines, and operating agreements for ${SITE.name} earthworks and machinery services.`,
};

export default function TermsOfService() {
  return <TermsClient />;
}
