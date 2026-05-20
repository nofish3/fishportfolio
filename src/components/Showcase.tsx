import { motion } from 'motion/react';
import { useRef, useState } from 'react';
import { MoveRight } from 'lucide-react';

export default function Showcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const narrations = [
    <>“她没有把 AI 批改当成终点。<br /><br />她更在意的是：批改结果能不能被老师信任，被学生理解，被后续练习继续使用。”</>,
    <>“我原以为她只是想让我看懂一条广告。<br /><br />但她真正要做的，是把资深创意人拆素材的判断框架，变成团队都能复用的分析标准。”</>,
    <>“她做这个 Demo，不是为了再造一个复杂平台。<br /><br />而是因为她发现：很多初级 PM 做出了 AI 功能，却还没想清楚它上线后该如何被验证、被衡量、被继续迭代。”</>
  ];
  
  return (
    <section id="showcase" className="relative bg-cold-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-8 md:px-24">
        {/* Layout: Left sticky text, right scrolling content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start py-24">
          
          {/* Left sticky column */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 mb-12 lg:mb-0">
            <h2 className="text-sm font-mono tracking-widest text-ink/40 uppercase mb-4">
              02 / The Projects
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-none">
              The Co-pilot's<br />Observations
            </h3>
            <div className="relative h-48">
              <motion.p
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-ink/70 leading-relaxed max-w-sm font-serif absolute inset-0"
              >
                {narrations[activeIndex] || narrations[0]}
              </motion.p>
            </div>
          </div>

          {/* Right scrolling column */}
          <div className="lg:w-2/3 flex flex-col gap-32 md:gap-40 pb-48">
            <motion.div onViewportEnter={() => setActiveIndex(0)} viewport={{ margin: "-30% 0px -30% 0px" }}>
              <ProjectA />
            </motion.div>
            <motion.div onViewportEnter={() => setActiveIndex(1)} viewport={{ margin: "-30% 0px -30% 0px" }}>
              <ProjectB />
            </motion.div>
            <motion.div onViewportEnter={() => setActiveIndex(2)} viewport={{ margin: "-30% 0px -30% 0px" }}>
              <ProjectC />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

// 模块 A：派培优 AI 作业批改系统
function ProjectA() {
  return (
    <div className="flex flex-col gap-12 md:gap-16 w-full">
      <ProjectA_Card1 />
      <ProjectA_Card2 />
      <ProjectA_Card3 />
      <ProjectA_Card4 />
      <ProjectA_Card5 />
    </div>
  );
}

function ProjectA_Card1() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative border border-ink bg-cold-white p-8 md:p-12 transition-colors duration-500 hover:border-klein"
    >
      <div className="text-sm font-mono tracking-widest uppercase mb-8 text-ink/40">MODULE A</div>
      <h3 className="text-2xl md:text-3xl font-bold mb-12">派培优 AI 作业批改系统</h3>
      
      <div className="mb-12">
        <h4 className="text-xl md:text-2xl font-medium leading-[1.6] mb-6 group-hover:text-klein transition-colors duration-500">
          批改不是终点。<br/>批改结果能否被继续使用，才决定 AI 是否真正进入教学流程。
        </h4>
        <div className="text-ink/70 leading-[1.8] space-y-4 font-serif text-[15px] md:text-lg">
          <p>她接到的需求，看似是“让老师批改更快”。<br/>但她很快发现，真正的问题不只在批改本身。</p>
          <p>老师需要的不只是一个 AI 判题结果，<br/>而是一条能被复核、能被归集、能继续支撑讲评和练习的作业链路。</p>
        </div>
      </div>
      
      <div className="border-t border-ink/10 pt-6 mt-8">
        <p className="font-mono text-xs md:text-sm tracking-widest uppercase text-ink/50 italic leading-relaxed">
          “让 AI 批得快，只是第一步。更难的是，让老师愿意信，让结果继续有用。”
        </p>
      </div>
    </motion.div>
  );
}

const processLines = [
  "> IMAGE QUALITY CHECK",
  "> QUESTION SPLITTING",
  "> ANSWER RECOGNITION",
  "> SOLUTION RETRIEVAL",
  "> STEP-BY-STEP GRADING",
  "> TEACHER REVIEW",
  "> BAD CASE LOOP"
];

function ProjectA_Card2() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative border border-ink bg-ink text-cold-white p-8 md:p-12 overflow-hidden"
    >
      <div className="absolute left-0 top-0 w-1 h-full bg-klein -translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
      
      <div className="text-sm font-mono tracking-widest uppercase mb-12 text-cold-white/40">BACKGROUND PROCESS</div>
      
      <div className="font-mono text-sm md:text-base leading-loose mb-12 text-cold-white/80">
        {processLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            {line}
          </motion.div>
        ))}
      </div>

      <div className="text-cold-white/80 leading-[1.8] font-serif text-[15px] md:text-lg space-y-6">
        <p>为了让 AI 批改真的可用，她没有只看模型最终答案。<br/>她把图片质量、题目切分、答案识别、题库召回、步骤级批改和教师复核拆成一个个可测试、可验收的节点。</p>
        <p>每一个节点出错，都会影响老师是否愿意继续使用这个功能。<br/>所以这个项目的重点，不是“接入一个大模型”，而是把 AI 的不确定性拆成可以被监控、被复盘、被修正的产品链路。</p>
      </div>
    </motion.div>
  );
}

