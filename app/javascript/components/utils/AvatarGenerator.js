function generateAvatarFromName(fullName) {
  if (fullName) {
    var initials = fullName.split(' ').map((str) => str ? str[0].toUpperCase() : "").join('');
  }
  else {
    var initials = 'U'
  }
  var canvas = document.createElement('canvas');
  var radius = 30;
  var margin = 5;
  canvas.width = radius * 2 + margin * 2;
  canvas.height = radius * 2 + margin * 2;

  // Get the drawing context
  var ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.fillStyle = 'grey';
  ctx.fill();
  ctx.fillStyle = "white";
  ctx.font = "bold 30px Arial";
  ctx.textAlign = 'center';
  ctx.fillText(initials, radius + 5, radius * 4 / 3 + margin);
  return canvas.toDataURL();
}

export {
  generateAvatarFromName
}