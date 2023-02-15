function get_random_number(min, max){
    do{
        r = Math.random()
    }while(r == 1)
    return Math.floor(r * (max - min)) + min
}

function google_application(){
    console.log(123);
}


// gmail -> alert
var gmail_alert_text = ['林辰威，我要你的平板', '楊曜鳴薯條',  '胡晉瑋好醜', '蔡少華氣球', '胡傑棋超帥', '錢鋼教我數學', '譚翊軒帳號被盜']

function gmail(){
    alert(gmail_alert_text[get_random_number(0, gmail_alert_text.length)])
}


// photo
var photo_link = ['photo/1.jpg', 'photo/2.jpg', 'photo/3.jpg', 'photo/4.jpg', 'photo/5.jpg', 'photo/6.jpg', 'photo/7.jpg', 'photo/8.jpg', 'photo/9.jpg', 'photo/10.jpg', 'photo/11.jpg', 'photo/12.jpg', 'photo/13.jpg', 'photo/14.jpg', 'photo/15.jpg', 'photo/16.jpg', 'photo/17.jpg', 'photo/18.jpg', 'photo/19.jpg', 'photo/20.jpg', 'photo/21.jpg', 'photo/22.jpg', 'photo/23.jpg', 'photo/24.jpg', 'photo/25.jpg', 'photo/26.jpg', 'photo/27.jpg', 'photo/28.jpg', 'photo/29.jpg', 'photo/30.jpg'];

function photo(){
    document.body.style.background = `url(${photo_link[get_random_number(0, photo_link.length)]})`;
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundSize = 'contain';
}


// input bar -> play the mp4
document.querySelector("#input_bar").addEventListener("keydown", (e)=>{
    if(e.key == "Enter") play_mp4();
});

function play_mp4(){
    document.getElementById("content").innerHTML = '<video src="./video/Rick_Astley.mp4" autoplay style="margin-top: 0px; height: 100vh;"></video>'
    document.getElementById("content").style.marginTop = '0px'
    document.getElementById("content").style.height = '90vh'
    document.getElementById("content").style.backgroundSize = 'contain';
}