const languageStorageKey = "resume-site-language";

const pageCopy = {
  zh: {
    htmlLang: "zh-CN",
    title: "林晓军 | AI大模型应用开发",
    navAria: "页面导航",
    toggleAria: "切换语言",
    nav: {
      about: "关于",
      skills: "技能",
      projects: "项目",
      internships: "实习",
      campus: "校园",
      certificates: "证书",
      contact: "联系方式"
    },
    hero: {
      baseTitle: "Hello, I&apos;m <span>Kyrie</span>",
      revealTitle: "你好，我是<span>林晓军</span>",
      roleline: "AI大模型应用开发/23岁/集美大学/厦门",
      scrollPrompt: "向下浏览履历模块"
    },
    sections: {
      about: {
        index: "01B / 关于",
        title: "关于",
        intro: "这部分写的是我的基本情况、教育经历和目前的求职方向。"
      },
      skills: {
        index: "02 / 技能",
        title: "技能",
        intro: "我的核心能力主要集中在 Agent 开发、RAG 系统、Java 后端以及数据库与前端工程实践。"
      },
      projects: {
        index: "03 / 项目",
        title: "项目",
        intro: "这里是我做过的几个代表项目，既有企业 AI 应用，也有后端和校园系统开发。"
      },
      internships: {
        index: "04 / 实习",
        title: "实习",
        intro: "两段实习让我积累了业务系统开发、AI 应用落地和企业场景接入方面的实际经验。"
      },
      campus: {
        index: "05 / 校园",
        title: "校园",
        intro: "校园经历更多体现了我的组织推进、事务协调和跨角色沟通能力。"
      },
      certificates: {
        index: "06 / 证书",
        title: "证书",
        intro: "这里补充了我的英语等级、发明专利和奖学金情况。"
      },
      contact: {
        index: "07 / 联系方式",
        title: "联系方式",
        intro: "如果你想进一步了解我，可以直接通过邮箱、微信或者 GitHub 联系我。"
      }
    },
    actionLabels: {
      copy: "复制",
      link: "跳转"
    },
    modalClose: "关闭",
    cardDetailLabel: (title) => `查看 ${title} 的详细内容`,
    copyFailed: "复制失败，请手动复制"
  },
  en: {
    htmlLang: "en",
    title: "Lin Xiaojun | AI LLM Application Developer",
    navAria: "Page navigation",
    toggleAria: "Switch language",
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      internships: "Internships",
      campus: "Campus",
      certificates: "Certificates",
      contact: "Contact"
    },
    hero: {
      baseTitle: "你好，我是<span>林晓军</span>",
      revealTitle: "Hello, I&apos;m <span>Kyrie</span>",
      roleline: "AI LLM Applications / 23 / Jimei University / Xiamen",
      scrollPrompt: "Scroll to explore my experience"
    },
    sections: {
      about: {
        index: "01B / About",
        title: "About",
        intro: "This section covers my profile, education background, and current job direction."
      },
      skills: {
        index: "02 / Skills",
        title: "Skills",
        intro: "My core strengths center on Agent development, RAG systems, Java backend work, and frontend engineering."
      },
      projects: {
        index: "03 / Projects",
        title: "Projects",
        intro: "These are a few representative projects I have worked on, including enterprise AI applications and campus systems."
      },
      internships: {
        index: "04 / Internships",
        title: "Internships",
        intro: "My internship experience gave me hands-on exposure to business systems, AI delivery, and enterprise integration."
      },
      campus: {
        index: "05 / Campus",
        title: "Campus",
        intro: "My campus experience reflects how I organize work, coordinate people, and keep tasks moving."
      },
      certificates: {
        index: "06 / Certificates",
        title: "Certificates",
        intro: "This section includes my English certificates, patent record, and scholarships."
      },
      contact: {
        index: "07 / Contact",
        title: "Contact",
        intro: "If you want to know more about me, you can reach me by email, WeChat, or GitHub."
      }
    },
    actionLabels: {
      copy: "COPY",
      link: "OPEN"
    },
    modalClose: "Close",
    cardDetailLabel: (title) => `View details for ${title}`,
    copyFailed: "Copy failed. Please copy it manually."
  }
};

