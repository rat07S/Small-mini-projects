document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents default form submission behavior
    
    // Get user input values
    let location = document.getElementById('location').value;
    let material = document.getElementById('material').value;

    // Fetch data from backend
    fetch('1.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({ location: location, material: material }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        displayResults(data); // Display fetched results
    })
    .catch(error => {
        console.error('Error:', error); // Log any errors that occur during fetch
        // Optionally handle error display or feedback to the user
    });
});

function displayResults(data) {
    console.log('Data received:', data); // Log received data for debugging
    
    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    if (data.length === 0) {
        resultsDiv.innerHTML = '<p>No rag pickers found for the specified location and material.</p>';
    } else {
        data.forEach(function(ragPicker) {
            // Create a div for each rag picker
            let ragPickerDiv = document.createElement('div');
            ragPickerDiv.classList.add('rag-picker');

            // Create elements to display rag picker information
            let name = document.createElement('h3');
            name.textContent = ragPicker.name;

            let contactInfo = document.createElement('p');
            contactInfo.textContent = `Contact: ${ragPicker.phone}, Email: ${ragPicker.email}`;

            let materials = document.createElement('p');
            materials.textContent = `Materials Accepted: ${ragPicker.materials}`;

            // Append elements to rag picker div
            ragPickerDiv.appendChild(name);
            ragPickerDiv.appendChild(contactInfo);
            ragPickerDiv.appendChild(materials);

            // Append rag picker div to results container
            resultsDiv.appendChild(ragPickerDiv);
        });
    }
}
