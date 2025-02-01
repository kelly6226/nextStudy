export default async function Read({ params }: { params: { id: string } }) {
  const response = await fetch(`http://localhost:9999/topics/${params.id}`);
  const topic = await response.json();

  return (
    <div>
      <h2>{topic.title}</h2>
      <p>description : {topic.description}</p>
    </div>
  );
}
