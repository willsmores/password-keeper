import styles from "./page.module.css";
import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";

import LogoutButton from "./components/LogoutButton";
import Link from "next/link";
import SessionProvider from "./components/SessionProvider";
import NavMenu from "./components/NavMenu";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <h1>Password Keeper</h1>
      <SessionProvider session={session}>
        <NavMenu />
      </SessionProvider>
      {/* {session ? (
        <div>
          <h2>you are logged in</h2>
          <LogoutButton />
        </div>
      ) : (
        <div>
          <h2>Please login</h2>
          <button>
            <Link href="/auth">Login</Link>
          </button>
        </div>
      )} */}
    </main>
  );
}
