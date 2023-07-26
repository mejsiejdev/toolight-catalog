import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col gap-2 text-center justify-center min-h-screen items-center px-8">
      <p className="text-7xl text-toolight-primary">404</p>
      <p className="text-5xl font-semibold">Nie znaleziono strony</p>
      <p className="text-toolight-secondary">
        Przepraszamy, ale nie udało nam się znaleźć strony której szukasz.
      </p>
      <Link
        href="/"
        className="bg-toolight-primary hover:bg-toolight-primary-hover-dark transition py-2 px-4 font-semibold cursor-pointer flex flex-col items-center mt-6 rounded"
      >
        Powrót do strony głównej
      </Link>
    </div>
  );
};

export default NotFound;
