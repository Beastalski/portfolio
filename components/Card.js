import { motion } from 'framer-motion';
export default function Card({ title, description, image }) {
  return (
    <motion.div className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden" whileHover={{ scale: 1.05 }}>
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p>{description}</p>
      </div>
    </motion.div>
  );
}