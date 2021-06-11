export default function Comment({ body }) {
  return (
    <div className="m-3 max-w-4xl p-3 rounded-lg shadow-md">
      <p className="text-gray-200">{body}</p>
    </div>
  );
}
