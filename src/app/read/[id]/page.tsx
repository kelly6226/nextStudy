export default function Read({ params }: { params: { id: string } }) {
  return (
    <div>
      <h2>page</h2>
      <p>parameters : {params.id}</p>
    </div>
  );
}
