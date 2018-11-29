
$(document).ready(function () {

    var winsNumber = 0;
    var lossesNumber = 0;
    var totalScoreNumber = 0;

    var Random=Math.floor(Math.random()*200+60)
    console.log(Random);
    var num1= Math.floor(Math.random()*15+1)
    console.log(num1);
    var num2= Math.floor(Math.random()*15+1)
    console.log(num2);
    var num3= Math.floor(Math.random()*15+1)
    console.log(num3);
    var num4= Math.floor(Math.random()*15+1)
    console.log(num4);

    function reset(){
        Random=Math.floor(Math.random()*102+19);
        console.log(Random)
        $('#randomNumber').text(Random);
        num1= Math.floor(Math.random()*12+1);
        num2= Math.floor(Math.random()*12+1);
        num3= Math.floor(Math.random()*12+1);
        num4= Math.floor(Math.random()*12+1);
        totalScoreNumber= 0;
        $('#finalScore').empty();
    }

    function hitCrystal() {
        $("#finalScore").text(totalScoreNumber);
        $("#picture").html('<img src="assets/images/starting.gif" class="mariopic">');
        var Sound = new Audio('assets/images/rubee1.mp3');
        Sound.play();
    }

    $('#randomNumber').text(Random);

    $("#First").on("click", function () {
        totalScoreNumber += num1; // totalScore = totalScore + coinNum1;
        hitCrystal();
        decide();
    })

    $("#Second").on("click", function () {
        totalScoreNumber += num2;
        hitCrystal();
        decide();
    })

    $("#Third").on("click", function () {
        totalScoreNumber += num3;
        hitCrystal();
        decide();
    })

    $("#Fourth").on("click", function () {
        totalScoreNumber += num4;
        hitCrystal();
        decide();
    })

    function decide() {
        if (totalScoreNumber === Random) {
            winsNumber++;
            $("#numberWins").text(winsNumber);
            $("#result").text("You Win !");;
            $("#picture").html('<img src="assets/images/pictureWin.gif" class="mariopic">');
            var SoundWin = new Audio('assets/images/win1.mp3');
            SoundWin.play();
            reset();
        } else if (totalScoreNumber > Random) {
            lossesNumber++;
            $("#numberLosses").text(lossesNumber);
            $("#result").text("Oh No !");
            $("#picture").html('<img src="assets/images/pictureLoss.gif" class="mariopic">');
            var SoundLose = new Audio('assets/images/lose1.mp3');
            SoundLose.play();
            reset();
        } else {
            $("#result").text("");
        }
    }

});