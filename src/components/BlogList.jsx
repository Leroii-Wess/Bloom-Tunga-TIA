import { Link } from "react-router-dom";
import BlogItem from "./BlogItem";
import { useEffect, useState } from "react";
import URL, { POSTS_URL } from "../db/url";
import { useBlog } from "../context/BlogContext";
import Spinner from "./Spinner";

function Blogs() {
  const { blogs, setBlogs } = useBlog();
  const [isLoading, setIsLoading] = useState(false);

  const recentBlogs = blogs?.slice(0, 3) || [];

  useEffect(() => {
    async function getRecentPosts() {
      try {
        setIsLoading(true);
        const res = await URL.get(POSTS_URL);
        console.log(res);
        setBlogs(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getRecentPosts();
  }, [setBlogs]);

  return (
    <div className="my-48 py-16 bg-[#142F32] w-11/12  lg:w-3/4 mx-auto">
      <div className="flex justify-between px-16 mb-10">
        <h2 className="text-lightGreen text-2xl lg:text-3xl">
          Recent Blog Posts
        </h2>

        <Link
          to="/blogs"
          className="text-lightGreen text-2xl lg:text-2xl hover:underline"
        >
          See all blogs &rarr;
        </Link>
      </div>

      <div className="grid lg:grid-cols-3  gap-10  mx-auto px-16">
        {isLoading ? (
          <Spinner />
        ) : (
          recentBlogs.map((blog) => <BlogItem blog={blog} key={blog.id} />)
        )}
      </div>
    </div>
  );
}

export default Blogs;
