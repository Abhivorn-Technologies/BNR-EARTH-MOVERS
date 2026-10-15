import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "About Us",
  "Learn about BNR Earth Movers — specialists in rock rope cutting, controlled blasting and excavation across Andhra Pradesh and Telangana.",
  "/about-us",
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
