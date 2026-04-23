const resumeData = {
  about: [
    {
      kicker: "About",
      title: "个人概况",
      meta: "林晓军 / AI大模型应用方向",
      note: "集美大学计算机科学与技术专业，主攻 AI 应用、Agent 与后端开发",
      description: "具备扎实的前后端开发基础，持续关注 AI 应用、Agent、RAG 知识库与企业智能化场景，能较快理解业务需求并推动方案落地。",
      details: [
        "求职意向为 AI 大模型应用方向，出生于 2003 年 9 月，籍贯福建泉州。",
        "具备较强学习能力、问题定位能力与文档输出能力，做事认真负责，适应性强。",
        "希望在真实业务场景中持续深耕 Agent、RAG、Text-to-SQL 等 AI 应用落地方向。"
      ]
    },
    {
      kicker: "About",
      title: "教育背景",
      meta: "集美大学 / 2022.09 - 2026.06",
      note: "计算机科学与技术专业",
      description: "本科阶段系统学习计算机基础课程，为后端开发、数据库设计、AI 应用实践打下了较完整的技术基础。",
      details: [
        "主修课程包括计算机网络、计算机组成原理、操作系统、数据结构、Java、数据库、C 语言等。",
        "在校期间持续参与项目开发、校园管理工作和工程实践，理论与实践结合较紧密。",
        "预计于 2026 年 6 月毕业，课程体系覆盖软件开发、系统基础与数据库等核心方向。"
      ]
    },
    {
      kicker: "About",
      title: "求职画像",
      meta: "AI大模型应用开发 / 厦门优先",
      note: "偏好兼具工程落地与业务价值的岗位环境",
      description: "更倾向于能把大模型能力真正接入企业业务系统的岗位，例如知识问答、智能客服、问数助手、文档理解与 Agent 平台方向。",
      details: [
        "有 Java 后端、RAG 系统、Agent 开发和企业业务集成的真实项目经历。",
        "既能处理接口、数据库、中间件，也能完成前端界面和系统联调。",
        "目标岗位聚焦 AI 应用开发、Agent 开发以及 Java 后端结合大模型应用方向。"
      ]
    }
  ],
  skills: [
    {
      kicker: "Skill Stack",
      title: "AI 与 Agent 开发",
      meta: "LangChain / LangGraph / RAGFlow / Vanna",
      note: "具备 RAG 系统构建、Agent 设计与企业场景落地经验",
      description: "熟练掌握基于 LangChain 的 Agent 开发流程，具备复杂文档解析、向量化存储、多路召回和检索增强问答的实战经验。",
      details: [
        "熟悉 RAGFlow、Vanna 等框架，能独立完成复杂文档解析、切片、向量化与检索链路搭建。",
        "具备多路召回、重排序、Prompt 设计、上下文注入和工具调用链路设计能力。",
        "有企业制度问答、智能问数、电商智能客服等 AI 应用项目实践。"
      ]
    },
    {
      kicker: "Skill Stack",
      title: "Java 后端开发",
      meta: "Spring Boot 3.x / Spring MVC / Sa-Token",
      note: "能独立完成接口开发、业务模块实现与权限控制",
      description: "拥有扎实的 Java 基础，熟练使用 Spring Boot 3.x 与 Spring MVC 构建高可用 RESTful API，并具备权限控制与数据隔离设计能力。",
      details: [
        "熟悉用户认证、业务模块开发、文档处理、接口联调与工程化构建流程。",
        "掌握 Sa-Token 权限控制、数据隔离方案以及后端安全控制思路。",
        "具备将 AI 应用能力与 Java 后端系统集成的工程经验。"
      ]
    },
    {
      kicker: "Skill Stack",
      title: "数据库与中间件",
      meta: "MySQL / Redis / SQL 优化",
      note: "关注性能、缓存策略与查询安全",
      description: "熟练掌握 MySQL 数据库设计，具备较强 SQL 优化能力，并能使用 Redis 解决高频访问、会话管理与限流场景。",
      details: [
        "有索引优化、Explain 分析、复杂 SQL 样本沉淀和 Text-to-SQL 安全审计相关实践。",
        "熟练使用 Redis 实现缓存、多级限流、验证码登录和高频数据访问优化。",
        "能结合业务需求处理性能、稳定性与数据安全问题。"
      ]
    },
    {
      kicker: "Skill Stack",
      title: "前端与工程化",
      meta: "Vue 3 / Element Plus / Axios / Git / Maven / Postman",
      note: "具备全栈意识，能完成管理系统前端开发与接口联调",
      description: "能基于 Vue 3 + Element Plus 开发用户端与管理端界面，并熟练使用工程化工具完成接口联调、版本管理和测试协作。",
      details: [
        "使用 Vue Router 进行页面路由控制，通过 Axios 完成与后端 RESTful API 的交互。",
        "具备前后端联调、模块拆分、调试测试和版本控制的完整开发意识。",
        "可独立完成中小型管理系统的前端实现与后端配合开发。"
      ]
    }
  ],
  projects: [
    {
      kicker: "Project",
      title: "企业 AI 智能制度问答助手",
      meta: "2026.02 - 至今 / 厦门轻工集团工业互联有限公司",
      note: "基于 RAGFlow 构建企业制度知识库问答系统，并嵌入 OA 门户",
      description: "针对公司内部制度文档格式复杂、传统检索准确率低的问题，构建高精度知识库问答系统，实现复杂文档解析、向量存储与智能问答全链路能力。",
      details: [
        "基于 RAGFlow DeepDoc 优化复杂制度文档解析，提升长表格、多级标题等结构化识别能力。",
        "设计并落地多路召回 + 重排序检索链路，提升制度类问答的召回质量与答案相关性。",
        "知识问答能力以侧边栏形式接入 OA 门户，相较传统检索方案召回准确率提升约 30%。"
      ]
    },
    {
      kicker: "Project",
      title: "电商智能客服智能体",
      meta: "2026.01 - 2026.03",
      note: "面向扫地机器人客服场景的 RAG 智能体系统",
      description: "构建基于大模型的 RAG 智能体系统，实现专业问答、场景化报告生成以及外部业务数据联动，服务电商客服场景。",
      details: [
        "基于 LangChain / LangGraph 实现具备 ReAct 思维链的业务 Agent。",
        "基于 ChromaDB + Embedding 构建领域知识库，完成文档清洗、切分、向量化与答案生成闭环。",
        "设计多工具协同调用链路，打通知识检索、用户标识获取、时间识别、外部记录查询等能力。"
      ]
    },
    {
      kicker: "Project",
      title: "基于 Vanna 的企业级智能问数助手",
      meta: "2026.02 - 至今 / 厦门轻工集团工业互联有限公司",
      note: "自然语言转 SQL 并输出可视化图表的企业问数系统",
      description: "为解决业务人员查询数据门槛高、依赖开发写 SQL 的问题，开发基于 LLM 的智能问数系统，实现自然语言问数、自主查询和可视化结果展示。",
      details: [
        "基于 Vanna 的 RAG 机制导入数据库 DDL、元数据定义与 200+ 核心业务 SQL 样本，增强语义理解。",
        "围绕合同管理、资产公司等场景持续优化 Text-to-SQL 提示词与知识样本，提升复杂查询生成效果。",
        "在 Java 后端集成 Druid SQL 解析器，对模型生成 SQL 二次审计，并注入多租户隔离条件保障安全。"
      ]
    },
    {
      kicker: "Project",
      title: "校园快递代取系统",
      meta: "2025.05 - 2025.08",
      note: "基于 Vue 3 + Element Plus 实现用户端与管理员端页面",
      description: "围绕登录认证、快递下单与订单跟踪等业务流程，完成前端页面开发、接口交互和联调测试工作。",
      details: [
        "使用 Vue Router 实现页面路由控制，通过 Axios 完成与后端 RESTful API 的数据交互。",
        "配合后端使用 Postman 调试接口，完成下单、订单状态更新等核心业务流程联调。",
        "保证用户端和管理员端核心功能稳定可用。"
      ]
    },
    {
      kicker: "Project",
      title: "新闻聚合与管理平台",
      meta: "2025.12 - 2026.01",
      note: "基于 Spring Boot 3.5 + Maven 搭建新闻管理后端",
      description: "完成用户注册登录、新闻内容获取、收藏管理等核心功能模块开发，并负责数据库设计与数据持久化优化。",
      details: [
        "基于 Spring MVC 实现 RESTful 风格接口，完成核心业务模块开发。",
        "采用 MySQL 8.0 设计关系型数据库，结合 MyBatis-Plus 实现持久化操作。",
        "通过高效 SQL 与合理索引设置优化数据访问效率。"
      ]
    },
    {
      kicker: "Project",
      title: "校园二手交易平台",
      meta: "2024.09 - 2024.12",
      note: "主导后端业务逻辑开发，构建 C2C 交易系统",
      description: "负责发布、搜索、订单管理等核心模块，并围绕首页热门商品流、搜索性能与数据库结构进行性能优化。",
      details: [
        "利用 Spring Boot 3 构建二手交易系统的核心业务逻辑。",
        "引入 Redis 缓存高频访问数据，利用 Explain 和复合索引降低慢查询风险。",
        "优化 MySQL 索引结构，实现商品标题及分类的毫秒级全文检索。"
      ]
    }
  ],
  internships: [
    {
      kicker: "Internship",
      title: "产品开发",
      meta: "厦门亿特科技有限公司 / 2025.06 - 2025.09",
      note: "负责通知系统、案卷管理、火灾调查表单等核心模块前后端开发",
      description: "在实习中参与多个真实业务模块的交付，覆盖文档生成、OCR 识别、权限控制、登录与限流等关键能力。",
      details: [
        "基于 POI-TL 和 PDFBox 实现 Word 模板填充、PDF 生成与合并。",
        "基于 Redis 实现短信验证码登录及多级限流机制。",
        "集成阿里云 OCR 实现证件自动识别，基于 PDF.js 实现文档预览，并使用 Sa-Token 实现细粒度权限控制和数据隔离。"
      ]
    },
    {
      kicker: "Internship",
      title: "Agent 开发",
      meta: "厦门轻工集团工业互联有限公司 / 2026.02 - 至今",
      note: "参与企业制度问答与智能问数等 AI 应用项目开发",
      description: "工作重点聚焦企业内部知识问答、智能问数与大模型业务落地，兼顾 RAG、后端集成和系统安全控制。",
      details: [
        "负责企业 AI 智能制度问答助手与企业级智能问数助手等项目的设计与实现。",
        "围绕复杂文档解析、知识召回、Text-to-SQL 和查询安全审计开展工程落地。",
        "推动 AI 能力直接接入企业 OA 门户和真实业务系统场景。"
      ]
    }
  ],
  campus: [
    {
      kicker: "Campus",
      title: "副班长",
      meta: "集美大学 / 2022.09 - 2025.09",
      note: "协助辅导员统筹班级运转与学生管理",
      description: "在班级管理与活动组织中承担沟通协调角色，具备较好的跨角色协作与任务推进能力。",
      details: [
        "负责学校政策与通知的精准传达及落地跟进，协调班委工作任务。",
        "协助策划并组织多场班级主题建设活动，增强班级凝聚力与团队协作氛围。",
        "搭建师生沟通桥梁，保障班级事务高效执行。"
      ]
    },
    {
      kicker: "Campus",
      title: "党建助理",
      meta: "集美大学 / 2025.06 - 2026.06",
      note: "协助完成党员发展、档案整理与平台维护工作",
      description: "在党建助理岗位中负责材料管理、流程跟进和信息化平台维护，注重规范性和执行效率。",
      details: [
        "协助党支部书记完成党员发展工作，整理并归档入党积极分子、发展对象等档案材料。",
        "协助使用“党员 e 家”等平台，完成党员信息维护、会议安排和学习材料发布。",
        "提升党务工作的规范性与信息化效率。"
      ]
    },
    {
      kicker: "Campus",
      title: "团支书",
      meta: "集美大学 / 2025.09 - 至今",
      note: "负责团支部组织建设、团员档案与主题团日活动",
      description: "全面负责班级团支部的组织建设与青年思想引领工作，具备较强的任务落地与组织推动能力。",
      details: [
        "统筹管理班级团员档案及团籍转接工作，确保团务流程规范。",
        "独立策划并组织多次主题团日活动，显著提升同学参与度与班级活力。",
        "持续推进“青年大学习”等日常团务学习任务，确保参学率保持前列。"
      ]
    }
  ],
  certificates: [
    {
      kicker: "Certificate",
      title: "英语能力与专利成果",
      meta: "CET-4 / CET-6 / 发明专利",
      note: "包含英语等级证书与一项发明专利证书",
      description: "证书不仅体现学习能力，也能辅助证明在技术阅读、表达和创新实践上的持续投入。",
      details: [
        "持有大学英语四级证书与大学英语六级证书。",
        "持有一项发明专利证书：《基于图像和点云融合的多物体重叠检测方法及系统》。",
        "具备较好的英文资料阅读能力和技术学习基础。"
      ]
    },
    {
      kicker: "Certificate",
      title: "奖学金",
      meta: "三等奖学金 / 二等奖学金",
      note: "在校期间获得多次奖学金认可",
      description: "奖学金记录反映了学习表现、综合能力和持续投入，也为求职中的稳定性与自驱力提供了补充证明。",
      details: [
        "获得 22-23 学年第一学期三等奖学金。",
        "获得 25-26 学年第一学期二等奖学金。",
        "获得 25-26 学年第二学期三等奖学金。"
      ]
    }
  ],
  contact: [
    {
      kicker: "Contact",
      title: "邮箱联系",
      meta: "1747475576@qq.com",
      note: "用于岗位沟通、材料发送与正式联系",
      description: "邮箱为 1747475576@qq.com，可用于发送简历、补充项目资料和接收面试通知。",
      details: [
        "可用于岗位投递、招聘沟通和正式材料往来。",
        "适合发送项目说明、作品链接和补充说明材料。",
        "作为主要联络方式，便于统一接收书面通知。"
      ]
    },
    {
      kicker: "Contact",
      title: "电话联系",
      meta: "13459162653",
      note: "用于面试确认、时间协调与即时沟通",
      description: "电话为 13459162653，适合在面试安排、沟通确认和紧急联系场景中使用。",
      details: [
        "可用于快速确认面试时间、线上会议和沟通安排。",
        "在需要即时反馈的场景中，电话联系效率更高。",
        "可以和邮箱配合使用，形成完整的沟通渠道。"
      ]
    },
    {
      kicker: "Contact",
      title: "GitHub",
      meta: "github.com/Kyrie5e/Self_Introduce",
      note: "展示页面项目、代码实现与更新记录",
      description: "GitHub 仓库中可以查看当前个人介绍页项目，并进一步了解代码组织、交互实现和更新记录。",
      details: [
        "仓库地址为 https://github.com/Kyrie5e/Self_Introduce 。",
        "可直接查看源码、提交记录和页面持续更新内容。",
        "适合作为简历外链和面试过程中补充展示项目实现细节的入口。"
      ]
    }
  ]
};

