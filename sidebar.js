/* sidebar.js — Auto-generates & injects navigation for all PMP pages */
(function () {
  'use strict';

  var cur = (window.location.pathname.split('/').pop() || 'index.html');

  var domain1Tasks = [
    { num: 'T01', en: 'Manage Conflict', vi: 'Quản lý xung đột', href: 'domain-1-task-01-manage-conflict.html' },
    { num: 'T02', en: 'Lead a Team', vi: 'Dẫn dắt đội nhóm', href: 'domain-1-task-02-lead-team.html' },
    { num: 'T03', en: 'Support Performance', vi: 'Hỗ trợ hiệu suất', href: 'domain-1-task-03-support-performance.html' },
    { num: 'T04', en: 'Empower Team', vi: 'Trao quyền', href: 'domain-1-task-04-empower.html' },
    { num: 'T05', en: 'Train Team', vi: 'Đào tạo nhóm', href: 'domain-1-task-05-train.html' },
    { num: 'T06', en: 'Build a Team', vi: 'Xây dựng nhóm', href: 'domain-1-task-06-build-team.html' },
    { num: 'T07', en: 'Remove Impediments', vi: 'Loại bỏ trở ngại', href: 'domain-1-task-07-remove-impediments.html' },
    { num: 'T08', en: 'Negotiate', vi: 'Đàm phán', href: 'domain-1-task-08-negotiate.html' },
    { num: 'T09', en: 'Collaborate', vi: 'Hợp tác', href: 'domain-1-task-09-collaborate.html' },
    { num: 'T10', en: 'Shared Understanding', vi: 'Hiểu biết chung', href: 'domain-1-task-10-shared-understanding.html' },
    { num: 'T11', en: 'Virtual Teams', vi: 'Nhóm làm việc từ xa', href: 'domain-1-task-11-virtual-teams.html' },
    { num: 'T12', en: 'Ground Rules', vi: 'Quy tắc nhóm', href: 'domain-1-task-12-ground-rules.html' },
    { num: 'T13', en: 'Mentor', vi: 'Cố vấn', href: 'domain-1-task-13-mentor.html' },
    { num: 'T14', en: 'Emotional Intelligence', vi: 'Trí tuệ cảm xúc', href: 'domain-1-task-14-emotional-intelligence.html' }
  ];

  var domain2Tasks = [
    { num: 'T01', en: 'Business Value', vi: 'Giá trị kinh doanh', href: 'domain-2-task-01-business-value.html' },
    { num: 'T02', en: 'Communications', vi: 'Giao tiếp', href: 'domain-2-task-02-communications.html' },
    { num: 'T03', en: 'Risk Management', vi: 'Quản lý rủi ro', href: 'domain-2-task-03-risk.html' },
    { num: 'T04', en: 'Engage Stakeholders', vi: 'Thu hút các bên liên quan', href: 'domain-2-task-04-engage-stakeholders.html' },
    { num: 'T05', en: 'Budget & Resources', vi: 'Ngân sách & Nguồn lực', href: 'domain-2-task-05-budget-resources.html' },
    { num: 'T06', en: 'Schedule', vi: 'Lịch trình', href: 'domain-2-task-06-schedule.html' },
    { num: 'T07', en: 'Quality', vi: 'Chất lượng', href: 'domain-2-task-07-quality.html' },
    { num: 'T08', en: 'Scope', vi: 'Phạm vi', href: 'domain-2-task-08-scope.html' },
    { num: 'T09', en: 'Integrate Planning', vi: 'Tích hợp kế hoạch', href: 'domain-2-task-09-integrate-planning.html' },
    { num: 'T10', en: 'Manage Changes', vi: 'Quản lý thay đổi', href: 'domain-2-task-10-manage-changes.html' },
    { num: 'T11', en: 'Procurement', vi: 'Mua sắm', href: 'domain-2-task-11-procurement.html' },
    { num: 'T12', en: 'Artifacts', vi: 'Tài liệu dự án', href: 'domain-2-task-12-artifacts.html' },
    { num: 'T13', en: 'Methodology', vi: 'Phương pháp luận', href: 'domain-2-task-13-methodology.html' },
    { num: 'T14', en: 'Governance', vi: 'Quản trị dự án', href: 'domain-2-task-14-governance.html' },
    { num: 'T15', en: 'Issues', vi: 'Vấn đề', href: 'domain-2-task-15-issues.html' },
    { num: 'T16', en: 'Knowledge Transfer', vi: 'Chuyển giao kiến thức', href: 'domain-2-task-16-knowledge-transfer.html' },
    { num: 'T17', en: 'Project Closure', vi: 'Kết thúc dự án', href: 'domain-2-task-17-closure.html' }
  ];

  var domain3Tasks = [
    { num: 'T01', en: 'Compliance', vi: 'Tuân thủ', href: 'domain-3-task-01-compliance.html' },
    { num: 'T02', en: 'Benefits & Value', vi: 'Lợi ích & Giá trị', href: 'domain-3-task-02-benefits-value.html' },
    { num: 'T03', en: 'External Changes', vi: 'Thay đổi bên ngoài', href: 'domain-3-task-03-external-changes.html' },
    { num: 'T04', en: 'Org Change', vi: 'Thay đổi tổ chức', href: 'domain-3-task-04-org-change.html' }
  ];

  function link(item) {
    var isActive = item.href === cur;
    return '<a href="' + item.href + '" class="nav-item' + (isActive ? ' active' : '') + '">' +
      '<span class="nav-icon">' + (item.icon || '·') + '</span>' +
      item.en + ' / ' + item.vi +
      '</a>';
  }

  function subLink(item) {
    var isActive = item.href === cur;
    return '<a href="' + item.href + '" class="nav-sub-item' + (isActive ? ' active' : '') + '">' +
      '<span class="sub-num">' + item.num + '</span>' +
      item.en + '<br><small style="opacity:.65">' + item.vi + '</small>' +
      '</a>';
  }

  function buildDomain(badge, badgeClass, enTitle, viTitle, overviewHref, tasks) {
    var anyActive = tasks.some(function (t) { return t.href === cur; }) || overviewHref === cur;
    var openClass = anyActive ? ' open' : '';
    var headerOpenClass = anyActive ? ' open' : '';
    var html = '<div class="nav-domain-header' + headerOpenClass + '" data-domain>' +
      '<span class="d-badge ' + badgeClass + '">' + badge + '</span>' +
      '<span>' + enTitle + '<br><small style="font-weight:400;opacity:.7">' + viTitle + '</small></span>' +
      '<span class="arrow">▶</span>' +
      '</div>' +
      '<div class="nav-sub-list' + openClass + '">' +
      '<a href="' + overviewHref + '" class="nav-sub-item' + (overviewHref === cur ? ' active' : '') + '">' +
      '<span class="sub-num">—</span>Tổng quan / Overview</a>';
    tasks.forEach(function (t) { html += subLink(t); });
    html += '</div>';
    return html;
  }

  var nav = '<div class="sidebar-logo"><a href="index.html">' +
    '<div class="logo-title">📘 PMP Study Guide</div>' +
    '<div class="logo-sub">Project Management Professional</div>' +
    '</a></div>' +
    '<div class="sidebar-nav">' +
    '<div class="nav-section-title">Navigation</div>' +
    link({ icon: '🏠', en: 'Home', vi: 'Trang chủ', href: 'index.html' }) +
    '<div class="nav-section-title">Phương pháp học</div>' +
    link({ icon: '📖', en: 'Study Methodology', vi: 'Lộ trình học', href: 'methodology.html' }) +
    link({ icon: '🧠', en: 'PM Mindset', vi: 'Tư duy PM', href: 'mindset.html' }) +
    link({ icon: '💡', en: 'Exam Tips & Tricks', vi: 'Mẹo thi', href: 'exam-tips.html' }) +
    '<div class="nav-section-title">Nền tảng PMBOK 7</div>' +
    link({ icon: '📋', en: '12 Principles', vi: '12 Nguyên tắc', href: 'pmbok7-principles.html' }) +
    link({ icon: '🎯', en: '8 Performance Domains', vi: '8 Miền hiệu suất', href: 'performance-domains.html' }) +
    '<div class="nav-section-title">ECO Domains (PMP Exam)</div>' +
    buildDomain('42%', 'd-badge-1', 'Domain 1: People', 'Con người', 'domain-1-overview.html', domain1Tasks) +
    buildDomain('50%', 'd-badge-2', 'Domain 2: Process', 'Quy trình', 'domain-2-overview.html', domain2Tasks) +
    buildDomain('8%', 'd-badge-3', 'Domain 3: Business', 'Môi trường KD', 'domain-3-overview.html', domain3Tasks) +
    '<div class="nav-section-title">Tài nguyên</div>' +
    link({ icon: '🔧', en: 'Tools & Templates', vi: 'Công cụ & Mẫu', href: 'tools-templates.html' }) +
    '</div>';

  var el = document.getElementById('sidebar');
  if (el) { el.innerHTML = nav; }

  // Domain accordion
  document.querySelectorAll('.nav-domain-header[data-domain]').forEach(function (hdr) {
    hdr.addEventListener('click', function () {
      this.classList.toggle('open');
      var list = this.nextElementSibling;
      if (list) { list.classList.toggle('open'); }
    });
  });
})();
