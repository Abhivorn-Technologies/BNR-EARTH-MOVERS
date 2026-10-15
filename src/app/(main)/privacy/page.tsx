import { SITE } from "@/lib/constants";
import { PrivacyClient } from "./PrivacyClient";

export const metadata = {
  title: "Privacy Policy",
  description: `Privacy policy and data handling practices for ${SITE.name}.`,
};

export default function PrivacyPolicy() {
  return <PrivacyClient />;
}