function ProjectA_Card3() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="border border-ink bg-cold-white p-8 md:p-12"
    >
      <div className="text-sm font-mono tracking-widest uppercase mb-8 text-ink/40">PRODUCT JUDGEMENT</div>
      
      <h3 className="text-xl md:text-2xl font-medium leading-[1.6] mb-12">
        她判断一个 AI 功能是否成立，不是看它能不能生成结果，而是看这个结果能不能被真实流程接住。
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JudgementModule num="01" title="批得准" desc="AI 需要稳定处理图片、切题、识别、召回和步骤判断，而不是只给出一个看似合理的结论。" />
        <JudgementModule num="02" title="老师愿意用" desc="AI 不直接替老师做最终判断，而是先完成预批改，再交给老师复核、修改或确认。" />
        <JudgementModule num="03" title="结果能复用" desc="批改结果不只停留在作业页面，而是继续流向错题本、举一反三推荐和 AI 作业总评。" />
      </div>
    </motion.div>
  );
}

function JudgementModule({ num, title, desc }: { num: string, title: string, desc: string }) {
  return (
    <div className="group relative border border-ink/20 p-6 transition-colors duration-300 hover:border-klein cursor-default bg-cold-white h-48 md:h-56 flex flex-col justify-center">
      <div className="absolute inset-0 p-6 flex flex-col justify-center transition-opacity duration-300 group-hover:opacity-0 group-hover:pointer-events-none">
        <div className="font-mono text-3xl font-light text-ink/20 mb-4">{num}</div>
        <h4 className="text-lg font-bold text-ink/80">{title}</h4>
      </div>
      <div className="absolute inset-0 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="font-mono text-xs mb-3 text-klein">{num} / {title}</div>
        <p className="text-sm leading-[1.6] text-ink/80 font-serif">{desc}</p>
      </div>
    </div>
  );
}

const flowNodes = [
  "AI 预批改",
  "教师复核",
  "错题归集",
  "举一反三推荐",
  "AI 作业总评",
  "个性化反馈"
];

function ProjectA_Card4() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group border border-ink bg-cold-white p-8 md:p-12 transition-colors duration-500 hover:border-klein"
    >
      <div className="text-sm font-mono tracking-widest uppercase mb-8 text-ink/40 group-hover:text-klein transition-colors duration-500">CLOSED LOOP EXTENSION</div>
      <h3 className="text-2xl font-bold mb-8">从“批作业”到“管复习、做反馈”</h3>
      
      <div className="text-ink/70 leading-[1.8] font-serif text-[15px] md:text-lg space-y-6 mb-12">
        <p>AI 预批改之后，她继续把结果接进错题本和作业总评。</p>
        <p><strong className="text-ink font-sans font-medium">错题本部分</strong>，她设计题目状态识别与错题归集规则，让系统能够基于教师最终批改结果判断题目状态，并自动归集错题，支持后续复习和举一反三推荐。</p>
        <p><strong className="text-ink font-sans font-medium">AI 作业总评部分</strong>，她将学生完成情况、错题切图和教师预设评价纳入输入条件，设计不同的总评 workflow，让反馈不再是一段统一话术，而是根据作业表现生成更具体的个性化总结。</p>
      </div>

      <div className="lg:hidden flex flex-col items-start gap-0.5 mb-12">
        {flowNodes.map((node, i) => (
          <div key={node} className="flex flex-col items-center">
            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.15 }}
               className="border border-ink/20 px-4 py-2 text-xs md:text-sm font-mono hover:border-klein hover:text-klein transition-colors cursor-default"
            >
              {node}
            </motion.div>
            {i !== flowNodes.length - 1 && (
              <motion.div 
                 initial={{ height: 0 }}
                 whileInView={{ height: 16 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.15 + 0.1, duration: 0.3 }}
                 className="w-px bg-ink/20 my-1 origin-top"
              />
            )}
          </div>
        ))}
      </div>

      <div className="hidden lg:flex items-center justify-between mb-12 relative w-full">
        <div className="absolute top-1/2 left-0 w-full h-px bg-ink/10 -translate-y-1/2" />
        <motion.div 
           initial={{ scaleX: 0 }}
           whileInView={{ scaleX: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1.5, ease: "easeInOut" }}
           className="absolute top-1/2 left-0 w-full h-px bg-klein -translate-y-1/2 origin-left"
        />
        {flowNodes.map((node, i) => (
          <motion.div
            key={node}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="relative z-10 bg-cold-white border border-ink/20 px-3 py-2 text-[13px] font-mono hover:border-klein hover:text-klein transition-colors cursor-default whitespace-nowrap"
          >
            {node}
          </motion.div>
        ))}
      </div>
      
      <div className="border-t border-ink/10 pt-6">
        <p className="font-mono text-xs md:text-sm tracking-widest text-ink/50 uppercase leading-relaxed">
          这让“批作业”不再只是一次性动作，<br />
          而是延伸成“批改—复核—归集—反馈—练习”的课后学习闭环。
        </p>
      </div>

    </motion.div>
  );
}

