////////////////////
// RANDOM GENERATORS
////////////////////

// Generate Random Unique ID
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

// Random Nummber
function getRandomNumber(base) {
  return Math.ceil(Math.random() * base)
}

// Random Color
function getRandomColor() {
  var letters = '0123456789ABCDEF'
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

// Make Blob out of different types
// Needed for mapping MIME types correctly
function makeBlobFromSource(sourceType, data) {
  let blob
  if (sourceType === 'arrayBuffer') {
    blob = new Blob([data], { type: 'application/octet-stream' })
  }
  if (sourceType === 'string') {
    blob = new Blob([data], { type: 'text/plain' })
  }
  return blob
}

// Trigger a download
function saveFile(blob, filename) {
  let link = document.createElement('a')
  link.style.display = 'none'
  document.body.appendChild(link)
  link.href = URL.createObjectURL(blob)
  link.download = filename
  link.click()
}

// Save binary data
function saveArrayBuffer(arrayBufferData, filename) {
  let blob = makeBlobFromSource('arrayBuffer', arrayBufferData)
  saveFile(blob, filename)
}

// Save serialized JSON data
function saveString(stringData, filename) {
  let blob = makeBlobFromSource('string', stringData)
  saveFile(blob, filename)
}

export {
  uuidv4,
  getRandomNumber,
  getRandomColor,
  makeBlobFromSource,
  saveArrayBuffer,
  saveString,
  saveFile,
}
