const myLabel = document.getElementById('myLabel');
setInterval(updateDisplay, 1000);
function updateDisplay() {
    const date = new Date();
    myLabel.innerText = formatTime();

    function formatTime() {
        let hour = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();
        let amOrPm = hour < 13 ? 'AM' : 'PM';
        hour = hour - 12;
        hour = formatZero(hour);
        min = formatZero(min);
        sec = formatZero(sec);
        return `${hour}:${min}:${sec} ${amOrPm}`;
    }
    function formatZero(time) {
        time = time.toString();
        return time.length < 2 ? '0'+time : time;
    }
}