const sectionLookup = {
  about: "关于",
  skills: "技能",
  projects: "项目",
  internships: "实习",
  campus: "校园",
  certificates: "证书",
  contact: "联系方式"
};

const grids = document.querySelectorAll(".card-grid");
const modal = document.querySelector("#detail-modal");
const modalKicker = document.querySelector("#modal-kicker");
const modalTitle = document.querySelector("#modal-title");
const modalMeta = document.querySelector("#modal-meta");
const modalDescription = document.querySelector("#modal-description");
const modalDetails = document.querySelector("#modal-details");
const modalCloseButton = document.querySelector("#modal-close-button");
const navLinks = [...document.querySelectorAll(".nav-link")];
const sections = [...document.querySelectorAll("main section[id]")];
const observedSections = document.querySelectorAll(".section-observe");
const hero = document.querySelector(".hero");
const heroCursor = document.querySelector(".hero-cursor");
const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
let modalCloseTimer;

function renderCards() {
  grids.forEach((grid) => {
    const key = grid.dataset.section;
    const items = resumeData[key] ?? [];

    grid.innerHTML = items.map((item, index) => `
      <button
        class="resume-card"
        type="button"
        data-section="${key}"
        data-index="${index}"
        aria-label="查看 ${item.title} 的详细内容"
      >
        <div>
          <div class="card-top">
            <span class="card-chip">${item.kicker}</span>
            <span class="card-meta">${item.meta}</span>
          </div>
          <h3>${item.title}</h3>
        </div>
        <p class="card-note">${item.note}</p>
      </button>
    `).join("");
  });
}

