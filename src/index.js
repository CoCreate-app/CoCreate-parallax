import './index.css';

function CoCreateParallax()
    {
      var parallaxEls = document.getElementsByClassName("parallax");
    
    for (var i=0; i<parallaxEls.length; i++) {
    		  var parallaxEl = parallaxEls.item(i);
    		  
    		  parallaxEl.style.backgroundImage = 'url('+parallaxEl.getAttribute('parallax-src')+')';
    		  parallaxEl.style.height = parallaxEl.getAttribute('parallax-height');
    	}
    	
    }
    
    CoCreateParallax();
export default CoCreateParallax;