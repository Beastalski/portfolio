export default function Card({ title, description }) {
  return (
    <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}