nonsavageormightylionelchrusherblike = 0
dogeminer2back2damoon = 0
flipshredtailonbz = 0
goat = 0

function AuditorySensation() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/P-UpR6FzI/model.json', modelReady)
}

function modelReady() {
    classifier.classify(gotResults)
}

function gotResults(error, results) {
    if(error) {
        console.log(error)
    }
    else {
        console.log(results)
        red=Math.floor(Math.random()*255)+1
        green=Math.floor(Math.random()*255)+1
        blue=Math.floor(Math.random()*255)+1
        document.getElementById('detect').innerHTML= 'Detected: ' + results[0].label
        document.getElementById('acurate').innerHTML = 'Accuracy: ' + (results[0].confidence*100).toFixed(2) + '%'
        document.getElementById("detect").style.color = "rgb(" + red + "," + green + "," + blue + ")"
        document.getElementById("acurate").style.color = "rgb(" + red + "," + green + "," + blue + ")"
        if (results[0].label == "Meeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeow") {
            document.getElementById("IMAEG").src = '01-cat-stretching-feet.webp'
            flipshredtailonbz += 1
        }
        else if (results[0].label == "Haha yes dog go woof") {
            document.getElementById("IMAEG").src = 'giphy-downsized-large.gif'
            dogeminer2back2damoon += 1
        }
        else if (results[0].label == "Ror") {
            document.getElementById("IMAEG").src = 'lion-roaring-aruchuta.gif'
            nonsavageormightylionelchrusherblike += 1
        }
        else if (results[0].label == "ma") {
            document.getElementById("IMAEG").src = '200w.gif'
            goat += 1
        }
        else{
            document.getElementById("IMAEG").src = 'giphy.gif'
        }
        document.getElementById("dog").innerHTML = "Dog detected: " + dogeminer2back2damoon
        document.getElementById("cat").innerHTML = "Cat detected: " + flipshredtailonbz
        document.getElementById("goat").innerHTML = "Goat detected: " + goat
        document.getElementById("lion").innerHTML = "Lion detected: " + nonsavageormightylionelchrusherblike
    }
}
