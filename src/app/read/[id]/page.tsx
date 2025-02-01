import { Topic } from "@/type/topic";

type Props = {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Read({ params }: Props) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/topics/${params.id}`,
    { cache: "no-store" }
  );
  const topic: Topic = await response.json();

  return (
    <div>
      <h2>{topic.title}</h2>
      <p>description : {topic.description}</p>
    </div>
  );
}
