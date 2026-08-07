"use client";

import { motion, type Variants } from "framer-motion";
import type { MenuCategory } from "../data/menu";

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function MenuCategories({ menu }: { menu: MenuCategory[] }) {
  return (
    <motion.div
      className="grid grid-cols-1 gap-x-12 gap-y-14 md:grid-cols-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
      {menu.map((category) => (
        <motion.div key={category.title} variants={item}>
          <h3 className="border-b-2 border-gold pb-2 font-display text-2xl font-bold text-gold">
            {category.title}
          </h3>
          {category.note && (
            <p className="mt-2 text-xs italic text-cream/60">{category.note}</p>
          )}
          <ul className="mt-4 flex flex-col gap-3">
            {category.items.map((menuItem) => (
              <li
                key={menuItem.name}
                className="flex items-baseline gap-2 text-cream/90"
              >
                <span className="text-sm sm:text-base">{menuItem.name}</span>
                <span className="flex-1 border-b border-dotted border-cream/25" />
                <span className="font-semibold text-gold">{menuItem.price}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  );
}
