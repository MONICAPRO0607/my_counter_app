(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();(function(){let n=0;const o=10,c=document.getElementById("counter"),r=document.getElementById("message");document.getElementById("increment").addEventListener("click",function(){n<o&&(n++,e())}),document.getElementById("decrement").addEventListener("click",function(){n>0&&(n--,e())}),document.getElementById("reset").addEventListener("click",function(){n=0,e()});function e(){c.textContent=n,n>=o?r.style.display="block":r.style.display="none"}})();