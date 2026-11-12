import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    "/software/",
    "/hardware/",
    "/projects/",
    "/experience/",
    "/about/",
    "/cv/",
    "/contact/",
    "/skills/",
    "/asic-journey/",
    ...projects.map((p) => "/projects/" + p.slug + "/"),
  ].map((path) => ({
    url: "https://saad1507.github.io" + path,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
