var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

function start(){
    document.getElementById("ta").innerHTML="";
    Recognition.start();
}
Recognition.onresult = function(event){
    console.log(event);

    var content= event.results[0][0].transcript;
    console.log(content);
    document.getElementById("ta").innerHTML=content;
if(content=="take my selfie"){
    console.log("taking selfie-----");
ver();
}
    
}
function ver(){
    var synth= window.speechSynthesis;

    speak_data="taking selfie in 5 seconds...";
    
    var utterance= new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterance);

    Webcam.attach(area);

    
    

setTimeout(function()
{
    start();
    save();
},5000);

}

area= document.getElementById("area");
Webcam.set({
    width: 300,
    height: 230,
    image_format:'png',
    png_quality: 90

});




function start(){
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML='<img id="i1" src="'+data_uri+'">';
    });
}

function save(){
link=documeent.getElementById("link");
Img=documeent.getElementById("i1").src;
link.href=Img;
link.click();
}