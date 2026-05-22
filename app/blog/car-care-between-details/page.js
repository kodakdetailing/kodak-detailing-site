import { RenderPost, metadataForSlug } from "../../post-renderer";

const SLUG = "car-care-between-details";

export function generateMetadata() {
  return metadataForSlug(SLUG);
}

export default function Page() {
  return <RenderPost slug={SLUG} />;
}
