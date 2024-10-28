let totalNeeded = 2700000;  // Total target in BDT
let currentRaised = 500000;  // Amount raised so far

// Function to update the progress bar based on raised amount
function updateProgress(amount) {
    currentRaised += amount;
    let progressPercent = (currentRaised / totalNeeded) * 100;
    document.getElementById('progress-bar').style.width = progressPercent + '%';
    document.getElementById('raised-amount').innerText = currentRaised;
}

// Example: Manually update donation progress
updateProgress(0);  // Start at 0


