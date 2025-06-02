document.addEventListener('DOMContentLoaded', function() {
    const calculatorForm = document.getElementById('calculatorForm');
    const resultsDiv = document.getElementById('results');

    calculatorForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value);
        const age = parseFloat(document.getElementById('age').value);
        const gender = document.getElementById('gender').value;
        const activityLevel = document.getElementById('activityLevel').value;
        const waist = parseFloat(document.getElementById('waist').value);
        const hip = parseFloat(document.getElementById('hip').value);
        const neck = parseFloat(document.getElementById('neck').value);

        // Calculate BMI
        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

        // Calculate BMR
        let bmr;
        if (gender === 'male') {
            bmr = (10 * weight + 6.25 * height - 5 * age + 5).toFixed(0);
        } else {
            bmr = (10 * weight + 6.25 * height - 5 * age - 161).toFixed(0);
        }

        // Calculate TDEE
        const activityMultipliers = {
            sedentary: 1.2,
            light: 1.375,
            moderate: 1.55,
            active: 1.725,
            very_active: 1.9,
        };
        const tdee = (bmr * activityMultipliers[activityLevel]).toFixed(0);

        // Calculate Body Fat Percentage
        let bodyFat;
        if (gender === 'male') {
            bodyFat = (86.010 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76).toFixed(1);
        } else {
            bodyFat = (163.205 * Math.log10(waist + hip - neck) - 97.684 * Math.log10(height) - 78.387).toFixed(1);
        }

        // Update results
        document.getElementById('bmiResult').textContent = bmi;
        document.getElementById('bmrResult').textContent = bmr;
        document.getElementById('tdeeResult').textContent = tdee;
        document.getElementById('bodyFatResult').textContent = bodyFat + '%';

        // Show results
        resultsDiv.classList.remove('hidden');
    });
}); 