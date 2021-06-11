export default function User({ name, role, link }) {
  return (
    <li className="flex items-center mt-6">
      <img
        src="/avatar.svg"
        alt="avatar"
        className="w-10 h-10 object-cover rounded-full mx-4"
      />
      <p>
        <a href={link} className="text-gray-700 font-bold mx-1 hover:underline">
          {name}
        </a>
        <span className="text-gray-700 text-sm font-light ">{role}</span>
      </p>
    </li>
  );
}
