document.addEventListener('DOMContentLoaded', function() {
    const progressForm = document.getElementById('progressForm');
    const progressHistory = document.getElementById('progressHistory');
    let progressData = JSON.parse(localStorage.getItem('progressData')) || [];

    // Initialize charts with dark theme
    const weightChart = new Chart(document.getElementById('weightChart'), {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Weight (kg)',
                data: [],
                borderColor: '#0ea5e9',
                backgroundColor: 'rgba(14, 165, 233, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#f1f5f9'
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#f1f5f9'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#f1f5f9'
                    }
                }
            }
        }
    });

    const measurementsChart = new Chart(document.getElementById('measurementsChart'), {
        type: 'line',
        data: {
            labels: [],
            datasets: [
                {
                    label: 'Chest (cm)',
                    data: [],
                    borderColor: '#0ea5e9',
                    backgroundColor: 'rgba(14, 165, 233, 0.1)',
                    tension: 0.4,
                    fill: false
                },
                {
                    label: 'Waist (cm)',
                    data: [],
                    borderColor: '#d946ef',
                    backgroundColor: 'rgba(217, 70, 239, 0.1)',
                    tension: 0.4,
                    fill: false
                },
                {
                    label: 'Hips (cm)',
                    data: [],
                    borderColor: '#22c55e',
                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                    tension: 0.4,
                    fill: false
                },
                {
                    label: 'Thighs (cm)',
                    data: [],
                    borderColor: '#f59e0b',
                    backgroundColor: 'rgba(245, 158, 11, 0.1)',
                    tension: 0.4,
                    fill: false
                },
                {
                    label: 'Arms (cm)',
                    data: [],
                    borderColor: '#ef4444',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    tension: 0.4,
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#f1f5f9'
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#f1f5f9'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#f1f5f9'
                    }
                }
            }
        }
    });

    // Update charts with data
    function updateCharts() {
        const dates = progressData.map(entry => entry.date);
        const weights = progressData.map(entry => entry.weight);
        const chests = progressData.map(entry => entry.chest);
        const waists = progressData.map(entry => entry.waist);
        const hips = progressData.map(entry => entry.hips);
        const thighs = progressData.map(entry => entry.thighs);
        const arms = progressData.map(entry => entry.arms);

        weightChart.data.labels = dates;
        weightChart.data.datasets[0].data = weights;
        weightChart.update();

        measurementsChart.data.labels = dates;
        measurementsChart.data.datasets[0].data = chests;
        measurementsChart.data.datasets[1].data = waists;
        measurementsChart.data.datasets[2].data = hips;
        measurementsChart.data.datasets[3].data = thighs;
        measurementsChart.data.datasets[4].data = arms;
        measurementsChart.update();
    }

    // Update progress history table
    function updateProgressHistory() {
        progressHistory.innerHTML = '';
        progressData.sort((a, b) => new Date(b.date) - new Date(a.date)).forEach(entry => {
            const row = document.createElement('tr');
            row.className = 'hover:bg-dark-700 transition-colors';
            row.innerHTML = `
                <td class="px-6 py-4 whitespace-nowrap text-sm text-dark-100">${entry.date}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-dark-100">${entry.weight}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-dark-100">${entry.chest}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-dark-100">${entry.waist}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-dark-100">${entry.hips}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-dark-100">${entry.thighs}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-dark-100">${entry.arms}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-dark-100">${entry.notes || '-'}</td>
            `;
            progressHistory.appendChild(row);
        });
    }

    // Handle form submission
    progressForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const newEntry = {
            date: document.getElementById('date').value,
            weight: parseFloat(document.getElementById('weight').value),
            chest: parseFloat(document.getElementById('chest').value),
            waist: parseFloat(document.getElementById('waist').value),
            hips: parseFloat(document.getElementById('hips').value),
            thighs: parseFloat(document.getElementById('thighs').value),
            arms: parseFloat(document.getElementById('arms').value),
            notes: document.getElementById('notes').value
        };

        progressData.push(newEntry);
        localStorage.setItem('progressData', JSON.stringify(progressData));

        updateCharts();
        updateProgressHistory();
        progressForm.reset();
    });

    // Initialize with existing data
    if (progressData.length > 0) {
        updateCharts();
        updateProgressHistory();
    }
}); 