"use client";

import { Topic } from "@/type/topic";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Update() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  const [topic, setTopic] = useState<Topic>({
    title: "",
    description: "",
    id: "",
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setTopic((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const title = (form.elements.namedItem("title") as HTMLInputElement).value;
    const description = (
      form.elements.namedItem("description") as HTMLTextAreaElement
    ).value;

    const options = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    };

    fetch(`http://localhost:9999/topics/${id}`, options)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        const createdTopicId = result.id;
        router.push(`/read/${createdTopicId}`);
        router.refresh();
      });
  };

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:9999/topics/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setTopic(response);
      });
  }, [id]);

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <p>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={topic.title}
          onChange={(e) => {
            onChange(e);
          }}
        />
      </p>
      <p>
        <textarea
          name="description"
          placeholder="description"
          value={topic.description}
          onChange={(e) => {
            onChange(e);
          }}
        />
      </p>
      <p>
        <input type="submit" value="change" />
      </p>
    </form>
  );
}
