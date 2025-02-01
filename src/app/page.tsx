import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>Welcome</h1>
      <div>
        <p>Hello. I am making this web by using Next.js</p>
        <Image src="/next.svg" alt="next" width="100" height="50" />
      </div>
    </>
  );
}

// const Column = styled.div``;
