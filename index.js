const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passOne=document.getElementById("pass-1")
let passTwo=document.getElementById("pass-2")

/*
function genPassword(){
    for(let i=1;i<=15;i++){
        count++
        passOne.textContent+= characters[Math.floor(Math.random()*characters.length)]
        passTwo.textContent+= characters[Math.floor(Math.random()*characters.length)]
        
    } 
}
function emptyArray(){
     
    
           genPassword()
        
            passOne=[]
            passTwo=[]
}*/

function getRandomChar(){
    
        let rndm=Math.floor(Math.random()*characters.length)
        return(characters[rndm])
    
}
function generatePassword(){
    let rndmPassword=" "
    for(let i=0;i<15;i++){
        rndmPassword+=getRandomChar()
    }
   return rndmPassword
}

function generatePass(){
    passOne.textContent=generatePassword()
    passTwo.textContent=generatePassword()
}
 





 
