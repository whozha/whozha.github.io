function updateBirgerPosition( e )
{
    mouse.style.left = e.x + "px";
    mouse.style.top = e.y + "px";
//+ "px";
}
document.onmousemove = updateBirgerPosition;
var mouse= document.getElementById("mouse");