const resumeDataByLang = {
  zh: {
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
        title: "制度助手",
        meta: "厦门轻工集团工业互联有限公司 / 2026.02 - 至今",
        note: "基于 RAGFlow 构建企业制度知识库问答系统，并接入 OA 门户",
        description: "在这段实习里，我负责制度文档解析、知识检索链路设计和问答能力接入，把企业内部制度问答真正落到了日常办公场景里。",
        details: [
          "基于 RAGFlow DeepDoc 优化复杂制度文档解析，提升长表格、多级标题等结构化识别能力。",
          "设计并落地多路召回和重排序检索链路，提升制度类问答的召回质量与答案相关性。",
          "将知识问答能力以侧边栏形式接入 OA 门户，相较传统检索方案召回准确率提升约 30%。"
        ]
      },
      {
        kicker: "Internship",
        title: "智能问数",
        meta: "厦门轻工集团工业互联有限公司 / 2026.02 - 至今",
        note: "基于 Vanna 搭建自然语言转 SQL 的企业问数能力",
        description: "我主要围绕业务人员自然语言查数的需求，参与 Text-to-SQL、查询安全审计和结果展示链路的实现，降低业务侧的数据使用门槛。",
        details: [
          "基于 Vanna 的 RAG 机制导入数据库 DDL、元数据定义与 200+ 核心业务 SQL 样本，增强语义理解。",
          "围绕合同管理、资产公司等场景持续优化 Text-to-SQL 提示词与知识样本，提升复杂查询生成效果。",
          "在 Java 后端集成 Druid SQL 解析器，对模型生成 SQL 二次审计，并注入多租户隔离条件保障安全。"
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
        note: "点击复制邮箱地址",
        action: {
          type: "copy",
          value: "1747475576@qq.com",
          successText: "邮箱已复制"
        }
      },
      {
        kicker: "Contact",
        title: "微信联系",
        meta: "lxj2003c",
        note: "点击复制微信账号",
        action: {
          type: "copy",
          value: "lxj2003c",
          successText: "微信账号已复制"
        }
      },
      {
        kicker: "Contact",
        title: "GitHub",
        meta: "github.com/Kyrie5e",
        note: "点击跳转 GitHub 仓库",
        action: {
          type: "link",
          value: "https://github.com/Kyrie5e",
          successText: "正在打开 GitHub"
        }
      }
    ]
  },
  en: {
    about: [
      {
        kicker: "About",
        title: "Profile",
        meta: "Lin Xiaojun / AI LLM Applications",
        note: "Computer Science student at Jimei University, focused on AI applications, Agents, and backend development",
        description: "I have a solid full-stack foundation and keep working on AI applications, Agents, RAG knowledge bases, and enterprise-facing intelligent systems. I can understand business needs quickly and push solutions into implementation.",
        details: [
          "My target role is AI LLM application development. I was born in September 2003 and come from Quanzhou, Fujian.",
          "I have strong learning ability, issue analysis skills, and technical writing habits, and I adapt quickly to new work.",
          "I want to keep going deeper in real business scenarios around Agents, RAG, and Text-to-SQL applications."
        ]
      },
      {
        kicker: "About",
        title: "Education",
        meta: "Jimei University / Sep 2022 - Jun 2026",
        note: "Computer Science and Technology",
        description: "My undergraduate coursework gave me a structured foundation in computer science, backend development, database design, and AI application practice.",
        details: [
          "Key courses include Computer Networks, Computer Organization, Operating Systems, Data Structures, Java, Databases, and C Programming.",
          "During university, I stayed involved in projects, campus management work, and engineering practice, so theory and practice stayed closely connected.",
          "I expect to graduate in June 2026, with coursework covering software engineering, system fundamentals, and database design."
        ]
      },
      {
        kicker: "About",
        title: "Career Goal",
        meta: "AI LLM Application Development / Xiamen Preferred",
        note: "I prefer roles that combine engineering execution with clear business value",
        description: "I am most interested in roles where LLM capability is connected to real business systems, such as knowledge Q&A, intelligent customer service, data query assistants, document understanding, and Agent platforms.",
        details: [
          "I already have hands-on experience in Java backend work, RAG systems, Agent development, and enterprise system integration.",
          "I can work across APIs, databases, middleware, frontend interfaces, and end-to-end system integration.",
          "My target roles focus on AI application development, Agent development, and Java backend work combined with LLM applications."
        ]
      }
    ],
    skills: [
      {
        kicker: "Skill Stack",
        title: "AI & Agent Development",
        meta: "LangChain / LangGraph / RAGFlow / Vanna",
        note: "Hands-on experience in RAG systems, Agent design, and enterprise deployment",
        description: "I am comfortable with Agent development based on LangChain and have practical experience in complex document parsing, vector storage, multi-route retrieval, and retrieval-augmented question answering.",
        details: [
          "I am familiar with frameworks such as RAGFlow and Vanna, and I can independently build document parsing, chunking, vectorization, and retrieval pipelines.",
          "I have worked on multi-route retrieval, reranking, prompt design, context injection, and tool-calling workflows.",
          "My project experience includes policy Q&A, smart data query, and e-commerce customer service agents."
        ]
      },
      {
        kicker: "Skill Stack",
        title: "Java Backend Development",
        meta: "Spring Boot 3.x / Spring MVC / Sa-Token",
        note: "Able to build APIs, business modules, and permission control independently",
        description: "I have a solid Java foundation and use Spring Boot 3.x and Spring MVC to build RESTful APIs, with practical understanding of permission control and data isolation.",
        details: [
          "I am familiar with authentication, business module development, document processing, API integration, and engineering workflows.",
          "I have experience with Sa-Token permission control, data isolation design, and backend security thinking.",
          "I can integrate AI capabilities into Java backend systems from an engineering perspective."
        ]
      },
      {
        kicker: "Skill Stack",
        title: "Databases & Middleware",
        meta: "MySQL / Redis / SQL Optimization",
        note: "Focused on performance, caching strategy, and query safety",
        description: "I work comfortably with MySQL schema design, SQL optimization, and Redis for high-frequency access, session management, and rate limiting.",
        details: [
          "I have practical experience with index tuning, Explain analysis, complex SQL sample accumulation, and Text-to-SQL safety checks.",
          "I use Redis for caching, layered rate limiting, verification-code login, and high-frequency access optimization.",
          "I can balance performance, stability, and data safety around real business requirements."
        ]
      },
      {
        kicker: "Skill Stack",
        title: "Frontend & Engineering",
        meta: "Vue 3 / Element Plus / Axios / Git / Maven / Postman",
        note: "Full-stack awareness with experience in admin frontend work and API integration",
        description: "I can build user-facing and admin interfaces with Vue 3 and Element Plus, and I am comfortable with API debugging, version control, and collaborative testing workflows.",
        details: [
          "I use Vue Router for page routing and Axios for RESTful API communication with backend services.",
          "I understand end-to-end frontend and backend integration, modular development, debugging, testing, and version control.",
          "I can independently complete frontend implementation for small and medium-sized management systems."
        ]
      }
    ],
    projects: [
      {
        kicker: "Project",
        title: "E-commerce Customer Service Agent",
        meta: "Jan 2026 - Mar 2026",
        note: "A RAG-based agent system built for robotic vacuum customer service scenarios",
        description: "I built an LLM-based RAG agent system that supports professional Q&A, scenario-based report generation, and external business data integration for e-commerce customer service.",
        details: [
          "Built a business Agent with ReAct-style reasoning using LangChain and LangGraph.",
          "Used ChromaDB and embeddings to build a domain knowledge base, including document cleaning, chunking, vectorization, and answer generation.",
          "Designed a multi-tool workflow connecting knowledge retrieval, user identification, time recognition, and external record queries."
        ]
      },
      {
        kicker: "Project",
        title: "Campus Parcel Pickup System",
        meta: "May 2025 - Aug 2025",
        note: "User-side and admin-side frontend built with Vue 3 and Element Plus",
        description: "I completed frontend pages, API interaction, and integration testing for login, parcel ordering, and order tracking workflows.",
        details: [
          "Implemented page routing with Vue Router and connected frontend pages to backend RESTful APIs through Axios.",
          "Worked with the backend team and used Postman to debug order placement and order status update flows.",
          "Kept the core features on both the user side and admin side stable and usable."
        ]
      },
      {
        kicker: "Project",
        title: "News Aggregation & Management Platform",
        meta: "Dec 2025 - Jan 2026",
        note: "News management backend built with Spring Boot 3.5 and Maven",
        description: "I developed core modules such as user registration, login, news retrieval, and favorites management, while also working on database design and persistence optimization.",
        details: [
          "Built RESTful interfaces with Spring MVC and completed the main business modules.",
          "Designed the relational database with MySQL 8.0 and implemented persistence using MyBatis-Plus.",
          "Improved data access efficiency through SQL optimization and well-designed indexes."
        ]
      },
      {
        kicker: "Project",
        title: "Campus Second-hand Marketplace",
        meta: "Sep 2024 - Dec 2024",
        note: "Led backend business logic development for a C2C trading system",
        description: "I handled core modules such as publishing, searching, and order management, and optimized hot product feeds, search performance, and database structure.",
        details: [
          "Built the core business logic of the marketplace with Spring Boot 3.",
          "Introduced Redis caching and used Explain analysis plus composite indexes to reduce slow query risk.",
          "Optimized MySQL indexes to achieve millisecond-level full-text search for product titles and categories."
        ]
      }
    ],
    internships: [
      {
        kicker: "Internship",
        title: "Product Development",
        meta: "Xiamen Yite Technology Co., Ltd. / Jun 2025 - Sep 2025",
        note: "Worked on the frontend and backend of notification systems, archive management, and fire investigation forms",
        description: "During this internship, I participated in delivering several real business modules, covering document generation, OCR, permission control, login workflows, and rate limiting.",
        details: [
          "Used POI-TL and PDFBox to support Word template filling, PDF generation, and PDF merging.",
          "Implemented SMS verification-code login and layered rate limiting with Redis.",
          "Integrated Alibaba Cloud OCR for automatic document recognition, used PDF.js for preview, and applied Sa-Token for fine-grained permission control and data isolation."
        ]
      },
      {
        kicker: "Internship",
        title: "Policy Assistant",
        meta: "Xiamen Light Industry Group Industrial Internet Co., Ltd. / Feb 2026 - Present",
        note: "Built an enterprise policy knowledge Q&A system with RAGFlow and integrated it into the OA portal",
        description: "In this internship, I worked on policy document parsing, retrieval workflow design, and Q&A integration, turning enterprise policy search into a real daily office capability.",
        details: [
          "Used RAGFlow DeepDoc to improve parsing of complex policy documents, including long tables and multi-level headings.",
          "Designed and implemented multi-route retrieval and reranking to improve answer relevance for policy-related questions.",
          "Integrated the Q&A capability into the OA portal sidebar and improved retrieval accuracy by about 30% over the previous solution."
        ]
      },
      {
        kicker: "Internship",
        title: "Smart Data Query",
        meta: "Xiamen Light Industry Group Industrial Internet Co., Ltd. / Feb 2026 - Present",
        note: "Built a natural-language-to-SQL data query capability with Vanna",
        description: "I focused on helping business users query data in natural language by working on Text-to-SQL generation, query safety checks, and result presentation workflows.",
        details: [
          "Imported database DDL, metadata definitions, and over 200 core SQL samples into a Vanna-based RAG workflow to strengthen semantic understanding.",
          "Continuously optimized prompts and knowledge samples for scenarios such as contract management and asset company data queries.",
          "Integrated the Druid SQL parser into the Java backend to audit generated SQL and inject tenant isolation conditions for safety."
        ]
      }
    ],
    campus: [
      {
        kicker: "Campus",
        title: "Vice Monitor",
        meta: "Jimei University / Sep 2022 - Sep 2025",
        note: "Supported the counselor in coordinating class operation and student management",
        description: "I played a coordination role in class management and event organization, which helped me build strong collaboration and task execution skills.",
        details: [
          "Delivered school policies and notices accurately and followed up on implementation while coordinating class committee work.",
          "Helped plan and organize multiple class activities to strengthen class cohesion and team collaboration.",
          "Served as a communication bridge between teachers and students to keep class affairs running efficiently."
        ]
      },
      {
        kicker: "Campus",
        title: "Party Affairs Assistant",
        meta: "Jimei University / Jun 2025 - Jun 2026",
        note: "Assisted with party member development, archive organization, and platform maintenance",
        description: "In this role, I handled material management, process follow-up, and information platform maintenance, with a strong focus on standardization and execution efficiency.",
        details: [
          "Assisted the party branch secretary with party member development work and organized archive materials for candidates and active applicants.",
          "Helped maintain information on the '党员 e 家' platform, including meeting schedules and study material publication.",
          "Improved the standardization and digital efficiency of party affairs work."
        ]
      },
      {
        kicker: "Campus",
        title: "League Branch Secretary",
        meta: "Jimei University / Sep 2025 - Present",
        note: "Responsible for organization building, member archives, and themed Youth League activities",
        description: "I took full responsibility for class Youth League organization and student engagement work, which strengthened my ability to drive tasks forward and organize people effectively.",
        details: [
          "Managed member archives and transfer workflows to keep Youth League administration well organized.",
          "Independently planned and organized multiple themed activities, significantly improving participation and class energy.",
          "Kept daily learning tasks such as '青年大学习' moving forward and maintained a strong participation rate."
        ]
      }
    ],
    certificates: [
      {
        kicker: "Certificate",
        title: "English & Patent",
        meta: "CET-4 / CET-6 / Invention Patent",
        note: "Includes English certificates and one invention patent",
        description: "These certificates reflect my learning ability and also support my ongoing effort in technical reading, communication, and innovation practice.",
        details: [
          "Holder of College English Test Band 4 and Band 6 certificates.",
          "Holder of an invention patent titled 'Multi-object Overlap Detection Method and System Based on Image and Point Cloud Fusion'.",
          "Able to read English technical materials with relatively strong learning ability."
        ]
      },
      {
        kicker: "Certificate",
        title: "Scholarships",
        meta: "Third Prize / Second Prize",
        note: "Received multiple scholarships during university",
        description: "My scholarship record reflects study performance, consistency, and continued effort, and it also supports the stability and self-drive I bring to work.",
        details: [
          "Received the Third Prize Scholarship in the first semester of the 2022-2023 academic year.",
          "Received the Second Prize Scholarship in the first semester of the 2025-2026 academic year.",
          "Received the Third Prize Scholarship in the second semester of the 2025-2026 academic year."
        ]
      }
    ],
    contact: [
      {
        kicker: "Contact",
        title: "Email",
        meta: "1747475576@qq.com",
        note: "Click to copy my email address",
        action: {
          type: "copy",
          value: "1747475576@qq.com",
          successText: "Email copied"
        }
      },
      {
        kicker: "Contact",
        title: "WeChat",
        meta: "lxj2003c",
        note: "Click to copy my WeChat ID",
        action: {
          type: "copy",
          value: "lxj2003c",
          successText: "WeChat ID copied"
        }
      },
      {
        kicker: "Contact",
        title: "GitHub",
        meta: "github.com/Kyrie5e/Self_Introduce",
        note: "Open the GitHub repository",
        action: {
          type: "link",
          value: "https://github.com/Kyrie5e/Self_Introduce",
          successText: "Opening GitHub"
        }
      }
    ]
  }
};

