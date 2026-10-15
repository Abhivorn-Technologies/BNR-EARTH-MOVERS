import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Gallery",
  "Photos and videos of BNR Earth Movers machinery and project sites.",
  "/gallery",
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