function ProjectA_Card5() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="border border-ink bg-cold-white p-8 md:p-12 mb-12"
    >
      <div className="text-sm font-mono tracking-widest uppercase mb-8 text-ink/40">ITERATION SYSTEM</div>
      
      <h3 className="text-xl md:text-2xl font-bold mb-8">上线不是结束，她还搭了一套让 AI 继续变稳的机制。</h3>
      
      <div className="text-ink/70 leading-[1.8] font-serif text-[15px] md:text-lg space-y-6 mb-12 border-b border-ink/10 pb-12">
        <p>为了让 AI 批改在真实场景中持续变稳，她独立使用 Dify 搭建了辅助标注 Agent，用于错题样本标注、Bad Case 归因和效果复盘。</p>
        <p>当批改结果出现异常时，问题不会停留在一句“模型不准”。<br/>它会被继续拆解为：<br/>是图片质量问题？是题目切分问题？是识别问题？是题库召回问题？还是 Prompt 和批改规则需要调整？</p>
        <p>她用这套机制，把模型问题变成可以被定位、被讨论、被优化的产品问题。</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-6">
        <StatItem title="单份作业批改耗时" pre="5 分钟 → " num="30" post=" 秒" />
        <StatItem title="教师人均节省时间" num="15" post=" 小时 / 月" />
        <StatItem title="题目状态识别准确率" num="99" post="%" />
        <StatItem title="错题标注分析场景提效" pre="+" num="80" post="%" />
        <StatItem title="AI 作业总评验证样本" num="264" post=" 份作业 / 1,727 道题" />
        <StatItem title="总评满分样本上线率" num="90.4" post="%" />
      </div>
    </motion.div>
  );
}

function StatItem({ title, pre = "", num, post = "" }: { title: string, pre?: string, num: string, post?: string }) {
  return (
    <div className="group cursor-default flex flex-col">
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-3 transition-colors duration-500 group-hover:text-klein"
      >
        {pre && <span className="font-sans text-xs md:text-sm text-ink/60 mr-1 align-bottom inline-block mb-1">{pre}</span>}
        <span className="font-mono text-3xl md:text-4xl font-light tracking-tighter">{num}</span>
        {post && <span className="font-sans text-xs md:text-sm text-ink/60 ml-1 align-bottom inline-block mb-1">{post}</span>}
      </motion.div>
      <div className="text-[10px] md:text-xs font-mono tracking-widest text-ink/40 uppercase mt-auto leading-relaxed">
        {title}
      </div>
    </div>
  );
}

// 模块 B：AI广告素材拆片
function ProjectB() {
  return (
    <div className="flex flex-col gap-12 md:gap-16 w-full">
      <ProjectB_Card1 />
      <ProjectB_Card2 />
      <ProjectB_Card3 />
      <ProjectB_Card4 />
      <ProjectB_Card5 />
    </div>
  );
}

function ProjectB_Card1() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative border border-ink bg-cold-white p-8 md:p-12 transition-colors duration-500 hover:border-klein"
    >
      <div className="text-sm font-mono tracking-widest uppercase mb-8 text-ink/40">MODULE B</div>
      <h3 className="text-2xl md:text-3xl font-bold mb-12">AI广告素材拆片</h3>
      
      <div className="mb-12">
        <h4 className="text-xl md:text-2xl font-medium leading-[1.6] mb-6 transition-colors duration-500">
          人工拉片最难复用的，不是视频本身，<br/>而是资深创意人的判断框架。
        </h4>
        <div className="text-ink/70 leading-[1.8] space-y-4 font-serif text-[15px] md:text-lg">
          <p>这个功能面向 B 端平台的客户广告创意团队。</p>
          <p>他们原本需要人工逐帧回看竞品广告素材，记录画面变化、卖点表达、情绪触发和转化引导。<br/>问题不只是“慢”，而是这种分析高度依赖个人经验。</p>
          <p>新人不知道该看什么，团队也很难把一次复盘沉淀成统一标准。</p>
        </div>
      </div>
      
      <div className="border-t border-ink/10 pt-6 mt-8">
        <p className="font-mono text-xs md:text-sm tracking-widest uppercase text-ink/50 italic leading-relaxed group-hover:text-klein transition-colors duration-300">
          “她没有先问 AI 能不能看懂视频。她先问：一条广告素材，到底应该被怎么看？”
        </p>
      </div>
    </motion.div>
  );
}

