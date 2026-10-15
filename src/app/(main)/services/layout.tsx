import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Services",
  "Rope cutting, rock and soil excavation, site preparation, concrete breaking, demolition, rig blasting and tractor jack hammer services.",
  "/services",
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
