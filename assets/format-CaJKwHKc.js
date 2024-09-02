const l="@BR@",s=/第(.{1,8})(章|回|节|集|卷|部)(-|:|、|：|\s)*(.+)/g;function n(r){if(/^\d+$/.test(r))return r.padStart(4,"0");const t=new Map([["一",1],["二",2],["三",3],["四",4],["五",5],["六",6],["七",7],["八",8],["九",9]]),e=new Map([["十",10],["百",100],["千",100]]);let c=0,o=1;return r.split("").reverse().forEach(a=>{t.has(a)&&(c+=t.get(a)*o),e.has(a)&&(o=e.get(a))}),c<o&&(c+=o),c.toString().padStart(4,"0")}function f(r){//! 消除换行、空格
r=r.replaceAll(l,"").replace(/^\s+/,"");//! 计算章节序号
const t=r.replace(s,"$1"),e=n(t);//! 章节序号重写为阿拉伯数字 
return r=r.replace(s,"["+e+"] $4"),r}function p(r){//! 消除 Microsoft 前缀
r=r.replace(/Microsoft /,"");//! 消除在线自然语言标注
r=r.replace(/ Online \(Natural\)/,"");//! 消除语言后缀
return r=r.replace(/ - .+/,""),r}export{p as a,f};
