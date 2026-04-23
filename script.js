const resumeData = {
  about: [
    {
      kicker: "About",
      title: "个人概况",
      meta: "在校生 / 求职中",
      note: "偏前端方向，兼顾页面表现与内容表达",
      description: "希望通过更有完成度的页面与项目表达，呈现自己在前端实现、交互理解和协作推进上的综合能力。",
      details: [
        "擅长把抽象内容整理成更适合浏览和展示的页面结构。",
        "关注视觉观感，也关注功能逻辑、信息密度与阅读路径。",
        "适合用于个人介绍页、作品集页或求职展示型网页。"
      ]
    },
    {
      kicker: "About",
      title: "教育背景",
      meta: "可替换为学校 / 专业 / 时间",
      note: "建议保留学校、专业、主修方向和关键课程",
      description: "这一项目前以占位内容呈现，方便你后续替换成自己的真实教育信息。",
      details: [
        "可以在弹窗里补充主修课程、绩点、竞赛或研究方向。",
        "如果岗位相关，也可以加入毕业设计或课程项目亮点。",
        "建议在正式投递前统一补全学校名称、专业和就读时间。"
      ]
    },
    {
      kicker: "About",
      title: "求职目标",
      meta: "前端开发 / 交互体验 / 展示型页面",
      note: "面向需要表达力与实现力同时在线的岗位",
      description: "更偏好既重视页面质量，也重视产品落地的团队环境，希望在真实业务中持续提升。",
      details: [
        "适合展示你想投递的岗位方向、城市偏好和入职状态。",
        "可以强调自己希望解决的问题类型，而不是只写职位名称。",
        "如果岗位范围较宽，建议保留 1 到 2 个最核心方向。"
      ]
    }
  ],
  skills: [
    {
      kicker: "Skill Stack",
      title: "前端开发",
      meta: "React / Vue / TypeScript",
      note: "组件化开发、页面性能优化、交互实现",
      description: "关注从设计稿到产品落地的完整链路，能够兼顾代码结构、页面表现与用户操作体验。",
      details: [
        "熟悉组件拆分、状态管理、接口联调与页面重构。",
        "能独立完成响应式布局、复杂交互动效与模块化样式组织。",
        "在可维护性与开发效率之间寻找平衡，避免页面只“能跑”但难迭代。"
      ]
    },
    {
      kicker: "Skill Stack",
      title: "交互设计",
      meta: "UI 还原 / 动效设计 / 信息层级",
      note: "重视页面节奏、反馈机制与叙事感",
      description: "不只关注界面是否好看，也关注信息是否被更顺畅地理解与浏览。",
      details: [
        "能够把复杂内容拆成分区、卡片与弹窗结构，降低信息阅读压力。",
        "习惯用动效提示层级关系和视线流向，而不是为了炫技堆砌动画。",
        "能够根据不同终端调整版式密度、触达路径与视觉优先级。"
      ]
    },
    {
      kicker: "Skill Stack",
      title: "工程协作",
      meta: "Git / 文档协同 / 需求沟通",
      note: "强调清晰接口、可追踪问题与稳定交付",
      description: "在团队协作里，更关注共识建立与交付稳定性，而不是只完成自己手上的代码。",
      details: [
        "能在需求评审阶段提前暴露风险与边界条件。",
        "习惯同步设计、开发、测试的关键节点，降低返工概率。",
        "面对不完整需求时，能先给出结构化方案，再快速推进最小可用版本。"
      ]
    },
    {
      kicker: "Skill Stack",
      title: "可视化表达",
      meta: "作品叙事 / 页面包装 / 内容编排",
      note: "让经历不只是罗列，而是有理解路径",
      description: "擅长把履历、项目、成果整理成更易被阅读和记忆的呈现方式。",
      details: [
        "可以从目标岗位出发，重组内容顺序，突出最相关的能力证据。",
        "通过版式、字体、色彩与留白建立节奏感，让信息更易扫读。",
        "适合制作作品集、个人介绍页、项目展示页等需要叙事表达的内容。"
      ]
    }
  ],
  projects: [
    {
      kicker: "Project",
      title: "校园活动报名系统",
      meta: "2025.03 - 2025.06",
      note: "负责报名流程页面、管理端视图和数据联调",
      description: "目标是让活动报名、审核与结果通知从线下表格切换为线上流程，提升组织效率。",
      details: [
        "拆分报名、审核、结果通知等核心模块，优化不同角色的操作路径。",
        "处理表单校验、状态切换与列表展示，保证高频操作更顺手。",
        "通过更清晰的界面分层，让组织者能快速定位数据与处理进度。"
      ]
    },
    {
      kicker: "Project",
      title: "个人作品展示站",
      meta: "2025.09 - 2025.10",
      note: "独立完成视觉风格、页面结构与前端实现",
      description: "将个人经历从简历文档扩展为沉浸式浏览页面，让访问者在短时间内建立对个人能力的完整印象。",
      details: [
        "采用模块化卡片与弹窗结构，让信息先简后繁，减轻首屏阅读压力。",
        "引入滚动叙事、悬停反馈与过渡动画，增强浏览的节奏感。",
        "针对桌面端与移动端分别调整布局密度与点击区域，提升可用性。"
      ]
    },
    {
      kicker: "Project",
      title: "数据看板重构",
      meta: "2025.11 - 2025.12",
      note: "参与信息结构重组与组件统一",
      description: "围绕业务方“看不清重点”的反馈，对原有数据看板进行结构整理与样式重构。",
      details: [
        "把分散的指标整合为更符合阅读顺序的卡片与分组布局。",
        "统一卡片结构、数字层级和状态色，减少视觉噪音。",
        "在保持已有数据接口不变的前提下提升信息获取效率。"
      ]
    }
  ],
  internships: [
    {
      kicker: "Internship",
      title: "前端开发实习生",
      meta: "某互联网公司 / 2025.07 - 2025.09",
      note: "参与营销活动页与内部管理台开发",
      description: "在实习中接触更贴近业务节奏的开发环境，学习如何在时间约束下稳定交付。",
      details: [
        "参与多个活动页面的搭建与维护，处理不同营销主题下的视觉实现。",
        "配合产品和设计快速迭代页面细节，关注上线节奏与反馈闭环。",
        "在导师指导下完成页面重构与样式整理，提升后续维护效率。"
      ]
    },
    {
      kicker: "Internship",
      title: "产品研发助理",
      meta: "某数字化团队 / 2024.12 - 2025.02",
      note: "连接需求整理、原型梳理与前端落地",
      description: "更接近产品与研发之间的协作位置，逐步建立从需求理解到页面交付的全局视角。",
      details: [
        "协助梳理需求优先级与页面逻辑，减少开发阶段的理解偏差。",
        "将原型拆解为更明确的页面模块，方便开发排期与实现。",
        "跟进问题修复与版本反馈，让交付不是一次性动作，而是可迭代过程。"
      ]
    }
  ],
  campus: [
    {
      kicker: "Campus",
      title: "学生组织负责人",
      meta: "2024.09 - 2025.06",
      note: "负责活动策划、团队协调与执行推进",
      description: "校园经历让我积累了组织协作、跨角色沟通与临场应对的经验。",
      details: [
        "统筹活动排期、人员分工与物料准备，推动活动按节点落地。",
        "在多人协作场景中协调不同意见，确保执行方向统一。",
        "面对临时变动时快速调整方案，优先保障核心目标达成。"
      ]
    },
    {
      kicker: "Campus",
      title: "竞赛项目成员",
      meta: "2024.04 - 2024.11",
      note: "负责展示页面与成果汇报部分",
      description: "在竞赛环境中学会了如何把技术成果转化为更易理解的表达方式。",
      details: [
        "参与项目方案梳理，并负责展示层内容结构与页面呈现。",
        "协助完成答辩材料组织，让亮点与创新点被更明确地看到。",
        "在有限时间里快速磨合分工，提高协作效率与输出完整度。"
      ]
    }
  ],
  certificates: [
    {
      kicker: "Certificate",
      title: "英语六级",
      meta: "CET-6 / 已通过",
      note: "具备文档阅读与基础沟通能力",
      description: "能够处理基础英文技术资料、接口文档与工具说明，为自学与协作提供支持。",
      details: [
        "可独立阅读常见前端文档、组件说明与技术教程。",
        "适合在项目中承担资料检索、方案比对与基础翻译理解工作。",
        "后续仍在持续提升专业表达与更深入的阅读效率。"
      ]
    },
    {
      kicker: "Certificate",
      title: "计算机相关证书",
      meta: "在校期间取得",
      note: "体现持续学习与专业基础能力",
      description: "证书本身不是终点，更重要的是背后代表的学习能力与持续投入。",
      details: [
        "覆盖基础专业课程与实操能力方向。",
        "能作为专业基础与学习自驱力的辅助证明。",
        "若用于正式求职展示，可替换为你的真实证书名称与获取时间。"
      ]
    }
  ],
  contact: [
    {
      kicker: "Contact",
      title: "邮箱联系",
      meta: "name@example.com",
      note: "适合发送岗位信息、面试邀请与正式沟通材料",
      description: "若用于正式投递，建议替换成你常用且稳定的个人邮箱。",
      details: [
        "建议使用专业命名格式，提升第一印象的一致性。",
        "可以在邮件签名中同步附上电话、学校与作品集链接。",
        "如果经常投递岗位，建议统一整理邮件主题模板。"
      ]
    },
    {
      kicker: "Contact",
      title: "电话沟通",
      meta: "188-0000-0000",
      note: "适合快速确认时间、面试安排与紧急沟通",
      description: "建议在真实使用时替换为可正常接听的号码，并注意工作日可联系时段。",
      details: [
        "在页面中展示时可根据需求决定是否完整公开。",
        "如担心隐私，可只在 PDF 简历或定向沟通中提供。",
        "保持语音信箱与短信通知通畅，有助于避免错过联系。"
      ]
    },
    {
      kicker: "Contact",
      title: "作品集 / GitHub",
      meta: "github.com/your-name",
      note: "适合补充项目代码、页面展示与持续学习轨迹",
      description: "如果你有线上作品、仓库或案例展示页，这里会是最能延伸了解的入口。",
      details: [
        "建议突出最能代表你的 3 到 5 个仓库或作品案例。",
        "为每个项目补充简介、职责与效果截图，降低理解成本。",
        "如果仓库较多，可以单独做一个聚合页来统一导流。"
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
