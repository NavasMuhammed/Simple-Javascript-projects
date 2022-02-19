function rps(yourChoice) {

    console.log(yourChoice.id)
    var humanChoice, botchoice;
    humanChoice = yourChoice.id;

    botchoice = botSelect(randFn())
    console.log('computer took', botchoice)

    result = decideWinner(humanChoice, botchoice)
    console.log(result)

    message = finalMessage(result)
    console.log(message)

    rpsDisplay(yourChoice.id, botchoice,message)

}
function randFn() {
    return Math.floor(Math.random() * 3)
}
function botSelect(number) {
    return ['rock', 'paper', 'scissors'][number]
}
function decideWinner(yourChoice, botchoice) {
    var db = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 }
    };
    var yourScore = db[yourChoice][botchoice]
    var botScore = db[botchoice][yourChoice]
    return [yourScore, botScore];

}
function finalMessage([yourScore, botScore]) {
    if (yourScore === 0) {
        return { 'message': 'You Los!!t', 'color': 'red' };
    } else if (yourScore === 0.5) {
        return { 'message': 'Its A Tie', 'color': 'yellow' };
    } else {
        return { 'message': 'You Won', 'color': 'green' }
    }
}
function rpsDisplay(humanImage, botImage, finalMessage) {
    var imagedb = {
        'rock': document.getElementById('rock').scr = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ODZcifd4cdIxLO88y0a2_NmhIO5UJhaNww&usqp=CAU",
        'paper': document.getElementById('paper').scr = "https://sc04.alicdn.com/kf/U695f57b7bc0b4e8e95994498124005efz.jpg",
        'scissors': document.getElementById('scissors').scr = "https://clipartstation.com/wp-content/uploads/2017/11/clipart-ciseaux-3.jpg"
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagedb[humanImage] + "'height=150 width=150 style='box-shadow -1px -1px 50px green;'>"
    messageDiv.innerHTML = "<h1 style='color:" + finalMessage['color'] + "; font-size:60px; padding:30px; '>"+finalMessage['message']+"</h1>"
    botDiv.innerHTML = "<img src='" + imagedb[botImage] + "'height=150 width=150 style='box-shadow -1px -1px 50px red;'>"

    document.getElementById('display').appendChild(humanDiv)
    document.getElementById('display').appendChild(messageDiv)
    document.getElementById('display').appendChild(botDiv)
}


