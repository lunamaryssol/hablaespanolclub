/* @marca — personajes oficiales de referencia (Marysol y Fernando)
   Dibujos SVG originales por tema, trazo artesanal plano y sin textos ni superposiciones. */
(function(){
  "use strict";
  function figure(kind,mood,scene){
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
    const props={
      "010-bienvenida":'<path d="M141 79q11-7 24 0v33q-10-6-24 0m10-27v16m-7-7 13-2" fill="none" stroke="#003893" stroke-width="2.8"/><path d="M144 110l16-15" stroke="#CE1126" stroke-width="3"/>',
      "010-juego":'<path d="M142 54l12-4 10 9-6 13-14 2-8-10zM135 90l13-9 15 5-1 17-17-2z" fill="none" stroke="#003893" stroke-width="2.8"/><path d="M142 60l4 5 8-9" fill="none" stroke="#FCD116" stroke-width="3"/>',
      "013-bienvenida":'<path d="M139 42q7-17 13-13m2 11q6-17 13-9m-19 23q13-1 20 11" fill="none" stroke="#CE1126" stroke-width="3.3"/><path d="M143 24l4-8m12 10 5-7" fill="none" stroke="#FCD116" stroke-width="3.3"/>',
      "013-comparar":'<path d="M142 86q4-11 15-10 14 3 14 14-2 8-10 14l-10 6-11-8q-11-15 2-16z" fill="none" stroke="#003893" stroke-width="3"/><path d="M149 91q5-8 12-3" fill="none" stroke="#CE1126" stroke-width="2.6"/>',
      "020-bienvenida":'<path d="M143 55q-3-10 7-12 8-2 11 5 12-7 14 5 1 10-18 22l-15-11z" fill="none" stroke="#CE1126" stroke-width="3"/><path d="M147 88q12-8 20-4" fill="none" stroke="#003893" stroke-width="2.7"/>',
      "020-conversar":'<path d="M141 42q15-10 29-1 9 9 1 21l-16 0-8 10-2-11q-12-6-4-19z" fill="none" stroke="#003893" stroke-width="3"/><path d="M149 49l15-2m-13 8 9-2" fill="none" stroke="#000" stroke-width="2.5"/>',
      "057-bienvenida":'<circle cx="151" cy="69" r="19" fill="none" stroke="#003893" stroke-width="3"/><path d="M151 53v17l9 6M143 47l-4-6m24 6 5-6" fill="none" stroke="#000" stroke-width="2.6"/>',
      "057-decidir":'<path d="M140 46h28v44h-28z" fill="none" stroke="#003893" stroke-width="2.8"/><path d="M144 59l4 4 6-9m-10 23 4 4 6-9m4-11h6m-6 17h6" fill="none" stroke="#CE1126" stroke-width="2.5"/>'
    };
    const prop=props[scene]||'';
    const outro='</g>'+detail+'<path d="M141 25l9-11m-6 25 15-1" fill="none" stroke="#FCD116" stroke-width="3.4" stroke-linecap="round"/><path d="M130 13q9-4 14-12" fill="none" stroke="#003893" stroke-width="2.8" stroke-linecap="round"/></svg>';
    return baseStart+start+base+prop+outro;
  }
  const motifs=[
    '<svg viewBox="0 0 94 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M6 25q12-9 23 0 12 8 25-1 13-8 24-1" fill="none" stroke="#CE1126" stroke-width="3.2" stroke-linecap="round"/><path d="M71 9l8-5m0 11 11-3" fill="none" stroke="#FCD116" stroke-width="3.4" stroke-linecap="round"/></svg>',
    '<svg viewBox="0 0 94 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 23q24-19 57 1m-12-9 12 9-15 3" fill="none" stroke="#003893" stroke-width="3" stroke-linecap="round"/><path d="M80 7l4-5m-3 12 9-2" fill="none" stroke="#FCD116" stroke-width="3.1" stroke-linecap="round"/></svg>',
    '<svg viewBox="0 0 94 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M17 28l9-15 10 15 7-20 9 20m8-1 16-5" fill="none" stroke="#CE1126" stroke-width="2.9" stroke-linejoin="round" stroke-linecap="round"/><path d="M8 8l8-3m-1 12-9 1" fill="none" stroke="#FCD116" stroke-width="3.3" stroke-linecap="round"/></svg>'
  ];
  /* Cada diapositiva recibe un trazo nuevo con coordenadas propias por tema y módulo. */
  const topicDrawings={
    "057":{
      1:'<svg viewBox="0 0 130 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M50 14C68 8 91 18 98 37c8 21-2 43-22 50-20 7-43-4-48-25C23 42 32 22 50 14Z"/><path d="M64 26v25l17 12"/><path d="M64 17v5m0 65v-5m-35-29h6m58 0h6"/><path d="M40 25q7-7 15-9"/></g><path d="M83 18l7-8m-1 17 10-3" fill="none" stroke="#FCD116" stroke-width="4" stroke-linecap="round"/><path d="M20 70q-7 3-10 9m13 1-6 8" fill="none" stroke="#CE1126" stroke-width="3.2" stroke-linecap="round"/><path d="M64 51l17 12" fill="none" stroke="#003893" stroke-width="3.3" stroke-linecap="round"/></svg>',
      2:'<svg viewBox="0 0 130 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M34 34q1-7 9-7h46q8 0 9 8l-5 43q-1 8-9 8H43q-8 0-9-8Z"/><path d="M48 34q0-18 17-18 16 0 17 18"/><path d="M45 56q7-10 14 0 7 10 14 0 7-10 14 0"/><path d="M49 67l-3 9m20-9v10m20-10 4 9"/><path d="M23 48l-8-6m9 18-10 1"/></g><path d="M51 47q9-10 18 0" fill="none" stroke="#CE1126" stroke-width="3.2" stroke-linecap="round"/><path d="M94 18l7-8m-1 17 10-2" fill="none" stroke="#FCD116" stroke-width="4" stroke-linecap="round"/><path d="M41 88q20 5 42 0" fill="none" stroke="#003893" stroke-width="3.2" stroke-linecap="round"/></svg>',
      3:'<svg viewBox="0 0 130 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M25 27q0-9 12-9h48q12 0 12 11v22q0 11-12 11H55L39 74l2-12h-4q-12 0-12-11Z"/><path d="M58 59q0 10 12 10h18l14 11-2-11q9-2 9-11V44q0-10-11-10"/><path d="M43 39h3m11 0h3m11 0h3"/><path d="M75 51h15"/></g><path d="M25 18l-7-7m24-1 2-8" fill="none" stroke="#FCD116" stroke-width="3.8" stroke-linecap="round"/><path d="M103 22l8-7m-4 18 10-1" fill="none" stroke="#CE1126" stroke-width="3.2" stroke-linecap="round"/><path d="M47 83q13 5 25 0" fill="none" stroke="#003893" stroke-width="3.1" stroke-linecap="round"/></svg>',
      4:'<svg viewBox="0 0 130 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M34 27q0-8 9-8h48q9 0 9 9v54q0 8-9 8H43q-9 0-9-8Z"/><path d="M35 39h64M49 14v18m35-18v18"/><path d="M49 55q7-7 14 0 7 7 14 0"/><path d="M67 53v19m-9-10h18"/></g><path d="M66 53v19m-9-10h18" fill="none" stroke="#CE1126" stroke-width="3.2" stroke-linecap="round"/><path d="M105 34l8-7m-3 17 10 1" fill="none" stroke="#FCD116" stroke-width="4" stroke-linecap="round"/><path d="M22 74q-6 2-10 8" fill="none" stroke="#003893" stroke-width="3.2" stroke-linecap="round"/></svg>',
      5:'<svg viewBox="0 0 130 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M24 27q0-7 8-7h62q8 0 8 7v43H24Z"/><path d="M15 78h96q-5 9-13 9H27q-8 0-12-9Z"/><path d="M38 34q8-8 16 0m-8-9v17m28-8h17m-17 8h13"/><path d="M55 70l9-10 9 10"/></g><path d="M35 14q9-7 17 0m32 0 7-7" fill="none" stroke="#FCD116" stroke-width="3.8" stroke-linecap="round"/><path d="M107 43l8-6m-5 17 10-1" fill="none" stroke="#CE1126" stroke-width="3.2" stroke-linecap="round"/><path d="M53 89q15 4 29 0" fill="none" stroke="#003893" stroke-width="3.2" stroke-linecap="round"/></svg>',
      6:'<svg viewBox="0 0 130 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 62q13 2 24-8l12-17q5-7 11-2l13 16q7 8 22 11 8 2 9 10-1 8-12 8H35q-13 0-15-8-2-5 2-10Z"/><path d="M48 55q11 2 21 1m-15-11 13 7m-6-13 13 8m-3-14 10 10"/><path d="M25 74q33 8 84 0"/></g><path d="M17 38l-9-5m11 18-12 1m104-17 8-7" fill="none" stroke="#FCD116" stroke-width="4" stroke-linecap="round"/><path d="M96 48l8-7m-2 15 11-1" fill="none" stroke="#CE1126" stroke-width="3.2" stroke-linecap="round"/><path d="M44 87q21 4 42 0" fill="none" stroke="#003893" stroke-width="3.2" stroke-linecap="round"/></svg>',
      7:'<svg viewBox="0 0 130 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M25 20q0-6 7-6h67q7 0 7 7v57q0 7-7 7H32q-7 0-7-7Z"/><path d="M34 70l17-20 14 14 12-12 23 21"/><path d="M75 34q1-8 9-8 8 1 8 9 0 8-9 8-8-1-8-9Z"/><path d="M18 12l-6-6m13 2 2-7"/></g><path d="M76 34q1-8 9-8 8 1 8 9 0 8-9 8" fill="none" stroke="#FCD116" stroke-width="3.4" stroke-linecap="round"/><path d="M40 90q20 5 42 0" fill="none" stroke="#003893" stroke-width="3.2" stroke-linecap="round"/><path d="M111 39l8-6m-4 17 9 1" fill="none" stroke="#CE1126" stroke-width="3.2" stroke-linecap="round"/></svg>',
      8:'<svg viewBox="0 0 130 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M33 13h48l18 17v56q0 6-7 6H33q-7 0-7-7V21q0-8 7-8Z"/><path d="M81 14v18h17"/><path d="M43 45h37m-37 12h25m-25 12h17"/><path d="M80 72l7 7 15-18"/></g><path d="M80 72l7 7 15-18" fill="none" stroke="#003893" stroke-width="3.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="22" cy="70" r="8" fill="none" stroke="#FCD116" stroke-width="3.5"/><path d="M16 19l-7-6m102 23 8-4m-5 14 10 1" fill="none" stroke="#CE1126" stroke-width="3.2" stroke-linecap="round"/></svg>',
      9:'<svg viewBox="0 0 130 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 28q0-7 8-7h36q7 0 7 7v53q0 7-7 7H28q-8 0-8-7Z"/><path d="M71 28q0-7 8-7h24q7 0 7 7v53q0 7-7 7H79q-8 0-8-7Z"/><path d="M33 40l5 5 9-11m-14 25 5 5 9-11m24-20 5 5 9-11m-14 25 5 5 9-11"/><path d="M88 11l-5 17m5-17 8 4-8 13"/></g><path d="M13 15q7-7 13-5m88 54 7-8m-4 17 9 2" fill="none" stroke="#FCD116" stroke-width="3.6" stroke-linecap="round"/><path d="M44 92q18 4 36 0" fill="none" stroke="#CE1126" stroke-width="3.2" stroke-linecap="round"/><path d="M55 15l7-5" fill="none" stroke="#003893" stroke-width="3.2" stroke-linecap="round"/></svg>'
    }
  };
  function handAccent(theme,n){
    const topic=topicDrawings[theme];
    if(topic&&topic[n])return topic[n];
    const seed=Number(theme)+n*17,wiggle=seed%7,curve=seed%11,up=seed%5;
    const x=4+(seed%4),end=77-(seed%8);
    return '<svg viewBox="0 0 94 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'+
      '<path d="M'+x+' '+(24+up)+'Q'+(17+wiggle)+' '+(11+curve)+' '+(30+wiggle)+' '+(23+up)+'T'+(54+curve)+' '+(24-up)+'T'+end+' '+(23+up)+'" fill="none" stroke="#CE1126" stroke-width="3.1" stroke-linecap="round"/>'+
      '<path d="M'+(72+wiggle)+' '+(8+up)+'l6 -5m-3 13 12 -3" fill="none" stroke="#FCD116" stroke-width="3.4" stroke-linecap="round"/>'+
      '<path d="M'+(19+up)+' 6q'+(7+wiggle)+' -3 '+(13+curve)+' 1" fill="none" stroke="#003893" stroke-width="2.7" stroke-linecap="round"/></svg>';
  }
  const slug=location.pathname.match(/tema-(010|013|020|057)/);
  const theme=slug?slug[1]:document.title.match(/\b(010|013|020|057)\b/)?.[1]||"010";
  const lead={"010":["marysol","curiosa","010-bienvenida"],"013":["fernando","alegre","013-bienvenida"],"020":["marysol","alegre","020-bienvenida"],"057":["fernando","pensativo","057-bienvenida"]}[theme];
  const side={"010":["fernando","pensativo","010-juego"],"013":["marysol","sorpresa","013-comparar"],"020":["fernando","alegre","020-conversar"],"057":["marysol","curiosa","057-decidir"]}[theme];
  function apply(){
    const modules=Array.from(document.querySelectorAll("section.module-slide[data-module]"));
    if(modules.length!==10)return;
    modules.forEach((m,i)=>{
      if(m.querySelector(".brand-doodle-accent,.brand-illustration"))return;
      if(i>0){
        const accent=document.createElement("div");
        accent.className="brand-doodle-accent";accent.setAttribute("aria-hidden","true");
        accent.innerHTML=handAccent(theme,i);
        const content=m.querySelector(".module-content");
        if(content)m.insertBefore(accent,content);
      }
      if(i===0||i===5){
        const art=document.createElement("div");
        art.className="brand-illustration"+(i===5?" secondary":"");
        const chosen=i===0?lead:side;
        art.innerHTML=figure(chosen[0],chosen[1],chosen[2]);
        m.appendChild(art);
      }
    });
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",apply,{once:true});else apply();
})();
