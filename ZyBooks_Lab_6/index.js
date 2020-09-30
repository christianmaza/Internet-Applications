function calcWordFrequencies() {
    var phrase = prompt("Enter phrase: "); 
    phrase = phrase.split(" "); //split phrase into individual words
    var wordCount = []; //empty array for the count of words
    var zeroCount;


    for(var i = 0; i < phrase.length; i++){ //first array loop for the phrase
       zeroCount = 0; //reset the count back down to zero for each word.
       for(var j = 0; j < phrase.length; j++){ //second array lop for comparing the word in the phrase to all words of of the phrase
          if(phrase[i] === phrase[j]){
             wordCount[i] = zeroCount+ 1;
             zeroCount++;
          }
       }
    }
    for( var i = 0; i < phrase.length; i++){
       document.writeln(phrase[i] + " " + wordCount[i] + "<br>");
    }
 }