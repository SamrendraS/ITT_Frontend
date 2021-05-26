export default function Comment({ body }) {
  return (
    <div className="my-6 mx-8 max-w-4xl px-10 py-6 bg-white rounded-lg shadow">
      <p className="mt-4 text-gray-600">{body}</p>
    </div>
  );
}
