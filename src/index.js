import './index.css';

function CoCreateParallax()
    {
      var parallaxEls = document.getElementsByClassName("parallax");
    
    for (var i=0; i<parallaxEls.length; i++) {
    		  var parallaxEl = parallaxEls.item(i);
    		  
    		  parallaxEl.style.backgroundImage = 'url('+parallaxEl.getAttribute('data-parallax_src')+')';
    		  parallaxEl.style.height = parallaxEl.getAttribute('data-parallax_height');
    	}
    	
    }
    
    CoCreateParallax();
export default CoCreateParallax;