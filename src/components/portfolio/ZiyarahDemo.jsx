import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MapPin, Clock, Utensils, Camera, ChevronRight, Loader2 } from 'lucide-react';

const DESTINATIONS = {
  batroun: {
    name: 'Batroun',
    days: [
      {
        day: 1,
        title: 'Old Town & Phoenician Wall',
        time: '09:00 → 18:00',
        activities: [
          { icon: Camera, text: 'Phoenician Wall and old souks' },
          { icon: MapPin, text: 'St. Stephan Cathedral and coastal walk' },
          { icon: Utensils, text: 'Lunch at a seaside fish restaurant' },
          { icon: Camera, text: 'Boutique stops and sunset by the port' },
        ],
      },
      {
        day: 2,
        title: 'Coastline & Nightlife',
        time: '10:00 → 23:00',
        activities: [
          { icon: MapPin, text: 'Batroun beaches and sea caves' },
          { icon: Utensils, text: 'Sunset dinner by the water' },
          { icon: Camera, text: 'Evening walk through the old quarter' },
        ],
      },
    ],
  },
  beirut: {
    name: 'Beirut',
    days: [
      {
        day: 1,
        title: 'Downtown & Gemmayzeh',
        time: '09:00 → 22:00',
        activities: [
          { icon: Camera, text: 'Martyrs’ Square and city landmarks' },
          { icon: MapPin, text: 'Sursock Museum and nearby streets' },
          { icon: Utensils, text: 'Lunch in Mar Mikhael' },
          { icon: Camera, text: 'Gallery walk and evening city vibe' },
        ],
      },
      {
        day: 2,
        title: 'Hamra & Corniche',
        time: '08:30 → 21:00',
        activities: [
          { icon: MapPin, text: 'Morning walk on the Corniche' },
          { icon: Utensils, text: 'Classic breakfast in Hamra' },
          { icon: Camera, text: 'AUB area and Bliss Street' },
          { icon: MapPin, text: 'Sunset near Raouché' },
        ],
      },
    ],
  },
  byblos: {
    name: 'Byblos',
    days: [
      {
        day: 1,
        title: 'Ancient Port & Castle',
        time: '09:00 → 19:00',
        activities: [
          { icon: Camera, text: 'Byblos Castle and Phoenician ruins' },
          { icon: MapPin, text: 'Old souk and harbor walk' },
          { icon: Utensils, text: 'Seafood lunch by the port' },
          { icon: Camera, text: 'Golden hour through the old streets' },
        ],
      },
      {
        day: 2,
        title: 'Hills & Scenic Route',
        time: '07:30 → 18:00',
        activities: [
          { icon: MapPin, text: 'Scenic mountain-side stops' },
          { icon: Camera, text: 'Valley viewpoints and heritage sites' },
          { icon: Utensils, text: 'Traditional Lebanese lunch' },
        ],
      },
    ],
  },
};

const SUGGESTIONS = ['Batroun', 'Beirut', 'Byblos'];

