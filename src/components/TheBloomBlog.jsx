import { Link } from "react-router-dom";
import { formatDateTime } from "../helpers/helperFunctions";

/* eslint-disable react/prop-types */
function TheBloomBlog({ blogs }) {
  const { title, created_at: createdAt, content, id } = blogs;

  return (
    <div className="bg-customSlate rounded-md p-6 w-[300px] flex flex-col gap-5 shadow-lg hover:shadow-xl transition-all hover:bg-customSlateDark">
      <img
        src={`https://picsum.photos/300/200?${id}`}
        alt={blogs.title}
        className="h-48 w-full object-cover rounded-md mb-5"
      />
      <div className="flex flex-col gap-3 mb-8">
        <h3 className="text-gray-100 text-3xl font-semibold">{title}</h3>
        <p className="text-gray-100 text-xl font-light">{content}</p>
        <p className="text-gray-400 text-xl">{formatDateTime(createdAt)}</p>
      </div>

      <div className="mt-auto mb-6">
        <Link
          to={`/blogs/${blogs.id}`}
          className="bg-lightGreen text-customSlateDark px-4 py-2  rounded-full transition-all duration-300 hover:bg-lightGreenDark"
        >
          Read more
        </Link>
      </div>
    </div>
  );
}

export default TheBloomBlog;
