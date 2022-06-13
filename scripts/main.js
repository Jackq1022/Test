/**点击图片后，更换图片 */
let myImage=document.querySelector('img');
myImage.onclick=function(){
    let mySrc=myImage.getAttribute('src');
    if(mySrc=='images/city.png'){
        myImage.setAttribute('src','images/animal.png');
    }else{
        myImage.setAttribute('src','images/city.png');
    }
}

/**获取新按钮和标题的引用 */
let myButton=document.querySelector('button');
let myHeading=document.querySelector('h1');

/**设置个性化欢迎信息 */
function setUserName(){
    let myName=prompt('请输入你的名字:');
    /**如果myName没有值或者值为null,就再次从头运行setUserName() */
    if(!myName||myName==null){
        setUserName();
    }else{
        localStorage.setItem('name',myName);
        myHeading.textContent='Mozilla酷毙了,'+myName+'!';
    }
}

/**初始化代码 */
if(!localStorage.getItem('name')){
    setUserName();
}else{
    let stordName=localStorage.getItem('name');
    myHeading.textContent='Mozilla酷毙了,'+stordName+'!';
}

/**为按钮设置onclick事件处理器 */
myButton.onclick=function(){
    setUserName();
}
