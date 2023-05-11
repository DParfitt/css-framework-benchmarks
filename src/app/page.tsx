import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <Link href="/app-dir/tailwind">Tailwind App Dir</Link>
      <Link href="/app-dir/vanilla-extract">Vanilla Extract App Dir</Link>
      <Link href="/page-dir/theme-ui">Theme UI Pages dir</Link>
      <Link href="/page-dir/tailwind">Tailwind Pages dir</Link>
      <Link href="/page-dir/vanilla-extract">Vanilla Extract Pages dir</Link>
    </main>
  );
}
