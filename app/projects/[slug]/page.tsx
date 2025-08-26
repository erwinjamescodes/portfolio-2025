import React from "react";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjectSlugs } from "../../lib/projects";
import ProjectClient from "../../components/Project";

interface ProjectPageProps {
  params: { slug: string };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectClient project={project} />;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}
