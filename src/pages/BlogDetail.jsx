import { useEffect, useState } from "react";

import { Link, useNavigate, useParams } from "react-router-dom"; // Import useParams to grab the URL params
import URL from "../db/url";
import { formatDateTime } from "../helpers/helperFunctions";
import NavBar from "../components/NavBar";
import toast from "react-hot-toast";
import { useBlog } from "../context/BlogContext";
import Spinner from "../components/Spinner";

function BlogDetail() {
  const { id } = useParams(); // Get the 'id' from the URL params
  const { blogs, setBlogs, currentBlog, setCurrentBlog } = useBlog();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchBlog() {
      try {
        setIsLoading(true);
        const res = await URL.get(`/api/v1/post/${id}`);

        setCurrentBlog(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchBlog();
  }, [id, setCurrentBlog]);

  const deleteBlog = async (id) => {
    try {
      const confirm = window.confirm(
        "Are you sure you want to delete this Post?"
      );

      if (confirm) {
        await URL.delete(`/api/v1/post/${id}`);
        const newBlogs = blogs.filter((b) => b.id !== parseInt(id, 10));
        setBlogs(newBlogs);

        toast.success("Bloom Post Deleted Successfully");
        navigate("/blogs");
      }
    } catch (error) {
      console.log(error);
      toast.error("Post could not be deleted!");
    }
  };

  if (!currentBlog) {
    return <div>Blog not found!</div>;
  }

  return (
    <div>
      <NavBar />
      <div className="grid grid-cols-[2.5fr_0.5fr]  justify-center  w-full ">
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="blog-detail py-20 px-12 mt-20">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h1 className="text-[30px] font-bold mb-4">
                {currentBlog.title}
              </h1>
              <p className="text-gray-500 text-xl mb-4">
                {formatDateTime(currentBlog.created_at)}
              </p>
              <img
                src={`https://picsum.photos/500/300?${id}`}
                alt={currentBlog.title}
                className="w-full h-96 object-cover mb-6"
              />
              <div className="content text-lg text-gray-700">
                <p className="text-4xl font-bold my-7">{currentBlog.content}</p>

                <div className="text-3xl">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque a lobortis arcu. Vivamus cursus massa et ligula
                    maximus finibus. In lorem dui, pulvinar vel molestie a,
                    ornare a odio. In quis sapien ut arcu efficitur semper
                    auctor quis dui. Sed lacinia facilisis ligula at feugiat.
                    Phasellus scelerisque ante sapien, at porta ipsum
                    sollicitudin eu. Aenean orci ipsum, hendrerit vel lacinia
                    ac, consectetur ac elit. Sed at mi nec orci maximus sagittis
                    non et mauris. Donec sollicitudin suscipit ex eget molestie.
                    Nullam interdum lorem nec libero consectetur, a mattis lacus
                    scelerisque. Proin sollicitudin, tortor ut feugiat dictum,
                    diam nunc lacinia massa, in convallis nibh leo sit amet
                    diam. Cras semper, augue id fringilla commodo, urna leo
                    dapibus lacus, auctor mollis est ligula id leo.
                  </p>
                  <br />
                  <p>
                    Praesent id augue ipsum. Donec posuere nisi non faucibus
                    sollicitudin. Nulla tempus quam rutrum nulla egestas
                    pretium. Pellentesque pellentesque felis sodales, iaculis
                    erat ac, rutrum nunc. Duis eleifend efficitur vestibulum.
                    Aliquam eget tincidunt ligula. Cras a quam sit amet mi
                    accumsan fermentum a id arcu. Nullam ac dignissim tellus.
                    Aliquam et est a est pulvinar iaculis. Donec vitae ipsum
                    tempus, pellentesque nunc ac, auctor tellus. Curabitur
                    varius ac nisi sit amet varius. Nunc mollis odio quis mauris
                    pretium rutrum. Vivamus sit amet congue sem, a suscipit
                    ligula. Cras pulvinar congue mauris, sit amet commodo
                    libero. Aenean facilisis ex eget sagittis pellentesque. Nam
                    in erat vel erat ultrices malesuada eu eu magna. Sed
                    vulputate maximus dui, at hendrerit orci porttitor et.
                    Praesent pretium blandit vestibulum. Mauris ullamcorper
                    ultrices blandit. Proin porttitor magna orci, at finibus
                    turpis aliquam eu.
                  </p>
                  <br />
                  <p>
                    Etiam sed placerat nibh. Integer ut orci vulputate,
                    sollicitudin libero nec, facilisis sem. Aliquam ac diam
                    tristique, mattis enim non, pellentesque risus. Nulla
                    faucibus eget sapien sit amet condimentum. Sed semper nisl a
                    purus pretium, a sollicitudin felis pulvinar. Morbi vitae
                    scelerisque enim, in malesuada lacus. In facilisis diam ac
                    mi interdum, feugiat ultricies est mollis. In eu volutpat
                    ex. Vestibulum efficitur elit vitae varius blandit. Nulla
                    facilisis tellus a sodales cursus. Aliquam tempor sodales
                    massa, quis eleifend turpis egestas sit amet. Quisque nec
                    est porttitor, hendrerit lacus ut, ultricies leo. <br />{" "}
                    Nulla semper lacinia sodales. Quisque nec purus vitae risus
                    convallis interdum ut et eros. Aenean commodo lobortis eros
                    a congue. Sed tincidunt sed nunc nec scelerisque. Fusce
                    iaculis mauris quis sem pharetra feugiat. Morbi sit amet
                    elementum est. Duis molestie pretium augue ultrices
                    facilisis. Vivamus ipsum ex, scelerisque eget sem sit amet,
                    fermentum tincidunt augue. Vivamus non dolor magna. Vivamus
                    pulvinar viverra sodales. Ut at facilisis diam, ut efficitur
                    orci.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white p-6  h-60 rounded-lg shadow-md mt-[40%] mr-8">
          <h3 className="text-xl font-bold mb-6">Manage Post</h3>
          <Link
            to={`/blogs/edit/${id}`}
            className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4"
          >
            Edit Blog
          </Link>
          <Link
            onClick={() => deleteBlog(id)}
            className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 "
          >
            Delete Blog
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;

{
  /* :to="`/jobs/edit/${state.job.id}`" */
}
