function get_random_number(min, max){
    do{
        r = Math.random()
    }while(r == 1)
    return Math.floor(r * (max - min)) + min
}

function google_application(){
    console.log(123);
}

var gmail_alert_text = ['確定要將網頁跳轉至Gmail?\n您可能不會得到任何回應，因為開發人員不想要coding了!',
'當您看到這串文字，就代表您按下了Gmail。\n是不是相當驚喜呢?']

function gmail(){
    alert(gmail_alert_text[get_random_number(0, gmail_alert_text.length)])
}

document.querySelector("#input_bar").addEventListener("keydown", (e)=>{
    if(e.key == "Enter") doSomething();
});

function doSomething(){
    // location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley";
    document.getElementById("content").innerHTML = '<video src="./video/Rick_Astley.mp4" autoplay style="margin-top: 0px; height: 100vh;"></video>'
    document.getElementById("content").style.marginTop = '0px'
    document.getElementById("content").style.height = '90vh'
}