const siteNav = document.querySelector("#site-nav");
const langToggle = document.querySelector("#lang-toggle");
const heroBaseTitle = document.querySelector("#hero-base-title");
const heroRevealTitle = document.querySelector("#hero-reveal-title");
const heroBaseRoleline = document.querySelector("#hero-base-roleline");
const heroRevealRoleline = document.querySelector("#hero-reveal-roleline");
const scrollPrompt = document.querySelector("#scroll-prompt");
const sectionIndexNodes = [...document.querySelectorAll("[data-section-index]")];
const sectionTitleNodes = [...document.querySelectorAll("[data-section-title]")];
const sectionCopyNodes = [...document.querySelectorAll("[data-section-copy]")];
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
let actionFeedback;

let currentLanguage = "zh";
let modalCloseTimer;
let feedbackTimer;

try {
  const savedLanguage = window.localStorage.getItem(languageStorageKey);
  if (savedLanguage === "en" || savedLanguage === "zh") {
    currentLanguage = savedLanguage;
  }
} catch (error) {
  currentLanguage = "zh";
}

function getCurrentCopy() {
  return pageCopy[currentLanguage];
}

function getCurrentResumeData() {
  return resumeDataByLang[currentLanguage];
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  }[char]));
}

function resetModalImmediately() {
  window.clearTimeout(modalCloseTimer);
  if (modal.open && typeof modal.close === "function") {
    modal.close();
  }
  modal.removeAttribute("open");
  modal.classList.remove("is-visible", "is-closing");
  document.body.classList.remove("modal-open");
}

