import { PROJECTS } from "../../../config/projects";
import ClientPage from "./ClientPage";

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function Page({ params }) {
  const { slug } = await params;
  return <ClientPage slug={slug} />;
}
