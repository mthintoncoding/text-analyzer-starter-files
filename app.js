function getAverageWordLength(userProse){
  var totalLength = userProse.join("").length;
  return (totalLength / userProse.length).toFixed(2);
}


function uniqueWordCount(userProse){
  var results = {};
  var uniqueWords = [];
  userProse.forEach(function(word){
    results[word] = word;
  });
    for(var j = 0; j < userProse.length; j++){
      if(userProse[j] === results[userProse[j]]){
        results[userProse[j]] = 0;
      }
      results[userProse[j]]++
    }

    for(var word in results){
      if(results[word] == 1){
        uniqueWords.push(word);
      }
    }
    return uniqueWords.length;
}

function textAnalyzer(userProse){
  $('.word-count').text(userProse.length);
  $('.text-report').removeClass('hidden');
  $('.unique-word-count').text(uniqueWordCount(userProse));
  $('.word-length').text(getAverageWordLength(userProse));
}

function createTextArray(text){
  var userArray = text.toLowerCase().split(" ");
  textAnalyzer(userArray);
}

function getUserText(){
  $('.user-text-form').submit(function(event){
    event.preventDefault();
    var userText = $("#user-text").val();
    createTextArray(userText);
  })
}

$(getUserText)
