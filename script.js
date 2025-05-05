const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 
               'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 
               'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 
               'An Old Dog'];

// Function to sort bands
function sortBands(bands) {
    return bands.sort((a, b) => {
        // Create a function to get the relevant part of the string for sorting
        const getName = (name) => {
            // Remove 'a', 'an', 'the' from the start of the string
            return name.replace(/^(a|an|the)\s+/i, '').toLowerCase();
        };
        
        return getName(a) > getName(b) ? 1 : -1;
    });
}

// Sort the bands
const sortedBands = sortBands(bands);

// Populate the unordered list
const bandList = document.getElementById('band');
sortedBands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    bandList.appendChild(li);
});