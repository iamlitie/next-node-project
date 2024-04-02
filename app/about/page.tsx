import Link from "next/link";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col">
      <h1>Hello, About Page!</h1>

      <Link href="/about/mine">我的</Link>
    </main>
  );
}
