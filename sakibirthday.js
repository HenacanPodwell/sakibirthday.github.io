window.onload = function() {
    window.setTimeout(fadeout, 4000); //8 seconds
    window.setTimeout(removeout, 5000); //8 seconds
  }
  
  function fadeout() {
    document.getElementById('loading').style.opacity = '0';
  }

  function removeout() {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('content').style.display = 'flex';
    document.getElementById('content').style.opacity = '1';
  }