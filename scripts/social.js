let response=await fetch('/article/fetch/logo-fetch.svg');
let blob=await response.blob(img);//下载为blob对象

/** 为其创建一个<img>*/
let img=document.createElement('img');
img.style='position:fixed;top:10px;left:10px;width:100px';
document.body.append(img);

/**显示它 */
img.src=URL.createObjectURL(blob);

setTimeout(()=>{/**三秒后将其隐藏 */
    img.remove();
    URL.revokeObjectURL(img.src);
},3000);
