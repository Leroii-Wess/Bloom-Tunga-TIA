import TheBloomBlog from "./TheBloomBlog";
import { useBlog } from "../context/BlogContext";
import { useEffect, useState } from "react";
import URL, { POSTS_URL } from "../db/url";
import Spinner from "./Spinner";

function Blogs() {
  const { blogs, setBlogs } = useBlog();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        setIsLoading(true);

        const res = await URL.get(POSTS_URL);

        setBlogs(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (!blogs.length) {
      getAllPosts();
    }
  });

  return (
    <div className=" pt-[100px] bg-green-50 py-28">
      <div className="flex items-center justify-center">
        <h2 className="text-4xl font-bold text-customSlateDark mt-8">
          The Bloom
        </h2>
      </div>

      <div className="p-12 flex items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mx-auto">
          {isLoading ? (
            <Spinner />
          ) : (
            blogs?.map((blog) => <TheBloomBlog blogs={blog} key={blog.id} />)
          )}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
