// Chart instances
let weightChart;
let workoutChart;

// Initialize charts when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeCharts();
    loadProgressData();
    setupEventListeners();
});

function initializeCharts() {
    // Weight Chart
    const weightCtx = document.getElementById('weightChart').getContext('2d');
    weightChart = new Chart(weightCtx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Weight (kg)',
                data: [],
                borderColor: '#27AE60',
                backgroundColor: 'rgba(39, 174, 96, 0.1)',
                borderWidth: 2,
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });

    // Workout Chart
    const workoutCtx = document.getElementById('workoutChart').getContext('2d');
    workoutChart = new Chart(workoutCtx, {
        type: 'bar',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Workouts',
                data: [0, 0, 0, 0, 0, 0, 0],
                backgroundColor: '#2D9CDB',
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

function loadProgressData() {
    const progressData = JSON.parse(localStorage.getItem('progressData')) || [];
    updateCharts(progressData);
    updateProgressTable(progressData);
    updateProgressOverview(progressData);
}

function updateCharts(data) {
    // Update Weight Chart
    const weightData = data.map(entry => ({
        x: new Date(entry.date),
        y: entry.weight
    })).sort((a, b) => a.x - b.x);

    weightChart.data.labels = weightData.map(d => d.x.toLocaleDateString());
    weightChart.data.datasets[0].data = weightData.map(d => d.y);
    weightChart.update();

    // Update Workout Chart
    const workoutData = [0, 0, 0, 0, 0, 0, 0];
    const today = new Date();
    const weekStart = new Date(today.setDate(today.getDate() - today.getDay() + 1));

    data.forEach(entry => {
        const entryDate = new Date(entry.date);
        if (entryDate >= weekStart) {
            const dayIndex = entryDate.getDay() - 1;
            if (dayIndex >= 0 && dayIndex < 7) {
                workoutData[dayIndex]++;
            }
        }
    });

    workoutChart.data.datasets[0].data = workoutData;
    workoutChart.update();
}

function updateProgressTable(data) {
    const tableBody = document.getElementById('progressTableBody');
    tableBody.innerHTML = '';

    data.sort((a, b) => new Date(b.date) - new Date(a.date)).forEach(entry => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">${new Date(entry.date).toLocaleDateString()}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">${entry.weight} kg</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">${entry.workout}</td>
            <td class="px-6 py-4 text-sm text-gray-600">${entry.notes || '-'}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm">
                <button onclick="deleteProgressEntry('${entry.date}')" class="text-danger hover:text-red-600 transition-colors">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function updateProgressOverview(data) {
    if (data.length === 0) return;

    // Weight Progress
    const weights = data.map(entry => entry.weight);
    const startingWeight = weights[weights.length - 1];
    const currentWeight = weights[0];
    const goalWeight = localStorage.getItem('goalWeight') || '0';

    document.getElementById('startingWeight').textContent = `${startingWeight} kg`;
    document.getElementById('currentWeight').textContent = `${currentWeight} kg`;
    document.getElementById('goalWeight').textContent = `${goalWeight} kg`;

    // Workout Progress
    const totalWorkouts = data.length;
    const today = new Date();
    const weekStart = new Date(today.setDate(today.getDate() - today.getDay() + 1));
    const weeklyWorkouts = data.filter(entry => new Date(entry.date) >= weekStart).length;

    let streak = 0;
    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    while (true) {
        const hasWorkout = data.some(entry => {
            const entryDate = new Date(entry.date);
            entryDate.setHours(0, 0, 0, 0);
            return entryDate.getTime() === currentDate.getTime();
        });

        if (!hasWorkout) break;
        streak++;
        currentDate.setDate(currentDate.getDate() - 1);
    }

    document.getElementById('totalWorkouts').textContent = totalWorkouts;
    document.getElementById('weeklyWorkouts').textContent = weeklyWorkouts;
    document.getElementById('workoutStreak').textContent = `${streak} days`;

    // Nutrition Progress
    const dailyCalories = localStorage.getItem('dailyCalories') || '0';
    const proteinGoal = localStorage.getItem('proteinGoal') || '0';
    const calorieGoal = localStorage.getItem('calorieGoal') || '0';

    document.getElementById('dailyCalories').textContent = dailyCalories;
    document.getElementById('proteinGoal').textContent = `${proteinGoal}g`;
    document.getElementById('calorieGoal').textContent = calorieGoal;
}

function setupEventListeners() {
    const addProgressBtn = document.getElementById('addProgressBtn');
    const progressModal = document.getElementById('progressModal');
    const progressForm = document.getElementById('progressForm');
    const cancelProgressBtn = document.getElementById('cancelProgressBtn');

    addProgressBtn.addEventListener('click', () => {
        progressModal.classList.remove('hidden');
    });

    cancelProgressBtn.addEventListener('click', () => {
        progressModal.classList.add('hidden');
    });

    progressForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(progressForm);
        const entry = {
            date: formData.get('date'),
            weight: parseFloat(formData.get('weight')),
            workout: formData.get('workout'),
            notes: formData.get('notes')
        };

        const progressData = JSON.parse(localStorage.getItem('progressData')) || [];
        progressData.push(entry);
        localStorage.setItem('progressData', JSON.stringify(progressData));

        loadProgressData();
        progressModal.classList.add('hidden');
        progressForm.reset();
    });
}

function deleteProgressEntry(date) {
    if (!confirm('Are you sure you want to delete this entry?')) return;

    const progressData = JSON.parse(localStorage.getItem('progressData')) || [];
    const updatedData = progressData.filter(entry => entry.date !== date);
    localStorage.setItem('progressData', JSON.stringify(updatedData));

    loadProgressData();
} 