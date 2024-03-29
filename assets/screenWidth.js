function checkScreenSize() {

    function handleResize() {
    
      const screenWidth = window.innerWidth;
 
      const collectionTiles = document.querySelectorAll('.collection-list-item');
  
      collectionTiles.forEach(tile => {
        if (screenWidth > 768) {
          tile.classList.add('tilt'); 
        } else {
          tile.classList.remove('tilt'); 
        }
      });
      
      VanillaTilt.init(document.querySelectorAll(".tilt"), {
        reverse:                false,  // reverse the tilt direction
        max:                    5,     // max tilt rotation (degrees)
        startX:                 0,      // the starting tilt on the X axis, in degrees.
        startY:                 0,      // the starting tilt on the Y axis, in degrees.
        perspective:            1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale:                  1.05,      // 2 = 200%, 1.5 = 150%, etc..
        speed:                  500,    // Speed of the enter/exit transition
        transition:             true,   // Set a transition on enter/exit.
        axis:                   null,   // What axis should be enabled. Can be "x" or "y"
        reset:                  true,   // If the tilt effect has to be reset on exit.
        "reset-to-start":       true,   // Whether the exit reset will go to [0,0] (default) or [startX, startY]
        easing:                 "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
        glare:                  false,  // if it should have a "glare" effect
        "max-glare":            1,      // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
        "glare-prerender":      false,  // false = VanillaTilt creates the glare elements for you, otherwise
                                        // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
        "mouse-event-element":  null,   // css-selector or link to HTML-element what will be listen mouse events
        gyroscope:              true,   // Boolean to enable/disable device orientation detection,
        gyroscopeMinAngleX:     -45,    // This is the bottom limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the left border of the element;
        gyroscopeMaxAngleX:     45,     // This is the top limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the right border of the element;
        gyroscopeMinAngleY:     -45,    // This is the bottom limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the top border of the element;
        gyroscopeMaxAngleY:     45,     // This is the top limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the bottom border of the element;
    });
    }
  

    window.addEventListener('resize', handleResize);

    handleResize();
  
    return handleResize;
  }
  
 
  const resizeHandler = checkScreenSize();
  
  