function renderCards() {
  const resumeData = getCurrentResumeData();
  const copy = getCurrentCopy();

  grids.forEach((grid) => {
    const key = grid.dataset.section;
    const items = resumeData[key] ?? [];

    grid.innerHTML = items.map((item, index) => `
      <button
        class="resume-card${key === "contact" ? " resume-card--contact" : ""}"
        type="button"
        data-section="${key}"
        data-index="${index}"
        ${key === "contact" ? `data-action-label="${copy.actionLabels[item.action?.type] || copy.actionLabels.copy}"` : ""}
        aria-label="${key === "contact"
          ? escapeHtml(item.note || item.title)
          : escapeHtml(copy.cardDetailLabel(item.title))}"
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

async function copyText(value) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const input = document.createElement("input");
  input.value = value;
  input.setAttribute("readonly", "readonly");
  input.style.position = "absolute";
  input.style.left = "-9999px";
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
}

function showFeedback(message) {
  if (!actionFeedback) {
    return;
  }

  window.clearTimeout(feedbackTimer);
  actionFeedback.textContent = message;
  actionFeedback.classList.add("is-visible");

  feedbackTimer = window.setTimeout(() => {
    actionFeedback.classList.remove("is-visible");
  }, 1800);
}

async function handleCardAction(card) {
  const sectionKey = card.dataset.section;
  const index = Number(card.dataset.index);
  const item = getCurrentResumeData()[sectionKey]?.[index];

  if (!item?.action) {
    openModal(sectionKey, index);
    return;
  }

  if (item.action.type === "copy") {
    try {
      await copyText(item.action.value);
      showFeedback(item.action.successText);
    } catch (error) {
      showFeedback(getCurrentCopy().copyFailed);
    }
    return;
  }

  if (item.action.type === "link") {
    window.open(item.action.value, "_blank", "noopener,noreferrer");
    showFeedback(item.action.successText);
  }
}

function openModal(sectionKey, index) {
  const item = getCurrentResumeData()[sectionKey]?.[index];
  if (!item) {
    return;
  }

  const copy = getCurrentCopy();
  window.clearTimeout(modalCloseTimer);

  modalKicker.textContent = `${copy.sections[sectionKey]?.title ?? ""} / ${item.kicker}`;
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
  document.body.insertAdjacentHTML("beforeend", '<div class="action-feedback" aria-live="polite"></div>');
  actionFeedback = document.querySelector(".action-feedback");

  document.addEventListener("click", async (event) => {
    const card = event.target.closest(".resume-card");
    if (card) {
      await handleCardAction(card);
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

function applyLanguage(language, { persist = true } = {}) {
  currentLanguage = language === "en" ? "en" : "zh";
  const copy = getCurrentCopy();

  document.documentElement.lang = copy.htmlLang;
  document.title = copy.title;
  document.body.dataset.lang = currentLanguage;

  siteNav.setAttribute("aria-label", copy.navAria);
  langToggle.setAttribute("aria-label", copy.toggleAria);

  navLinks.forEach((link) => {
    const key = link.dataset.nav;
    if (copy.nav[key]) {
      link.textContent = copy.nav[key];
    }
  });

  heroBaseTitle.innerHTML = copy.hero.baseTitle;
  heroRevealTitle.innerHTML = copy.hero.revealTitle;
  heroBaseRoleline.textContent = copy.hero.roleline;
  heroRevealRoleline.textContent = copy.hero.roleline;
  scrollPrompt.textContent = copy.hero.scrollPrompt;

  sectionIndexNodes.forEach((node) => {
    const key = node.dataset.sectionIndex;
    node.textContent = copy.sections[key]?.index ?? "";
  });

  sectionTitleNodes.forEach((node) => {
    const key = node.dataset.sectionTitle;
    node.textContent = copy.sections[key]?.title ?? "";
  });

  sectionCopyNodes.forEach((node) => {
    const key = node.dataset.sectionCopy;
    node.textContent = copy.sections[key]?.intro ?? "";
  });

  modalCloseButton.textContent = copy.modalClose;
  modalCloseButton.setAttribute("aria-label", copy.modalClose);

  resetModalImmediately();
  renderCards();
  setupCardTilt();

  if (persist) {
    try {
      window.localStorage.setItem(languageStorageKey, currentLanguage);
    } catch (error) {
      // Ignore storage errors in private browsing or restricted environments.
    }
  }
}

function setupLanguageToggle() {
  langToggle.addEventListener("click", () => {
    applyLanguage(currentLanguage === "zh" ? "en" : "zh");
  });
}

setupCards();
setupObservers();
setupHeroSpotlight();
setupLanguageToggle();
applyLanguage(currentLanguage, { persist: false });

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
