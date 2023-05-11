import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/tailwind">Tailwind</Link>
      <Link href="/vanilla-extract">Vanilla Extract</Link>
      <Link href="/theme-ui">TUI</Link>
    </main>
  );
}
