import { motion } from 'motion/react';

export default function Footer() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center px-8 text-center relative pointer-events-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        <p className="text-xl md:text-2xl leading-relaxed mb-8">
          “以上就是我的观察报告。”<br />
          “看着冷冰冰的代码变成有温度的模块，感觉还不赖。<br />现在，我把她交给你了。”
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-12 w-full max-w-sm relative group cursor-pointer"
      >
        <button className="w-full relative px-12 py-6 bg-ink text-cold-white font-mono uppercase tracking-widest text-sm overflow-hidden transition-colors duration-500">
          <span className="relative z-10 transition-colors duration-500 group-hover:text-cold-white">[ 启动真人面试程序 ]</span>
          
          {/* Sweep effect on hover */}
          <div className="absolute inset-0 bg-klein translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
        </button>
      </motion.div>
    </section>
  );
}
