import { motion } from 'motion/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import { MoveRight } from 'lucide-react';

export default function Showcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const narrations = [
    <>“她没有把 AI 批改当成终点。<br /><br />她更在意的是：批改结果能不能被老师信任，被学生理解，被后续教学环节复用。”</>,
    <>“我原以为她只是想让我看懂一条广告。<br /><br />但她真正要做的，是把资深创意人拆素材的判断框架，变成团队都能复用的分析标准。”</>,
    <>“她做这个测评助手，不是为了简单地把测评工作提效。<br /><br />而是因为她发现：很多像她一样的初级 PM，做出了 AI 功能，却还没想清楚它上线后该如何被验证、被衡量、被继续迭代。”</>
  ];
  
  return (
    <section id="showcase" className="relative bg-cold-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-8 md:px-24">
        {/* Layout: Left sticky text, right scrolling content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start pt-14 pb-24">
          
          {/* Left sticky column */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 mb-12 lg:mb-0">
            <h2 className="text-sm font-mono tracking-widest text-ink/40 uppercase mb-4">
              The Projects
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-none">
              <span className="whitespace-nowrap">The Co-pilot's</span><br />Observations
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
          <div className="lg:col-span-8 flex flex-col gap-32 md:gap-40">
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
    <div className="flex flex-col gap-8 md:gap-10 w-full">
      <ProjectA_Card1 />
      <ProjectA_Card2 />
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
      className="group relative border border-ink bg-cold-white p-6 md:p-8 transition-colors duration-500 hover:border-klein [&_h3]:text-xl md:[&_h3]:text-2xl [&_h4]:text-lg md:[&_h4]:text-xl [&_p]:text-sm md:[&_p]:text-base"
    >
      <div className="text-sm font-mono tracking-widest uppercase mb-6 text-ink/40">MODULE A</div>
      <h3 className="text-2xl md:text-3xl font-bold mb-12">派培优 AI 作业批改系统</h3>
      
      <div className="mb-8">
        <h4 className="text-xl md:text-2xl font-medium leading-[1.6] mb-6 group-hover:text-klein transition-colors duration-500">
          她判断一个AI功能是否成立，不是看它能不能生成结果，而是看这个结果能不能被真实流程接住。
        </h4>
        <div className="text-ink/70 leading-[1.8] space-y-4 font-serif text-[15px] md:text-lg">
          <p>线上教学场景中，老师们面临作业批改耗时长，作业情况难以及时反馈的问题。</p>
          <p>她接到的需求，看似是“让老师批改更快”。<br/>但她很快发现，真正的问题不只在批改本身。</p>
          <p>老师需要的不只是一个 AI 判题结果，<br/>而是一条能被复核、能被归集、能继续支撑讲评和练习的作业链路。</p>
        </div>
      </div>
      
      <div className="border-t border-ink/10 pt-5 mt-6">
        <p className="font-mono text-xs md:text-sm tracking-widest uppercase text-klein italic leading-relaxed">
          “批改不是终点。<br />批改结果能否被继续使用，才决定AI是否真正进入教学流程。”
        </p>
      </div>
    </motion.div>
  );
}

const processLines = [
  "> IMAGE QUALITY CHECK / 图像质量检查",
  "> QUESTION SPLITTING / 题目切分",
  "> ANSWER RECOGNITION / 答案识别",
  "> SOLUTION RETRIEVAL / 解题路径召回",
  "> STEP-BY-STEP GRADING / 分步批改",
  "> TEACHER REVIEW / 教师复核",
  "> BAD CASE LOOP / 坏例闭环"
];

const processFlowNodes = [
  "图片准入",
  "图片矫正",
  "题目切分",
  "题库召回",
  "大模型识别",
  "步骤级批改",
  "教师复核"
];

