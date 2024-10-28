import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Fetch Data With API in Client Component</h1>
      <Link href="/productlist">Go To Product List</Link>
    </div>
  );
}
