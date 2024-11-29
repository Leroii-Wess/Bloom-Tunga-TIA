import toast from "react-hot-toast";
import URL from "../db/url";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useBlog } from "../context/BlogContext";

const edit = "/api/v1/post/";

function EditBlog() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { blogs, setBlogs } = useBlog();

  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    async function getEdit() {
      try {
        const res = await URL.get(`${edit}${id}`);
        console.log(res.data);

        setFormData({
          title: res.data.title || "",
          content: res.data.content || "",
        });
      } catch (error) {
        console.log(error);
      }
    }

    getEdit();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const post = await URL.put(`${edit}${id}`, formData);
      console.log(post.data);

      const editedPost = post.data;

      const postIndex = blogs.findIndex((b) => b.id === editedPost.id);
      console.log(postIndex);
      blogs.splice(4, 1, editedPost);
      setBlogs(blogs);

      toast.success("Bloom Edited Successfully");
      navigate(`/blogs/${post.data.id}`);
    } catch (error) {
      console.error("Error Editing Bloom", error);
      toast.error("Bloom couldn't be Edited");
    }
  };

  return (
    <div className="pt-[100px] bg-green-50 py-28 flex justify-center flex-col items-center">
      <div className="flex items-center justify-center">
        <h2 className="text-4xl font-bold text-customSlateDark mt-8">
          Edit Bloom
        </h2>
      </div>

      <div className="w-full max-w-xl md:max-w-4xl lg:max-w-6xl p-4 sm:p-8 md:p-12 flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-4 md:p-8 rounded-md shadow-md w-full space-y-6"
        >
          <div>
            <label
              htmlFor="title"
              className="block text-customSlateDark font-semibold mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter blog title"
              required
            />
          </div>

          <div>
            <label
              htmlFor="content"
              className="block text-customSlateDark font-semibold mb-2"
            >
              Content
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Write your blog content here"
              rows="6"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-customSlate  text-white font-semibold px-4 py-2 rounded-md shadow hover:bg-customSlateLight transition duration-300"
            >
              Edit Bloom
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditBlog;
