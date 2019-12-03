

let traveled = 'Seoul Busan Daegu Tokyo Osaka Kyoto Taipei Bangkok London Brussels Amsterdam Lucerne Interlaken Prague Vienna Munich Rottenburg Rome Venice Paris San Francisco L.A. San Diego Las Vegas New York Boston Washington D.C'; 
let index = 0;
let speed = 70;

function cityshow() {
  if (index < traveled.length) {
    document.getElementById("cities").innerHTML += traveled.charAt(index);
    index++;
    setTimeout(cityshow, speed);
  }
}