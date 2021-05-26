import Link from "next/link";

export default function Post({
  id,
  title,
  subtitle,
  body,
  author,
  createdAt,
  updatedAt,
}) {
  return (
    <div className="mt-6">
      <div className="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <span className="font-light text-gray-600">{Date(createdAt)}</span>
          <a
            href="#"
            className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500"
          >
            Laravel
          </a>
        </div>
        <div className="mt-2">
          <Link href={`/posts/?postID=${id}`} as={`/posts/${id}`}>
            <p className="text-2xl text-gray-700 font-bold hover:underline hover:cursor-pointer">
              {title}
            </p>
          </Link>
          <br />
          <a
            href="#"
            className="text-lg text-gray-700 font-bold hover:underline my-4"
          >
            {subtitle}
          </a>
          <p className="mt-2 text-gray-600">{body}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <Link href={`/posts/?postID=${id}`} as={`/posts/${id}`}>
            <a href="#" className="text-blue-500 hover:underline">
              Read more
            </a>
          </Link>
          <div>
            <a href="#" className="flex items-center">
              <img
                src="/avatar.svg"
                alt="avatar"
                className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
              />
              <h1 className="text-gray-700 font-bold hover:underline">
                {author}
              </h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
