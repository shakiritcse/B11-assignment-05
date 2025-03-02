
function getRandomColor(){
 const redRandom=Math.floor(Math.random() * 256);
const greenRandom=Math.floor(Math.random() * 256);
const blueRandom=Math.floor(Math.random() * 256);
    return `rgb(${redRandom},${greenRandom},${blueRandom})`
}
const bgChangeButton=document.getElementById("bg-change-btn");
console.log(bgChangeButton)
const totalbody=document.querySelector('body');
 bgChangeButton.addEventListener('click', function(){
      totalbody.style.backgroundColor=getRandomColor()
    console.log('clicked')
 })
