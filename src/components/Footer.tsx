import { motion } from 'motion/react';

export default function Footer() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center px-8 text-center relative pointer-events-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl w-full"
      >
        <p className="text-xl md:text-2xl leading-relaxed mb-10">
          “以上是我的观察报告。<br />
          如果你愿意，我希望下一轮不是我替她说话，<br />
          而是你直接听她怎么定义问题、推进落地。”
        </p>
      </motion.div>
      <div className="h-12 md:h-16" />
    </section>
  );
}
