var lastNumber = -1;

function randomQuotes(){
    var AuthorName = [ "― Oscar Wilde" , "― Bernard M. Baruch" , "― Mahatma Gandhi" , "― Robert Frost", "― Elbert Hubbard"];
    var Quotes = ["“Be yourself; everyone else is already taken.”" , "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”", "“Be the change that you wish to see in the world.”", "“In three words I can sum up everything I've learned about life: it goes on.”", "“A friend is someone who knows all about you and still loves you.”"];

    var num = lastNumber;
    while(num == lastNumber){
        num = Math.floor( Math.random() * AuthorName.length);
    }
    lastNumber = num;

    document.getElementById("Authorname").innerHTML = AuthorName[num];
    document.getElementById("Quotes").innerHTML = Quotes[num];

}