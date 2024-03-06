# Project related to DOM

## Project link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code
```javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector("#clock");

setInterval(function(){

    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
    
},1000)
```
