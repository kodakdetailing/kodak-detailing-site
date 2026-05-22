import { RenderPost, metadataForSlug } from "../../post-renderer";

const SLUG = "what-is-paint-correction";

export function generateMetadata() {
  return metadataForSlug(SLUG);
}

export default function Page() {
  return <RenderPost slug={SLUG} />;
}
