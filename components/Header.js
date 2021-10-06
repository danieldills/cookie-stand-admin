import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between p-3 mb-12 bg-green-500 text-black-100">
      <h1 className="text-3xl">
        <Link href="/">
          <a>Cookie Stand Admin</a>
        </Link>
      </h1>
      <Link href="/overview">
        <a>Overview</a>
      </Link>
    </header>
  );
}

export default Header;