const bQuestions = [
  "开头钩子为什么能吸引用户？",
  "场景为什么能引发共鸣？",
  "卖点是怎么被包装出来的？",
  "哪些画面元素值得迁移到自己的产品？",
  "这条素材能不能被二创、仿写或复用？"
];

function ProjectB_Card2() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="border border-ink bg-cold-white p-8 md:p-12 mb-12 md:mb-16"
    >
      <div className="text-sm font-mono tracking-widest uppercase mb-8 text-ink/40">RESEARCH TO ANGLE</div>
      
      <h3 className="text-2xl md:text-3xl font-bold mb-8">先确定分析角度，再让 AI 进入流程。</h3>
      
      <div className="text-ink/70 leading-[1.8] font-serif text-[15px] md:text-lg space-y-6 mb-12">
        <p>她没有直接把视频丢给模型生成总结。<br/>在设计前，她先结合竞品调研和客户反馈，判断广告创意团队真正需要从哪些角度拆素材。</p>
        <p>客户关心的不是“视频里有什么”这么简单，<br/>而是：</p>
      </div>

      <ul className="mb-12 space-y-4 font-sans text-sm md:text-base border-l border-ink/10 pl-6">
        {bQuestions.map((q, i) => (
          <li key={i} className="group flex items-start text-ink/80 transition-colors cursor-default">
            <span className="font-mono text-ink/30 mr-4 transition-colors duration-300 group-hover:text-klein">{(i + 1).toString().padStart(2, '0')}</span>
            <span className="group-hover:text-ink transition-colors duration-300">{q}</span>
          </li>
        ))}
      </ul>
      
      <div className="border-t border-ink/10 pt-6">
        <p className="font-mono text-xs md:text-sm tracking-widest uppercase text-ink/60 leading-[1.8]">
          所以，这个项目的第一步不是接入模型，<br/>而是定义“什么样的分析才对创意团队有用”。
        </p>
      </div>
    </motion.div>
  );
}

const fieldCategories = [
  { name: "内容与叙事", examples: ["剧情梗概", "视频结构", "悬念设置"] },
  { name: "创意与风格", examples: ["钩子", "创意亮点", "二创建议"] },
  { name: "受众与市场", examples: ["目标人群", "文化偏好", "热点元素"] },
  { name: "卖点与转化", examples: ["核心卖点", "转化引导", "痛点展示"] },
  { name: "视觉与制作", examples: ["画面色调", "转场手法", "贴纸元素"] },
  { name: "人物与互动", examples: ["演员特征", "情绪表现", "观众视角"] },
  { name: "文案与评估", examples: ["话术拆解", "金句提炼", "整体评分"] }
];

const scenePresets = ["效率预览", "创意灵感", "游戏买量", "电商增效", "出海本地化"];

