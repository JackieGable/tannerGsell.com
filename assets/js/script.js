
//Screen Size Indicator will display in top left corner of screen
<script>
javascript:(function(){var f=document,a=window,b=f.createElement("div"),c="position:fixed;top:0;left:0;color:#fff;background:#222;padding:5px 1em;font:14px sans-serif;z-index:999999",e=function(){if(a.innerWidth===undefined){b.innerText=f.documentElement.clientWidth+"x"+f.documentElement.clientHeight;}else if(f.all){b.innerText=a.innerWidth+"x"+a.innerHeight;}else{b.textContent=window.innerWidth+"x"+window.innerHeight;}};f.body.appendChild(b);if(typeof b.style.cssText!=="undefined"){b.style.cssText=c;}else{b.setAttribute("style",c);}e();if(a.addEventListener){a.addEventListener("resize",e,false);}else{if(a.attachEvent){a.attachEvent("onresize",e);}else{a.onresize=e;}}})();
</script>