function openModal(sectionKey, index) {
  const item = resumeData[sectionKey]?.[index];
  if (!item) {
    return;
  }

  window.clearTimeout(modalCloseTimer);

  modalKicker.textContent = `${sectionLookup[sectionKey]} / ${item.kicker}`;
  modalTitle.textContent = item.title;
  modalMeta.textContent = item.meta;
  modalDescription.textContent = item.description;
  modalDetails.innerHTML = item.details.map((detail) => `<li>${detail}</li>`).join("");

  modal.classList.remove("is-closing");

  if (!modal.open && typeof modal.showModal === "function") {
    modal.showModal();
  } else if (!modal.open) {
    modal.setAttribute("open", "open");
  }

  document.body.classList.add("modal-open");

  requestAnimationFrame(() => {
    modal.classList.add("is-visible");
  });
}

function closeModal() {
  if (!modal.open) {
    modal.removeAttribute("open");
    document.body.classList.remove("modal-open");
    return;
  }

  window.clearTimeout(modalCloseTimer);
  modal.classList.remove("is-visible");
  modal.classList.add("is-closing");
  document.body.classList.remove("modal-open");

  modalCloseTimer = window.setTimeout(() => {
    if (modal.open) {
      modal.close();
    } else {
      modal.removeAttribute("open");
    }
  }, 680);
}

