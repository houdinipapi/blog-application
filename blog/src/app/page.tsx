// import { allBlogs } from "../../.contentlayer/generated";

import HomeCoverSect from "@/components/Home/HomeCoverSect";
import FeaturedPosts from "@/components/Home/FeaturedPosts";
import { allBlogs } from "contentlayer/generated";
import RecentPosts from "@/components/Home/RecentPosts";

export default function Home() {

  console.log(allBlogs);

  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSect blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs}/>
      <RecentPosts blogs={allBlogs}/>
    </main>
  );
}
