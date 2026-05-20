import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import frontLaptop from '../assets/hero/laptop-front-cropped.png';

const textLines = [
  'Agent 正在输入...',
  '你好，面试官。我是 01 号智能体。',
  '作为她的 AI 协作者，我常常被她没完没了的追问所“折磨”。',
  '我负责把可能性摆上桌面，她负责判断哪一种值得进入现实，又该如何成为现实。',
  '今天，由我来替她做一场产品汇报。',
  '以下，是她和我一起完成的几个关键实验。',
];

export default function Hero() {
  const [isSettled, setIsSettled] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (!isSettled) return;
    if (lineIndex < textLines.length) {
      if (charIndex < textLines[lineIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + textLines[lineIndex][charIndex]);
          setCharIndex(charIndex + 1);
        }, 16);
        return () => clearTimeout(timeout);
      }
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + '\n');
        setLineIndex(lineIndex + 1);
        setCharIndex(0);
      }, 120);
      return () => clearTimeout(timeout);
    }
    setIsDone(true);
  }, [isSettled, lineIndex, charIndex]);

  const handleScroll = () => {
    document.getElementById('initial-scan')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-cold-white overflow-hidden flex items-start justify-center pt-[10px] pb-0">
      <motion.div
        className="relative w-[86vw] max-w-[1320px]"
        initial={{ opacity: 0, scale: 0.42 }}
        animate={{ opacity: 1, scale: 0.88 }}
        transition={{ duration: 2.8, ease: [0.22, 1, 0.36, 1] }}
        onAnimationComplete={() => setIsSettled(true)}
        style={{ transformOrigin: 'top center' }}
      >
        {/* Screen window overlay (from detected screen bbox on 1191x864 image) */}
        <div className="absolute left-[11.08%] top-[2.2%] w-[77.75%] h-[68.98%] overflow-hidden border border-black/10 bg-cold-white">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isSettled ? 1 : 0 }}
            transition={{ duration: 0.15, ease: 'linear' }}
            className="relative h-full"
          >
            <div className="flex items-center justify-between px-4 md:px-6 py-2.5 md:py-3.5 border-b border-black/8 font-mono text-[10px] md:text-[12px] tracking-[0.11em] uppercase text-ink/45">
              <span>Session: INIT_REPORT</span>
              <span className="flex items-center gap-2">
                System
                <motion.span
                  animate={{ opacity: [1, 0.35, 1] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
                  className="text-ink/70"
                >
                  ONLINE
                </motion.span>
              </span>
            </div>

            <div className="h-full px-4 md:px-7 pt-4 md:pt-6 pb-24 md:pb-28 font-mono text-[12px] md:text-[20px] leading-[1.68] tracking-[0.015em] text-ink/68 whitespace-pre-wrap overflow-hidden">
              {displayedText}
              {isSettled ? (
                <motion.span
                  animate={{ opacity: [0.85, 1, 0.85], scaleX: [0.8, 2.1, 0.8] }}
                  transition={{ repeat: Infinity, duration: 0.72, ease: 'easeInOut' }}
                  className="inline-block w-[2px] h-[1.08em] bg-ink/55 ml-1 align-middle origin-center"
                />
              ) : null}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: isDone ? 1 : 0, y: isDone ? 0 : 8 }}
              transition={{ duration: 0.35 }}
              className="absolute right-6 md:right-10 bottom-6 md:bottom-10"
            >
              <button
                onClick={handleScroll}
                className="group bg-cold-white border border-ink text-ink text-[11px] md:text-[13px] tracking-[0.12em] uppercase transition-colors duration-500 px-6 py-2.5 md:px-8 md:py-3 font-mono relative overflow-hidden"
              >
                <span className="relative z-10 transition-colors duration-500 group-hover:text-cold-white">嗯？她是谁</span>
                <div className="absolute inset-0 bg-klein translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              </button>
            </motion.div>
          </motion.div>
        </div>

        <img
          src={frontLaptop}
          alt="front laptop"
          className="w-full h-auto object-contain select-none pointer-events-none"
          draggable={false}
        />
      </motion.div>
    </section>
  );
}
