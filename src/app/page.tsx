"use client";

import { Row } from "@/styles/layouts/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>Welcome</h1>
      <Row gridGap="30px">
        <p>Hello. I am making this web by using Next.js</p>
        <Image src="/next.svg" alt="next" width="100" height="50" />
      </Row>
    </>
  );
}