function setupCards() {
  document.addEventListener("click", (event) => {
    const card = event.target.closest(".resume-card");
    if (card) {
      openModal(card.dataset.section, Number(card.dataset.index));
      return;
    }

    if (event.target === modal) {
      closeModal();
    }
  });

  modal.addEventListener("close", () => {
    window.clearTimeout(modalCloseTimer);
    modal.classList.remove("is-visible", "is-closing");
    document.body.classList.remove("modal-open");
  });

  modalCloseButton.addEventListener("click", closeModal);
}

function setupCardTilt() {
  const cards = document.querySelectorAll(".resume-card");

  cards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const xPercent = x / rect.width;
      const yPercent = y / rect.height;
      const tiltX = (0.5 - yPercent) * 16;
      const tiltY = (xPercent - 0.5) * 22;

      card.style.setProperty("--card-tilt-x", `${tiltX}deg`);
      card.style.setProperty("--card-tilt-y", `${tiltY}deg`);
      card.style.setProperty("--card-lift", "-8px");
    });

    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--card-tilt-x", "0deg");
      card.style.setProperty("--card-tilt-y", "0deg");
      card.style.setProperty("--card-lift", "0px");
    });
  });
}

function setActiveNav(id) {
  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
  });
}

function setupObservers() {
  const visibilityObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  }, {
    threshold: 0.18
  });

  observedSections.forEach((section) => visibilityObserver.observe(section));

  const navObserver = new IntersectionObserver((entries) => {
    const visibleEntry = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visibleEntry?.target?.id) {
      setActiveNav(visibleEntry.target.id);
    }
  }, {
    threshold: 0.35,
    rootMargin: "-20% 0px -40% 0px"
  });

  sections.forEach((section) => navObserver.observe(section));
}

