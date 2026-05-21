import { motion } from 'motion/react';

export default function InitialScan() {
  return (
    <section id="initial-scan" className="px-8 md:px-24 max-w-7xl mx-auto pt-0 pb-14">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          <div className="lg:col-span-4 font-mono text-sm leading-relaxed lg:pt-1">
            <h2 className="text-sm font-mono tracking-widest text-ink/40 uppercase mb-5">
              INITIAL SCAN
            </h2>
            <div className="flex flex-col gap-6">
              <InfoItem label="NAME" value="吴俞宏" />
              <InfoItem label="TIME" value="2023.09-2027.06" />
              <InfoItem label="BACKGROUND" value="广东工业大学 · 计算机科学与技术" />
              <InfoItem label="DIRECTION" value="AI产品 / 产品经理实习生" />
              <InfoItem
                label="PERSONAL ADVANTAGE"
                value="两段AI产品实习 / AI产品落地经验 / AI Coding独立开发应用 / Workflow编排 / CET6"
              />
              <InfoItem label="TOOLS" value="Axure / Dify / Claude Code / Codex / SQL" />
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-6">
            <ScanCard
              num="01"
              title="AI数学作业批改与错题本"
              desc="她参与设计了从 AI 预批改、教师复核、错题归集到针对性练习的完整作业链路。重点不是让 AI 简单判对错，而是让批改结果可以被老师复核、被学生理解、被后续练习继续复用。"
            />
            <ScanCard
              num="02"
              title="AI广告素材拆片"
              desc="她把广告创意团队的人工拉片经验，转译成 AI 可以执行的结构化字段。重点不是让 AI 概括视频，而是让一条素材被拆解成画面内容、卖点表达、情绪触发和可复盘的创意资产。"
            />
            <ScanCard
              num="03"
              title="AI测评助手"
              desc="她围绕初级 PM 在 AI 评测中“评什么、怎么评、如何归因”的困惑，设计了一个轻量化测评助手。重点不是让 AI 直接替人下结论，而是帮助产品经理把评测流程前置到 MVP 阶段，让功能上线后能被验证、被衡量、被持续迭代。"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-ink/20 pb-4">
      <div className="text-ink/40 mb-1">{label}</div>
      <div>{value}</div>
    </div>
  );
}

function ScanCard({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="group relative p-6 border border-ink bg-cold-white transition-colors duration-500 hover:border-klein cursor-default">
      <div className="flex flex-col md:flex-row gap-5 md:gap-10 items-start">
        <div className="font-mono text-xl md:text-2xl font-light text-ink/30 transition-colors duration-500 group-hover:text-klein">
          {num}
        </div>
        <div>
          <h3 className="text-lg font-bold mb-3">{title}</h3>
          <p className="text-ink/70 leading-relaxed font-serif text-base">{desc}</p>
        </div>
      </div>
    </div>
  );
}
