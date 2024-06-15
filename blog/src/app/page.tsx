// import { allBlogs } from "../../.contentlayer/generated";

import HomeCoverSect from "@/components/Home/HomeCoverSect";
import { allBlogs } from "contentlayer/generated";

export default function Home() {

  console.log(allBlogs);

  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSect blogs={allBlogs} />
    </main>
  );
}
