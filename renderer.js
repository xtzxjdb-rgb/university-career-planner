// 纯浏览器版本 - 文件通过链接直接访问
// 此文件保留用于兼容性，文件打开功能已通过 <a> 标签实现

// 教师简介数据
const teacherData = [
  {
    name: '丁怡',
    files: [
      { name: '导师个人介绍', type: 'doc', path: 'files/导师个人介绍-丁怡.docx' }
    ]
  },
  {
    name: '周世愚',
    files: [
      { name: '导师个人介绍', type: 'pdf', path: 'files/导师个人介绍-周世愚.pdf' }
    ]
  },
  {
    name: '王麒植',
    files: [
      { name: '导师个人介绍', type: 'pdf', path: 'files/导师个人介绍-王麒植.pdf' }
    ]
  },
  {
    name: '范翻',
    files: [
      { name: '导师个人介绍', type: 'pdf', path: 'files/导师个人介绍-范翻.pdf' }
    ]
  },
  {
    name: '陈怡心',
    files: [
      { name: '导师个人介绍', type: 'pdf', path: 'files/导师个人介绍-陈怡心.pdf' }
    ]
  },
  {
    name: '耿纯',
    files: [
      { name: '导师个人介绍', type: 'doc', path: 'files/导师个人介绍_耿纯.docx' }
    ]
  },
  {
    name: '李慧青',
    files: [
      { name: '导师个人介绍', type: 'doc', path: 'files/导师个人介绍-李慧青.docx' }
    ]
  },
  {
    name: '王斐然',
    files: [
      { name: '导师个人介绍', type: 'doc', path: 'files/导师个人介绍-王斐然.docx' }
    ]
  },
  {
    name: '阮睿',
    files: [
      { name: '导师个人介绍', type: 'pdf', path: 'files/导师个人介绍-阮睿.pdf' }
    ]
  }
];

