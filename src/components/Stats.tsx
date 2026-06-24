"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/constants";

function AnimatedCounter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative z-10 -mt-12 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-white/10 shadow-2xl shadow-border lg:grid-cols-4"
      >
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-[#141414] px-6 py-8 text-center"
          >
            <p
              className="text-3xl font-extrabold text-accent sm:text-4xl"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-sm font-medium text-muted">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