function ProjectB_Card3() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="border border-ink bg-cold-white p-8 md:p-12"
    >
      <div className="text-sm font-mono tracking-widest uppercase mb-8 text-ink/40">FIELD SYSTEM</div>
      <h3 className="text-xl md:text-2xl font-bold mb-6">把人工经验拆成 AI 可以执行的字段。</h3>
      <p className="text-lg md:text-xl font-medium leading-[1.6] mb-12 text-ink/80">
        她参与定义的不是几个简单标签，<br />而是一套能覆盖不同分析任务的素材拆解框架。
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {fieldCategories.map((cat, i) => (
          <div key={cat.name} className="group border border-ink/20 p-4 transition-colors hover:border-klein cursor-default min-h-[140px] flex flex-col justify-between">
            <span className="font-medium text-ink transition-colors group-hover:text-klein mb-4 block text-sm">{cat.name}</span>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              {cat.examples.map((ex, j) => (
                <div key={ex} className="text-[11px] md:text-xs font-mono text-ink/60 mb-1 tracking-widest uppercase">{'>'} <span className="group-hover:text-klein/70">{ex}</span></div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mb-12">
        <div className="text-xs font-mono tracking-widest uppercase text-ink/40 mb-4 block">SCENE PRESETS</div>
        <div className="flex flex-wrap gap-2">
          {scenePresets.map(preset => (
            <span key={preset} className="border border-ink/20 px-3 py-1.5 text-[11px] md:text-xs text-ink/60 font-mono uppercase cursor-default hover:border-klein hover:text-klein transition-colors">
              {preset}
            </span>
          ))}
        </div>
      </div>

      <div className="border-t border-ink/10 pt-8 text-ink/70 leading-[1.8] font-serif text-[15px] md:text-lg">
        <p>这些字段不是为了让页面看起来复杂。<br />它们的作用，是把“资深创意人会看什么”拆成 AI 可以稳定输出、团队可以继续复盘的结构。</p>
      </div>
    </motion.div>
  );
}

const bBadCaseLines = [
  "> MODEL OUTPUT: TOO GENERIC",
  "> FIELD RESULT: NOT ACTIONABLE",
  "> CLIENT NEED: CREATIVE REPLAY",
  "> PRODUCT ACTION: PROMPT / FIELD / REVIEW"
];

function ProjectB_Card4() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative border border-ink bg-ink text-cold-white p-8 md:p-12 overflow-hidden"
    >
      {/* 细蓝线横向扫过 */}
      <div className="absolute top-0 left-0 h-[2px] bg-klein w-[150%] -translate-x-[150%] group-hover:translate-x-[50%] transition-transform duration-[1200ms] ease-in-out opacity-80" />
      
      <div className="text-sm font-mono tracking-widest uppercase mb-12 text-cold-white/40">BAD CASE LOOP</div>
      <h3 className="text-xl md:text-2xl font-bold mb-10 text-cold-white">模型能输出，不代表输出能被客户使用。</h3>
      
      <div className="font-mono text-sm md:text-base leading-loose mb-12 text-klein/90">
        {bBadCaseLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            {line}
          </motion.div>
        ))}
      </div>

      <div className="text-cold-white/80 leading-[1.8] font-serif text-[15px] md:text-lg space-y-6">
        <p>第一版最大的问题，不是 AI 没有结果。<br />而是有些结果太浅、太散，像一段通用视频总结，无法直接服务创意复盘。</p>
        <p className="text-cold-white font-sans font-medium mt-4">客户真正需要的不是“这条视频很吸引人”，<br />而是更具体的判断：</p>
        <ul className="list-none pl-6 text-cold-white/80 font-sans text-sm md:text-base space-y-3 marker:text-klein border-l border-cold-white/20">
          <li className="relative before:content-[''] before:absolute before:-left-[25px] before:top-[10px] before:w-1.5 before:h-1.5 before:bg-klein">这个钩子为什么有效？</li>
          <li className="relative before:content-[''] before:absolute before:-left-[25px] before:top-[10px] before:w-1.5 before:h-1.5 before:bg-klein">这个场景为什么能打动人？</li>
          <li className="relative before:content-[''] before:absolute before:-left-[25px] before:top-[10px] before:w-1.5 before:h-1.5 before:bg-klein">这个素材的卖点怎么被包装？</li>
          <li className="relative before:content-[''] before:absolute before:-left-[25px] before:top-[10px] before:w-1.5 before:h-1.5 before:bg-klein">这个创意能不能迁移到自己的产品？</li>
        </ul>
        <p className="mt-8">因此，她通过 Prompt 约束、样例校准、字段收敛和人工验收，<br />把 AI 输出从“描述视频”拉回“服务创意复盘”。</p>
        <p className="text-sm font-sans tracking-wide text-cold-white/40 border-t border-cold-white/10 pt-6 mt-6">
          对于模型不稳定或提取不准的内容，首期弱化展示，后续再单独规划。
        </p>
      </div>
    </motion.div>
  );
}

const bFlowNodes = [
  "选择分析素材",
  "创建 AI 拆片任务",
  "批量解析视频 / 图片",
  "查看整体分析与分镜分析",
  "导出结构化报告",
  "团队复盘与二创参考"
];

function ProjectB_Card5() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="border border-ink bg-cold-white p-8 md:p-12 w-full"
    >
      <div className="text-sm font-mono tracking-widest uppercase mb-8 text-ink/40">PROTOTYPE & BUSINESS RESULT</div>
      <h3 className="text-xl md:text-2xl font-bold mb-12">从素材选择，到批量解析，再到报告导出。</h3>

      {/* 流程展示 */}
      <div className="flex flex-col md:flex-row flex-wrap md:items-center gap-2 md:gap-4 mb-12">
        {bFlowNodes.map((node, i) => (
          <div key={node} className="flex items-center">
            <span className="text-xs md:text-sm font-mono border border-ink/20 px-3 py-1.5 hover:border-klein hover:text-klein transition-colors cursor-default whitespace-nowrap">{node}</span>
            {i !== bFlowNodes.length - 1 && <span className="hidden md:inline-block ml-4 text-ink/30">{'->'}</span>}
            {i !== bFlowNodes.length - 1 && <span className="md:hidden block w-px h-4 bg-ink/20 mx-auto my-1"></span>}
          </div>
        ))}
      </div>

      {/* 原型证据墙 */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16 border-y border-ink/10 py-10">
        <EvidenceThumb
          src="https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&fit=crop&w=400&q=80"
          title="选择素材流程"
          desc="平台已有素材库批量选中，而非重新上传。"
        />
        <EvidenceThumb
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80"
          title="结构化表格"
          desc="多条素材解析结果对比，便于纵览导出。"
        />
        <EvidenceThumb
          src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=400&q=80"
          title="素材详情拆解"
          desc="单条视频整体分析与分镜分析面板。"
        />
        <EvidenceThumb
          src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&fit=crop&w=400&q=80"
          title="蓝湖全流程图"
          desc="含异常状态与边界的完整功能分支。"
        />
      </div>

      {/* 结果数据展示 */}
      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-y-10 gap-x-6 mb-16">
        <StatItem title="报告生成时间" pre="4 小时 → " num="15" post=" 分钟" />
        <StatItem title="广告分析效率提升" pre="+" num="65" post="%" />
        <StatItem title="单条视频解析成本" pre="≤ " num="0.01" post=" 元" />
        <StatItem title="按素材消耗点数" num="AI" post=" 点数计费" />
        <StatItem title="纳入套餐体系" num="高版本" post=" 套餐增值" />
      </div>

      {/* V2 规划 */}
      <div className="border-t border-ink/10 pt-8">
        <h4 className="text-[10px] md:text-xs font-mono tracking-widest text-ink/40 uppercase mb-4">NEXT ITERATION / V2 PLANNING</h4>
        <div className="text-[13px] md:text-sm text-ink/60 leading-[1.8] font-serif max-w-2xl">
          <p className="mb-2">基于客户反馈，她进一步规划 V2：<br/>更丰富的字段选择、自定义提示词、模型选择、脚本仿写建议，以及结果通知机制。</p>
          <p>这不是为了让功能更复杂，而是为了适配不同客户、不同类目、不同素材分析任务下的真实工作流。</p>
        </div>
      </div>
    </motion.div>
  );
}

