import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="font-dream text-8xl">404</h1>
      <p className="font-mont text-2xl">Oops! Page not found!</p>
      <Link href={"/"} className="my-4">
        <button className="border border-[#d5d5d5] px-2 py-1 rounded-lg bg-[#d5d5d5] bg-opacity-40 hover:scale-105 duration-300 transition hover:bg-opacity-60">
          Home
        </button>
      </Link>
    </div>
  );
}
