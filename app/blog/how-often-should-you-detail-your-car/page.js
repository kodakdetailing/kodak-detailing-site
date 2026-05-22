import { RenderPost, metadataForSlug } from "../../post-renderer";

const SLUG = "how-often-should-you-detail-your-car";

export function generateMetadata() {
  return metadataForSlug(SLUG);
}

export default function Page() {
  return <RenderPost slug={SLUG} />;
}
