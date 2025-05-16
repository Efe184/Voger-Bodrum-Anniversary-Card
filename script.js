document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    const letterContent = document.querySelector('.letter-content');
    let isOpen = false;
    let isLetterOut = false;

    envelope.addEventListener('click', function() {
        if (!isOpen) {
            // Open the envelope
            envelope.classList.add('open');
            
            // Show the letter with a small delay
            setTimeout(function() {
                letter.classList.add('visible');
            }, 500);
            
            isOpen = true;
        } else if (!isLetterOut) {
            // Do nothing when clicking on the envelope when already open
            // Let the letter handle the click to be pulled out
        } else {
            // Close the letter first
            letter.classList.remove('show');
            
            // Move letter back inside the envelope
            setTimeout(function() {
                letter.classList.remove('visible');
                
                // Close the envelope with a delay
                setTimeout(function() {
                    envelope.classList.remove('open');
                    isOpen = false;
                }, 400);
                
                isLetterOut = false;
            }, 600);
        }
    });
    
    // Add click event for the letter to pull it out
    letter.addEventListener('click', function(event) {
        if (isOpen && !isLetterOut) {
            event.stopPropagation(); // Prevent triggering envelope click
            letter.classList.add('show');
            isLetterOut = true;
        }
    });

    // Prevent the page from scrolling when letter content is scrolled
    letterContent.addEventListener('wheel', function(event) {
        if (isLetterOut) {
            const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;
            
            // Check if scroll has reached the bottom or top
            if (
                (event.deltaY > 0 && scrollTop + clientHeight >= scrollHeight) ||
                (event.deltaY < 0 && scrollTop <= 0)
            ) {
                // At the top or bottom of the content, so allow default scroll behavior
                return;
            }
            
            // Otherwise prevent default scroll behavior
            event.preventDefault();
            event.currentTarget.scrollTop += event.deltaY;
        }
    });

    // Prevent touchmove default behavior on mobile when letter is out
    letterContent.addEventListener('touchmove', function(event) {
        if (isLetterOut) {
            event.stopPropagation();
        }
    }, { passive: false });
}); 