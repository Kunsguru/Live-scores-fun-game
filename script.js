// Simulating live updates
    setInterval(function() {
        // Generate random numbers for home, away, and draw
        var homeScore = Math.floor(Math.random() * 5);
        
        var drawScore = Math.floor(Math.random() * 5);
        
        var awayScore = Math.floor(Math.random() * 5);
        
        // Update the displayed results
        document.getElementById('homeResult').innerText = homeScore;
        
        document.getElementById('drawResult').innerText = drawScore;
        
        document.getElementById('awayResult').innerText = awayScore;
    }, 20000); // Update every 2 seconds
