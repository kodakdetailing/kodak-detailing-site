import { RenderPost, metadataForSlug } from "../../post-renderer";

const SLUG = "mobile-vs-shop-detailing-naperville";

export function generateMetadata() {
  return metadataForSlug(SLUG);
}

export default function Page() {
  return <RenderPost slug={SLUG} />;
}
