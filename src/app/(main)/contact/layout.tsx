import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Contact",
  "Request a free quote from BNR Earth Movers. Call, WhatsApp or email us about your excavation, rock cutting or blasting project.",
  "/contact",
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
