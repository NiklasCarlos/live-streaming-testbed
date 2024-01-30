// Function to format a JavaScript Date object as "yyyy-MM-dd HH:mm:ss.fff"
function formatTimestamp(date) {
    const year = date.getUTCFullYear();
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = date.getUTCDate().toString().padStart(2, '0');
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const seconds = date.getUTCSeconds().toString().padStart(2, '0');
    const milliseconds = date.getUTCMilliseconds().toString().padStart(3, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
}

// Function to continuously update the timestamp in the <h1> element using requestAnimationFrame
function updateTimestamp() {
    const currentUtcTimestamp = new Date().toJSON();
    const formattedTimestamp = formatTimestamp(new Date(currentUtcTimestamp));

    // Select the <h1> element and update its content
    const h1Element = document.querySelector('h1');
    h1Element.textContent = "browser: " + formattedTimestamp;

    // Request the next animation frame for continuous updates
    requestAnimationFrame(updateTimestamp);
}

// Call the updateTimestamp function once to start the animation loop
updateTimestamp();
