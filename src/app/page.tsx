import Image from "next/image";
import styles from "./page.module.css";
import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className={styles.main}>
      <h1>Password Keeper</h1>
      {session ? <h2>you are logged in</h2> : <h2>Please login</h2>}
    </main>
  );
}
