import LatestBlogCard from "@/components/ui/LatestBlogCard";
import { TBlog } from "@/types/blogType";

const HomePage = async () => {
  const res = await fetch("http://localhost:3004/blogs");
  const data = await res.json() ;

  return (
    <>
      <div className="">
        <h1 className="text-center text-4xl my-5">Latest Blogs here </h1>
        <div className="grid grid-cols-3 mx-auto gap-4">
          {
            data.map((items : TBlog) => <LatestBlogCard {...items} />)
          }
        </div>
      </div>
    </>
  );
};

export default HomePage;