function EvidenceThumb({ src, title, desc }: { src: string, title?: string, desc?: string }) {
  return (
    <div className="group relative overflow-hidden border border-ink/10 bg-[#f4f4f4] aspect-[4/3] flex flex-col items-center justify-center cursor-default">
      {/* 模拟一张原型的底图，低饱和、变暗 */}
      <div className="absolute inset-0 bg-cover bg-center grayscale mix-blend-multiply opacity-20 group-hover:scale-[1.03] transition-transform duration-700 ease-out" style={{ backgroundImage: `url(${src})` }} />
      <div className="absolute inset-0 bg-cold-white/20" />
      
      {/* 红色批注模拟线 (弱化) */}
      <div className="absolute top-4 left-4 w-6 h-6 border border-red-500/20 rounded-[2px]" />
      <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-red-500/30 rounded-full" />
      
      {/* Hover Info */}
      <div className="absolute inset-0 p-4 bg-cold-white/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end items-start text-left">
        <h5 className="font-mono text-xs md:text-sm font-bold text-ink mb-1 tracking-tight">{title}</h5>
        <p className="font-serif text-[10px] md:text-xs leading-[1.6] text-ink/70">{desc}</p>
      </div>
      
      {/* Default text */}
      <div className="relative w-full h-full flex flex-col items-center justify-center mix-blend-difference opacity-20 group-hover:opacity-0 transition-opacity duration-300">
        <span className="w-8 h-8 rounded-full border border-white mb-2 flex items-center justify-center text-white">+</span>
      </div>
    </div>
  );
}

// 模块 C：EvalPilot AI 测评助手
function ProjectC() {
  return (
    <div className="flex flex-col gap-12 md:gap-16 w-full">
      <ProjectC_Card1 />
      <ProjectC_Card2 />
      <ProjectC_Card3 />
      <ProjectC_Card4 />
      <ProjectC_Card5 />
    </div>
  );
}

function ProjectC_Card1() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative border border-ink bg-cold-white p-8 md:p-12 transition-colors duration-500 hover:border-klein"
    >
      <div className="text-sm font-mono tracking-widest uppercase mb-8 text-ink/40">MODULE C</div>
      <h3 className="text-2xl md:text-3xl font-bold mb-4">EvalPilot AI 测评助手</h3>
      <p className="text-[15px] md:text-lg font-mono text-ink/60 mb-12">帮助初级 AI PM，在 MVP 阶段搭起评测与迭代闭环。</p>
      
      <div className="mb-12">
        <h4 className="text-xl md:text-2xl font-medium leading-[1.6] mb-6 transition-colors duration-500">
          AI 产品的闭环，不是从上线开始，<br/>而是从 MVP 阶段的评测指标开始。
        </h4>
        <div className="text-ink/70 leading-[1.8] space-y-4 font-serif text-[15px] md:text-lg">
          <p>她在 AI 作业批改项目里发现：<br />一个 AI 功能能跑起来，并不代表它已经具备上线价值。</p>
          <p>对初级 AI PM 来说，更容易被忽略的是：<br />这个功能应该用什么样本验证，应该看哪些指标，什么输出算好，什么输出算坏，以及下一轮迭代应该改哪里。</p>
          <p>于是，她把自己在 AI 作业批改、广告素材拆片、作业总评和错题举一反三等项目里遇到的评测动作，沉淀成了 EvalPilot。</p>
        </div>
      </div>
      
      <div className="border-t border-ink/10 pt-6 mt-8">
        <p className="font-mono text-xs md:text-sm tracking-widest uppercase text-ink/50 italic leading-relaxed group-hover:text-klein transition-colors duration-300">
          “它不是替产品经理做最终判断。它更像一个评测脚手架，帮助初级 PM 更早拥有闭环意识。”
        </p>
      </div>
    </motion.div>
  );
}

