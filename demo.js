(function(){
var stage=document.querySelector('.dm-stage');if(!stage)return;
function fit(){
  var k=Math.min(1,window.innerWidth/1600);
  stage.style.transform='scale('+k+')';
  stage.style.height=(stage.firstElementChild.offsetHeight*k)+'px';
}
window.addEventListener('resize',fit);
window.addEventListener('load',fit);
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(fit);
setTimeout(fit,60);setTimeout(fit,400);
fit();
document.addEventListener('keydown',function(e){
  if(e.target.tagName==='SELECT'||e.target.tagName==='INPUT')return;
  var s=document.querySelector('.dm-sel');if(!s)return;
  if(e.key==='ArrowRight'){var n=document.querySelectorAll('.dm-btn')[1];if(n)location.href=n.getAttribute('href');}
  if(e.key==='ArrowLeft'){var p=document.querySelectorAll('.dm-btn')[0];if(p)location.href=p.getAttribute('href');}
});
document.addEventListener('click',function(e){var a=e.target.closest('.dm-na');if(a)e.preventDefault();});
})();
