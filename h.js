const input=require("readline-sync");
console.log("             Hangman in javascriptb            ");
let Hangman=[`
            +------+
                     |
                     |
                     |
                     |
                     |
        ==============`,`
            +------+ 
            |        |
                     |
                     |
                     |
                     |
        ==============`,`
            +------+
            |        |
            0        |
                     |
                     |
                     |
        ==============`,`
            +------+
            |        |
            0        |
            |        |
                     |
                     |
        ==============`,`
            +------+ 
            |        |
            0        |
           /|        |
                     |
                     |
        ==============`,`
            +------+
            |        |
            0        |
           /|\\       |
                     |
                     |
        ==============`,`
            +------+
            |        |
            0        |
           /|\\       |
           /         |
                     |
        ==============`,`
            +------+
            |        |
            0        |
           /|\\       |
           / \\       |
                     |
        ==============`] 

let words=["aniket","anikettiwari","house","moon","ram","sitaaram",];

let sec_w=Math.floor(Math.random()*(words.length))
let secret_word=words[sec_w];
let sec_word = secret_word
let word_len=secret_word.length;
let blanks="-".repeat(word_len);

let wrong_guess=Hangman.length-1;
let count = 0
let used_letters=[];
let guess_word = true
let name=input.question("Please inter your name =>");
console.log(`Welcome to hangman ${name}.`);
console.log(`guess the word ${blanks} >>>>> ${Hangman[7-wrong_guess]}`);

while (guess_word){
    let guess=input.question(`Please enter your guess =>`);
    guess=guess.toLowerCase();
    used_letters.unshift(guess);
    if(secret_word.includes(guess)){
        console.log();
        console.log(`Your Guess is Right >>> ${blanks}`);
        for(i in secret_word){
            if(guess===secret_word[i]){
                id = secret_word.indexOf(guess)
                blanks = blanks.split('')
                blanks[id] = guess
                secret_word = secret_word.split('')
                secret_word[id] = '-'
                let str = ''
                for(i of blanks){str+=i}
                blanks = str
                let str1 = ''
                for (i of secret_word){str1+=i}
                secret_word = str1
            }
        }
    }
    else{
        if(wrong_guess==1){
            console.log(`ohh you LOST!! \n secret word was ${sec_word} >>>> ${Hangman[7]}`);
            guess_word = false
        }
        else{
            count++
            console.log(`sorry your guess is wrong ${blanks} >>>>> ${Hangman[count]}`);
    }
    wrong_guess--;
    }
    if(blanks == sec_word)
    {console.log(`ohh!! you WON!!\nsecret word was ${sec_word}`);
    break}

    console.log(`guess the word ${blanks} `);

}