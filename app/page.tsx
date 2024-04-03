"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { incrementAsync, incrementByAsync } from "@/store/features/counter/counterSlice";

export default function Home() {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter) || {};
  const ref = useRef<boolean>(false);

  useEffect(() => {
    if (!ref.current) {
      ref.current = true;
      // axios
      //   .post("/api/getData", {
      //     id: 1,
      //   })
      //   .then((res) => {
      //     console.log(res.data, "===");
      //   })
      //   .catch((error) => {
      //     console.log(error, "error");
      //   });
    }
  }, []);

  const onChangeCounter: () => void = () => {
    // setTimeout(() => {
    //   dispatch({
    //     type: "counter/increment",
    //   });
    // }, 2000)
    // dispatch(incrementAsync(10));
    dispatch(incrementByAsync(5))
  };

  return (
    <main className="flex min-h-screen flex-col">
      <code className="font-mono font-bold">welcome to next!</code>
      <div>当前counter的值为: {counter.value}</div>
      <Link href="#" onClick={onChangeCounter}>
        点击改变counter的值
      </Link>
      <Link href="/about">关于</Link>
    </main>
  );
}
