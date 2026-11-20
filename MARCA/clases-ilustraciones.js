/* Habla Español Club · Biblioteca de doodles artesanales
   Línea negra expresiva, contornos imperfectos, acentos de color desplazados.
   Ilustraciones originales: sin texto, degradados, sombras ni volumen. */
(function(){
  "use strict";
  const INK="#000000", BLUE="#003893", YELLOW="#FCD116", RED="#CE1126";
  const stroke='fill="none" stroke="'+INK+'" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"';
  const accents=[
    /* 0 · conversación */
    '<svg viewBox="0 0 180 130" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g '+stroke+'><path d="M24 23Q27 15 39 15H112Q126 16 127 29V62Q126 75 112 76H69L48 94 51 76H39Q24 75 24 61Z"/><path d="M75 61Q76 76 91 78H129Q145 78 146 91V105Q145 117 132 117H116L120 128 101 117H93"/><path d="M47 42q6-7 12 0m11 0q6-7 12 0m12 0q6-7 12 0"/><path d="M98 93q5-7 11-1 6-6 11 1 1 8-11 15-12-7-11-15Z"/></g><path d="M28 24q13-12 27-8" fill="none" stroke="'+BLUE+'" stroke-width="4.2" stroke-linecap="round"/><path d="M130 18l7-8m1 17 10-3M17 90l-7 5m14 3-5 8" fill="none" stroke="'+YELLOW+'" stroke-width="4" stroke-linecap="round"/><path d="M145 67q8-4 14 2m-8 7 10 2" fill="none" stroke="'+RED+'" stroke-width="3.7" stroke-linecap="round"/></svg>',
    /* 1 · escucha */
    '<svg viewBox="0 0 180 130" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g '+stroke+'><path d="M82 111Q52 108 47 81 41 48 61 25 78 7 100 17 122 25 123 50 124 68 110 80 101 88 101 101"/><path d="M82 97Q66 92 66 76 66 62 78 53 88 45 94 55 98 64 89 71 82 77 89 84"/><path d="M98 105q-4 13-17 13"/><path d="M126 36q15 12 12 29m-3-42q25 17 22 46"/><path d="M35 48q-9 10-6 22m-8-34q-15 19-10 39"/></g><path d="M59 25q15-17 31-13" fill="none" stroke="'+YELLOW+'" stroke-width="4.5" stroke-linecap="round"/><path d="M127 37q13 12 12 27" fill="none" stroke="'+BLUE+'" stroke-width="4" stroke-linecap="round"/><path d="M42 102l-7 7m15-1-3 10" fill="none" stroke="'+RED+'" stroke-width="3.7" stroke-linecap="round"/></svg>',
    /* 2 · flor ofrecida */
    '<svg viewBox="0 0 180 130" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g '+stroke+'><path d="M91 82Q87 65 91 48"/><path d="M91 70Q72 55 66 68 66 82 91 82"/><path d="M92 62Q109 43 119 56 124 70 93 76"/><path d="M90 48Q77 37 83 25 90 16 99 27 108 17 116 27 123 39 105 49"/><path d="M90 82Q66 83 51 93L34 104Q25 111 33 118H83Q99 117 108 107"/><path d="M47 95q8 7 17 6m-22 6q10 7 22 4m31-22q11 9 23 7"/><path d="M91 82q5 13 19 17"/></g><path d="M84 26q6-10 15-3m5-1q9-5 13 4" fill="none" stroke="'+RED+'" stroke-width="4" stroke-linecap="round"/><path d="M90 49q4-10 12-11" fill="none" stroke="'+YELLOW+'" stroke-width="4.2" stroke-linecap="round"/><path d="M31 87l-8-5m13-7-2-8m93 12 8-4" fill="none" stroke="'+BLUE+'" stroke-width="3.7" stroke-linecap="round"/></svg>',
    /* 3 · espejo y expresión */
    '<svg viewBox="0 0 180 130" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g '+stroke+'><path d="M58 16Q59 8 70 8H119Q130 9 130 21V106Q129 118 117 118H69Q56 117 56 105Z"/><path d="M70 27Q88 17 106 28 119 37 115 57 113 75 96 82 78 87 68 69 60 47 70 27Z"/><path d="M73 41q7-6 14 0m11 0q7-6 13 0"/><path d="M88 49l-3 10 7 2"/><path d="M81 68q10 9 20-1"/><path d="M65 27q8-15 23-13m-21 31q-3 18 8 29"/><path d="M43 28q-8 8-7 18m104-13 8 8m-7 17 8 5"/></g><path d="M59 18q13-11 27-8" fill="none" stroke="'+BLUE+'" stroke-width="4.2" stroke-linecap="round"/><path d="M121 91q10 8 7 17" fill="none" stroke="'+YELLOW+'" stroke-width="4.2" stroke-linecap="round"/><path d="M41 91l-8 5m15 3-3 9" fill="none" stroke="'+RED+'" stroke-width="3.8" stroke-linecap="round"/></svg>',
    /* 4 · grupo */
    '<svg viewBox="0 0 180 130" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g '+stroke+'><path d="M20 114Q23 86 43 80 60 74 73 87L82 114"/><path d="M107 114Q110 84 131 79 151 76 165 96L170 114"/><path d="M57 112Q61 79 89 73 117 77 122 112"/><path d="M35 58Q33 36 51 29 70 26 76 45 81 66 62 76 43 77 35 58Z"/><path d="M104 53Q105 33 122 29 142 29 147 49 148 68 129 75 109 72 104 53Z"/><path d="M70 49Q70 24 91 21 111 24 111 48 108 68 91 70 73 66 70 49Z"/><path d="M44 51q7-5 13 0m4 0q6-5 11 0m40 0q7-5 13 0m4 0q6-5 11 0"/></g><path d="M27 93q10-15 24-12m82-1q15 1 23 14" fill="none" stroke="'+BLUE+'" stroke-width="4" stroke-linecap="round"/><path d="M81 18q10-7 20 0m-13-8 2-7" fill="none" stroke="'+YELLOW+'" stroke-width="4" stroke-linecap="round"/><path d="M13 45l-7-5m10 17-9 2m155-28 8-7" fill="none" stroke="'+RED+'" stroke-width="3.7" stroke-linecap="round"/></svg>',
    /* 5 · corazón */
    '<svg viewBox="0 0 180 130" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g '+stroke+'><path d="M89 108Q72 94 49 73 24 49 42 29 61 8 88 34 112 8 136 30 158 52 133 76Z"/><path d="M88 91Q70 77 56 62 44 48 55 37 68 25 88 47 107 25 123 38 137 51 120 67Z"/><path d="M22 18l7 8m-15 6 11 1m132-15-7 9m16 5-11 1M20 93l11-5m-4 16 8-9m111-4 10 5m-6 12 7-8"/></g><path d="M43 29q15-16 29-3" fill="none" stroke="'+RED+'" stroke-width="4.5" stroke-linecap="round"/><path d="M102 109q14 7 25-2" fill="none" stroke="'+BLUE+'" stroke-width="4" stroke-linecap="round"/><path d="M89 18l3-10m8 13 8-7" fill="none" stroke="'+YELLOW+'" stroke-width="4" stroke-linecap="round"/></svg>',
    /* 6 · libro */
    '<svg viewBox="0 0 180 130" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g '+stroke+'><path d="M17 32Q48 19 87 39V112Q50 91 17 103Z"/><path d="M163 32Q126 19 87 39V112Q127 91 163 103Z"/><path d="M87 39V112"/><path d="M31 48q21-7 43 5m-43 8q21-7 43 5m-42 8q20-6 40 5"/><path d="M103 53q23-12 44-5m-44 18q22-11 44-5m-44 18q22-10 42-4"/><path d="M130 25v26l-9-7-9 7V29"/></g><path d="M19 33q30-13 56 2" fill="none" stroke="'+BLUE+'" stroke-width="4.2" stroke-linecap="round"/><path d="M115 25q9-7 17-4" fill="none" stroke="'+RED+'" stroke-width="4" stroke-linecap="round"/><path d="M78 118q10 5 20 0m-87-6-7 6" fill="none" stroke="'+YELLOW+'" stroke-width="4" stroke-linecap="round"/></svg>',
    /* 7 · taza */
    '<svg viewBox="0 0 180 130" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g '+stroke+'><path d="M39 53Q42 47 51 49H119Q128 49 130 57L123 96Q121 108 108 109H62Q49 108 46 96Z"/><path d="M129 61Q153 53 155 72 157 91 126 91"/><path d="M60 45Q47 32 59 20 69 10 61 2m31 43Q81 30 95 17 108 5 99 0m28 45q-9-13 2-23"/><path d="M31 113Q82 122 138 113"/><path d="M25 120Q82 129 145 120"/></g><path d="M41 55q31 6 77 0" fill="none" stroke="'+BLUE+'" stroke-width="4" stroke-linecap="round"/><path d="M91 16q8-10 5-16" fill="none" stroke="'+RED+'" stroke-width="4" stroke-linecap="round"/><path d="M24 108l-8-6m142 2 8-6" fill="none" stroke="'+YELLOW+'" stroke-width="4" stroke-linecap="round"/></svg>',
    /* 8 · chispa y lápiz */
    '<svg viewBox="0 0 180 130" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g '+stroke+'><path d="M38 99L117 21Q123 15 130 22L140 32Q146 39 139 46L60 124 35 128Z"/><path d="M38 99l22 25m57-103 24 25"/><path d="M35 128l5-22 17 17Z"/><path d="M82 21l7-14 7 14 15 6-15 7-7 15-7-15-14-7Z"/><path d="M139 78l6-12 6 12 12 6-12 5-6 12-6-12-12-5Z"/></g><path d="M116 24l20 20" fill="none" stroke="'+RED+'" stroke-width="4.2" stroke-linecap="round"/><path d="M80 21l8-13m7 23 12-5" fill="none" stroke="'+YELLOW+'" stroke-width="4" stroke-linecap="round"/><path d="M27 72l-10-4m13 17-12 3" fill="none" stroke="'+BLUE+'" stroke-width="4" stroke-linecap="round"/></svg>',
    /* 9 · circuito y decisión */
    '<svg viewBox="0 0 180 130" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g '+stroke+'><rect x="57" y="29" width="66" height="68" rx="10"/><path d="M90 13v16m0 68v17M57 62H34m89 0h23M75 49h30m-30 13h30m-30 13h20"/><circle cx="90" cy="62" r="7"/><circle cx="34" cy="62" r="4"/><circle cx="146" cy="62" r="4"/></g><path d="M61 35q12-10 25-5m30 62q10 7 19 1" fill="none" stroke="'+BLUE+'" stroke-width="4" stroke-linecap="round"/><path d="M90 13l-5 6m5-6 5 6M34 62l6-5m-6 5 6 5" fill="none" stroke="'+YELLOW+'" stroke-width="4" stroke-linecap="round"/><path d="M146 62l-6-5m6 5-6 5" fill="none" stroke="'+RED+'" stroke-width="4" stroke-linecap="round"/></svg>',
    /* 10 · caminos posibles */
    '<svg viewBox="0 0 180 130" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g '+stroke+'><path d="M90 115V75Q90 65 78 58L49 38m41 37q0-10 12-17l29-20"/><path d="M40 46l9-8 8 9m65-1 9-9 8 9"/><circle cx="90" cy="75" r="7"/><circle cx="49" cy="38" r="5"/><circle cx="139" cy="38" r="5"/><path d="M76 115h28"/></g><path d="M90 75q-19-3-31-17" fill="none" stroke="'+BLUE+'" stroke-width="4" stroke-linecap="round"/><path d="M90 75q18-3 31-17" fill="none" stroke="'+RED+'" stroke-width="4" stroke-linecap="round"/><path d="M42 25l4-8m9 11 8-4m59 0 8-6m7 15 8-2" fill="none" stroke="'+YELLOW+'" stroke-width="4" stroke-linecap="round"/></svg>',
    /* 11 · equilibrio y criterio */
    '<svg viewBox="0 0 180 130" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g '+stroke+'><path d="M90 17v91m-27 0h54M62 37h56M90 17l-28 20m28-20 28 20"/><path d="M62 37 43 69h38L62 37Zm56 0-19 32h38l-19-32Z"/><path d="M43 69q19 13 38 0m18 0q19 13 38 0"/></g><path d="M78 22q12-8 24 0" fill="none" stroke="'+BLUE+'" stroke-width="4" stroke-linecap="round"/><path d="M43 69q17 8 34 1m34-1q17 8 34 1" fill="none" stroke="'+YELLOW+'" stroke-width="4" stroke-linecap="round"/><path d="M86 108l4 7 4-7" fill="none" stroke="'+RED+'" stroke-width="4" stroke-linecap="round"/></svg>',
  ];
  const orders={
    "010":[8,0,6,5,4,3,2,1,7],
    "013":[2,8,7,4,6,0,5,1,3],
    "020":[0,1,2,3,4,5,6,7,8],
    "036":[9,10,11,2,7,0,5,1,8],
    "057":[7,6,8,1,3,0,4,5,2]
  };
  function accentFor(theme,n){
    const order=orders[theme]||orders["020"];
    return accents[order[(n-1)%order.length]];
  }
  function hero020(variant){
    if(variant===1){
      return '<svg viewBox="0 0 250 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Dos personas compartiendo un cumplido"><g '+stroke+'><path d="M29 169Q32 132 57 120 77 111 98 126L110 169"/><path d="M145 169Q150 129 178 121 205 116 224 145L230 169"/><path d="M52 79Q49 48 72 35 97 26 111 51 122 77 100 99 76 112 59 94Z"/><path d="M151 78Q153 48 176 39 199 34 210 59 218 84 198 101 173 110 157 92Z"/><path d="M69 64q8-7 15 0m10 0q7-6 13 1m61-1q7-6 14 0m9 0q7-6 13 1"/><path d="M92 75l-4 9 8 3m76-11 5 8-8 4"/><path d="M80 94q12 10 23-1m68 1q12 10 23-1"/><path d="M108 136q12-12 23-2l10 11 13-12q11-8 20 3"/><path d="M118 145q14 17 29 0"/><path d="M31 37Q35 18 55 18H101Q119 19 120 36V53Q119 68 101 68H76L60 82 62 68H54Q34 68 31 53Z"/><path d="M143 20Q159 9 180 17 196 22 195 39V51Q194 65 179 65H167L153 77 155 64Q140 61 139 47V33Q139 25 143 20Z"/><path d="M56 42q5-6 10 0m12 0q5-6 10 0m14 0q5-6 10 0"/><path d="M163 40q8-9 15 0 8-9 15 0 0 11-15 19-15-8-15-19Z"/></g><path d="M39 28q12-13 27-8" fill="none" stroke="'+BLUE+'" stroke-width="4.5" stroke-linecap="round"/><path d="M186 15l7-8m-1 17 11-2" fill="none" stroke="'+YELLOW+'" stroke-width="4.3" stroke-linecap="round"/><path d="M55 110q17 12 34 4m88-4q16 10 31 1" fill="none" stroke="'+RED+'" stroke-width="4" stroke-linecap="round"/><path d="M18 104l-8-6m17 1-3-9m211 4 7-8" fill="none" stroke="'+YELLOW+'" stroke-width="4" stroke-linecap="round"/></svg>';
    }
    return '<svg viewBox="0 0 250 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Conversación entre dos personas"><g '+stroke+'><path d="M20 169Q24 134 49 123 72 112 91 128L103 169"/><path d="M148 169Q153 132 180 123 205 115 225 145L232 169"/><path d="M45 82Q38 52 57 33 76 15 99 29 118 42 111 72 108 99 83 108 58 108 45 82Z"/><path d="M149 79Q145 50 165 34 186 18 206 34 223 49 212 79 204 103 180 106 157 103 149 79Z"/><path d="M55 61q8-7 16 0m15 0q8-7 15 0m60 0q8-7 16 0m15 0q7-6 13 0"/><path d="M86 71l-4 9 8 3m89-12 5 9-8 3"/><path d="M67 91q12 8 22-1m75 0q12 8 22-1"/><path d="M77 125q-2 17 11 25m84-25q3 17-11 25"/><path d="M99 139q17 8 29 1l12-8q11-6 23 4"/><path d="M28 24Q31 10 47 10H102Q118 11 120 26V43Q118 57 102 58H75L58 73 61 58H47Q30 57 28 43Z"/><path d="M44 31q6-6 12 0m12 0q6-6 12 0m12 0q6-6 12 0"/><path d="M144 21Q160 9 180 17 195 23 194 39V51Q192 65 177 65H165L151 78 153 64Q139 61 138 47V33Z"/><path d="M159 40q8-9 15 0 8-9 15 0 0 11-15 19-15-8-15-19Z"/></g><path d="M35 18q12-10 26-5" fill="none" stroke="'+BLUE+'" stroke-width="4.5" stroke-linecap="round"/><path d="M180 14q10-8 18 0" fill="none" stroke="'+YELLOW+'" stroke-width="4.3" stroke-linecap="round"/><path d="M48 106q17 11 33 5m100-5q16 9 29 0" fill="none" stroke="'+RED+'" stroke-width="4" stroke-linecap="round"/><path d="M12 92l-8-5m16-2-2-9m223 14 7-8" fill="none" stroke="'+YELLOW+'" stroke-width="4" stroke-linecap="round"/></svg>';
  }
  function legacyFigure(kind,mood,scene){
    const baseStart='<svg viewBox="0 0 180 154" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ilustración artesanal">';
    const start='<g fill="none" stroke="#000" stroke-width="3.3" stroke-linecap="round" stroke-linejoin="round">';
    let base="",detail="";
    if(kind==="marysol"){
      base='<path d="M48 51q-11-23 8-33 6-14 24-12 18 3 21 17 17 7 15 32"/><path d="M49 32Q27 21 25 37q2 16 20 14"/><path d="M56 31q-18-3-18-15 7-13 19-7 14 8 9 19"/><path d="M47 56q-3 28 14 43 13 10 29 3 20-8 22-36"/><path d="M63 62q7-5 12 0m17 0q7-4 12 2"/><path d="M86 68l3 10"/><path d="M50 107q-25 9-28 41m85-39q27 8 29 40m-96-17q31 9 77 1"/>';
      detail='<ellipse cx="49" cy="87" rx="5.6" ry="7.5" fill="none" stroke="#FCD116" stroke-width="3"/>';
      if(mood==="curiosa")base+='<path d="M82 87q8-5 14 0"/><path d="M113 116q15-18 24-13 9 6-4 16l-13 15"/>';
      else base+='<path d="M74 85q8 19 24 1-3 17-12 17-9-1-12-18z"/>';
    }else{
      base='<path d="M43 47q-7-10 3-19 3-14 17-12 10-12 22-6 13-7 19 7 17-2 19 14 11 5 4 17"/><path d="M46 50q4-10 15-9 11-15 24-9 11-12 21 0 10-4 15 7"/><path d="M45 56q-3 25 11 41 15 17 34 10 24-8 28-43"/><path d="M61 66q6-6 13-1m19 0q7-5 13 2"/><path d="M83 73l2 8"/><path d="M52 109q-22 11-26 38m83-36q20 8 25 36m-86-16q31 10 63 0"/>';
      if(mood==="pensativo")base+='<path d="M74 91q11 5 20-1"/>';
      else base+='<path d="M72 87q13 22 27 0-4 17-14 17-10-1-13-17z"/>';
      detail='<path d="M13 96l11 5m-9 6 9 0" fill="none" stroke="#CE1126" stroke-width="3"/>';
    }
    const prop=scene==="010-bienvenida"?'<path d="M141 79q11-7 24 0v33q-10-6-24 0m10-27v16" fill="none" stroke="#003893" stroke-width="2.8"/>':scene==="013-bienvenida"?'<path d="M139 42q7-17 13-13m2 11q6-17 13-9m-19 23q13-1 20 11" fill="none" stroke="#CE1126" stroke-width="3.3"/>':scene==="036-bienvenida"?'<rect x="137" y="72" width="32" height="25" rx="4" fill="none" stroke="#003893" stroke-width="2.8"/><path d="M143 80h19m-19 6h13m-6 11v6m-8 0h16" fill="none" stroke="#000" stroke-width="2.6"/>':scene==="036-debate"?'<path d="M139 76h30m-15-19v44m-12 0h24m-21-25-7 13h14l-7-13Zm21 0-7 13h14l-7-13Z" fill="none" stroke="#000" stroke-width="2.8"/><path d="M142 62q8-6 15-2" fill="none" stroke="#FCD116" stroke-width="3.5" stroke-linecap="round"/>':scene==="057-bienvenida"?'<circle cx="151" cy="69" r="19" fill="none" stroke="#003893" stroke-width="3"/><path d="M151 53v17l9 6" fill="none" stroke="#000" stroke-width="2.6"/>':"";
    return baseStart+start+base+prop+'</g>'+detail+'<path d="M141 25l9-11m-6 25 15-1" fill="none" stroke="#FCD116" stroke-width="3.4" stroke-linecap="round"/></svg>';
  }
  const slug=location.pathname.match(/tema-(010|013|020|036|057)/);
  const theme=slug?slug[1]:(document.title.match(/\\b(010|013|020|036|057)\\b/)||[])[1]||"010";
  const lead={"010":["marysol","curiosa","010-bienvenida"],"013":["fernando","alegre","013-bienvenida"],"020":["marysol","alegre","020-bienvenida"],"036":["marysol","curiosa","036-bienvenida"],"057":["fernando","pensativo","057-bienvenida"]}[theme]||["marysol","curiosa","010-bienvenida"];
  const side={"010":["fernando","pensativo","010-juego"],"013":["marysol","sorpresa","013-comparar"],"020":["fernando","alegre","020-conversar"],"036":["fernando","pensativo","036-debate"],"057":["marysol","curiosa","057-decidir"]}[theme]||["fernando","pensativo","010-juego"];
  function apply(){
    const modules=Array.from(document.querySelectorAll("section.module-slide[data-module]"));
    if(modules.length!==10)return;
    const heroIndex=theme==="036"?1:0;
    const secondaryIndex=theme==="036"?6:5;
    modules.forEach((m,i)=>{
      if(m.querySelector(".brand-doodle-accent,.brand-illustration"))return;
      if(i>0&&theme!=="010"){
        const accent=document.createElement("div");
        accent.className="brand-doodle-accent";
        accent.setAttribute("aria-hidden","true");
        accent.innerHTML=accentFor(theme,i);
        const content=m.querySelector(".module-content");
        if(content)m.insertBefore(accent,content);
      }
      if((i===heroIndex||i===secondaryIndex)&&theme!=="010"){
        const art=document.createElement("div");
        art.className="brand-illustration"+(i===secondaryIndex?" secondary":"");
        art.setAttribute("aria-hidden","true");
        art.innerHTML=theme==="020"?hero020(i===secondaryIndex?1:0):legacyFigure.apply(null,i===heroIndex?lead:side);
        m.appendChild(art);
      }
    });
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",apply,{once:true});else apply();
})();