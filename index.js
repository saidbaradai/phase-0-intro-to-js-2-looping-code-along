// Code your solutions in this file
function writeCards(arr, word){
    let output=[]

    for (let i = 0; i < arr.length; i++) {
        output.push(`Thank you, ${arr[i]}, for the wonderful ${word} gift!`)
        
    }
    return output

}

function countDown(number){
    for (let i = number; i >= 0; i--) {
        console.log(i)
        
    }
}