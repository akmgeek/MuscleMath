document.addEventListener('DOMContentLoaded', function() {
    const userDetailsModal = document.getElementById('userDetailsModal');
    const userDetailsForm = document.getElementById('userDetailsForm');
    const userDetailsButton = document.getElementById('userDetailsButton');

    // Get user details from localStorage
    const userDetails = JSON.parse(localStorage.getItem('userDetails')) || {};
    
    // Update all forms with user details if they exist
    if (userDetails) {
        updateAllForms(userDetails);
    }

    // Function to update all forms with user details
    function updateAllForms(details) {
        const forms = {
            nutrition: ['weight', 'height', 'age', 'gender', 'activityLevel', 'goal'],
            progress: ['weight', 'height', 'age', 'gender'],
            calculators: ['weight', 'height', 'age', 'gender'],
            training: ['weight', 'height', 'age', 'gender', 'activityLevel', 'goal']
        };

        for (const [formId, fields] of Object.entries(forms)) {
            const form = document.getElementById(`${formId}Form`);
            if (form) {
                fields.forEach(field => {
                    const input = form.querySelector(`[name="${field}"]`);
                    if (input && details[field]) {
                        input.value = details[field];
                    }
                });
            }
        }
    }

    // Handle form submission
    if (userDetailsForm) {
        userDetailsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(userDetailsForm);
            const userDetails = {};
            
            for (const [key, value] of formData.entries()) {
                userDetails[key] = value;
            }
            
            localStorage.setItem('userDetails', JSON.stringify(userDetails));
            
            if (userDetailsModal) {
                userDetailsModal.classList.add('hidden');
            }
            
            updateAllForms(userDetails);
        });
    }

    // Handle user details button click
    if (userDetailsButton) {
        userDetailsButton.addEventListener('click', function() {
            if (userDetailsModal) {
                userDetailsModal.classList.remove('hidden');
            }
        });
    }
}); 