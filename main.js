

function start()
{
    navigator.mediaDevices.getUserMedia({ audio:true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/bCCujDFXo/model.json',modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error,result)
{
    if(error)
    {
        console.error(error);
    }
    else 
    {
        console.log(result);
        random_number_r = Math.floor(Math.random()*225)+1;
        random_number_g = Math.floor(Math.random()*225)+1;
        random_number_b = Math.floor(Math.random()*225)+1;

        document.getElementById("result_label").innerHTML='I can hear -'+
        result[0].label
        document.getElementById("result_confidence").innerHTML='Accuracy -'+
        (result[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color="rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";

        img = document.getElementById('alien1');
        img1 = document.getElementById('alien2');
        img2 = document.getElementById('alien3');
        img3 = document.getElementById('alien4');

        if(result[0].label == "Clap")
        {
            img.src='aliens-01.gif';
            img2.src='aliens-02.png';
            img3.src='aliens-03.png';
            img4.src='aliens-04.png';
        }
        if(result[0].label == "bell")
        {
            img.src='aliens-01.png';
            img2.src='aliens-02.gif';
            img3.src='aliens-03.png';
            img4.src='aliens-04.png';
        }
        if(result[0].label == "snapping")
        {
            img.src='aliens-01.png';
            img2.src='aliens-02.png';
            img3.src='aliens-03.gif';
            img4.src='aliens-04.png';
        }
        








        9
        

    }
}













