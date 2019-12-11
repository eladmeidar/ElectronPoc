const { ipcRenderer } = require('electron')

document.getElementById('toggle').addEventListener('click', (e) => {
  ipcRenderer.send('toggle', {height: getRandomInt(200, 400), width: getRandomInt(200, 400)})
})

document.getElementById('goLeft').addEventListener('click', (e) => {
  ipcRenderer.send('stickToSide', 'left')
})
document.getElementById('goRight').addEventListener('click', (e) => {
  ipcRenderer.send('stickToSide', 'right')
})
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
