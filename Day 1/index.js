


 window.addEventListener('keydown', (e)=> playSound(e))

 playSound = (e)=> {
     let keyDisplay = document.getElementById(e.key)
     keyDisplay.classList.add('playing')
     let audio = document.getElementById(e.keyCode)
     audio.onended =()=> {
         keyDisplay.classList.remove('playing')
     }
    
     audio.play()
 }



// window.addEventListener('keydown', (event) => press(event))

// press = (event) => {
//     console.log(event)
//     let letter = document.getElementById(event.key);
//     letter.style.color = 'red'
//     let audio = document.getElementById(event.keyCode);
//     audio.onended = function(){
//         letter.style.color = 'white'
//     };
//     audio.play();
// }