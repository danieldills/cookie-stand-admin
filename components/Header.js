import Link from "next/link";
import { useAuth } from "../contexts/auth";

function Header() {
  const { user, logout } = useAuth();

  return (
    <nav className="sticky w-full h-auto px-8 bg-green-500 sm:px-0">
      <div className="container flex justify-between py-5 mx-auto">
        <label className="text-3xl font-light text-green-800">
          <Link href="/">
            <a className="font-bold transition hover:text-green-600">
              CookieStand<span className="font-bold"> Admin</span>
            </a>
          </Link>
        </label>
        <ul className="flex items-center text-green-500">
          <li className="mr-6 font-semibold uppercase">
            <Link href="/overview">
              <a className="transition hover:text-green-950">Overview</a>
            </Link>
          </li>
          {user && (
            <li className="mr-6 font-semibold text-green-900 uppercase transition border border-green-500 rounded-md hover:text-green-200 hover:bg-green-600">
              <a className="block px-4 py-1" onClick={logout}>
                Logout
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Header;

// import Link from "next/link";

// function Header() {
//   return (
//     <header className="flex items-center justify-between p-3 mb-12 bg-green-500 text-black-100">
//       <h1 className="text-3xl">
//         <Link href="/">
//           <a>Cookie Stand Admin</a>
//         </Link>
//       </h1>
//       <Link href="/overview">
//         <a>Overview</a>
//       </Link>
//     </header>
//   );
// }

// export default Header;
