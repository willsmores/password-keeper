// Importing styles, server-side authentication functions, and components
import styles from "./page.module.css";
import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";
import LogoutButton from "./components/LogoutButton";
import Link from "next/link";
import SessionProvider from "./components/SessionProvider";
import NavMenu from "./components/NavMenu";

// Default function representing the home page
export default async function Home() {
  // Retrieve the user's session on the server side
  const session = await getServerSession(authOptions);

  return (
    // Main content container with defined styless
    <main className={styles.main}>
      <h1>Password Keeper</h1>

      {/* SessionProvider: Provides the session information to its child components, ensuring they can access the authentication state. SessionProvider is required for NavMenu component. */}
      <SessionProvider session={session}>
        <NavMenu />
      </SessionProvider>

      {/* Conditional rendering based on session information: If the user is authenticated, display a welcome message and logout button. Otherwise, prompt the user to login.*/}
      {session && session.user ? (
        <div>
          <h2>Welcome {`${session.user.name}`}</h2>
          <LogoutButton />
        </div>
      ) : (
        <div>
          <h2>Please login</h2>
          <button>
            <Link href="/auth">Login</Link>
          </button>
        </div>
      )}
    </main>
  );
}
