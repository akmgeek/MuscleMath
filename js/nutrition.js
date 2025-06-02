document.addEventListener('DOMContentLoaded', function() {
    // Get user details from localStorage
    const userDetails = JSON.parse(localStorage.getItem('userDetails')) || {};
    
    // Load saved user details into form
    if (userDetails) {
        document.getElementById('weight').value = userDetails.weight || '';
        document.getElementById('height').value = userDetails.height || '';
        document.getElementById('age').value = userDetails.age || '';
        document.getElementById('gender').value = userDetails.gender || 'male';
        document.getElementById('activityLevel').value = userDetails.activityLevel || 'sedentary';
        document.getElementById('goal').value = userDetails.goal || 'maintenance';
    }

    // Calculate BMR using Mifflin-St Jeor Equation
    function calculateBMR(weight, height, age, gender) {
        let bmr = 10 * weight + 6.25 * height - 5 * age;
        return gender === 'male' ? bmr + 5 : bmr - 161;
    }

    // Calculate TDEE based on activity level
    function calculateTDEE(bmr, activityLevel) {
        const multipliers = {
            sedentary: 1.2,
            light: 1.375,
            moderate: 1.55,
            very: 1.725,
            extra: 1.9
        };
        return bmr * multipliers[activityLevel];
    }

    // Calculate macronutrients based on goal and weight
    function calculateMacros(tdee, goal, weight) {
        let calories = tdee;
        if (goal === 'loss') calories -= 500;
        if (goal === 'gain') calories += 500;

        const protein = weight * 2.2; // 2.2g per kg of body weight
        const fat = (calories * 0.25) / 9; // 25% of calories from fat
        const carbs = (calories - (protein * 4) - (fat * 9)) / 4; // Remaining calories from carbs

        return {
            calories: Math.round(calories),
            protein: Math.round(protein),
            carbs: Math.round(carbs),
            fat: Math.round(fat)
        };
    }

    // Calculate water intake based on weight
    function calculateWater(weight) {
        return Math.round(weight * 0.033 * 10) / 10; // 33ml per kg of body weight
    }

    // Handle form submission
    document.getElementById('nutritionForm').addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value);
        const age = parseInt(document.getElementById('age').value);
        const gender = document.getElementById('gender').value;
        const activityLevel = document.getElementById('activityLevel').value;
        const goal = document.getElementById('goal').value;

        // Save user details
        const userDetails = {
            weight,
            height,
            age,
            gender,
            activityLevel,
            goal
        };
        localStorage.setItem('userDetails', JSON.stringify(userDetails));

        // Calculate values
        const bmr = calculateBMR(weight, height, age, gender);
        const tdee = calculateTDEE(bmr, activityLevel);
        const macros = calculateMacros(tdee, goal, weight);
        const water = calculateWater(weight);

        // Update results
        document.getElementById('caloriesResult').textContent = macros.calories;
        document.getElementById('proteinResult').textContent = macros.protein + 'g';
        document.getElementById('carbsResult').textContent = macros.carbs + 'g';
        document.getElementById('fatsResult').textContent = macros.fat + 'g';
        document.getElementById('waterResult').textContent = water + 'L';

        // Show results section
        document.getElementById('nutritionResults').classList.remove('hidden');
    });

    // Add event listeners to form inputs to save data as user types
    const formInputs = document.querySelectorAll('#nutritionForm input, #nutritionForm select');
    formInputs.forEach(input => {
        input.addEventListener('change', function() {
            const userDetails = {
                weight: document.getElementById('weight').value,
                height: document.getElementById('height').value,
                age: document.getElementById('age').value,
                gender: document.getElementById('gender').value,
                activityLevel: document.getElementById('activityLevel').value,
                goal: document.getElementById('goal').value
            };
            localStorage.setItem('userDetails', JSON.stringify(userDetails));
        });
    });
}); 