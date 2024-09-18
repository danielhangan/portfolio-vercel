import { BlogPosts } from "app/components/posts";
import { WorkHistory } from "./components/work-history";
import { ProjectShowcase } from "./components/projects";

export default function Page() {
  return (
    <section>
      <p className="">
        Self-taught full'stack dev with business education, building modern web
        infrastructure, connecting 3rd party services and designing minimal
        interfaces. I build and bootstrap startups with{" "}
        <a href="https://twitter.com/azizmorsly" className="underline">
          @azizmorsly
        </a>
      </p>
      <div className="flex flex-col my-8 gap-y-8">
        <BlogPosts />
        <WorkHistory />
        <ProjectShowcase />
      </div>
    </section>
  );
}
