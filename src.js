function loadProgress() {
    let canvas = document.getElementById('canvas');
    let c = canvas.getContext('2d');

    // Clear the canvas before drawing
    c.clearRect(0, 0, canvas.width, canvas.height);

    // Get the lengths of each data item, parsing as needed
    let notesLength = localStorage.getItem('noteAmount');
    let schedulesLength = localStorage.getItem('schedules') ? JSON.parse(localStorage.getItem('schedules')).length : 0;
    let finishedLength = localStorage.getItem('finished') ? JSON.parse(localStorage.getItem('finished')).length : 0;
    let deletedLength = localStorage.getItem('deleted') ? JSON.parse(localStorage.getItem('deleted')).length : 0;

    // Draw rectangles based on lengths
    c.fillStyle = 'blue'; // Set color for notes
    c.fillRect(150, 496, 55, notesLength);
    
    c.fillStyle = 'green'; // Set color for schedules
    c.fillRect(250, 496, 55, schedulesLength);
}
