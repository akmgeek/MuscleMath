document.addEventListener('DOMContentLoaded', () => {
    // Load user details into forms if available
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
    if (userDetails) {
        populateFormsWithUserDetails(userDetails);
    }

    // Initialize all calculator forms
    initializeBMICalculator();
    initializeBodyFatCalculator();
    initializeOneRepMaxCalculator();
    initializeCalorieCalculator();
});

function populateFormsWithUserDetails(userDetails) {
    // BMI Calculator
    if (userDetails.weight) document.getElementById('bmiWeight').value = userDetails.weight;
    if (userDetails.height) document.getElementById('bmiHeight').value = userDetails.height;

    // Body Fat Calculator
    if (userDetails.gender) document.getElementById('bfGender').value = userDetails.gender;
    if (userDetails.weight) document.getElementById('bfWeight').value = userDetails.weight;
    if (userDetails.height) document.getElementById('bfHeight').value = userDetails.height;
    if (userDetails.age) document.getElementById('bfAge').value = userDetails.age;

    // Calorie Calculator
    if (userDetails.weight) document.getElementById('calWeight').value = userDetails.weight;
    if (userDetails.height) document.getElementById('calHeight').value = userDetails.height;
    if (userDetails.age) document.getElementById('calAge').value = userDetails.age;
    if (userDetails.gender) document.getElementById('calGender').value = userDetails.gender;
    if (userDetails.activityLevel) document.getElementById('calActivity').value = userDetails.activityLevel;
    if (userDetails.goal) document.getElementById('calGoal').value = userDetails.goal;
}

function initializeBMICalculator() {
    const form = document.getElementById('bmiForm');
    const result = document.getElementById('bmiResult');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const weight = parseFloat(document.getElementById('bmiWeight').value);
        const height = parseFloat(document.getElementById('bmiHeight').value) / 100; // Convert cm to m

        const bmi = weight / (height * height);
        const category = getBMICategory(bmi);

        document.getElementById('bmiValue').textContent = `Your BMI: ${bmi.toFixed(1)}`;
        document.getElementById('bmiCategory').textContent = `Category: ${category}`;
        result.classList.remove('hidden');
    });
}

function getBMICategory(bmi) {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal weight';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
}

function initializeBodyFatCalculator() {
    const form = document.getElementById('bodyFatForm');
    const result = document.getElementById('bodyFatResult');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const gender = document.getElementById('bfGender').value;
        const weight = parseFloat(document.getElementById('bfWeight').value);
        const height = parseFloat(document.getElementById('bfHeight').value);
        const age = parseInt(document.getElementById('bfAge').value);

        // Using the U.S. Navy method for body fat calculation
        let bodyFat;
        if (gender === 'male') {
            bodyFat = 495 / (1.0324 - 0.19077 * Math.log10(weight) + 0.15456 * Math.log10(height)) - 450;
        } else {
            bodyFat = 495 / (1.29579 - 0.35004 * Math.log10(weight) + 0.22100 * Math.log10(height)) - 450;
        }

        const category = getBodyFatCategory(bodyFat, gender);

        document.getElementById('bodyFatValue').textContent = `Your Body Fat: ${bodyFat.toFixed(1)}%`;
        document.getElementById('bodyFatCategory').textContent = `Category: ${category}`;
        result.classList.remove('hidden');
    });
}

function getBodyFatCategory(bodyFat, gender) {
    if (gender === 'male') {
        if (bodyFat < 6) return 'Essential Fat';
        if (bodyFat < 14) return 'Athletic';
        if (bodyFat < 18) return 'Fitness';
        if (bodyFat < 25) return 'Average';
        return 'Obese';
    } else {
        if (bodyFat < 14) return 'Essential Fat';
        if (bodyFat < 21) return 'Athletic';
        if (bodyFat < 25) return 'Fitness';
        if (bodyFat < 32) return 'Average';
        return 'Obese';
    }
}

function initializeOneRepMaxCalculator() {
    const form = document.getElementById('ormForm');
    const result = document.getElementById('ormResult');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const weight = parseFloat(document.getElementById('ormWeight').value);
        const reps = parseInt(document.getElementById('ormReps').value);

        // Using Brzycki formula for 1RM calculation
        const oneRepMax = weight * (36 / (37 - reps));

        document.getElementById('ormValue').textContent = `Your 1RM: ${oneRepMax.toFixed(1)} kg`;
        document.getElementById('orm60').textContent = `${(oneRepMax * 0.6).toFixed(1)} kg`;
        document.getElementById('orm70').textContent = `${(oneRepMax * 0.7).toFixed(1)} kg`;
        document.getElementById('orm80').textContent = `${(oneRepMax * 0.8).toFixed(1)} kg`;
        document.getElementById('orm90').textContent = `${(oneRepMax * 0.9).toFixed(1)} kg`;
        result.classList.remove('hidden');
    });
}

function initializeCalorieCalculator() {
    const form = document.getElementById('calorieForm');
    const result = document.getElementById('calorieResult');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const weight = parseFloat(document.getElementById('calWeight').value);
        const height = parseFloat(document.getElementById('calHeight').value);
        const age = parseInt(document.getElementById('calAge').value);
        const gender = document.getElementById('calGender').value;
        const activityLevel = document.getElementById('calActivity').value;
        const goal = document.getElementById('calGoal').value;

        // Calculate BMR using Mifflin-St Jeor Equation
        let bmr;
        if (gender === 'male') {
            bmr = 10 * weight + 6.25 * height - 5 * age + 5;
        } else {
            bmr = 10 * weight + 6.25 * height - 5 * age - 161;
        }

        // Apply activity multiplier
        const activityMultipliers = {
            sedentary: 1.2,
            light: 1.375,
            moderate: 1.55,
            very: 1.725,
            extra: 1.9
        };

        let tdee = bmr * activityMultipliers[activityLevel];

        // Adjust calories based on goal
        const goalAdjustments = {
            loss: -500,
            maintenance: 0,
            gain: 500
        };

        const dailyCalories = tdee + goalAdjustments[goal];

        // Calculate macronutrient split
        const protein = weight * 2.2; // 2.2g per kg of bodyweight
        const fat = (dailyCalories * 0.25) / 9; // 25% of calories from fat
        const carbs = (dailyCalories - (protein * 4) - (fat * 9)) / 4; // Remaining calories from carbs

        document.getElementById('calorieValue').textContent = `Daily Calories: ${Math.round(dailyCalories)} kcal`;
        document.getElementById('proteinValue').textContent = `${Math.round(protein)}g`;
        document.getElementById('carbsValue').textContent = `${Math.round(carbs)}g`;
        document.getElementById('fatsValue').textContent = `${Math.round(fat)}g`;
        result.classList.remove('hidden');
    });
} 