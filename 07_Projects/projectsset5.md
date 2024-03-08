# Project related to DOM

## Project link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

```javascript
const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    
    for(let i =0;i<6;i++){
        color = color + hex[Math.floor(Math.random() * 16)]
    }
    return color
};

let intervalId
const startChangingColor = function(){
    
    function changeBgColor(){

        document.body.style.backgroundColor = randomColor();
    }
    if(intervalId == null){
        intervalId = setInterval(changeBgColor,1000);
    }
    
}
const stopChangingColor = function(){
     clearInterval(intervalId)
     intervalId = null
}

document.querySelector("#start").addEventListener('click',startChangingColor);

document.querySelector("#stop").addEventListener('click',stopChangingColor);
```