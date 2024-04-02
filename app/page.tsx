"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import axios from 'axios'

export default function Home() {
  const ref = useRef<boolean>(false);
  const [name, setName] = useState<string>("litie");

  useEffect(() => {
    if (!ref.current) {
      ref.current = true;
      console.log("mounted");

      axios.post('/api/getData', {
        id: 1
      }).then(res => {
        console.log(res.data, '===')
      }).catch(error => {
        console.log(error, 'error')
      })
    }
  }, []);

  useEffect(() => {
    console.log(name);
    return () => {
      console.log("===");
    };
  }, [name]);

  const onChangeName = () => {
    setName("new litie");
  };

  return (
    <main className="flex min-h-screen flex-col">
      <code className="font-mono font-bold">welcome to next!</code>
      <div>{name}</div>
      <button onClick={onChangeName}>点击改变名字</button>
      <Link href="/about">关于</Link>
    </main>
  );
}
