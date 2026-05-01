import { motion } from "motion/react";

const images = [
  { url: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2670&auto=format&fit=crop", title: "Fresh Sashimi" },
  { url: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?q=80&w=2670&auto=format&fit=crop", title: "Omakase Experience" },
  { url: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?q=80&w=2671&auto=format&fit=crop", title: "Traditional Zen Room" },
  { url: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?q=80&w=2564&auto=format&fit=crop", title: "Fine Art Plates" },
  { url: "https://images.unsplash.com/photo-1534482421-0d45aa4c9cdb?q=80&w=2670&auto=format&fit=crop", title: "Seasonal Selection" },
  { url: "https://images.unsplash.com/photo-1621252194389-1384e5659837?q=80&w=2670&auto=format&fit=crop", title: "Sake Pairing" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 bg-rice">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
          <div className="max-w-2xl">
            <span className="text-wood tracking-[0.5em] text-xs uppercase block mb-4">Visual Serenity · 视觉平和</span>
            <h2 className="text-5xl md:text-6xl font-serif text-charcoal">Visual Journey</h2>
          </div>
          <p className="text-charcoal/50 text-sm max-w-sm font-sans tracking-wide">
            Every plate is a canvas, every moment a memory. Experience the visual rhythm of our craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group relative overflow-hidden aspect-[4/5] bg-charcoal"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="text-center translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-serif text-wood mb-2">{img.title}</h3>
                  <div className="w-10 h-px bg-white mx-auto" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
