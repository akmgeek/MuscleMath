document.addEventListener('DOMContentLoaded', function() {
    const userDetailsModal = document.getElementById('userDetailsModal');
    const userDetailsForm = document.getElementById('userDetailsForm');
    
    // Check if user details exist in localStorage
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
    
    // Show modal if user details don't exist
    if (!userDetails) {
        userDetailsModal.classList.remove('hidden');
    } else {
        // If user details exist, update all forms immediately
        updateAllForms(userDetails);
    }

    // Handle form submission
    userDetailsForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Collect form data
        const formData = {
            name: document.getElementById('name').value,
            age: document.getElementById('age').value,
            gender: document.getElementById('gender').value,
            weight: document.getElementById('weight').value,
            height: document.getElementById('height').value,
            activityLevel: document.getElementById('activityLevel').value,
            goal: document.getElementById('goal').value
        };

        // Save to localStorage
        localStorage.setItem('userDetails', JSON.stringify(formData));

        // Hide modal
        userDetailsModal.classList.add('hidden');

        // Update all forms with the new data
        updateAllForms(formData);
    });

    // Function to update all forms with user details
    function updateAllForms(details) {
        // Update nutrition page
        const nutritionForm = document.getElementById('nutritionForm');
        if (nutritionForm) {
            const fields = ['weight', 'height', 'age', 'gender', 'activityLevel', 'goal'];
            fields.forEach(field => {
                const input = document.getElementById(field);
                if (input) input.value = details[field];
            });
        }

        // Update progress page
        const progressForm = document.getElementById('progressForm');
        if (progressForm) {
            const weightInput = document.getElementById('weight');
            if (weightInput) weightInput.value = details.weight;
        }

        // Update calculators page
        const calculatorsForm = document.getElementById('calculatorsForm');
        if (calculatorsForm) {
            const fields = ['weight', 'height', 'age', 'gender'];
            fields.forEach(field => {
                const input = document.getElementById(field);
                if (input) input.value = details[field];
            });
        }

        // Update training page
        const trainingForm = document.getElementById('trainingForm');
        if (trainingForm) {
            const goalSelect = document.getElementById('goal');
            if (goalSelect) goalSelect.value = details.goal;
        }
    }
}); 