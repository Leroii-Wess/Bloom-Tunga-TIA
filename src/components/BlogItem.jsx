import { Link } from "react-router-dom";
import { formatDateTime } from "../helpers/helperFunctions";

/* eslint-disable react/prop-types */
function BlogItem({ blog }) {
  const { title, created_at: createdAt, content, id } = blog;
  return (
    <div
      key={blog.id}
      className="bg-customSlate rounded-md p-7 flex flex-col gap-7"
    >
      <div className="flex items-center">
        <img src={`https://picsum.photos/300/200?${id}`} className="h-full " />
      </div>
      <div className="flex flex-col gap-5">
        <h3 className="text-gray-100 text-3xl font-semibold">{title}</h3>
        <p className="text-gray-100 text-2xl font-light">{content}</p>
        <p className="text-gray-400 text-xl">{formatDateTime(createdAt)}</p>
      </div>

      <div className="mt-auto">
        <Link className="bg-lightGreen text-customSlateDark px-4 py-2 rounded-full transition-all duration-300 hover:bg-lightGreenDark">
          Read more
        </Link>
      </div>
    </div>
  );
}

export default BlogItem;
