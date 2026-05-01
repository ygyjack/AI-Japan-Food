import { motion } from "motion/react";

export default function Story() {
  return (
    <section id="story" className="py-32 bg-rice relative overflow-hidden washi-pattern">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm relative z-10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=2525&auto=format&fit=crop"
                alt="Japanese interior"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Zen stone decoration */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-charcoal z-0 flex items-center justify-center">
              <span className="text-wood font-serif text-8xl opacity-10 select-none">禅</span>
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-wood z-0" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-wood" />
              <span className="text-wood font-medium tracking-[0.4em] uppercase text-xs">Our Spirit · 匠心</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-serif text-charcoal leading-tight">
              The Art of <br />
              <span className="text-wood italic">Imperfect</span> Beauty
            </h2>

            <div className="space-y-6 text-charcoal/70 leading-relaxed font-sans text-lg">
              <p>
                At Syunmi, we embrace the philosophy of <strong>Wabi-sabi</strong>: an appreciation for the beauty that is imperfect, impermanent, and incomplete. Like the changing seasons of Japan, our ingredients are fleeting and precious.
              </p>
              <p>
                Every dish is a testament to our artisan spirit, or <strong>Shokunin Kishitsu</strong>. We source directly from the Tsukiji Market and local Japanese farms to ensure that every bite tells a story of the land and the ocean.
              </p>
              <p className="border-l-4 border-wood pl-6 italic font-serif text-charcoal py-2">
                "We do not just serve food; we offer a sanctuary where time slows down, and the senses awaken."
              </p>
            </div>

            <div className="pt-6">
              <button className="text-charcoal font-serif tracking-[0.2em] border-b border-charcoal/30 pb-2 hover:border-wood hover:text-wood transition-all duration-300">
                DISCOVER OUR STORY
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute right-0 bottom-1/4 opacity-5 pointer-events-none hidden xl:block">
        <h2 className="text-[20rem] font-serif font-black leading-none text-charcoal select-none">SYUNMI</h2>
      </div>
    </section>
  );
}
