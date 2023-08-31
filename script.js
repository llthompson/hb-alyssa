  // Function to set or update the visitor count
  function setVisitorCount(count) {
    document.getElementById('visitorCount').textContent = count;
}

// Function to increment the visitor count
function incrementVisitorCount() {
    // Check if a 'visitorCount' cookie exists
    let count = parseInt(getCookie('visitorCount')) || 0;
    
    // Increment the count
    count++;
    
    // Update the 'visitorCount' cookie with the new count
    document.cookie = 'visitorCount=' + count;
    
    // Update the display
    setVisitorCount(count);
}

// Function to get a cookie by name
function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
}

// Initialize the counter on page load
window.onload = function () {
    let count = parseInt(getCookie('visitorCount')) || 0;
    setVisitorCount(count);
};

// Increment the counter on each page visit
incrementVisitorCount();