function resetHeroSpotlight() {
  hero.style.setProperty("--pointer-x", "50%");
  hero.style.setProperty("--pointer-y", "46%");
  hero.style.setProperty("--tilt-x", "0deg");
  hero.style.setProperty("--tilt-y", "0deg");
}

function setupHeroSpotlight() {
  resetHeroSpotlight();

  if (reduceMotionQuery.matches) {
    return;
  }

  hero.addEventListener("pointerenter", () => {
    document.body.classList.add("hero-pointer");
  });

  hero.addEventListener("pointerleave", () => {
    document.body.classList.remove("hero-pointer");
    resetHeroSpotlight();
    heroCursor.style.transform = "translate3d(-999px, -999px, 0)";
  });

  hero.addEventListener("pointermove", (event) => {
    const rect = hero.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const xPercent = x / rect.width;
    const yPercent = y / rect.height;
    const tiltX = (0.5 - yPercent) * 20;
    const tiltY = (xPercent - 0.5) * 32;

    hero.style.setProperty("--pointer-x", `${x}px`);
    hero.style.setProperty("--pointer-y", `${y}px`);
    hero.style.setProperty("--tilt-x", `${tiltX}deg`);
    hero.style.setProperty("--tilt-y", `${tiltY}deg`);
    heroCursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
  });
}

function handleMotionChange() {
  resetHeroSpotlight();
  document.body.classList.remove("hero-pointer");
}

renderCards();
setupCards();
setupCardTilt();
setupObservers();
setupHeroSpotlight();

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

if (typeof reduceMotionQuery.addEventListener === "function") {
  reduceMotionQuery.addEventListener("change", handleMotionChange);
} else if (typeof reduceMotionQuery.addListener === "function") {
  reduceMotionQuery.addListener(handleMotionChange);
}
