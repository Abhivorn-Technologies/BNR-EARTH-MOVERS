"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
};

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  id,
}: AnimatedSectionProps) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}

type StaggerContainerProps = {
  children: ReactNode;
  className?: string;
};

export function StaggerContainer({ children, className = "" }: StaggerContainerProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export const staggerItem = {
  hidden: {},
  visible: {},
};
