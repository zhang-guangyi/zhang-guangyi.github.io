(() => {
  const toggle = document.querySelector("[data-language-toggle]");
  if (!toggle) return;

  const entries = [
    ['.links a[href="#about"],.mobile-links a[href="#about"]', "关于"],
    ['.links a[href="#research"],.mobile-links a[href="#research"]', "研究"],
    ['.links a[href="#publications"],.mobile-links a[href="#publications"]', "论文"],
    ['.links a[href="#experience"],.mobile-links a[href="#experience"]', "经历"],
    ['.links a[href="#honors"],.mobile-links a[href="#honors"]', "荣誉"],
    [".hero .kicker", "浙江大学 · 信息与通信工程博士生"],
    [".hero .lede", "我的研究聚焦于<strong>语义通信</strong>、<strong>高效多模态人工智能</strong>与<strong>边云智能</strong>的交叉领域。", "html"],
    [".buttons .primary", '查看研究成果 <span>→</span>', "html"],
    [".buttons .btn:not(.primary)", '下载简历 <span>↓</span>', "html"],
    [".social a[href^='mailto:']", "邮箱 ↗"],
    [".photo>span", "<i></i> 欢迎科研合作与交流", "html"],
    [".profile-body>p", "信息与通信工程博士生"],
    [".profile dl>div:nth-child(1) dt", "所在地"],
    [".profile dl>div:nth-child(2) dt", "单位"],
    [".profile dl>div:nth-child(1) dd", "中国杭州"],
    [".profile dl>div:nth-child(2) dd", "浙江大学"],

    ["#about .kicker", "01 · 关于"],
    ["#about .heading h2", "以系统视角开展研究"],
    ["#about .prose .big", "我的研究关注一个核心问题：<em>智能模型如何在真实资源约束下实现高效通信、自适应与推理？</em>", "html"],
    ["#about .prose>p:nth-of-type(2)", '我目前在浙江大学信息与电子工程学院攻读博士学位，导师为<a href="https://person.zju.edu.cn/ylcai/" target="_blank">蔡云龙教授</a>和<a href="https://person.zju.edu.cn/yuguanding" target="_blank">俞关定教授</a>。2024 至 2025 年，我在伦敦国王学院进行博士联合培养，合作导师为<a href="https://scholar.google.co.uk/citations?hl=en&amp;user=m1xeKH4AAAAJ" target="_blank">Osvaldo Simeone 教授</a>。', "html"],
    ["#about .prose>p:nth-of-type(3)", "我的研究涵盖可学习信源信道联合编码、多模态语义系统、自适应边云推理以及预测驱动的模型监控，工作贯穿统计理论、算法设计与高效实现。"],
    [".now b", "近期"],
    [".now span", "探索高效 VLM/LLM 推理、工具增强视觉智能体，以及面向部署模型的可信监控方法。"],

    ["#research .kicker", "02 · 研究方向"],
    ["#research .intro h2", "三个相互关联的研究方向"],
    ["#research .intro>p", "面向通信效率的智能学习：从物理信道、多模态模型到分布式人工智能系统。"],
    [".research-card:nth-child(1) h3", "语义通信"],
    [".research-card:nth-child(1)>p", "研究可学习图像传输、多模态任务导向通信、安全语义编码与信道自适应系统。"],
    [".research-card:nth-child(1) li:nth-child(1)", "信源信道联合编码"],
    [".research-card:nth-child(1) li:nth-child(2)", "多模态编码"],
    [".research-card:nth-child(1) li:nth-child(3)", "自适应码率"],
    [".research-card:nth-child(2) h3", "高效多模态人工智能"],
    [".research-card:nth-child(2)>p", "研究长上下文 VLM/LLM 推理、混合线性注意力、视觉空间推理与工具增强智能体。"],
    [".research-card:nth-child(2) li:nth-child(2)", "推理系统"],
    [".research-card:nth-child(2) li:nth-child(3)", "智能体"],
    [".research-card:nth-child(3) h3", "边云智能"],
    [".research-card:nth-child(3)>p", "研究自适应投机解码、通信感知推理加速与具备统计可靠性的模型监控。"],
    [".research-card:nth-child(3) li:nth-child(1)", "投机解码"],
    [".research-card:nth-child(3) li:nth-child(2)", "风险监控"],
    [".research-card:nth-child(3) li:nth-child(3)", "边缘智能"],

    ["#publications .kicker", "03 · 代表性论文"],
    ["#publications .intro h2", "代表性研究成果"],
    ['[data-filter="featured"]', "重点论文"],
    ['[data-filter="all"]', "全部论文"],
    [".featured:nth-child(1) .summary", "利用半监督方法检测有害分布偏移，并提供有限样本下的误报概率保证。"],
    [".featured:nth-child(2) .summary", "面向文本、图像和语音多任务传输的统一 Transformer 语义通信系统。"],
    [".featured:nth-child(3) .summary", "通过层次化潜变量与自适应符号分配，实现鲁棒无线图像传输。"],
    [".featured:nth-child(4) .summary", "面向带宽受限边云推理的分布保持量化与自适应草稿调度方法。"],
    [".featured:nth-child(5) .summary", "跨多种星座阶数联合学习编码与调制的数字语义传输框架。"],
    [".featured:nth-child(6) .summary", "利用渐进式语义特征适配动态变化的带宽预算。"],
    [".featured:nth-child(1) .keywords span:nth-child(1)", "风险监控"],
    [".featured:nth-child(1) .keywords span:nth-child(2)", "预测驱动推断"],
    [".featured:nth-child(1) .keywords span:nth-child(3)", "分布偏移"],
    [".featured:nth-child(2) .keywords span:nth-child(1)", "多模态"],
    [".featured:nth-child(2) .keywords span:nth-child(2)", "Transformer"],
    [".featured:nth-child(2) .keywords span:nth-child(3)", "语义通信"],
    [".featured:nth-child(3) .keywords span:nth-child(1)", "可学习图像传输"],
    [".featured:nth-child(3) .keywords span:nth-child(2)", "层次化 VAE"],
    [".featured:nth-child(3) .keywords span:nth-child(3)", "信源信道联合编码"],
    [".featured:nth-child(4) .keywords span:nth-child(1)", "投机解码"],
    [".featured:nth-child(4) .keywords span:nth-child(2)", "边云智能"],
    [".featured:nth-child(4) .keywords span:nth-child(3)", "量化"],
    [".featured:nth-child(5) .keywords span:nth-child(1)", "数字编码"],
    [".featured:nth-child(5) .keywords span:nth-child(2)", "可学习调制"],
    [".featured:nth-child(5) .keywords span:nth-child(3)", "语义通信"],
    [".featured:nth-child(6) .keywords span:nth-child(1)", "渐进式编码"],
    [".featured:nth-child(6) .keywords span:nth-child(2)", "层次化 VAE"],
    [".featured:nth-child(6) .keywords span:nth-child(3)", "自适应带宽"],
    [".paper-links a", null, "paper-link"],
    [".scholar-note", '完整且最新的论文记录请见 <a href="https://scholar.google.com/citations?user=EGRWj9YAAAAJ&amp;hl=en" target="_blank">Google Scholar ↗</a>', "html"],

    ["#experience .kicker", "04 · 经历"],
    ["#experience .intro h2", "教育与科研经历"],
    ["#experience .intro>p", "我在浙江大学和伦敦国王学院的教育背景与联合培养经历。"],
    [".experience-timeline article:nth-child(1) .experience-type", "博士研究"],
    [".experience-timeline article:nth-child(1) h3", "信息与通信工程博士"],
    [".experience-timeline article:nth-child(1) .experience-place", "浙江大学 · 中国杭州"],
    [".experience-timeline article:nth-child(1) .experience-detail>p:last-of-type", "研究语义通信、可学习图像传输、多模态编码与边云智能。"],
    [".experience-timeline article:nth-child(1) .experience-tags span:nth-child(1)", "语义通信"],
    [".experience-timeline article:nth-child(1) .experience-tags span:nth-child(2)", "多模态人工智能"],
    [".experience-timeline article:nth-child(1) .experience-tags span:nth-child(3)", "无线智能"],
    [".experience-timeline article:nth-child(2) .experience-type", "联合培养博士生"],
    [".experience-timeline article:nth-child(2) h3", "信号处理与网络化人工智能"],
    [".experience-timeline article:nth-child(2) .experience-place", "伦敦国王学院 · 英国伦敦"],
    [".experience-timeline article:nth-child(2) .experience-detail>p:last-of-type", "与 Osvaldo Simeone 教授合作，研究通信感知投机解码以及面向高效、可靠部署式人工智能的预测驱动监控方法。"],
    [".experience-timeline article:nth-child(2) .experience-tags span:nth-child(1)", "大模型系统"],
    [".experience-timeline article:nth-child(2) .experience-tags span:nth-child(2)", "投机解码"],
    [".experience-timeline article:nth-child(2) .experience-tags span:nth-child(3)", "风险监控"],
    [".experience-timeline article:nth-child(3) .experience-type", "本科阶段"],
    [".experience-timeline article:nth-child(3) h3", "信息工程工学学士"],
    [".experience-timeline article:nth-child(3) .experience-place", "浙江大学 · 中国杭州"],
    [".experience-timeline article:nth-child(3) .experience-detail>p:last-of-type", "浙江大学优秀毕业生"],

    ["#honors .kicker", "05 · 荣誉奖励"],
    ["#honors .intro h2", "荣誉与奖励"],
    ["#honors .intro>p", "在科研影响力、学业表现与工程实践方面获得的代表性荣誉。"],
    [".award-row:nth-child(1) h3", "IEEE 通信学会 Stephen O. Rice 最佳论文奖"],
    [".award-row:nth-child(1) p", "IEEE Transactions on Communications 最佳论文 · 前 0.1%"],
    [".award-row:nth-child(2) h3", "博士研究生国家奖学金"],
    [".award-row:nth-child(2) p", "国家奖学金 · 前 2%"],
    [".award-row:nth-child(3) h3", "中国科协青年人才托举工程博士生专项"],
    [".award-row:nth-child(3) p", "中国科学技术协会 · 前 1%"],
    [".award-row:nth-child(4) h3", "华为菁英杯算法大赛"],
    [".award-row:nth-child(4) p", "华东赛区三等奖"],
    [".award-row:nth-child(5) h3", "浙江大学五好研究生"],
    [".award-row:nth-child(5) p", "连续两年获评"],
    [".award-row:nth-child(6) h3", "浙江大学优秀毕业生"],
    [".award-row:nth-child(6) p", "浙江大学"],

    ["#service .kicker", "06 · 学术服务"],
    ["#service .heading h2", "学术共同体"],
    ["#service .heading>p:last-child", "担任通信与信号处理领域多个主流期刊和会议的审稿人。"],
    [".services article:nth-child(1) h3", "期刊审稿"],
    [".services article:nth-child(2) h3", "会议审稿"],
    [".contact .kicker", "保持联系"],
    ['footer a[href="#top"]', "返回顶部 ↑"]
  ];

  const originals = new Map();

  function translatedPaperLink(text) {
    const normalized = text.trim().toLowerCase();
    if (normalized.startsWith("paper")) return "论文 ↗";
    if (normalized.startsWith("code")) return "代码 ↗";
    if (normalized.startsWith("award")) return "奖项 ↗";
    return text;
  }

  function setLanguage(language) {
    const isChinese = language === "zh";
    entries.forEach(([selector, chinese, mode = "text"]) => {
      document.querySelectorAll(selector).forEach((element) => {
        if (!originals.has(element)) {
          originals.set(element, mode === "html" ? element.innerHTML : element.textContent);
        }
        if (!isChinese) {
          if (mode === "html") element.innerHTML = originals.get(element);
          else element.textContent = originals.get(element);
        } else if (mode === "paper-link") {
          element.textContent = translatedPaperLink(originals.get(element));
        } else if (mode === "html") {
          element.innerHTML = chinese;
        } else {
          element.textContent = chinese;
        }
      });
    });

    document.documentElement.lang = isChinese ? "zh-CN" : "en";
    document.title = isChinese ? "张光义 · 个人学术主页" : "Guangyi Zhang · Researcher";
    toggle.textContent = isChinese ? "EN" : "中";
    toggle.setAttribute("aria-label", isChinese ? "Switch to English" : "切换到中文");
    localStorage.setItem("language", language);
  }

  toggle.addEventListener("click", () => {
    setLanguage(document.documentElement.lang === "zh-CN" ? "en" : "zh");
  });

  const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
  setLanguage(requestedLanguage === "zh" || (!requestedLanguage && localStorage.getItem("language") === "zh") ? "zh" : "en");
})();
