export default async function Read({ params }: { params: { id: string } }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/topics/${params.id}`
  );
  const topic = await response.json();

  return (
    <div>
      <h2>{topic.title}</h2>
      <p>description : {topic.description}</p>
    </div>
  );
}
