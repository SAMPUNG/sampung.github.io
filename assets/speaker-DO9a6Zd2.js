import{m as i,n as p}from"./index-DsAZQNJM.js";const r=/^(zh)-/,o=i(["hello, world"]),e=i({pitch:1,playing:!1,rate:1,spoken:0,voice:""}),c=i([]),d=p(()=>o.length-1),n=new SpeechSynthesisUtterance;speechSynthesis.onvoiceschanged!==void 0&&(speechSynthesis.onvoiceschanged=u);n.onend=()=>{e.spoken=(e.spoken+1)%o.length,e.playing=!1,v()};n.onerror=()=>{e.playing=!1};n.onpause=()=>{e.playing=!1};n.onresume=()=>{e.playing=!0};n.onstart=()=>{e.playing=!0};function u(){c.splice(0),speechSynthesis.getVoices().filter(s=>{r.test(s.lang)&&c.push(s),(e.voice?e.voice===s.name:s.default)&&(e.voice=s.name)})}function S(){speechSynthesis.pause()}function k(){speechSynthesis.cancel(),e.spoken=-1}function h(s){if(s){const a=s.target,t=Number(a.value);e.pitch=t}n.pitch=e.pitch}function l(s){if(s){const a=s.target,t=Number(a.value);e.rate=t}n.rate=e.rate}function f(s){if(s){const a=s.target,t=Number(a.value);e.spoken=t}n.text=o[e.spoken]}function g(s){if(s){const t=s.target;e.voice=t.value}let a=c.find(t=>e.voice===t.name);a===void 0&&(a=c.find(t=>t.default)),n.voice=a}function v(){return speechSynthesis.paused?(speechSynthesis.resume(),n):speechSynthesis.speaking?(console.error("speechSynthesis.speaking"),n):(h(),l(),f(),g(),speechSynthesis.speak(n),n)}export{f as a,v as b,k as c,o as d,g as e,l as f,h as g,S as p,d as r,e as s,c as v};
