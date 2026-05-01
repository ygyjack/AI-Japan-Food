import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const categories = ["Omakase", "Sashimi", "Sushi", "Tempura", "Sake"];

const menuItems = {
  Omakase: [
    { name: "Chef's Selection · 8 Courses", price: "¥24,000", desc: "A curated seasonal journey through the finest ingredients available today." },
    { name: "Premium Zen Experience", price: "¥36,000", desc: "12 courses featuring rare delicacies, including A5 Waygu and O-toro." },
  ],
  Sashimi: [
    { name: "Chef's Platter (5 Kinds)", price: "¥8,500", desc: "The morning's catch, sliced with precision and served with fresh wasabi." },
    { name: "Bluefin Tuna Flight", price: "¥12,000", desc: "Akami, Chutoro, and Otoro from premium Oma Tuna." },
    { name: "Hokkaido Scallops", price: "¥4,200", desc: "Seared lightly, served with yuzu salt and citrus micro-greens." },
  ],
  Sushi: [
    { name: "Nigiri Moriawase", price: "¥9,800", desc: "10 pieces of seasonal nigiri served with traditional red vinegar rice." },
    { name: "Signature Uni Temaki", price: "¥3,500", desc: "Creamy sea urchin and crispy nori, a burst of ocean flavor." },
  ],
  Tempura: [
    { name: "Prawn & Seasonal Vegetables", price: "¥5,500", desc: "Light and airy batter, fried to golden perfection." },
    { name: "King Crab Leg", price: "¥7,200", desc: "Whole king crab leg tempura with matcha salt." },
  ],
  Sake: [
    { name: "Dassai 23", price: "¥4,500 / Glass", desc: "Polished to 23%, notes of lilies and honeyed pears." },
    { name: "Kubota Manju", price: "¥3,800 / Glass", desc: "A clean, dry finish with deep floral elegance." },
  ],
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Omakase");

  return (
    <section id="menu" className="py-32 bg-charcoal text-rice relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-wood tracking-[0.5em] text-xs uppercase"
          >
            Taste the Craft · 舌尖上的艺
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-serif mt-4 mb-10"
          >
            Culinary Offerings
          </motion.h2>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 border-b border-rice/10 pb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 text-sm tracking-widest transition-colors font-medium ${
                  activeCategory === cat ? "text-wood" : "text-rice/40 hover:text-rice"
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-[-1px] left-0 right-0 h-px bg-wood"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid gap-12"
            >
              {(menuItems as any)[activeCategory].map((item: any, idx: number) => (
                <div key={item.name} className="flex flex-col md:flex-row justify-between items-start gap-4 border-b border-rice/5 pb-8 group">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-wood text-sm opacity-50 font-serif">0{idx + 1}</span>
                      <h3 className="text-2xl font-serif group-hover:text-wood transition-colors">{item.name}</h3>
                    </div>
                    <p className="text-rice/50 font-sans text-sm max-w-lg">{item.desc}</p>
                  </div>
                  <span className="text-xl font-serif text-wood whitespace-nowrap">{item.price}</span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-20 text-center">
          <p className="text-xs text-rice/30 italic tracking-widest">
            * All menu items are subject to seasonal availability. Prices exclude service charge.
          </p>
        </div>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none overflow-hidden">
        <div className="container mx-auto h-full grid grid-cols-4 px-6 border-x border-rice/20">
          <div className="border-r border-rice/20"></div>
          <div className="border-r border-rice/20"></div>
          <div className="border-r border-rice/20"></div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
