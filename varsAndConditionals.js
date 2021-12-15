/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

/*
    In this file, we'll be continuing our story
    with Jon being allowed to flee his fight with Jamie.
*/


let jonSnowAttack = 25;
let jonSnowHealth = 100;
let jonSnowDefense = 0;

let jamieLannisterAttack = 35;

if (jonSnowAttack > jamieLannisterAttack){
    console.log('Jon has a better atck than Jamie')
} else if (jamieLannisterAttack > jonSnowAttack){
    console.log('Jamie has a better atck than Jon') 
}else {
    console.log('Jamie has same attack as a Jon')
}


jonSnowDefense += 25



if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense){
    console.log ('Jon has been slain')
} else {
//jonSnowHealth = JjonSnowHealth - jamieLannisterAttack
    jonSnowHealth -= jamieLannisterAttack - jonSnowDefense
    console.log (`Jon's health is now ${jonSnowHealth}`)
}


if ((jonSnowHealth+50)>100){
    jonSnowHealth = 100
}else {
    jonSnowHealth += 50
}

//while (jonSnowHealth > 0){
//    jonSnowHealth -= jamieLannisterAttack - jonSnowDefense
//    console.log(`jon's health is ${jonSnowHealth}`)

//    if (jonSnowHealth <=0){
 //       console.log(`Jon has been slain`)
 //   }
//}


for (let i = 0; i<5; i++){
    if (jonSnowHealth <= 0){
        console.log('jon was slain')
        
    } else {
        jonSnowHealth -=jamieLannisterAttack - jonSnowDefense
        console.log (`jon's heals is now ${jonSnowHealth}`)
    }
    console.log (i)

}