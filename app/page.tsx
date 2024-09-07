import { BlogPosts } from "app/components/posts";

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
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
