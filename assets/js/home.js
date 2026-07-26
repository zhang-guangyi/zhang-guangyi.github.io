(()=>{
  const root=document.documentElement,nav=document.querySelector("[data-nav]"),menu=document.querySelector("[data-menu]"),mobile=document.querySelector("[data-mobile]");
  const stored=localStorage.getItem("theme"),dark=matchMedia("(prefers-color-scheme:dark)").matches;
  if(stored==="dark"||(!stored&&dark))root.dataset.theme="dark";
  document.querySelector("[data-theme]").onclick=()=>{const next=root.dataset.theme==="dark"?"light":"dark";root.dataset.theme=next;localStorage.setItem("theme",next)};
  menu.onclick=()=>{const open=!mobile.classList.contains("open");mobile.classList.toggle("open",open);document.body.classList.toggle("menu-open",open);menu.setAttribute("aria-expanded",open)};
  mobile.querySelectorAll("a").forEach(a=>a.onclick=()=>{mobile.classList.remove("open");document.body.classList.remove("menu-open")});
  const links=[...document.querySelectorAll(".links a")],sections=[...document.querySelectorAll("main section[id]")];
  function scroll(){nav.classList.toggle("scrolled",scrollY>20);let id="";sections.forEach(s=>{if(s.offsetTop<=scrollY+150)id=s.id});links.forEach(a=>a.classList.toggle("active",a.hash==="#"+id))}
  addEventListener("scroll",scroll,{passive:true});scroll();
  document.querySelectorAll("[data-filter]").forEach(b=>b.onclick=()=>{document.querySelectorAll("[data-filter]").forEach(x=>x.classList.toggle("active",x===b));const all=b.dataset.filter==="all";document.querySelector(".pubs").classList.toggle("show-all",all);document.querySelector(".all-list").hidden=!all});
  const items=document.querySelectorAll(".reveal");
  if(matchMedia("(prefers-reduced-motion:reduce)").matches)items.forEach(x=>x.classList.add("visible"));
  else{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target)}}),{threshold:.07,rootMargin:"0px 0px -35px"});items.forEach(x=>io.observe(x))}
  document.querySelector("[data-year]").textContent=new Date().getFullYear();
})();
