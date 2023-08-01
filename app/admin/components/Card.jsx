import Link from "next/link";
import Image from "next/image";

const Card = ({ href, image, title, text }) => {
  return (
    <Link
      href={href}
      className="shadow transition gap-2 flex flex-col bg-white rounded-lg border border-toolight-border-gray-light/50 hover:border-toolight-border-gray-light"
    >
      <Image
        src={image}
        alt={title}
        width="300"
        height="300"
        className="object-contain w-full aspect-square rounded-t-lg"
      />
      <div className="p-6 w-full flex flex-col h-full justify-between gap-2">
        <p>{title}</p>
        <p className="text-toolight-secondary/75 text-sm">{text}</p>
      </div>
    </Link>
  );
};

export default Card;
