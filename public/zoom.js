document.addEventListener(
  "touchmove",
  function(event) {
    if (event.scale !== 1) {
      event.preventDefault();
    }
    else{
        event.preventDefault();
    }
  },
  false
);
