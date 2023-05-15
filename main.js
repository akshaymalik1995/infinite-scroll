// Get the body element
const body = document.querySelector('body');
// Create a list of 50 tailwind colors
const colors = new Set([

    "bg-red-400",
    "bg-red-500",
    "bg-red-600",
    "bg-red-700",
    
    
    "bg-blue-400",
    "bg-blue-500",
    "bg-blue-600",
    "bg-blue-700",
    
    "bg-green-400",
    "bg-green-500",
    "bg-green-600",
    "bg-green-700",

  
    "bg-yellow-400",
    "bg-yellow-500",
    "bg-yellow-600",
    "bg-yellow-700",

  
    "bg-pink-400",
    "bg-pink-500",
    "bg-pink-600",
    "bg-pink-700",


    "bg-purple-400",
    "bg-purple-500",
    "bg-purple-600",
    "bg-purple-700",
]);

let timeoutId;
function handleScroll() {
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
        appendElement();
    }, 10);
}

let count = 3

// Create a function appendElement
function appendElement() {
    // Create a new element div
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="item w-screen flex justify-center items-center h-screen">
        <div class="text-6xl font-bold">${count}</div>
    </div>
    `;
    // Select a random color from the colors array
    const randomColor = [...colors][Math.floor(Math.random() * colors.size)];
    // Add the random color to the div
    div.classList.add(randomColor);
    // Append the div to the body
    body.appendChild(div);
    count++
}

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
    handleScroll();
});

