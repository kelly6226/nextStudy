"use client";

import { useRouter } from "next/navigation";

export default function Create() {
  const router = useRouter();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const title = (form.elements.namedItem("title") as HTMLInputElement).value;
    const description = (
      form.elements.namedItem("description") as HTMLTextAreaElement
    ).value;

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    };

    fetch("http://localhost:9999/topics", options)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        const createdTopicId = result.id;
        router.push(`/read/${createdTopicId}`);
        router.refresh(); // 새로고침과 같음 (서버에 데이터 재요청)
      });
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <p>
        <input type="text" name="title" placeholder="title" />
      </p>
      <p>
        <textarea name="description" placeholder="description" />
      </p>
      <p>
        <input type="submit" value="create" />
      </p>
    </form>
  );
}
