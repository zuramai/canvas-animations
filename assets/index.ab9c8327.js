const p=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const f of l.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}};p();function q(e,t,n,o){return n/o*e}function s(e,t,n,o){return e/=o/2,e<1?n/2*Math.pow(2,10*(e-1))+t:(e--,n/2*(-Math.pow(2,-10*e)+2)+t)}function E(e,t,n,o){return e/=o/2,e<=1?n/2*e*e+t:(e--,-1*(n/2)*(e*(e-2)-1)+t)}function v(e,t,n,o){return e/=o/2,e<1?n/2*Math.pow(e,5)+t:(e-=2,n/2*(Math.pow(e,5)+2)+t)}function I(e,t,n,o){return-n/2*(Math.cos(Math.PI*e/o)-1)+t}let O=document.querySelector(".card-body"),d=document.querySelectorAll("canvas");document.querySelectorAll(".btn-play").forEach(e=>e.addEventListener("click",()=>w()));let c={linear:null,ease:null,"quadratic-ease":null,"exponential-ease":null,"quintic-ease":null,"sine-ease":null};for(const[e,t]of Object.entries(c)){let n=document.getElementById(e);c[e]=n.getContext("2d")}d.forEach(e=>e.width=O.offsetWidth);let r=d[0].width,h=d[0].height,a=new Image;a.src="images/king.png";a.width=a.width/5;a.height=a.height/5;let u=10,b={linear:q,ease:s,"quadratic-ease":E,"exponential-ease":s,"quintic-ease":v,"sine-ease":I};function m(e,t){let n=e=="x"?t.xFrom:t.yFrom,i=(e=="x"?t.xTo:t.yTo)-n,l=t.frames,f=t.frame;return b[t.type](f,n,i,l,3)}function y(e,t){e.clearRect(0,0,r,h),g(e),e.drawImage(a,m("x",t),m("y",t),a.width,a.height),t.frame<t.frames&&(t.frame=t.frame+1,requestAnimationFrame(()=>y(e,t)))}function g(e){e.fillStyle="green",e.fillRect(0,0,r,h)}function x(e,t){g(e),y(e,{type:t,frame:0,frames:100,xFrom:u,xTo:r-a.width-u,yFrom:u,yTo:h-a.height-u})}function w(){for(const[e,t]of Object.entries(c))x(t,e)}w();