function ProjectA_Card2() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative border border-ink bg-ink text-cold-white p-6 md:p-8 overflow-hidden"
    >
      <div className="absolute left-0 top-0 w-1 h-full bg-klein -translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
      
      <div className="text-sm font-mono tracking-widest uppercase mb-8 text-cold-white/40">AI GRADING PROCESS</div>
      
      <div className="mb-8">
        <div className="hidden lg:flex items-center justify-start gap-0 relative w-full">
          {processFlowNodes.map((node, i) => (
            <Fragment key={node}>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 border border-cold-white/55 bg-ink px-3 py-2 text-xs text-cold-white font-mono whitespace-nowrap shrink-0"
              >
                {node}
              </motion.div>
              {i !== processFlowNodes.length - 1 && (
                <div className="relative w-4 h-3 shrink-0 overflow-hidden">
                  <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-cold-white/70" />
                  <motion.div
                    className="absolute top-1/2 -translate-y-1/2 h-[4px] w-2.5 bg-klein rounded-sm shadow-[0_0_8px_rgba(46,88,255,0.75)]"
                    animate={{ x: [-8, 16] }}
                    transition={{ duration: 3.8, ease: "linear", repeat: Infinity, delay: i * 0.08 }}
                  />
                </div>
              )}
            </Fragment>
          ))}
        </div>

        <div className="lg:hidden flex flex-col items-start gap-1.5">
          {processFlowNodes.map((node, i) => (
            <div key={node} className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-cold-white/55 bg-ink px-3 py-1.5 text-xs text-cold-white font-mono"
              >
                {node}
              </motion.div>
              {i !== processFlowNodes.length - 1 && (
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: 14 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.05, duration: 0.25 }}
                  className="w-[2px] bg-cold-white/70 my-1 origin-top"
                />
              )}
            </div>
          ))}
        </div>

        <p className="mt-2 text-[11px] md:text-xs text-cold-white/85 italic font-serif tracking-[0.06em] text-center">
          AI作业批改流程
        </p>
      </div>

      <div className="text-cold-white/80 leading-[1.8] font-serif text-sm md:text-base space-y-5">
        <p>为了让 AI 批改真的可用，她没有只看模型最终答案。<br/>她把图片质量、题目切分、答案识别、题库召回、步骤级批改和教师复核拆成一个个可测试、可验收的节点。</p>
        <p>每一个节点出错，都会影响老师是否愿意继续使用这个功能。<br/>所以这个项目的重点，不是“接入一个大模型”，而是把 AI 的不确定性拆成可以被监控、被复盘、被修正的产品链路。</p>
      </div>
    </motion.div>
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
      className="group border border-ink bg-cold-white p-6 md:p-8 transition-colors duration-500 hover:border-klein"
    >
      <div className="text-sm font-mono tracking-widest uppercase mb-6 text-ink/40 group-hover:text-klein transition-colors duration-500">CLOSED LOOP EXTENSION</div>
      <h3 className="text-xl md:text-2xl font-bold mb-6">从“批作业”到“管复习、做反馈”</h3>
      
      <div className="text-ink/70 leading-[1.8] font-serif text-sm md:text-base space-y-5 mb-8">
        <p>AI 预批改之后，她继续把结果接进错题本和作业总评。</p>
        <p><strong className="text-ink font-sans font-medium">错题本部分</strong>，她设计题目状态识别与错题归集规则，让系统能够基于教师最终批改结果判断题目状态，并自动归集错题，支持后续复习和举一反三题生成推荐。</p>
        <p><strong className="text-ink font-sans font-medium">作业总评部分</strong>，她将作业完成情况、错题切图和教师预设评价作为输入条件，根据不同入参搭建workflow，让反馈不再是一段统一话术，而是根据学生作业表现生成的个性化总评。</p>
      </div>

      <div className="lg:hidden flex flex-col items-start gap-0.5 mb-8">
        {flowNodes.map((node, i) => (
          <div key={node} className="flex flex-col items-center">
            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.15 }}
               className="border border-ink/20 px-3 py-2 text-xs md:text-sm font-mono hover:border-klein hover:text-klein transition-colors cursor-default"
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

      <div className="hidden lg:flex items-center justify-between mb-8 relative w-full">
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
            className="relative z-10 bg-cold-white border border-ink/20 px-3 py-2 text-xs font-mono hover:border-klein hover:text-klein transition-colors cursor-default whitespace-nowrap"
          >
            {node}
          </motion.div>
        ))}
      </div>
      
      <div className="border-t border-ink/10 pt-5">
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
      className="border border-ink bg-cold-white p-6 md:p-8 mb-10"
    >
      <div className="text-sm font-mono tracking-widest uppercase mb-6 text-ink/40">ITERATION SYSTEM</div>
      
      <h3 className="text-lg md:text-xl font-bold mb-6">上线不是结束，她还搭了一套让效果继续变稳，功能能够迭代的机制。</h3>
      
      <div className="text-ink/70 leading-[1.8] font-serif text-sm md:text-base space-y-5 mb-8 border-b border-ink/10 pb-8">
        <p>为了让批改链路更加稳定，让批改效果能量化评估，她将各批改环节拆解成可评估指标，用BI报表进行周维度效果跟踪，用dify搭建辅助标注Agent用于样本标注，badcase归因。</p>
        <p>当批改结果出现异常时，问题不会停留在一句“模型不准”。<br/>它会被继续拆解为：<br/>是图片质量问题？是题目切分问题？是识别问题？是题库召回问题？还是 Prompt 和批改规则需要调整？</p>
        <p>她用这套机制，把模型问题变成可以被定位、被讨论、被优化的产品问题。</p>
        <p className="pt-2">面对灰度测试中批改准确率有待提升、教师使用率不高的问题，她持续复盘badcase，对比测试seed 1.8、Qwen 3.5 plus等新模型进行方案迭代，持续优化prompt、召回策略与批改规则，最终将AI批改系统嵌入原作业批改链路，在教学团队高度认可的前提下实现全量覆盖。</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-5">
        <StatItem title="单份作业批改耗时" pre="5 分钟 → " num="30" post=" 秒" />
        <StatItem title="教师人均节省时间" num="15" post=" 小时 / 月" />
        <StatItem title="上线后作业批改准确率" num="93.25" post="%" />
        <StatItem title="作业预批改教师采纳率" num="77.5" post="%" />
        <StatItem title="题目状态识别准确率" num="99" post="%" />
        <StatItem title="错题标注分析场景提效" pre="+" num="80" post="%" />
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
        {pre && <span className="font-sans text-[11px] md:text-xs text-ink/60 mr-1 align-bottom inline-block mb-1">{pre}</span>}
        <span className="font-mono text-2xl md:text-3xl font-light tracking-tighter">{num}</span>
        {post && <span className="font-sans text-[11px] md:text-xs text-ink/60 ml-1 align-bottom inline-block mb-1">{post}</span>}
      </motion.div>
      <div className="text-[9px] md:text-[11px] font-mono tracking-widest text-ink/40 uppercase mt-auto leading-relaxed">
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
      <ProjectB_CardFlow />
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
      <h3 className="text-xl md:text-2xl font-bold mb-12">AI广告素材拆片</h3>
      
      <div className="mb-12">
        <h4 className="text-lg md:text-xl font-medium leading-[1.6] mb-6 transition-colors duration-500 group-hover:text-klein">
          人工拉片最难复用的，不是视频本身，<br/>而是资深创意人的判断框架和专业洞察。
        </h4>
        <div className="text-ink/70 leading-[1.8] space-y-4 font-serif text-sm md:text-base">
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
  "这条素材如何被二创、仿写或复用？"
];

