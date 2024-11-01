import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Export Static HTML With Build in Next js</h1>
      <Link href="/products">Go To Products Page</Link>
      <br /><br />
      <Link href="/seller">Go To Seller Page</Link>

    </div>
  );
}
