import{S as u,i as f}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p=document.querySelector(".search-form"),c=document.querySelector(".pictures-list"),l=document.querySelector(".loader"),a=new u(".gallery-card a.gallary-card-link",{captionsData:"alt",captionDelay:250});p.addEventListener("submit",i=>{i.preventDefault();const o=i.target.elements.input.value;o.trim("")!==""&&(l.style.display="flex",a&&(a.close(),c.innerHTML=""),setTimeout(()=>{m(o).then(t=>{d(t.hits),a.refresh(),t.hits.length===0&&f.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"red",messageColor:"white"})}).catch(t=>{console.error("Помилка отримання зображень:",t)}).finally(()=>{l.style.display="none"})},500),i.target.reset())});function m(i){const o="42390639-e472f6261e3eecbaf31797673",t="https://pixabay.com/api/",s=new URLSearchParams({key:o,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${t}?${s}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function d(i){const o=i.map(t=>`<li class="gallery-card">
    <a class="gallary-card-link" href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}" />
    <ul class="image-info">
            <li class="image-item-info">
            <p>Likes</p>
            <p>${t.likes}</p>
        </li>
        <li class="image-item-info">
            <p>Views</p>
            <p>${t.views}</p>
        </li>
        <li class="image-item-info">
            <p>Comments</p>
            <p>${t.comments}</p>
        </li>
        <li class="image-item-info">
            <p>Downloads</p>
            <p>${t.downloads}</p>
        </li>
    </ul>
    </a>
</li>`).join("");c.insertAdjacentHTML("beforeend",o)}
//# sourceMappingURL=commonHelpers.js.map
