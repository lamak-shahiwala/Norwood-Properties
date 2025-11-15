import { motion, useReducedMotion, Variants } from "framer-motion";

const lines: string[] = ["Discover Premium", "Residences in Landmark", "Homes"];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const lineVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function HeroTitleMotion() {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className="lg:row-span-6 flex items-center">
        <div
          className="
            font-helvetica
            leading-[1.75]
            tracking-[-0.05em]
            text-4xl sm:text-5xl md:text-6xl lg:text-[5.2rem]
            "
          aria-hidden={false}
        >
          {lines.map((l, i) => (
            <div key={i} style={{ display: "block" }}>
              {i === 1 ? <span className="whitespace-nowrap">{l}</span> : l}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="lg:row-span-6 flex items-center">
      <motion.div
        className="
          font-helvetica
          leading-[1.75]
          tracking-[-0.05em]
          text-4xl sm:text-5xl md:text-6xl lg:text-[5.2rem]
        "
        initial="hidden"
        animate="show"
        variants={containerVariants}
        aria-hidden={false}
      >
        {lines.map((l, i) => (
          <motion.div
            key={i}
            variants={lineVariant}
            style={{ display: "block" }}
          >
            {i === 1 ? <span className="whitespace-nowrap">{l}</span> : l}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}