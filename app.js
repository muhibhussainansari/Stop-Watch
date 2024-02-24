var min = 0
var sec = 0
var msec = 0

var html_min = document.querySelector('#min')
var html_sec = document.querySelector('#sec')
var html_msec = document.querySelector('#msec')
var stopp;

function start() {
    stopp = setInterval(function () {
        msec++
        html_msec.innerHTML = msec
        if (msec >= 100) {
            sec++
            html_sec.innerHTML = sec
            msec = 0
        } else if (sec >= 60) {
            min++
            html_min.innerHTML = min
            sec = 0
        }
    }, 10)
    document.querySelector('#strtBtn').disabled = true
}

function stp() {
    clearInterval(stopp)
    document.querySelector('#strtBtn').disabled = false
}

function rset() {
    min = 0
    sec = 0
    msec = 0

    html_min.innerHTML = min
    html_sec.innerHTML = sec
    html_msec.innerHTML = msec
}