const cFlowNodes = [
  "产品目标",
  "测试样本",
  "评测维度",
  "Good / Bad 标准",
  "Bad Case 类型",
  "报告模板",
  "Prompt 优化建议"
];

function ProjectC_Card2() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="border border-ink bg-cold-white p-8 md:p-12"
    >
      <div className="text-sm font-mono tracking-widest uppercase mb-8 text-ink/40">FROM PROJECT PAIN TO METHOD</div>
      
      <h3 className="text-2xl md:text-3xl font-bold mb-8 leading-[1.4]">问题不是“AI 能不能生成”，而是“生成之后怎么判断”。</h3>
      
      <div className="text-ink/70 leading-[1.8] font-serif text-[15px] md:text-lg space-y-6 mb-12 border-b border-ink/10 pb-12">
        <p>在真实 AI 项目里，她反复遇到同一个问题：</p>
        <p>Prompt 改了，模型换了，规则调了，<br/>但产品经理需要判断的不是“看起来有没有更顺”，<br/>而是结果是否更稳定、更准确、更符合用户预期。</p>
        <p>如果没有提前定义评测指标，<br/>AI 功能很容易停留在“能跑起来”的 Demo 阶段。</p>
        <p>因此，她把评测动作拆成一条更适合初级 PM 上手的流程：</p>
      </div>

      <div className="flex flex-col md:flex-row flex-wrap items-start md:items-center gap-2 md:gap-4 mb-12">
        {cFlowNodes.map((node, i) => (
           <div key={node} className="flex flex-col md:flex-row md:items-center">
             <motion.div 
               initial={{ opacity: 0, x: -10 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.15 }}
               className="group border border-ink/20 px-3 py-1.5 md:px-4 md:py-2 text-[13px] md:text-sm font-mono hover:border-klein transition-colors cursor-default"
             >
               <span className="text-ink/80 group-hover:text-klein transition-colors">{node}</span>
             </motion.div>
             {i !== cFlowNodes.length - 1 && (
               <motion.div 
                 initial={{ scale: 0 }}
                 whileInView={{ scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.15 + 0.1 }}
                 className="hidden md:inline-block ml-4 text-ink/30 origin-left"
               >
                 {'->'}
               </motion.div>
             )}
             {i !== cFlowNodes.length - 1 && (
               <motion.div 
                 initial={{ height: 0 }}
                 whileInView={{ height: 16 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.15 + 0.1 }}
                 className="md:hidden w-px bg-ink/20 ml-6 my-1 origin-top"
               />
             )}
           </div>
        ))}
      </div>
      
      <div className="border-t border-ink/10 pt-6">
        <p className="font-mono text-xs md:text-sm tracking-widest uppercase text-ink/60 leading-[1.8]">
          从“做出功能”，往前走一步，变成“知道它上线后该如何继续变好”。
        </p>
      </div>
    </motion.div>
  );
}

const cSteps = [
  {
    num: "01",
    title: "任务初始化",
    desc: "明确产品目标、评测关注点和测试集来源。支持上传完整测试集，也支持输入单条示例生成结构化测试样本。"
  },
  {
    num: "02",
    title: "评测方案设计",
    desc: "定义评测维度、Good 标准、Bad 标准和 Bad Case 类型。把“感觉好不好”拆成可以讨论和复盘的判断标准。"
  },
  {
    num: "03",
    title: "报告模板预览",
    desc: "提前看到评测结果应该如何沉淀，包括项目背景、核心结论、量化分析和 Bad Case 分类。"
  },
  {
    num: "04",
    title: "Prompt 优化",
    desc: "基于 Bad Case 和评测结果，生成诊断结论与下一轮 Prompt 优化建议。"
  }
];

