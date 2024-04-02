"use client";

import { useRouter } from "next/navigation";

export default function Mine() {
  const router = useRouter();
  const styleCss = { cursor: "pointer" };

  function handleClick() {
    router.push("/");
  }

  return (
    <main>
      <h1>Hello, Mine Page!</h1>
      <div onClick={handleClick} style={styleCss}>
        回到首页
      </div>
    </main>
  );
}
