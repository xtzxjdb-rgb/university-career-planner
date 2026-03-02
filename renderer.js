// 纯浏览器版本 - 文件通过链接直接访问
// 此文件保留用于兼容性，文件打开功能已通过 <a> 标签实现

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
