import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-rice pt-32 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 border-b border-rice/10 pb-20">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <div className="text-3xl font-serif font-bold tracking-widest flex items-center gap-3">
              <span className="text-vermillion">旬味</span>
              <span className="text-xs font-sans tracking-[0.3em] opacity-60">SYUNMI</span>
            </div>
            <p className="text-sm opacity-50 leading-relaxed font-sans mt-4">
              Providing a sanctuary of Zen and high-end Japanese gastronomy. We celebrate the transient beauty of the seasons with every dish.
            </p>
            <div className="flex gap-6 mt-4">
              <a href="#" className="opacity-50 hover:opacity-100 transition-opacity"><Instagram size={20} /></a>
              <a href="#" className="opacity-50 hover:opacity-100 transition-opacity"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-serif text-xl mb-8 text-wood">Contact Info</h4>
            <ul className="space-y-6 text-sm opacity-70">
              <li className="flex items-start gap-4">
                <MapPin size={18} className="text-wood flex-shrink-0" />
                <span>1-2-3 Ginza, Chuo City, Tokyo 104-0061, Japan</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={18} className="text-wood flex-shrink-0" />
                <span>+81 3-1234-5678</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={18} className="text-wood flex-shrink-0" />
                <span>reserve@syunmi-tokyo.jp</span>
              </li>
            </ul>
          </div>

          {/* Hours Column */}
          <div>
            <h4 className="font-serif text-xl mb-8 text-wood">Opening Hours</h4>
            <ul className="space-y-4 text-sm opacity-70 font-sans">
              <li className="flex justify-between border-b border-rice/5 pb-2">
                <span>Tuesday — Friday</span>
                <span>18:00 – 22:30</span>
              </li>
              <li className="flex justify-between border-b border-rice/5 pb-2">
                <span>Saturday — Sunday</span>
                <span>17:30 – 23:00</span>
              </li>
              <li className="flex justify-between pb-2 text-vermillion/60">
                <span>Monday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>

          {/* Location Column / Mini Map Placeholder */}
          <div>
            <h4 className="font-serif text-xl mb-8 text-wood">Find Us</h4>
            <div className="aspect-square bg-white/5 rounded-sm overflow-hidden flex items-center justify-center border border-white/10 group">
              <a 
                href="https://www.google.com/maps" 
                target="_blank" 
                rel="noreferrer"
                className="text-[10px] uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100 group-hover:text-wood transition-all"
              >
                Open Google Maps
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.3em] opacity-30">
          <p>© 2024 Syunmi Japanese Restaurant. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-wood transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-wood transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Decorative large text */}
      <h2 className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[15vw] font-serif font-black opacity-[0.02] pointer-events-none whitespace-nowrap">
        旬味 · SYUNMI
      </h2>
    </footer>
  );
}
