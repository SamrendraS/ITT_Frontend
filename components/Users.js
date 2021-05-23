export default function User() {
  return (
    <li className="flex items-center mt-6">
      <img
        src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
        alt="avatar"
        className="w-10 h-10 object-cover rounded-full mx-4"
      />
      <p>
        <a href="#" className="text-gray-700 font-bold mx-1 hover:underline">
          Alex John
        </a>
        <span className="text-gray-700 text-sm font-light">
          Created 23 Posts
        </span>
      </p>
    </li>
  );
}
