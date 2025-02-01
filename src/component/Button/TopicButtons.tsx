"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function TopicButtons() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  const onDeleteClick = () => {
    const options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/topics/${id}`, options)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log("result", result);
        router.push("/");
        router.refresh();
      });
  };

  return (
    <ul>
      <li>
        <Link href="/create">Create</Link>
      </li>
      {id && (
        <>
          <li>
            <Link href={`/update/${id}`}>Update</Link>
          </li>
          <li>
            <input type="button" value="Delete" onClick={onDeleteClick} />
          </li>
        </>
      )}
    </ul>
  );
}
