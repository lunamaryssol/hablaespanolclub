/* @marca — personajes oficiales de referencia (Marysol y Fernando)
   Dibujos SVG originales por tema, trazo artesanal plano y sin textos ni superposiciones. */
(function(){
  "use strict";
  function figure(kind,mood){
    const baseStart='<svg viewBox="0 0 180 154" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ilustración original artesanal">';
    const start='<g fill="none" stroke="#000" stroke-width="3.3" stroke-linecap="round" stroke-linejoin="round">';
    let base='',detail='';
    if(kind==="marysol"){
      base='<path d="M48 51q-11-23 8-33 6-14 24-12 18 3 21 17 17 7 15 32"/><path d="M49 32Q27 21 25 37q2 16 20 14"/><path d="M56 31q-18-3-18-15 7-13 19-7 14 8 9 19"/><path d="M47 56q-3 28 14 43 13 10 29 3 20-8 22-36"/><path d="M63 62q7-5 12 0m17 0q7-4 12 2"/><path d="M86 68l3 10"/><path d="M50 107q-25 9-28 41m85-39q27 8 29 40"/><path d="M40 132q31 9 77 1"/>';
      detail='<ellipse cx="49" cy="87" rx="5.6" ry="7.5" fill="none" stroke="#FCD116" stroke-width="3"/><path d="M41 131q32 9 76 1" fill="none" stroke="#003893" stroke-width="3"/>';
      if(mood==="curiosa")base+='<path d="M82 87q8-5 14 0"/><path d="M113 116q15-18 24-13 9 6-4 16l-13 15"/>';
      else if(mood==="sorpresa")base+='<ellipse cx="87" cy="88" rx="6" ry="9"/><path d="M111 115q18-16 28-8m-2 8q9 4 11 15"/>';
      else base+='<path d="M74 85q8 19 24 1-3 17-12 17-9-1-12-18z"/><path d="M114 116q18-10 28-2m-5 3 12 10"/>';
    }else{
      base='<path d="M43 47q-7-10 3-19 3-14 17-12 10-12 22-6 13-7 19 7 17-2 19 14 11 5 4 17"/><path d="M46 50q4-10 15-9 11-15 24-9 11-12 21 0 10-4 15 7"/><path d="M45 56q-3 25 11 41 15 17 34 10 24-8 28-43"/><path d="M61 66q6-6 13-1m19 0q7-5 13 2"/><path d="M83 73l2 8"/><path d="M52 109q-22 11-26 38m83-36q20 8 25 36"/><path d="M48 131q31 10 63 0"/>';
      if(mood==="pensativo")base+='<path d="M74 91q11 5 20-1"/><path d="M118 127q11-9 10-26l2-19q9-6 14 2 2 7-6 14l-4 22"/>';
      else base+='<path d="M72 87q13 22 27 0-4 17-14 17-10-1-13-17z"/><path d="M130 126q12-9 17-26m-6 14 15-19m-9 24q14-5 16-14"/>';
      detail='<path d="M13 96l11 5m-9 6 9 0" fill="none" stroke="#CE1126" stroke-width="3"/>';
    }
    const outro='</g>'+detail+'<path d="M141 25l9-11m-6 25 15-1" fill="none" stroke="#FCD116" stroke-width="3.4" stroke-linecap="round"/><path d="M130 13q9-4 14-12" fill="none" stroke="#003893" stroke-width="2.8" stroke-linecap="round"/></svg>';
    return baseStart+start+base+outro;
  }
  const motifs=[
    '<svg viewBox="0 0 94 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M6 25q12-9 23 0 12 8 25-1 13-8 24-1" fill="none" stroke="#CE1126" stroke-width="3.2" stroke-linecap="round"/><path d="M71 9l8-5m0 11 11-3" fill="none" stroke="#FCD116" stroke-width="3.4" stroke-linecap="round"/></svg>',
    '<svg viewBox="0 0 94 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 23q24-19 57 1m-12-9 12 9-15 3" fill="none" stroke="#003893" stroke-width="3" stroke-linecap="round"/><path d="M80 7l4-5m-3 12 9-2" fill="none" stroke="#FCD116" stroke-width="3.1" stroke-linecap="round"/></svg>',
    '<svg viewBox="0 0 94 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M17 28l9-15 10 15 7-20 9 20m8-1 16-5" fill="none" stroke="#CE1126" stroke-width="2.9" stroke-linejoin="round" stroke-linecap="round"/><path d="M8 8l8-3m-1 12-9 1" fill="none" stroke="#FCD116" stroke-width="3.3" stroke-linecap="round"/></svg>'
  ];
  const slug=location.pathname.match(/tema-(010|013|020|057)/);
  const theme=slug?slug[1]:document.title.match(/\b(010|013|020|057)\b/)?.[1]||"010";
  const lead={"010":["marysol","curiosa"],"013":["fernando","alegre"],"020":["marysol","alegre"],"057":["fernando","pensativo"]}[theme];
  const side={"010":["fernando","pensativo"],"013":["marysol","sorpresa"],"020":["fernando","alegre"],"057":["marysol","curiosa"]}[theme];
  function apply(){
    const modules=Array.from(document.querySelectorAll("section.module-slide[data-module]"));
    if(modules.length!==10)return;
    modules.forEach((m,i)=>{
      if(m.querySelector(".brand-doodle-accent,.brand-illustration"))return;
      if(i>0){
        const accent=document.createElement("div");
        accent.className="brand-doodle-accent";accent.setAttribute("aria-hidden","true");
        accent.innerHTML=motifs[(i+Number(theme))%motifs.length];
        const content=m.querySelector(".module-content");
        if(content)m.insertBefore(accent,content);
      }
      if(i===0||i===5){
        const art=document.createElement("div");
        art.className="brand-illustration"+(i===5?" secondary":"");
        const chosen=i===0?lead:side;
        art.innerHTML=figure(chosen[0],chosen[1]);
        m.appendChild(art);
      }
    });
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",apply,{once:true});else apply();
})();
