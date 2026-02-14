(function(){
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('sidebarBackdrop');
  const btn = document.getElementById('btnSidebar');

  function openSidebar(){
    if(!sidebar) return;
    sidebar.classList.add('open');
    if(backdrop) backdrop.classList.add('show');
  }
  function closeSidebar(){
    if(!sidebar) return;
    sidebar.classList.remove('open');
    if(backdrop) backdrop.classList.remove('show');
  }

  if(btn) btn.addEventListener('click', openSidebar);
  if(backdrop) backdrop.addEventListener('click', closeSidebar);

  // Close on nav click (mobile)
  document.querySelectorAll('.sidebar .nav-link').forEach(a=>{
    a.addEventListener('click', ()=> closeSidebar());
  });
})();