function ProjectB_Card2() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="border border-ink bg-ink text-cold-white p-8 md:p-12"
    >
      <div className="text-sm font-mono tracking-widest uppercase mb-8 text-cold-white/40">RESEARCH TO ANGLE</div>
      
      <h3 className="text-xl md:text-2xl font-bold mb-8 text-cold-white">先确定分析角度，再让 AI 进入流程。</h3>
      
      <div className="text-cold-white/80 leading-[1.8] font-serif text-sm md:text-base space-y-6 mb-12">
        <p>她没有直接把视频丢给模型生成总结。<br/>在设计前，她先结合竞品调研和客户反馈，判断广告创意团队真正需要从哪些角度拆素材。</p>
        <p>客户关心的不是“视频里有什么”这么简单，<br/>而是：</p>
      </div>

      <ul className="mb-12 space-y-4 font-sans text-sm md:text-base border-l border-cold-white/15 pl-6">
        {bQuestions.map((q, i) => (
          <li key={i} className="group flex items-start text-cold-white/80 transition-colors cursor-default">
            <span className="font-mono text-cold-white/30 mr-4 transition-colors duration-300 group-hover:text-klein">{(i + 1).toString().padStart(2, '0')}</span>
            <span className="group-hover:text-cold-white transition-colors duration-300">{q}</span>
          </li>
        ))}
      </ul>
      
      <div className="border-t border-cold-white/10 pt-6">
        <p className="font-mono text-xs md:text-sm tracking-widest uppercase text-cold-white/55 leading-[1.8]">
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
  const [hasStarted, setHasStarted] = useState(false);
  const [expandedCount, setExpandedCount] = useState(0);

  useEffect(() => {
    if (!hasStarted) return;

    let intervalId: ReturnType<typeof setInterval> | null = null;
    const kickoffId = setTimeout(() => {
      setExpandedCount(1);
      intervalId = setInterval(() => {
        setExpandedCount((prev) => {
          if (prev >= fieldCategories.length) {
            if (intervalId) clearInterval(intervalId);
            return prev;
          }
          return prev + 1;
        });
      }, 700);
    }, 1000);

    return () => {
      clearTimeout(kickoffId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [hasStarted]);

  const renderFieldCard = (
    cat: { name: string; examples: string[] },
    idx: number
  ) => {
    const isExpanded = expandedCount > idx;
    const numLabel = String(idx + 1).padStart(2, '0');

    return (
      <div
        key={cat.name}
        className={`relative w-full max-w-[200px] h-[120px] overflow-hidden border p-3.5 cursor-default transition-colors duration-500 ${
          isExpanded ? 'border-klein' : 'border-ink/20'
        }`}
      >
        <motion.div
          className="absolute inset-0 p-3.5 flex flex-col justify-center"
          animate={{
            opacity: isExpanded ? 0 : 1,
            y: isExpanded ? -10 : 0,
            scale: isExpanded ? 0.985 : 1,
          }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="font-mono text-xl md:text-2xl font-light text-ink/20 mb-2">
            {numLabel}
          </div>
          <div className="text-base md:text-lg font-bold text-ink/80">{cat.name}</div>
        </motion.div>

        <motion.div
          className="absolute inset-0 p-3.5 flex flex-col"
          animate={{
            opacity: isExpanded ? 1 : 0,
            y: isExpanded ? 0 : 12,
            scale: isExpanded ? 1 : 0.985,
          }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-medium text-klein mb-3 block text-xs md:text-sm">{cat.name}</span>
          <div className="space-y-1.5">
            {cat.examples.map((ex) => (
              <motion.div
                key={ex}
                animate={{
                  opacity: isExpanded ? 1 : 0,
                  x: isExpanded ? 0 : -6,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-[11px] md:text-xs font-mono text-klein/75 tracking-widest"
              >
                {'>'} {ex}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      onViewportEnter={() => {
        if (!hasStarted) setHasStarted(true);
      }}
      className="group border border-ink bg-cold-white p-8 md:p-12 transition-colors duration-500 hover:border-klein"
    >
      <div className="text-sm font-mono tracking-widest uppercase mb-8 text-ink/40">FIELD SYSTEM</div>
      <h3 className="text-lg md:text-xl font-bold mb-6 transition-colors duration-500 group-hover:text-klein">把人工经验拆成 AI 可以执行的字段。</h3>
      <p className="text-sm md:text-base font-medium leading-[1.6] mb-12 text-ink/80">
        她定义的不是几个简单标签，<br />而是一套能覆盖不同分析任务的素材拆解框架。
      </p>

      <div className="mb-10 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 justify-items-center">
          {fieldCategories.slice(0, 3).map((cat, i) => renderFieldCard(cat, i))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 justify-items-center">
          {fieldCategories.slice(3).map((cat, i) => renderFieldCard(cat, i + 3))}
        </div>
      </div>
      
      <div className="mb-12">
        <div className="text-xs font-mono tracking-widest uppercase text-ink/40 mb-4 block">SCENE PRESETS</div>
        <div className="flex flex-wrap gap-3">
          {scenePresets.map(preset => (
            <span key={preset} className="border border-ink/20 px-4 py-2 text-xs md:text-sm text-ink/60 font-mono uppercase cursor-default hover:border-klein hover:text-klein transition-colors whitespace-nowrap">
              {preset}
            </span>
          ))}
        </div>
      </div>

      <div className="border-t border-ink/10 pt-8 text-ink/70 leading-[1.8] font-serif text-sm md:text-base">
        <p>这些字段不是为了让页面看起来复杂。<br />它们的作用，是把 “资深创意人会看什么” 拆成 AI 可以稳定输出、团队可以继续复盘的结构。</p>
      </div>
    </motion.div>
  );
}

const bBadCaseLines = [
  "> MODEL OUTPUT: TOO GENERIC / 模型输出过于泛化",
  "> FIELD RESULT: NOT ACTIONABLE / 字段结果不可执行",
  "> CLIENT NEED: CREATIVE REPLAY / 客户需要创意复盘",
  "> PRODUCT ACTION: PROMPT / FIELD / REVIEW / 提示词 / 字段 / 复核"
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
      <h3 className="text-lg md:text-xl font-bold mb-10 text-cold-white">模型能输出，不代表输出能被客户使用。</h3>
      
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

      <div className="text-cold-white/80 leading-[1.8] font-serif text-sm md:text-base space-y-6">
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

function ProjectB_CardFlow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="border border-ink bg-cold-white p-8 md:p-12 w-full"
    >
      <div className="text-sm font-mono tracking-widest uppercase mb-8 text-ink/40">PROTOTYPE</div>
      <h3 className="text-lg md:text-xl font-bold mb-12">从素材选择，到批量解析，再到报告导出。</h3>

      <div className="flex flex-col md:flex-row flex-wrap md:items-center gap-2 md:gap-4 mb-12">
        {bFlowNodes.map((node, i) => (
          <div key={node} className="flex items-center">
            <span className="text-xs md:text-sm font-mono border border-ink/20 px-3 py-1.5 hover:border-klein hover:text-klein transition-colors cursor-default whitespace-nowrap">
              {node}
            </span>
            {i !== bFlowNodes.length - 1 && <span className="hidden md:inline-block ml-4 text-ink/30">{'->'}</span>}
            {i !== bFlowNodes.length - 1 && <span className="md:hidden block w-px h-4 bg-ink/20 mx-auto my-1"></span>}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 border-t border-ink/10 pt-10">
        <EvidenceThumb
          src="https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&fit=crop&w=400&q=80"
          title="选择素材流程"
          desc="平台已有素材库批量选中，而非重新上传。"
          autoReveal
          revealDelay={0}
        />
        <EvidenceThumb
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80"
          title="结构化表格"
          desc="多条素材解析结果对比，便于纵览导出。"
          autoReveal
          revealDelay={0.12}
        />
        <EvidenceThumb
          src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=400&q=80"
          title="素材详情拆解"
          desc="单条视频整体分析与分镜分析面板。"
          autoReveal
          revealDelay={0.24}
        />
      </div>
    </motion.div>
  );
}

function ProjectB_Card5() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="border border-ink bg-cold-white p-8 md:p-12 w-full"
    >
      <div className="text-sm font-mono tracking-widest uppercase mb-8 text-ink/40">BUSINESS RESULT</div>

      {/* 结果数据展示 */}
      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-y-10 gap-x-6 mb-16">
        <StatItem title="报告生成时间" pre="4 小时 → " num="15" post=" 分钟" />
        <StatItem title="广告分析效率提升" pre="+" num="65" post="%" />
        <StatItem title="单条视频解析成本" pre="≤ " num="0.01" post=" 元" />
        <StatItem title="纳入套餐体系" num="高版本" post=" 套餐增值" />
      </div>

      {/* V2 规划 */}
      <div className="border-t border-ink/10 pt-8">
        <h4 className="text-[10px] md:text-xs font-mono tracking-widest text-ink/40 uppercase mb-4">NEXT ITERATION / V2 PLANNING</h4>
        <div className="text-sm md:text-base text-ink/60 leading-[1.8] font-serif max-w-2xl">
          <p className="mb-2">基于客户反馈，她进一步规划 V2：<br/>更丰富的字段选择、自定义提示词、模型选择、脚本仿写建议，以及结果通知机制。</p>
          <p>这不是为了让功能更复杂，而是为了适配不同客户、不同类目、不同素材分析任务下的真实工作流。</p>
        </div>
      </div>
    </motion.div>
  );
}

function EvidenceThumb({
  src,
  title,
  desc,
  autoReveal = false,
  revealDelay = 0,
}: {
  src: string,
  title?: string,
  desc?: string,
  autoReveal?: boolean,
  revealDelay?: number,
}) {
  return (
    <div className="group relative overflow-hidden border border-ink/10 bg-[#f4f4f4] aspect-[4/3] flex flex-col items-center justify-center cursor-default">
      {/* 模拟一张原型的底图，低饱和、变暗 */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center grayscale mix-blend-multiply opacity-20 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        style={{ backgroundImage: `url(${src})` }}
        initial={autoReveal ? { scale: 1 } : false}
        whileInView={autoReveal ? { scale: 1.03 } : undefined}
        viewport={autoReveal ? { once: true, margin: "-80px" } : undefined}
        transition={autoReveal ? { duration: 0.7, delay: revealDelay, ease: [0.22, 1, 0.36, 1] } : undefined}
      />
      <div className="absolute inset-0 bg-cold-white/20" />
      
      {/* 红色批注模拟线 (弱化) */}
      <div className="absolute top-4 left-4 w-6 h-6 border border-red-500/20 rounded-[2px]" />
      <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-red-500/30 rounded-full" />
      
      {/* Hover Info */}
      <motion.div
        className={`absolute inset-0 p-4 bg-cold-white/95 flex flex-col justify-end items-start text-left ${
          autoReveal ? '' : 'opacity-0 group-hover:opacity-100 transition-opacity duration-300'
        }`}
        initial={autoReveal ? { opacity: 0 } : false}
        whileInView={autoReveal ? { opacity: 1 } : undefined}
        viewport={autoReveal ? { once: true, margin: "-80px" } : undefined}
        transition={autoReveal ? { duration: 0.45, delay: revealDelay + 0.08, ease: [0.22, 1, 0.36, 1] } : undefined}
      >
        <h5 className="font-mono text-xs md:text-sm font-bold text-ink mb-1 tracking-tight">{title}</h5>
        <p className="font-serif text-[10px] md:text-xs leading-[1.6] text-ink/70">{desc}</p>
      </motion.div>
      
      {/* Default text */}
      <motion.div
        className={`relative w-full h-full flex flex-col items-center justify-center mix-blend-difference ${
          autoReveal ? '' : 'opacity-20 group-hover:opacity-0 transition-opacity duration-300'
        }`}
        initial={autoReveal ? { opacity: 0.2 } : false}
        whileInView={autoReveal ? { opacity: 0 } : undefined}
        viewport={autoReveal ? { once: true, margin: "-80px" } : undefined}
        transition={autoReveal ? { duration: 0.35, delay: revealDelay, ease: [0.22, 1, 0.36, 1] } : undefined}
      >
        <span className="w-8 h-8 rounded-full border border-white mb-2 flex items-center justify-center text-white">+</span>
      </motion.div>
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
      <h3 className="text-xl md:text-2xl font-bold mb-4">EvalPilot AI 测评助手</h3>
      <p className="text-sm md:text-base font-mono text-ink/60 mb-12">帮助初级 AI PM，在 MVP 阶段搭起评测与迭代闭环。</p>
      
      <div className="mb-12">
        <h4 className="text-lg md:text-xl font-medium leading-[1.6] mb-6 transition-colors duration-500">
          AI 产品的闭环，不是从上线开始，<br/>而是从 MVP 阶段的评测指标开始。
        </h4>
        <div className="text-ink/70 leading-[1.8] space-y-4 font-serif text-sm md:text-base">
          <p>她在 AI 作业批改项目里发现：<br />一个 AI 功能能跑起来，并不代表它已经具备上线价值。</p>
          <p>对初级 AI PM 来说，更容易被忽略的是：<br />这个功能应该用什么样本验证，应该看哪些指标，什么输出算好，什么输出算坏，以及下一轮迭代应该改哪里。</p>
          <p>于是，她把自己在 AI 作业批改、广告素材拆片、作业总评和错题举一反三等项目里遇到的评测动作，沉淀成了 EvalPilot。</p>
        </div>
      </div>
      
      <div className="border-t border-ink/10 pt-6 mt-8">
        <p className="font-mono text-xs md:text-sm tracking-widest uppercase text-ink/50 italic leading-relaxed group-hover:text-klein transition-colors duration-300">
          “它不是替产品经理做最终判断。它更像一个评测脚手架，帮助初级 PM 更早拥有闭环意识，让测评的经验可以数据化沉淀。”
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
      
      <h3 className="text-xl md:text-2xl font-bold mb-8 leading-[1.4]">问题不是“AI 能不能生成”，而是“生成之后怎么判断”。</h3>
      
      <div className="text-ink/70 leading-[1.8] font-serif text-sm md:text-base space-y-6 mb-12 border-b border-ink/10 pb-12">
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
               className="group border border-ink/20 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-mono hover:border-klein transition-colors cursor-default"
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
  const [hasStarted, setHasStarted] = useState(false);
  const [expandedCount, setExpandedCount] = useState(0);

  useEffect(() => {
    if (!hasStarted) return;

    let intervalId: ReturnType<typeof setInterval> | null = null;
    const kickoffId = setTimeout(() => {
      setExpandedCount(1);
      intervalId = setInterval(() => {
        setExpandedCount((prev) => {
          if (prev >= cSteps.length) {
            if (intervalId) clearInterval(intervalId);
            return prev;
          }
          return prev + 1;
        });
      }, 700);
    }, 1100);

    return () => {
      clearTimeout(kickoffId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [hasStarted]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      onViewportEnter={() => {
        if (!hasStarted) setHasStarted(true);
      }}
      className="border border-ink bg-cold-white p-8 md:p-12"
    >
      <div className="text-sm font-mono tracking-widest uppercase mb-8 text-ink/40">EVALUATION WORKFLOW</div>
      <h3 className="text-lg md:text-xl font-bold mb-12">把 AI 测评拆成 4 个可执行步骤。</h3>
      
      <div className="grid md:grid-cols-4 border-l md:border-l-0 md:border-t border-ink/20">
        {cSteps.map((step, i) => (
          <div
            key={step.num}
            className={`border-b md:border-b-0 md:border-r p-6 transition-colors cursor-default flex flex-col md:min-h-[240px] last:border-b-0 md:last:border-r-0 ${
              expandedCount > i ? 'border-klein bg-klein/[0.02]' : 'border-ink/20'
            }`}
          >
            <span className={`font-mono text-xs md:text-sm mb-4 transition-colors duration-500 ${expandedCount > i ? 'text-klein' : 'text-ink/40'}`}>
              {step.num}
            </span>
            <span className={`font-bold text-sm md:text-base mb-4 transition-colors duration-500 ${expandedCount > i ? 'text-klein' : 'text-ink'}`}>
              {step.title}
            </span>
            <motion.p
              initial={false}
              animate={{
                opacity: expandedCount > i ? 1 : 0,
                height: expandedCount > i ? 'auto' : 0,
                y: expandedCount > i ? 0 : 8,
              }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs md:text-sm font-serif text-ink/70 leading-[1.6] overflow-hidden"
            >
              {step.desc}
            </motion.p>
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

function ProjectC_Card5() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="border border-ink bg-cold-white p-8 md:p-12"
    >
      <div className="text-sm font-mono tracking-widest uppercase mb-8 text-ink/40">SELF VALIDATION</div>
      
      <h3 className="text-lg md:text-xl font-bold mb-8 leading-[1.4]">她没有停在方法论，而是把它做成了上线可运行 Demo。<br />它不成熟，但已经跑通了一条从样本到迭代的闭环。</h3>
      <p className="text-ink/70 font-serif text-sm md:text-base mb-6">
        这个 Demo 通过 AI Coding 快速搭建，完成了从任务初始化、评测方案设计、报告模板预览到 Prompt 优化的完整路径。
      </p>
      
      <div className="text-ink/70 leading-[1.8] font-serif text-sm md:text-base space-y-6 mb-12 border-b border-ink/10 pb-12">
        <p>她基于自己做过的 AI 作业批改、广告素材拆片、AI 作业总评、错题举一反三、AI 客服等任务，完成了自用验证。</p>
        <p>测试样本一部分来自过往项目中的真实测试样本，<br/>一部分由单条示例生成结构化样本，用于快速搭建评测方案草稿。</p>
        <p>这个 Demo 的意义不是替代资深 PM 的判断，<br/>而是帮助初级 PM 在较短时间内，搭起第一版评测框架。</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-8 mb-4">
        <StatItem title="结构化测试样本整理" num="120" post="+" />
        <StatItem title="AI 任务场景自用验证" num="5" post=" 类" />
        <StatItem title="自用流程估算时间" pre="约 90 分钟 → 约 " num="15" post=" 分钟" />
      </div>

    </motion.div>
  );
}
