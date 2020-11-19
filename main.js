Webcam.set({
    width : 350,
    height : 30,
    image_format : 'png',
    png_quality : 100
});

camera = document.getElementById("camera");

Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='capture' src='" + data_uri + "'>"
    });
}

console.log("ml5 Version : ", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/uONnW2aTI/model.json', modelloaded);

function modelloaded(){
    console.log("Model Loaded!");
    window.alert("Modal is Loaded!!");
}