function ProjectC_Card3() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="border border-ink bg-cold-white p-8 md:p-12"
    >
      <div className="text-sm font-mono tracking-widest uppercase mb-8 text-ink/40">EVALUATION WORKFLOW</div>
      <h3 className="text-xl md:text-2xl font-bold mb-12">把 AI 测评拆成 4 个可执行步骤。</h3>
      
      <div className="grid md:grid-cols-4 border-l md:border-l-0 md:border-t border-ink/20">
        {cSteps.map((step, i) => (
          <div key={step.num} className="group border-b md:border-b-0 md:border-r border-ink/20 p-6 transition-colors hover:border-klein hover:bg-klein/[0.02] cursor-default flex flex-col md:min-h-[240px] last:border-b-0 md:last:border-r-0">
            <span className="font-mono text-ink/40 text-sm mb-4 group-hover:text-klein transition-colors">{step.num}</span>
            <span className="font-bold text-ink mb-4 group-hover:text-klein transition-colors">{step.title}</span>
            <p className="text-sm font-serif text-ink/70 leading-[1.6] opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto overflow-hidden transition-all duration-300">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
      
      <div className="border-t border-ink/10 pt-6 mt-12">
         <p className="font-mono text-xs md:text-sm tracking-widest uppercase text-ink/60 leading-[1.8]">
           这套流程的重点不是让 AI 替 PM 判断，<br/>而是让 PM 更早想清楚：上线后要看什么、怎么判断、怎么迭代。
         </p>
      </div>
    </motion.div>
  );
}

function ProjectC_Card4() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="border border-ink bg-cold-white p-8 md:p-12 w-full"
    >
      <div className="flex flex-wrap justify-between items-start gap-4 mb-8 border-b border-ink/10 pb-8">
        <div>
          <div className="text-sm font-mono tracking-widest uppercase mb-4 text-ink/40">DEMO EVIDENCE WALL</div>
          <h3 className="text-xl md:text-2xl font-bold mb-4">她没有停在方法论，而是把它做成了可运行 Demo。</h3>
          <p className="text-ink/70 font-serif text-[15px] md:text-lg max-w-xl">
            这个 Demo 通过 AI Coding 快速搭建，完成了从任务初始化、评测方案设计、报告模板预览到 Prompt 优化的完整路径。
          </p>
        </div>
        <div className="flex flex-col items-start gap-2">
           <span className="text-[10px] font-mono tracking-widest uppercase text-ink/30 px-2 py-1 border border-ink/10">AI Coding</span>
           <span className="text-[10px] font-mono tracking-widest uppercase text-ink/30 px-2 py-1 border border-ink/10">Claude Code</span>
           <span className="text-[10px] font-mono tracking-widest uppercase text-ink/30 px-2 py-1 border border-ink/10">CoT</span>
           <span className="text-[10px] font-mono tracking-widest uppercase text-ink/30 px-2 py-1 border border-ink/10">Demo Build</span>
        </div>
      </div>

      {/* 原型证据墙 */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <EvidenceThumb
          src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=400&q=80"
          title="首页 / 使用引导"
          desc="展示完整 Demo 入口和 4 步使用流程。"
        />
        <EvidenceThumb
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80"
          title="任务初始化"
          desc="输入产品目标、评测关注点，生成单条示例生成样本。"
        />
        <EvidenceThumb
          src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=400&q=80"
          title="评测方案设计"
          desc="定义维度、Good/Bad 标准和 Bad Case 类型。"
        />
        <EvidenceThumb
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80"
          title="报告模板预览"
          desc="核心结论、量化分析、Bad Case 分类预览。"
        />
        <EvidenceThumb
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80"
          title="Prompt 优化"
          desc="基于问题诊断与 Bad Case 类型生成修改建议。"
        />
      </div>
      
    </motion.div>
  );
}

function ProjectC_Card5() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="border border-ink bg-cold-white p-8 md:p-12 mb-12"
    >
      <div className="text-sm font-mono tracking-widest uppercase mb-8 text-ink/40">SELF VALIDATION</div>
      
      <h3 className="text-xl md:text-2xl font-bold mb-8 leading-[1.4]">它不成熟，但已经跑通了一条从样本到迭代的闭环。</h3>
      
      <div className="text-ink/70 leading-[1.8] font-serif text-[15px] md:text-lg space-y-6 mb-12 border-b border-ink/10 pb-12">
        <p>她基于自己做过的 AI 作业批改、广告素材拆片、AI 作业总评、错题举一反三、AI 客服等任务，完成了自用验证。</p>
        <p>测试样本一部分来自过往项目中的真实测试样本，<br/>一部分由单条示例生成结构化样本，用于快速搭建评测方案草稿。</p>
        <p>这个 Demo 的意义不是替代资深 PM 的判断，<br/>而是帮助初级 PM 在较短时间内，搭起第一版评测框架。</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 mb-12">
        <StatItem title="结构化测试样本整理" num="120" post="+" />
        <StatItem title="AI 任务场景自用验证" num="5" post=" 类" />
        <StatItem title="自用流程估算时间" pre="约 90 分钟 → 约 " num="15" post=" 分钟" />
        <StatItem title="任务初始化/方案设计/报告" num="4" post=" Steps" />
      </div>

      <div className="border-t border-ink/10 pt-6">
         <p className="font-mono text-xs md:text-sm tracking-widest uppercase text-ink/60 leading-[1.8]">
           她用这个 Demo 说明：<br/>
           AI 产品经理不能只关注功能能不能做出来，<br/>
           还要在 MVP 阶段就思考这个功能未来如何被验证、被衡量、被迭代。
         </p>
      </div>
    </motion.div>
  );
}