export default function ZiyarahDemo() {
  const [input, setInput] = useState('');
  const [phase, setPhase] = useState('idle');
  const [result, setResult] = useState(null);
  const [visibleDays, setVisibleDays] = useState(0);
  const [placeholder, setPlaceholder] = useState('');

  useEffect(() => {
    const words = ['Batroun...', 'Beirut...', 'Byblos...'];
    let wi = 0;
    let ci = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const word = words[wi];

      if (!deleting) {
        setPlaceholder(word.slice(0, ci + 1));
        ci += 1;
        if (ci === word.length) {
          deleting = true;
          timer = setTimeout(tick, 1400);
          return;
        }
      } else {
        setPlaceholder(word.slice(0, ci - 1));
        ci -= 1;
        if (ci === 0) {
          deleting = false;
          wi = (wi + 1) % words.length;
        }
      }

      timer = setTimeout(tick, deleting ? 45 : 85);
    };

    tick();
    return () => clearTimeout(timer);
  }, []);

  const generate = () => {
    if (phase === 'loading') return;

    const key = input.trim().toLowerCase();
    const match = Object.keys(DESTINATIONS).find(
      (k) => k.includes(key) || key.includes(k)
    );
    const data = DESTINATIONS[match] || DESTINATIONS.batroun;

    setPhase('loading');
    setResult(null);
    setVisibleDays(0);

    setTimeout(() => {
      setResult(data);
      setPhase('result');

      data.days.forEach((_, i) => {
        setTimeout(() => {
          setVisibleDays(i + 1);
        }, i * 450 + 250);
      });
    }, 1800);
  };

  const reset = () => {
    setPhase('idle');
    setResult(null);
    setVisibleDays(0);
    setInput('');
  };

  return (
    <div className="glass-strong rounded-lg overflow-hidden border border-white/8 shadow-[0_0_50px_rgba(0,0,0,0.25)]">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5 bg-black/40">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-logic-green/70" />
          </div>
          <span className="font-mono text-[10px] text-core-white/40 ml-2">
            ziyarah.app / demo
          </span>
        </div>

        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm border border-neural-teal/30 bg-neural-teal/8">
          <div className="w-1.5 h-1.5 rounded-full bg-neural-teal animate-pulse" />
          <span className="font-mono text-[9px] uppercase tracking-widest text-neural-teal">
            Live Simulation · No Login
          </span>
        </div>
      </div>

      <div className="px-5 pt-4 pb-3 border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-sm bg-gradient-to-br from-neural-teal to-logic-green flex items-center justify-center">
            <MapPin className="w-3 h-3 text-obsidian" />
          </div>
          <span className="font-display font-bold text-sm text-core-white">
            Ziyarah
          </span>
        </div>

        <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-wider text-core-white/40">
          <span>Home</span>
          <span>My Trips</span>
          <span>About</span>
        </div>
      </div>

      <div className="p-5 min-h-[420px] flex flex-col">
        <div className="mb-5">
          <p className="font-mono text-[9px] uppercase tracking-widest text-core-white/45 mb-2">
            AI-generated multi-day itineraries in seconds using real location data
          </p>

          <div className="flex gap-2">
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-neural-teal/60" />
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && generate()}
                placeholder={placeholder}
                className="w-full bg-black/40 border border-white/12 text-core-white placeholder-core-white/30 font-body text-sm pl-9 pr-4 py-2.5 rounded-sm focus:outline-none focus:border-neural-teal/50 transition-all"
              />
            </div>

            <button
              onClick={phase === 'result' ? reset : generate}
              disabled={phase === 'loading'}
              className="flex items-center gap-2 px-4 py-2.5 bg-neural-teal text-obsidian font-mono text-[10px] uppercase tracking-widest font-semibold rounded-sm hover:opacity-90 disabled:opacity-60 transition-all flex-shrink-0"
            >
              {phase === 'loading' ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <Sparkles className="w-3.5 h-3.5" />
              )}
              {phase === 'result' ? 'New Trip' : 'Generate'}
            </button>
          </div>

          <div className="flex gap-2 mt-2">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => setInput(s)}
                className="font-mono text-[9px] uppercase tracking-wider px-2 py-1 border border-white/10 text-core-white/50 rounded-sm hover:border-neural-teal/40 hover:text-neural-teal transition-all"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {phase === 'loading' && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col gap-3"
            >
              <div className="flex items-center gap-2 mb-1">
                <Loader2 className="w-3.5 h-3.5 text-neural-teal animate-spin" />
                <span className="font-mono text-[10px] uppercase tracking-wider text-neural-teal">
                  Gemini AI // Generating itinerary...
                </span>
              </div>

              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="h-14 rounded-sm overflow-hidden bg-white/4 relative">
                  <motion.div
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{
                      duration: 1.15,
                      repeat: Infinity,
                      delay: item * 0.12,
                      ease: 'easeInOut',
                    }}
                    className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-neural-teal/10 to-transparent"
                  />
                </div>
              ))}
            </motion.div>
          )}

          {phase === 'result' && result && (
            <motion.div
              key="result"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col gap-2.5"
            >
              <div className="flex items-center justify-between mb-1">
                <div>
                  <div className="font-display font-bold text-lg text-core-white">
                    {result.name}
                  </div>
                  <div className="font-mono text-[9px] uppercase tracking-wider text-logic-green">
                    {result.days.length}-Day Itinerary · AI Generated
                  </div>
                </div>

                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-neural-teal to-logic-green flex items-center justify-center">
                  <Sparkles className="w-3 h-3 text-obsidian" />
                </div>
              </div>

              {result.days.map((day, di) => (
                <AnimatePresence key={di}>
                  {visibleDays > di && (
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45 }}
                      className="glass rounded-sm overflow-hidden border border-white/6"
                    >
                      <div className="flex items-center gap-3 px-4 py-2 border-b border-white/5 bg-black/20">
                        <div className="font-mono text-[9px] uppercase tracking-wider text-neural-teal">
                          Day {day.day}
                        </div>
                        <div className="font-medium text-sm text-core-white">
                          {day.title}
                        </div>
                        <div className="ml-auto flex items-center gap-1 text-core-white/40">
                          <Clock className="w-3 h-3" />
                          <span className="font-mono text-[9px]">{day.time}</span>
                        </div>
                      </div>

                      <div className="px-4 py-2.5 grid grid-cols-1 gap-1.5">
                        {day.activities.map((act, ai) => {
                          const Icon = act.icon;
                          return (
                            <div key={ai} className="flex items-center gap-2">
                              <Icon className="w-3 h-3 text-neural-teal/60 flex-shrink-0" />
                              <span className="text-core-white/70 text-xs">{act.text}</span>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              ))}

              {visibleDays >= result.days.length && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-1 flex items-center gap-2 font-mono text-[9px] uppercase tracking-wider text-core-white/35"
                >
                  <ChevronRight className="w-3 h-3" />
                  Full itinerary with richer trip flows available in the live product
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {phase === 'idle' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-1 flex items-center justify-center"
          >
            <div className="text-center">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-5 h-5 text-neural-teal/40" />
              </div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-core-white/30">
                Enter a destination to generate a sample itinerary
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}