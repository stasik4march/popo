const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

let  clock = setInterval(
    function calcTime () {
        let deadline = new Date(2024, 5, 1);
        let date_now =new Date();
        let diff = deadline.getTime() - date_now.getTime();

        let d = Math.floor(diff / (1000 * 60 * 60 * 24));
        let hr = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 *60));
        let min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let sec = Math.floor((diff % (1000 * 60)) / 1000);
        
        console .log(d, hr, min, sec);

        hr = hr < 10 ? "0" + hr : hr;
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;

        days.textContent = d;
        hours.textContent = hr;
        minutes.textContent = min;
        seconds.textContent = sec;
    }
)