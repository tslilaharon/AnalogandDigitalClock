const h  = document.querySelector("#h")
const m = document.querySelector ("#m")
const s =  document.querySelector("#s")

setInterval(()=>{
    var day = new Date();
    var hh = day.getHours() * 30
    var mm = day.getMinutes() * 6
    var ss =  day.getSeconds() * 6

    h.style.transform = `rotateZ (${hh+(mm/12)}deg)`
    m.style.transform = `rotateZ(${mm}deg)`
    s.style.transform = `rotateZ(${ss}deg)`

    var hour = document.querySelector("#hour")
    var minutes = document.querySelector("#minutes")
    var seconds = document.querySelector("#seconds")
    var ampm = document.querySelector("#ampm")

    var hr = new Date().getHours()
    var mn = new Date().getMinutes()
    var sc = new Date().getSeconds()
    var am = "AM";
    //var ampm = "AM";

    if(hr>12)
    {
        hr=hr-12
        var am ="PM"
    }

    hr = (hr < 10) ? "0" + hr : hr
    mn = (mn < 10) ? "0" + mn : mn
    sc = (sc < 10) ? "0" + sc : sc

    hour.innerHTML = hr + ":"
    minutes.innerHTML = mn + ":"
    seconds.innerHTML = sc + "-"
    ampm.innerHTML = am
})