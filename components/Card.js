import Link from "next/link";

const Card = ({ imgSrc, name, title, subtitle, body }) => {
  return (
    <div className="max-w-xl rounded-lg overflow-hidden shadow-md bg-gray-800 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      <img
        src={imgSrc}
        alt={"Image here :)"}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "./404.png";
        }}
      />
      <div className="sm:px-6 sm:py-4 px-3 pyf-2">
        <div className="text-gray-200 sm:text-xl pt-1">
          <span className="font-bold text-lg">{title}</span>
          <br />
          <span className="text-sm sm:text-base">{subtitle}</span>
          <br />
          <span className="text-sm sm:text-sm">{name}</span>
        </div>
        <div className="text-gray-100 text-md mt-4">{body}</div>
      </div>
    </div>
  );
};

export default Card;
