/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const BlogContext = createContext();

function BlogProvider({ children }) {
  // BlogPosts
  const [blogs, setBlogs] = useState([]);
  const [currentBlog, setCurrentBlog] = useState({});

  // () => {
  //   const storedBlogs = localStorage.getItem("blogs");
  //   if (!storedBlogs) return [];
  //   return JSON.parse(storedBlogs);
  // }

  // useEffect(() => {

  // }, [blogs])

  // Creating Blog State:
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  return (
    <BlogContext.Provider
      value={{
        blogs,
        setBlogs,
        formData,
        setFormData,
        currentBlog,
        setCurrentBlog,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}

function useBlog() {
  const context = useContext(BlogContext);

  return context;
}
export { useBlog };
export default BlogProvider;
