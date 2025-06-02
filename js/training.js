document.addEventListener('DOMContentLoaded', function() {
    // Get the saved program from localStorage or default to 'beginner'
    const savedProgram = localStorage.getItem('selectedProgram') || 'beginner';
    
    // Define the training programs
    const programs = {
        beginner: {
            title: 'Beginner Program',
            description: 'Perfect for those new to strength training. Focus on proper form and building a foundation.',
            schedule: {
                monday: [
                    { exercise: 'Squats', sets: 3, reps: '10-12', rest: '90s' },
                    { exercise: 'Push-ups', sets: 3, reps: '8-10', rest: '60s' },
                    { exercise: 'Dumbbell Rows', sets: 3, reps: '10-12', rest: '60s' },
                    { exercise: 'Plank', sets: 3, reps: '30s', rest: '45s' }
                ],
                wednesday: [
                    { exercise: 'Lunges', sets: 3, reps: '10-12 each leg', rest: '90s' },
                    { exercise: 'Dumbbell Press', sets: 3, reps: '10-12', rest: '60s' },
                    { exercise: 'Lat Pulldowns', sets: 3, reps: '10-12', rest: '60s' },
                    { exercise: 'Russian Twists', sets: 3, reps: '12-15 each side', rest: '45s' }
                ],
                friday: [
                    { exercise: 'Romanian Deadlifts', sets: 3, reps: '10-12', rest: '90s' },
                    { exercise: 'Dumbbell Shoulder Press', sets: 3, reps: '10-12', rest: '60s' },
                    { exercise: 'Bicep Curls', sets: 3, reps: '10-12', rest: '60s' },
                    { exercise: 'Leg Raises', sets: 3, reps: '12-15', rest: '45s' }
                ]
            }
        },
        intermediate: {
            title: 'Intermediate Program',
            description: 'For those with 6+ months of training experience. Focus on progressive overload and compound movements.',
            schedule: {
                monday: [
                    { exercise: 'Barbell Squats', sets: 4, reps: '8-10', rest: '120s' },
                    { exercise: 'Bench Press', sets: 4, reps: '8-10', rest: '120s' },
                    { exercise: 'Bent Over Rows', sets: 4, reps: '8-10', rest: '90s' },
                    { exercise: 'Plank Variations', sets: 4, reps: '45s', rest: '60s' }
                ],
                wednesday: [
                    { exercise: 'Deadlifts', sets: 4, reps: '6-8', rest: '180s' },
                    { exercise: 'Overhead Press', sets: 4, reps: '8-10', rest: '120s' },
                    { exercise: 'Pull-ups', sets: 4, reps: '8-10', rest: '120s' },
                    { exercise: 'Hanging Leg Raises', sets: 4, reps: '12-15', rest: '60s' }
                ],
                friday: [
                    { exercise: 'Front Squats', sets: 4, reps: '8-10', rest: '120s' },
                    { exercise: 'Incline Bench Press', sets: 4, reps: '8-10', rest: '120s' },
                    { exercise: 'T-Bar Rows', sets: 4, reps: '8-10', rest: '90s' },
                    { exercise: 'Ab Wheel Rollouts', sets: 4, reps: '10-12', rest: '60s' }
                ]
            }
        },
        advanced: {
            title: 'Advanced Program',
            description: 'For experienced lifters. Focus on strength, power, and advanced techniques.',
            schedule: {
                monday: [
                    { exercise: 'Back Squats', sets: 5, reps: '5-7', rest: '180s' },
                    { exercise: 'Bench Press', sets: 5, reps: '5-7', rest: '180s' },
                    { exercise: 'Weighted Pull-ups', sets: 4, reps: '6-8', rest: '120s' },
                    { exercise: 'Core Circuit', sets: 3, reps: '3 exercises, 45s each', rest: '90s' }
                ],
                wednesday: [
                    { exercise: 'Deadlifts', sets: 5, reps: '3-5', rest: '240s' },
                    { exercise: 'Overhead Press', sets: 5, reps: '5-7', rest: '180s' },
                    { exercise: 'Barbell Rows', sets: 4, reps: '6-8', rest: '120s' },
                    { exercise: 'Plank Complex', sets: 3, reps: '4 variations, 30s each', rest: '90s' }
                ],
                friday: [
                    { exercise: 'Front Squats', sets: 5, reps: '5-7', rest: '180s' },
                    { exercise: 'Incline Bench Press', sets: 5, reps: '5-7', rest: '180s' },
                    { exercise: 'Weighted Dips', sets: 4, reps: '6-8', rest: '120s' },
                    { exercise: 'Ab Wheel + Hanging Leg Raises', sets: 4, reps: '10-12 each', rest: '90s' }
                ]
            }
        }
    };

    // Function to update program details
    function updateProgramDetails(program) {
        const programTitle = document.getElementById('programTitle');
        const programDescription = document.getElementById('programDescription');
        const workoutSchedule = document.getElementById('workoutSchedule');

        if (programTitle) programTitle.textContent = programs[program].title;
        if (programDescription) programDescription.textContent = programs[program].description;
        
        if (workoutSchedule) {
            workoutSchedule.innerHTML = '';
            
            // Create schedule for each day
            Object.entries(programs[program].schedule).forEach(([day, exercises]) => {
                const daySection = document.createElement('div');
                daySection.className = 'mb-6';
                
                const dayTitle = document.createElement('h3');
                dayTitle.className = 'text-xl font-bold text-white mb-4';
                dayTitle.textContent = day.charAt(0).toUpperCase() + day.slice(1);
                daySection.appendChild(dayTitle);

                exercises.forEach(exercise => {
                    const exerciseCard = document.createElement('div');
                    exerciseCard.className = 'card-glass rounded-lg p-4 mb-4';
                    
                    exerciseCard.innerHTML = `
                        <div class="flex justify-between items-center mb-2">
                            <h4 class="text-lg font-semibold text-white">${exercise.exercise}</h4>
                            <span class="text-primary-400">${exercise.sets} sets</span>
                        </div>
                        <div class="flex justify-between text-dark-300">
                            <span>Reps: ${exercise.reps}</span>
                            <span>Rest: ${exercise.rest}</span>
                        </div>
                    `;
                    
                    daySection.appendChild(exerciseCard);
                });

                workoutSchedule.appendChild(daySection);
            });
        }
    }

    // Add click event listeners to program selection buttons
    const programButtons = document.querySelectorAll('.program-select');
    programButtons.forEach(button => {
        button.addEventListener('click', function() {
            const program = this.dataset.program;
            localStorage.setItem('selectedProgram', program);
            
            // Update active state
            programButtons.forEach(btn => btn.classList.remove('bg-primary-600'));
            this.classList.add('bg-primary-600');
            
            updateProgramDetails(program);
        });
    });

    // Load the saved program
    const savedButton = document.querySelector(`[data-program="${savedProgram}"]`);
    if (savedButton) {
        savedButton.classList.add('bg-primary-600');
        updateProgramDetails(savedProgram);
    }
}); 