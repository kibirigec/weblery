"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ServiceHeroImage({ src, alt }) {
  return (
    <motion.div 
        initial={{ opacity: 0, scale: 0.98, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="w-full aspect-[16/9] md:aspect-[21/9] relative rounded-lg overflow-hidden mb-24 md:mb-32 bg-gray-100"
    >
        <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 90vw"
        />
        {/* Subtle Overlay for depth if needed, strictly optional. Keeping it clean for now. */}
    </motion.div>
  );
}
