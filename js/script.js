let button = document.getElementById("fill_all")
button.onclick = ()=>{
    let elements = document.querySelectorAll("#rainbow_table td")
    Array.from(elements).forEach((el)=>randPaint(el))
    randPaint(button)
    randPaint(document.body)
}

document.getElementById("rainbow_table").onclick = (event)=>{
    if (event.target.tagName==="TD")randPaint(event.target)
}

randPaint = el=>el.style.backgroundColor=getRandomColor()

getRandomColor = ()=>'#'+('000000'+Math.floor(Math.random()*0xffffff).toString(16)).slice(-6)
//`#${`000000${Math.floor(.00001*0xffffff).toString(16)}`.slice(-6)}`
