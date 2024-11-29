import toast from "react-hot-toast";
import URL, { POST_REQ_URL } from "../db/url";
import { useBlog } from "../context/BlogContext";
import { useNavigate } from "react-router-dom";

function CreateBlog() {
  const { formData, setFormData, setBlogs, blogs } = useBlog();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const post = await URL.post(POST_REQ_URL, formData);
      console.log(post);

      setFormData({
        title: "",
        content: "",
      });
      const newBlogs = [...blogs, post.data];
      setBlogs(newBlogs);

      toast.success("Bloom created Successfully");
      navigate(`/blogs/${post.data.id}`);
    } catch (error) {
      console.error("Error creating bloom", error);
      toast.error("Bloom couldn't be posted");
    }
  };

  return (
    <div className="pt-[100px] bg-green-50 py-28 flex justify-center flex-col items-center">
      <div className="flex items-center justify-center">
        <h2 className="text-4xl font-bold text-customSlateDark mt-8">
          Post a Bloom
        </h2>
      </div>

      <div className="w-1/2 p-12 flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-md shadow-md w-full space-y-6"
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
              Post Bloom
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateBlog;
