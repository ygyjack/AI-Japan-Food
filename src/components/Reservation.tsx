import { motion } from "motion/react";
import { useState, FormEvent } from "react";
import { Calendar, Users, Clock } from "lucide-react";

export default function Reservation() {
  const [formState, setFormState] = useState({
    name: "",
    date: "",
    guests: "2",
    time: "18:00",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Thank you for your reservation request. We will contact you shortly to confirm.");
  };

  return (
    <section id="reservation" className="py-32 bg-charcoal text-rice relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="grid grid-cols-10 h-full w-full">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="border-r border-rice" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-rice text-charcoal shadow-2xl flex flex-col md:flex-row">
          {/* Reservation Info Side */}
          <div className="md:w-2/5 p-12 bg-wood text-charcoal flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[0.6em] font-bold block mb-4">Book a Table · 预约席位</span>
              <h2 className="text-4xl font-serif mb-6 leading-tight">Secure Your <br />Experience</h2>
              <p className="text-sm opacity-80 leading-relaxed font-sans mb-8">
                Due to limited seating and the nature of our Omakase experience, we recommend booking at least 2 weeks in advance.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-charcoal/20 flex items-center justify-center">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest">Available Days</h4>
                    <p className="text-sm opacity-70">Tuesday — Sunday</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-charcoal/20 flex items-center justify-center">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest">Dinner Service</h4>
                    <p className="text-sm opacity-70">18:00 — 22:30</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-charcoal/10">
              <p className="text-xs italic">
                * Please inform us of any dietary restrictions or allergies in the notes.
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:w-3/5 p-12 washi-pattern">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold">Your Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-charcoal/20 py-2 focus:border-wood outline-none transition-colors"
                    placeholder="Grand Guest"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold">Number of Guests</label>
                  <div className="relative">
                    <Users className="absolute left-0 top-1/2 -translate-y-1/2 opacity-30" size={16} />
                    <select
                      className="w-full bg-transparent border-b border-charcoal/20 py-2 pl-8 focus:border-wood outline-none transition-colors appearance-none"
                      value={formState.guests}
                      onChange={(e) => setFormState({ ...formState, guests: e.target.value })}
                    >
                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <option key={n} value={n}>{n} {n === 1 ? "Person" : "People"}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold">Date</label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      className="w-full bg-transparent border-b border-charcoal/20 py-2 focus:border-wood outline-none transition-colors"
                      value={formState.date}
                      onChange={(e) => setFormState({ ...formState, date: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold">Preferred Time</label>
                  <select
                    className="w-full bg-transparent border-b border-charcoal/20 py-2 focus:border-wood outline-none transition-colors appearance-none"
                    value={formState.time}
                    onChange={(e) => setFormState({ ...formState, time: e.target.value })}
                  >
                    {["18:00", "18:30", "19:00", "19:30", "20:00", "20:30"].map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold">Special Requests</label>
                <textarea
                  className="w-full bg-transparent border border-charcoal/10 p-4 min-h-[120px] focus:border-wood outline-none transition-colors text-sm"
                  placeholder="Tell us about allergies or special occasions..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-charcoal text-white py-4 font-bold tracking-[0.4em] uppercase hover:bg-wood hover:text-charcoal transition-all duration-500"
              >
                Request Reservation
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
