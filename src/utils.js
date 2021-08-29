function randNum(base) {
  return Math.ceil(Math.random() * base);
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function save(blob, filename) {
  const link = document.createElement('a')
  link.style.display = 'none'
  document.body.appendChild(link)

  link.href = URL.createObjectURL(blob)
  link.download = filename
  link.click()
  // URL.revokeObjectURL( url ); breaks Firefox...
}
function saveArrayBuffer(buffer, filename) {
  save(new Blob([buffer], { type: 'application/octet-stream' }), filename)
}
function saveString(text, filename) {
  save(new Blob([text], { type: 'text/plain' }), filename)
}

export { randNum, getRandomColor, saveArrayBuffer, saveString, save };

