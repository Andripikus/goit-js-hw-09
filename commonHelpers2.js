import"./assets/styles-865e67b8.js";let e={email:"",message:""};const a=document.querySelector(".feedback-form"),o=a.querySelector(".form-input"),r=a.querySelector(".form-text");function l(){localStorage.setItem("feedback-form-state",JSON.stringify(e))}function s(){const t=localStorage.getItem("feedback-form-state");t&&(e=JSON.parse(t),o.value=e.email||"",r.value=e.message||"")}document.addEventListener("DOMContentLoaded",s);a.addEventListener("input",t=>{e[t.target.name]=t.target.value.trim(),l()});a.addEventListener("submit",t=>{t.preventDefault(),e.email===""||e.message===""?alert("Fill please all fields"):(console.log(e),localStorage.removeItem("feedback-form-state"),e={email:"",message:""},a.reset())});
//# sourceMappingURL=commonHelpers2.js.map