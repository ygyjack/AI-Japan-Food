import { motion } from "motion/react";
import { Menu as MenuIcon, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "首页", href: "#hero" },
  { name: "物语", href: "#story" },
  { name: "菜单", href: "#menu" },
  { name: "画廊", href: "#gallery" },
  { name: "预约", href: "#reservation" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-rice/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-serif font-bold tracking-widest text-charcoal flex items-center gap-3"
        >
          <span className="text-vermillion text-3xl">旬味</span>
          <span className="text-sm font-sans tracking-[0.3em] opacity-60 hidden md:block">SYUNMI</span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-charcoal hover:text-wood transition-colors text-sm font-medium tracking-widest"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-charcoal text-rice px-8 py-2 text-xs tracking-widest hover:bg-wood hover:text-charcoal transition-all duration-300 border border-charcoal"
          >
            立即预约
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-charcoal p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-rice border-b border-charcoal/10"
      >
        <div className="flex flex-col items-center py-10 gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-serif tracking-widest text-charcoal hover:text-wood"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="mt-4 bg-charcoal text-rice px-10 py-3 text-sm tracking-widest">
            立即预约
          </button>
        </div>
      </motion.div>
    </nav>
  );
}