// 打开教师简介弹窗
function openTeacherModal() {
  let modal = document.getElementById('teacherModal');
  if (!modal) {
    modal = createTeacherModal();
    document.body.appendChild(modal);
  }
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// 关闭教师简介弹窗
function closeTeacherModal() {
  const modal = document.getElementById('teacherModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// 创建教师简介弹窗
function createTeacherModal() {
  const modal = document.createElement('div');
  modal.id = 'teacherModal';
  modal.className = 'modal-overlay';
  
  let teachersHtml = '';
  teacherData.forEach(teacher => {
    let filesHtml = '';
    teacher.files.forEach(file => {
      filesHtml += `<a href="${file.path}" class="teacher-file-link file-type-${file.type}" target="_blank">${file.name}</a>`;
    });
    teachersHtml += `
      <div class="teacher-section">
        <h4>${teacher.name} 老师</h4>
        <div class="teacher-list">
          <div class="teacher-item">
            <span class="teacher-name">${teacher.name}</span>
            <div class="teacher-files">
              ${filesHtml}
            </div>
          </div>
        </div>
      </div>
    `;
  });
  
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h3>中心老师简介</h3>
        <button class="modal-close" onclick="closeTeacherModal()">&times;</button>
      </div>
      <div class="modal-body">
        <div class="video-notice">
          <p>📹 导师视频介绍请访问：<a href="https://pan.quark.cn/s/0d701b675f13" target="_blank" class="video-link">https://pan.quark.cn/s/0d701b675f13</a></p>
        </div>
        ${teachersHtml}
      </div>
    </div>
  `;
  
  // 点击遮罩层关闭弹窗
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeTeacherModal();
    }
  });
  
  // ESC键关闭弹窗
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeTeacherModal();
    }
  });
  
  return modal;
}

// 竞赛数据
const competitionData = [
  { id: 1, name: '"挑战杯"大学生课外学术科技作品竞赛', month: '2月', link: 'https://www.tiaozhanbei.net/', linkType: 'url' },
  { id: 2, name: '大学生创新创业训练计划（限"创意"赛道）', month: '3月', link: 'http://gjcxcy.bitu.edu.cn/Index.aspx', linkType: 'url' },
  { id: 3, name: '全国大学生能源经济学术创意大赛', month: '10月', link: 'https://energy.gibebt.ac.cn/enec/contribution/index.html#/index', linkType: 'url' },
  { id: 4, name: '全国大学生公共经济与政策论文大赛', month: '2月', link: 'https://mp.weixin.qq.com/s/wM-WvvKkik8j9oq40nx13w', linkType: 'url' },
  { id: 5, name: '全国大学生数学建模竞赛', month: '9月', link: 'files/2025高教社杯全国大学生数学建模竞赛第一次通知.pdf', linkText: '《2025高教社杯全国大学生数学建模竞赛第一次通知》', linkType: 'file' },
  { id: 6, name: '全国大学生数学竞赛', month: '1月', link: 'https://www.cmathc.org.cn/', linkType: 'url' },
  { id: 7, name: '美国大学生数学建模竞赛', month: '1月', link: 'https://www.comap.com/contests/m.', linkType: 'url' },
  { id: 8, name: '全国大学生英语竞赛（NECCS）', month: '12月', link: 'https://www.chinaneccs.cn/', linkType: 'url' },
  { id: 9, name: '"外研社·国才杯"系列英语赛事', month: '4月', link: 'https://ucc.fltrp.com/', linkType: 'url' },
  { id: 10, name: '"21世纪杯"全国英语演讲比赛', month: '1月', link: 'https://contest.i21st.cn/', linkType: 'url' },
  { id: 11, name: '中国"互联网+"大学生创新创业大赛', month: '2月', link: 'http://cxcyds.ziu.edu.cn/', linkType: 'url' },
  { id: 12, name: '全国大学生市场调查与分析大赛项目', month: '9月', link: 'http://www.china-cssc.org/show-289-1571-1.html', linkType: 'url' },
  { id: 13, name: '"工行杯"全国大学生金融科技创新大赛', month: '11月', link: 'https://www.gonghangbei.com/index/Lists/index.html?id=1', linkType: 'url' }
];

// 打开竞赛弹窗
function openCompetitionModal() {
  let modal = document.getElementById('competitionModal');
  if (!modal) {
    modal = createCompetitionModal();
    document.body.appendChild(modal);
  }
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// 关闭竞赛弹窗
function closeCompetitionModal() {
  const modal = document.getElementById('competitionModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// 创建竞赛弹窗
function createCompetitionModal() {
  const modal = document.createElement('div');
  modal.id = 'competitionModal';
  modal.className = 'modal-overlay';

  let rowsHtml = '';
  competitionData.forEach(item => {
    let linkHtml = '';
    if (item.linkType === 'file') {
      linkHtml = `<a href="${item.link}" class="competition-link file-download" download>${item.linkText}</a>`;
    } else {
      linkHtml = `<a href="${item.link}" class="competition-link" target="_blank">${item.link}</a>`;
    }
    rowsHtml += `
      <tr>
        <td class="comp-id">${item.id}</td>
        <td class="comp-name">${item.name}</td>
        <td class="comp-month">${item.month}</td>
        <td class="comp-link">${linkHtml}</td>
      </tr>
    `;
  });

  modal.innerHTML = `
    <div class="modal-content" style="max-width:950px;">
      <div class="modal-header">
        <h3>竞赛汇总表</h3>
        <button class="modal-close" onclick="closeCompetitionModal()">&times;</button>
      </div>
      <div class="modal-body">
        <table class="competition-table">
          <thead>
            <tr>
              <th>序号</th>
              <th>竞赛</th>
              <th>计划开始月份</th>
              <th>官网/通知</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </div>
    </div>
  `;

  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeCompetitionModal();
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeCompetitionModal();
    }
  });

  return modal;
}

// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', function() {
  console.log('大学生涯表网站已加载');
  
  // 添加文件链接的悬停效果
  const fileLinks = document.querySelectorAll('.file-link');
  fileLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.transform = 'translateX(5px)';
    });
    link.addEventListener('mouseleave', function() {
      this.style.transform = 'translateX(0)';
    });
  });
});
