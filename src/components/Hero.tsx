import { motion } from "motion/react";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-charcoal">
      {/* Background with slight zoom animation */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1579027989536-b7b1f875659b?q=80&w=2670&auto=format&fit=crop"
          alt="Chef preparing sushi"
          className="h-full w-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-charcoal/80" />
      </motion.div>

      {/* Decorative vertical text */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <p className="vertical-rl font-serif text-wood/30 text-sm tracking-[1.5em] h-64 flex items-center justify-center border-l border-wood/20 pl-4">
          ARTISANRY · TRADITION · SEASONALITY
        </p>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="mb-8"
        >
          <span className="text-wood font-sans tracking-[0.4em] text-xs uppercase block mb-4">
            Welcome to Syunmi Japanese Restaurant
          </span>
          <h1 className="text-6xl md:text-9xl font-serif text-rice leading-tight tracking-tight">
            匠心 <span className="text-stroke-wood">·</span> 旬味
          </h1>
          <p className="mt-6 text-rice/70 text-lg md:text-xl font-serif italic tracking-wide max-w-2xl mx-auto">
            "Savor the fleeting beauty of the seasons, captured in a single moment of artisanry."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex flex-col md:flex-row gap-6 mt-4"
        >
          <a
            href="#reservation"
            className="px-12 py-4 bg-wood text-charcoal font-bold tracking-widest hover:bg-rice transition-colors duration-500 shadow-xl"
          >
            RESERVE NOW
          </a>
          <a
            href="#menu"
            className="px-12 py-4 border border-rice text-rice font-bold tracking-widest hover:bg-rice hover:text-charcoal transition-all duration-500"
          >
            VIEW MENU
          </a>
        </motion.div>
      </div>

      {/* Hero Footer Decoration */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-[1px] h-20 bg-gradient-to-b from-wood to-transparent"
        />
        <span className="text-[10px] text-wood font-medium tracking-[0.5em] uppercase">Scroll</span>
      </div>
    </section>
  );
}
