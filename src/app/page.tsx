"use client";

import Image from "next/image";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <h1>Welcome</h1>
      <Column>
        <p>Hello. I am making this web by using Next.js</p>
        <Image src="/next.svg" alt="next" width="100" height="50" />
      </Column>
    </>
  );
}

const Column = styled.div`
  display: flex;
  flex-direction: row;
  grid-gap: 30px;
`;
