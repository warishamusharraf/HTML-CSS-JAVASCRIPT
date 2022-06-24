

var x=setInterval(()=>{
    var dest=new Date('july 21,2022 10:00:00').getTime();
    var now=new Date().getTime();

     var dif= dest-now;
    var days= Math.floor(dif/(1000*60*60*24));
    console.log(days);
    var hours=Math.floor((dif %(1000*60*60*24))/(1000*60*60));
    console.log(hours);
    var minutes=Math.floor((dif %(1000*60*60))/(1000*60));
    var seconds=Math.floor((dif %(1000*60))/(1000));
    console.log(seconds);
    document.getElementById("day").innerHTML=days;
    document.getElementById("hour").innerHTML= hours;
    document.getElementById("min").innerHTML= minutes;
    document.getElementById("sec").innerHTML=  seconds;

},1000);


