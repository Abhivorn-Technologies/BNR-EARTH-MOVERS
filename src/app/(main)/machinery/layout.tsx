import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Machinery",
  "Our fleet: excavators, dumpers, dozers, backhoes, wagon drills, hydraulic rotary rigs, diamond rope cutting units, blasting support and site equipment.",
  "/machinery",
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
