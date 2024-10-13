"use client";
import { customTab, aiHelper, heyComputer } from "@/projectDescriptions";
import ProjectPage from "@/components/projectPage/projectPage";
export default function Page() {
  return (
    <ProjectPage
      title="Projects"
      projectPreviews={[customTab, aiHelper, heyComputer]}
    />
  );
}
