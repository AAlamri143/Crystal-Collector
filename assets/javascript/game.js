$(document).ready(function(){

    var Random=Math.floor(Math.random()*200+60)
    $("#randomNumber").text(Random);
    var num1= Math.floor(Math.random()*15+1)
    var num2= Math.floor(Math.random()*15+1)
    var num3= Math.floor(Math.random()*15+1)
    var num4= Math.floor(Math.random()*15+1)
    
    var winsNumber = 0;
    var lossesNumber = 0;
    var totalScoreNumber = 0;


    $("#numberWins").text(winsNumber);
    $("#numberLosses").text(lossesNumber);
    function reset (){
        Random=Math.floor(Math.random()*102+19);
        console.log(Random)
        $('#randomNumber').text(Random);
        num1= Math.floor(Math.random()*12+1);
        num2= Math.floor(Math.random()*12+1);
        num3= Math.floor(Math.random()*12+1);
        num4= Math.floor(Math.random()*12+1);
        totalScoreNumber= 0;
        $('#finalScore').text(totalScoreNumber);
    }
         
    function yay(){
        
        // alert("You Win")
        winsNumber++; 
        $('#numberWins').text(winsNumber);
        SoundWin = new Audio('assets/images/win1.mp3'); 
        SoundWin.play();
        reset();
    }

    function loser(){
        alert ("You lose!");
        lossesNumber++;
        $('#numberLosses').text(lossesNumber);
        SoundLose = new Audio('assets/images/lose1.mp3'); 
        SoundLose.play();
        reset()
    }

    $('#First').on('click', function(){
        totalScoreNumber = totalScoreNumber + num1;
        console.log("New totalScoreNumber= " + totalScoreNumber);
        $('#finalScore').text(totalScoreNumber); 

        if (totalScoreNumber == Random){
          yay();
        }
        else if (totalScoreNumber > Random){
          loser();
        }  
        Sound = new Audio('assets/images/rubee1.mp3'); 
        Sound.play();
    })
    $("#Second").on("click", function(){
        totalScoreNumber = totalScoreNumber + num2;
        console.log("New totalScoreNumber= " + totalScoreNumber);
        $('#finalScore').text(totalScoreNumber); 
        if (totalScoreNumber == Random){
          yay();
        }
        else if (totalScoreNumber > Random){
          loser();
        }   
        Sound = new Audio('assets/images/rubee1.mp3'); 
        Sound.play();
    })
    $("#Third").on("click", function(){
        totalScoreNumber = totalScoreNumber + num3;
        console.log("New totalScoreNumber= " + totalScoreNumber);
        $('#finalScore').text(totalScoreNumber); 
        if (totalScoreNumber == Random){
            yay();
        }
        else if (totalScoreNumber > Random){
            loser();
        }   
        Sound = new Audio('assets/images/rubee1.mp3'); 
        Sound.play();
    })
      $("#Fourth").on("click", function(){
        totalScoreNumber = totalScoreNumber + num4;
        console.log("New totalScoreNumber= " + totalScoreNumber);
      $('#finalScore').text(totalScoreNumber); 
        if (totalScoreNumber == Random){
            yay();
        }
        else if (totalScoreNumber > Random){
            loser();
        }   
        Sound = new Audio('assets/images/rubee1.mp3'); 
        Sound.play();
      })
})