import { RenderPost, metadataForSlug } from "../../post-renderer";

const SLUG = "auto-detailing-prices-naperville";

export function generateMetadata() {
  return metadataForSlug(SLUG);
}

export default function Page() {
  return <RenderPost slug={SLUG} />;
}
