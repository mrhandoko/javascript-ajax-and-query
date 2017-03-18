$(document).ready(function () {
  // Generate Random Color
  function getRandomColor () {
    var letters = '0123456789ABCDEF'
    var color = '#'
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }

  $('#click-me').click(function () {
    var randomNumber = Math.floor(Math.random() * 9) + 1
    var randomColor = getRandomColor()
    $(`#box-${randomNumber}`).css('background-color', randomColor)
  })
})
