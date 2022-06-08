var fancyHeading = document.getElementsByClassName('fancy')[0];
var letters = fancyHeading.textContent.split('');

var content = letters.map((val, i) => {
  let delay = Math.floor((Math.random() * 1000) + 1);
  return ('<span style="animation-delay: '+ delay + 'ms">'
          + val +
          '</span>');
});

fancyHeading.innerHTML = "";

for (var i = 0; i < content.length; i++) {
  fancyHeading.innerHTML += content[i];
}
