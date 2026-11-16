"use strict";

const timelineData = [
  // ================= 2023年 =================
  // 文体生活 (3)
  { date: "2023-09-29", title: "军训结束大合影", location: "佳山校区操场", category: "vitality", desc: "全班同学和教官一起合影留念，为期一个月的军训生涯。", image: "./images/image14.jpg" },
  { date: "2023-12-22", title: "“温暖冬日”冬至包饺子活动", location: "线上", category: "vitality", desc: "全班同学一起包饺子，度过了一个温暖的冬至。", image: "./images/image03.jpg" },
  { date: "2023-12-23", title: "“雪落佳山”堆雪人活动", location: "佳山校区操场", category: "vitality", desc: "班级同学齐聚操场进行堆雪人打雪仗的课外活动。", image: "./images/image15.jpg" },
  
  // 思想引领 (2)
  { date: "2023-10-14", title: "“诚信”教育主题班会", location: "教一103", category: "ideology", desc: "强化同学们的学术诚信意识与考风考纪，签署诚信考试承诺书。", image: "./images/image02.jpg" },
  { date: "2023-12-26", title: "“宿舍安全、诚信考试”主题班会", location: "教一103", category: "ideology", desc: "强调宿舍安全用电，规范考试纪律。", image: "./images/image09.png" },

  // ================= 2024年 =================
  // 思想引领 (3)
  { date: "2024-03-10", title: "春季学期“开学第一课”主题班会", location: "东教一北302", category: "ideology", desc: "总结上学期学习成果，规划新学期目标，强调防诈骗与校园安全。", image: "./images/image41.png" },
  { date: "2024-05-16", title: "习近平总书记五四重要寄语精神学习", location: "阶教204", category: "ideology", desc: "开展主题团日活动，深刻领会寄语精神，青春建功新时代。", image: "./images/image05.jpg" },
  { date: "2024-11-15", title: "“筑牢安全防线”网络安全主题班会", location: "教一105", category: "ideology", desc: "结合专业特色，讲解网络诈骗常见套路，提升班级同学反诈意识。", image: "./images/image40.png" },

  // 学风科创 (2)
  { date: "2024-04-12", title: "“朋辈领航”期中学业帮扶结对", location: "班级自习室", category: "study", desc: "针对高数、C语言等难点科目，成绩优异的同学与需要帮扶的同学结对互助。", image: "./images/image42.png" },
  { date: "2024-12-21", title: "美国大学生数学建模经验分享", location: "阶教103", category: "study", desc: "邀请获奖同学分享美赛经验，从组队、选题到论文排版全面指导。", image: "./images/image13.png" },

  // 志愿实践 (3)
  { date: "2024-02-15", title: "校级重点社会实践", location: "安徽省灵璧中学", category: "service", desc: "“我把工大带回家”赴宿州灵璧中学小分队，开展招生宣讲。", image: "./images/image27.png" },
  { date: "2024-08-12", title: "国家级重点社会实践", location: "马鞍山薛家洼", category: "service", desc: "安徽工业大学青春赋韵，文明抒怀文明实践队，深入调研生态保护。", image: "./images/image26.png" },
  { date: "2024-10-12", title: "以劳树德植树活动", location: "秀山校区", category: "service", desc: "以劳树德，以劳增智，以劳强体，以劳育美，同学们亲手种下树苗。", image: "./images/image38.png" },

  // 文体生活 (3)
  { date: "2024-03-24", title: "入团推优答辩活动", location: "佳山校区", category: "vitality", desc: "班级开展入团推优答辩活动，采取差额投票法，公平公正公开。", image: "./images/image39.png" },   
  { date: "2024-05-04", title: "五四大合唱活动", location: "秀山校区新大活", category: "vitality", desc: "班级组织队伍，加入院合唱团，用歌声传唱五四精神。", image: "./images/image34.png" }, 
  { date: "2024-05-18", title: "院诗朗诵比赛", location: "佳山校区", category: "vitality", desc: "班级组织队伍，创作诗行，朗诵工大，抒发爱校荣校之情。", image: "./images/image19.jpg" },
  { date: "2024-10-15", title: "院班级篮球比赛", location: "佳山校区操场", category: "vitality", desc: "班级积极备赛，踊跃参加，同学们在赛场上挥洒汗水，获得第三名。", image: "./images/image20.jpg" },

  // ================= 2025年 =================
  // 思想引领 (2)
  { date: "2025-04-05", title: "“清明祭英烈”主题团日活动", location: "马鞍山濮塘烈士陵园", category: "ideology", desc: "缅怀革命先烈，传承红色基因，班级团员青年代表敬献花圈。", image: "./images/image43.png" },
  { date: "2025-12-21", title: "学校第二十届团代会活动", location: "新大活", category: "ideology", desc: "班级多名党团代表踊跃参与，积极为学校发展建言献策。", image: "./images/image25.jpg" },

  // 学风科创 (4)
  { date: "2025-03-05", title: "新学期学业规划与考研动员会", location: "东教一北205", category: "study", desc: "班主任唐振老师为大家分析考研形势，指导同学制定本年度学习计划。", image: "./images/image44.jpg" },
  { date: "2025-04-20", title: "蓝桥杯赛事宣讲", location: "阶教103", category: "study", desc: "动员班级同学参与专业竞赛，以赛促学，分享往届真题与备战经验。", image: "./images/image12.png"},
  { date: "2025-10-27", title: "科创项目申报指导 · 大创项目宣讲", location: "东教一北302", category: "study", desc: "指导同学进行创新创业项目申报，激发班级科研兴趣。", image: "./images/image06.png" },
  { date: "2025-11-20", title: "期末互助复习攻坚会", location: "阶教203", category: "study", desc: "组建学霸答疑团，针对专业课开展长达两周的晚间互助复习。", image: "./images/image45.jpg" },

  // 志愿实践 (3)
  { date: "2025-03-10", title: "“雷锋月”志愿维修电脑活动", location: "佳山校区", category: "service", desc: "发挥计算机专业技能，帮助同学解决电脑卡顿、清灰等隐患。", image: "./images/image35.png" },
  { date: "2025-06-12", title: "整理寝室 卫生打扫活动", location: "F栋宿舍", category: "service", desc: "班级志愿者整理宿舍公共区域，打扫卫生保持整洁环境。", image: "./images/image23.jpg" },
  { date: "2025-07-15", title: "校级重点社会实践活动", location: "马鞍山市采秣社区", category: "service", desc: "“尺巷薪火”暑假社会实践队，深入社区开展数字助老与反诈宣传。", image: "./images/image28.png" },

  // 文体生活 (2)
  { date: "2025-03-15", title: "“走向操场”户外活动", location: "秀山校区操场", category: "vitality", desc: "响应体测激励制度，组织全班体育锻炼，开展趣味接力跑。", image: "./images/image11.png" },
  { date: "2025-11-06", title: "“拒绝焦虑，阳光心理”主题班会", location: "阶教105", category: "vitality", desc: "关注同学心理健康，开展解压小游戏，缓解期末压力。", image: "./images/image10.png" },

  // ================= 2026年 =================
  // 思想引领 (2)
  { date: "2026-04-20", title: "“清明祭英烈”主题教育活动", location: "东教一北502", category: "ideology", desc: "班级齐聚一堂，进行清明祭英烈主题教育的学习，弘扬爱国精神。", image: "./images/image36.png" }, 
  { date: "2026-10-08", title: "“砥砺前行，逐梦远航”主题班会", location: "东教一北206", category: "ideology", desc: "毕业季前的最后一次班会，班主任与辅导员为大家送上毕业祝福与寄语。", image: "./images/image08.png" },

  // 学风科创 (2)
  { date: "2026-04-15", title: "计算机专业就业方向解读", location: "东教一北208", category: "study", desc: "大四关键节点，辅导员与班主任进行就业指导，分析互联网行业现状。", image: "./images/image04.jpg" },

  // 志愿实践 (3)
  { date: "2026-02-15", title: "院级重点社会实践活动", location: "马鞍山第二中学", category: "service", desc: "“我把工大带回家”赴马鞍山市第二中学小分队，分享大学生活。", image: "./images/image21.jpg" },
  { date: "2026-08-15", title: "妇幼保健院志愿服务活动", location: "马鞍山妇幼保健院", category: "service", desc: "计算机科学与技术学院“智慧青春健康同行”暑期社会实践队。", image: "./images/image37.png" },
  { date: "2026-10-20", title: "校运动会期间轮岗值班活动", location: "秀山校区操场", category: "service", desc: "班级同学参与校运动会志愿者工作，为运动员们提供坚实后勤保障。", image: "./images/image33.png" }
];

