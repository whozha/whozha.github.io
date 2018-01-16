var step=0

function slideit(){
if (!document.images)
return
document.getElementById("slide").src = slideimages[step].src
if (step<2)
step++
else
step=0
setTimeout("slideit()",4000)
}

slideit()