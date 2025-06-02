document.addEventListener('DOMContentLoaded', function() {
    const userDetailsModal = document.getElementById('userDetailsModal');
    const userDetailsForm = document.getElementById('userDetailsForm');
    const userDetailsButton = document.getElementById('userDetailsButton');
    const updateProfileButton = document.getElementById('updateProfileButton');
    const noProfileSection = document.getElementById('noProfileSection');
    const profileSection = document.getElementById('profileSection');

    // Get user details from localStorage
    const userDetails = JSON.parse(localStorage.getItem('userDetails')) || {};
    
    // Function to update profile display
    function updateProfileDisplay() {
        if (Object.keys(userDetails).length > 0) {
            // Show profile section and hide no profile section
            if (noProfileSection) noProfileSection.classList.add('hidden');
            if (profileSection) profileSection.classList.remove('hidden');

            // Update profile display
            if (document.getElementById('profileName')) {
                document.getElementById('profileName').textContent = `Name: ${userDetails.name || 'Not set'}`;
                document.getElementById('profileAge').textContent = `Age: ${userDetails.age || 'Not set'}`;
                document.getElementById('profileGender').textContent = `Gender: ${userDetails.gender || 'Not set'}`;
                document.getElementById('profileWeight').textContent = `Weight: ${userDetails.weight || 'Not set'} kg`;
                document.getElementById('profileHeight').textContent = `Height: ${userDetails.height || 'Not set'} cm`;
                document.getElementById('profileActivity').textContent = `Activity: ${userDetails.activityLevel || 'Not set'}`;
                document.getElementById('profileGoal').textContent = `Goal: ${userDetails.goal || 'Not set'}`;
            }
        } else {
            // Show no profile section and hide profile section
            if (noProfileSection) noProfileSection.classList.remove('hidden');
            if (profileSection) profileSection.classList.add('hidden');
        }
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
            updateProfileDisplay();
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

    // Handle update profile button click
    if (updateProfileButton) {
        updateProfileButton.addEventListener('click', function() {
            if (userDetailsModal) {
                // Pre-fill the form with existing data
                Object.entries(userDetails).forEach(([key, value]) => {
                    const input = userDetailsForm.querySelector(`[name="${key}"]`);
                    if (input) input.value = value;
                });
                userDetailsModal.classList.remove('hidden');
            }
        });
    }

    // Initial update of profile display and forms
    updateProfileDisplay();
    updateAllForms(userDetails);
}); 