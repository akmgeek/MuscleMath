document.addEventListener('DOMContentLoaded', function() {
    // Get user details from localStorage
    const userDetails = JSON.parse(localStorage.getItem('userDetails')) || {};

    // Update form fields with user details if they exist
    if (userDetails) {
        const forms = ['bmiForm', 'bodyFatForm'];
        forms.forEach(formId => {
            const form = document.getElementById(formId);
            if (form) {
                ['weight', 'height', 'age', 'gender'].forEach(field => {
                    const input = form.querySelector(`[name="${field}"]`);
                    if (input && userDetails[field]) {
                        input.value = userDetails[field];
                    }
                });
            }
        });
    }

    // BMI Calculator
    const bmiForm = document.getElementById('bmiForm');
    if (bmiForm) {
        bmiForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const weight = parseFloat(document.getElementById('weight').value);
            const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to m
            
            if (weight && height) {
                const bmi = weight / (height * height);
                const bmiResult = document.getElementById('bmiResult');
                const bmiValue = document.getElementById('bmiValue');
                const bmiCategory = document.getElementById('bmiCategory');
                
                bmiValue.textContent = `BMI: ${bmi.toFixed(1)}`;
                
                let category = '';
                if (bmi < 18.5) {
                    category = 'Underweight';
                } else if (bmi < 25) {
                    category = 'Normal weight';
                } else if (bmi < 30) {
                    category = 'Overweight';
                } else {
                    category = 'Obese';
                }
                
                bmiCategory.textContent = `Category: ${category}`;
                bmiResult.classList.remove('hidden');
            }
        });
    }

    // Body Fat Calculator
    const bodyFatForm = document.getElementById('bodyFatForm');
    if (bodyFatForm) {
        bodyFatForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const gender = document.getElementById('gender').value;
            const age = parseFloat(document.getElementById('age').value);
            const weight = parseFloat(document.getElementById('weight').value);
            const height = parseFloat(document.getElementById('height').value);
            
            if (gender && age && weight && height) {
                // Calculate BMI first
                const heightInMeters = height / 100;
                const bmi = weight / (heightInMeters * heightInMeters);
                
                // Calculate body fat percentage using the Deurenberg formula
                let bodyFatPercentage;
                if (gender === 'male') {
                    bodyFatPercentage = (1.20 * bmi) + (0.23 * age) - 16.2;
                } else {
                    bodyFatPercentage = (1.20 * bmi) + (0.23 * age) - 5.4;
                }
                
                const bodyFatResult = document.getElementById('bodyFatResult');
                const bodyFatValue = document.getElementById('bodyFatValue');
                const bodyFatCategory = document.getElementById('bodyFatCategory');
                
                bodyFatValue.textContent = `Body Fat Percentage: ${bodyFatPercentage.toFixed(1)}%`;
                
                let category = '';
                if (gender === 'male') {
                    if (bodyFatPercentage < 6) {
                        category = 'Essential fat';
                    } else if (bodyFatPercentage < 14) {
                        category = 'Athletic';
                    } else if (bodyFatPercentage < 18) {
                        category = 'Fitness';
                    } else if (bodyFatPercentage < 25) {
                        category = 'Average';
                    } else {
                        category = 'Obese';
                    }
                } else {
                    if (bodyFatPercentage < 14) {
                        category = 'Essential fat';
                    } else if (bodyFatPercentage < 21) {
                        category = 'Athletic';
                    } else if (bodyFatPercentage < 25) {
                        category = 'Fitness';
                    } else if (bodyFatPercentage < 32) {
                        category = 'Average';
                    } else {
                        category = 'Obese';
                    }
                }
                
                bodyFatCategory.textContent = `Category: ${category}`;
                bodyFatResult.classList.remove('hidden');
            }
        });
    }
}); 