const container = document.getElementById("timeline-container");
const filterBtns = document.querySelectorAll(".filter-btn");
const monthNames = ["01月", "02月", "03月", "04月", "05月", "06月", "07月", "08月", "09月", "10月", "11月", "12月"];

// 1. 排序（利用字符串比较，更加稳定）
timelineData.sort((a, b) => b.date.localeCompare(a.date));

function renderTimeline(filter = "all") {
  const filteredData = filter === "all" 
    ? timelineData 
    : timelineData.filter(item => item.category === filter);

  const groupedByYear = filteredData.reduce((acc, item) => {
    const year = item.date.substring(0, 4);
    if (!acc[year]) acc[year] = [];
    acc[year].push(item);
    return acc;
  }, {});

  let html = "";
  const years = Object.keys(groupedByYear).sort((a, b) => b - a);

  years.forEach(year => {
    html += `<div class="timeline-year-group">`;
    html += `<h3 class="year-marker">${year}</h3>`;
    
    groupedByYear[year].forEach(event => {
      const [_, month, day] = event.date.split("-");
      const monthStr = monthNames[parseInt(month) - 1];
      
      html += `
        <div class="timeline-item">
          <div class="timeline-date">
            <span class="day">${day}</span>
            <span class="month">${monthStr}</span>
          </div>
          <div class="timeline-dot"></div>
          <div class="timeline-card">
            <h3>${event.title}</h3>
            <p class="location">📍 ${event.location}</p>
            <p class="desc">${event.desc}</p>
            ${event.image ? `
              <div class="card-images">
                <img src="${event.image}" alt="${event.title}">
              </div>
            ` : ''}
          </div>
        </div>
      `;
    });
    
    html += `</div>`;
  });

  if (years.length === 0) {
    html = `<p style="color:var(--text-muted); text-align:center; padding: 40px 0;">该分类下暂无记录</p>`;
  }

  container.innerHTML = html;
}

filterBtns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    filterBtns.forEach(b => b.classList.remove("active"));
    e.target.classList.add("active");
    const filterValue = e.target.getAttribute("data-filter");
    renderTimeline(filterValue);
  });
});

renderTimeline();