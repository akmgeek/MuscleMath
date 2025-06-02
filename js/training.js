// Training Programs Data
const trainingPrograms = {
    beginner: {
        title: "Beginner Program",
        description: "Perfect for those new to strength training. Focus on proper form and building a foundation.",
        schedule: [
            {
                day: "Day 1: Full Body",
                exercises: [
                    { name: "Squats", sets: 3, reps: "10-12", rest: "90s" },
                    { name: "Push-ups", sets: 3, reps: "8-10", rest: "60s" },
                    { name: "Dumbbell Rows", sets: 3, reps: "10-12", rest: "60s" },
                    { name: "Plank", sets: 3, reps: "30s", rest: "45s" }
                ]
            },
            {
                day: "Day 2: Rest",
                exercises: []
            },
            {
                day: "Day 3: Full Body",
                exercises: [
                    { name: "Lunges", sets: 3, reps: "10 each leg", rest: "90s" },
                    { name: "Dumbbell Press", sets: 3, reps: "10-12", rest: "60s" },
                    { name: "Lat Pulldowns", sets: 3, reps: "10-12", rest: "60s" },
                    { name: "Glute Bridges", sets: 3, reps: "12-15", rest: "45s" }
                ]
            },
            {
                day: "Day 4: Rest",
                exercises: []
            },
            {
                day: "Day 5: Full Body",
                exercises: [
                    { name: "Goblet Squats", sets: 3, reps: "10-12", rest: "90s" },
                    { name: "Incline Push-ups", sets: 3, reps: "10-12", rest: "60s" },
                    { name: "Bent Over Rows", sets: 3, reps: "10-12", rest: "60s" },
                    { name: "Bird Dogs", sets: 3, reps: "10 each side", rest: "45s" }
                ]
            }
        ]
    },
    intermediate: {
        title: "Intermediate Program",
        description: "For those with 6+ months of training experience. Focus on progressive overload and exercise variety.",
        schedule: [
            {
                day: "Day 1: Upper Body",
                exercises: [
                    { name: "Bench Press", sets: 4, reps: "8-10", rest: "120s" },
                    { name: "Overhead Press", sets: 4, reps: "8-10", rest: "90s" },
                    { name: "Barbell Rows", sets: 4, reps: "8-10", rest: "90s" },
                    { name: "Lateral Raises", sets: 3, reps: "12-15", rest: "60s" },
                    { name: "Tricep Pushdowns", sets: 3, reps: "12-15", rest: "60s" }
                ]
            },
            {
                day: "Day 2: Lower Body",
                exercises: [
                    { name: "Squats", sets: 4, reps: "8-10", rest: "120s" },
                    { name: "Romanian Deadlifts", sets: 4, reps: "8-10", rest: "120s" },
                    { name: "Bulgarian Split Squats", sets: 3, reps: "10 each leg", rest: "90s" },
                    { name: "Calf Raises", sets: 4, reps: "15-20", rest: "60s" }
                ]
            },
            {
                day: "Day 3: Rest",
                exercises: []
            },
            {
                day: "Day 4: Push",
                exercises: [
                    { name: "Incline Bench Press", sets: 4, reps: "8-10", rest: "120s" },
                    { name: "Dumbbell Shoulder Press", sets: 4, reps: "8-10", rest: "90s" },
                    { name: "Incline Flyes", sets: 3, reps: "12-15", rest: "60s" },
                    { name: "Face Pulls", sets: 3, reps: "15-20", rest: "60s" }
                ]
            },
            {
                day: "Day 5: Pull",
                exercises: [
                    { name: "Pull-ups", sets: 4, reps: "8-10", rest: "120s" },
                    { name: "Bent Over Rows", sets: 4, reps: "8-10", rest: "90s" },
                    { name: "Lat Pulldowns", sets: 3, reps: "12-15", rest: "60s" },
                    { name: "Bicep Curls", sets: 3, reps: "12-15", rest: "60s" }
                ]
            }
        ]
    },
    advanced: {
        title: "Advanced Program",
        description: "For experienced lifters. Focus on strength, hypertrophy, and advanced techniques.",
        schedule: [
            {
                day: "Day 1: Chest & Triceps",
                exercises: [
                    { name: "Bench Press", sets: 5, reps: "5-8", rest: "180s" },
                    { name: "Incline Dumbbell Press", sets: 4, reps: "8-10", rest: "120s" },
                    { name: "Weighted Dips", sets: 4, reps: "8-10", rest: "120s" },
                    { name: "Close Grip Bench Press", sets: 3, reps: "8-10", rest: "90s" },
                    { name: "Tricep Pushdowns", sets: 3, reps: "12-15", rest: "60s" }
                ]
            },
            {
                day: "Day 2: Back & Biceps",
                exercises: [
                    { name: "Deadlifts", sets: 5, reps: "5-8", rest: "180s" },
                    { name: "Pull-ups", sets: 4, reps: "8-10", rest: "120s" },
                    { name: "Barbell Rows", sets: 4, reps: "8-10", rest: "120s" },
                    { name: "Face Pulls", sets: 3, reps: "15-20", rest: "60s" },
                    { name: "Hammer Curls", sets: 3, reps: "12-15", rest: "60s" }
                ]
            },
            {
                day: "Day 3: Rest",
                exercises: []
            },
            {
                day: "Day 4: Legs",
                exercises: [
                    { name: "Squats", sets: 5, reps: "5-8", rest: "180s" },
                    { name: "Romanian Deadlifts", sets: 4, reps: "8-10", rest: "120s" },
                    { name: "Bulgarian Split Squats", sets: 4, reps: "10 each leg", rest: "90s" },
                    { name: "Leg Press", sets: 3, reps: "12-15", rest: "90s" },
                    { name: "Calf Raises", sets: 4, reps: "15-20", rest: "60s" }
                ]
            },
            {
                day: "Day 5: Shoulders & Arms",
                exercises: [
                    { name: "Overhead Press", sets: 5, reps: "5-8", rest: "180s" },
                    { name: "Lateral Raises", sets: 4, reps: "12-15", rest: "60s" },
                    { name: "Front Raises", sets: 3, reps: "12-15", rest: "60s" },
                    { name: "Skull Crushers", sets: 3, reps: "12-15", rest: "60s" },
                    { name: "Preacher Curls", sets: 3, reps: "12-15", rest: "60s" }
                ]
            }
        ]
    }
};

// Exercise Library Data
const exerciseLibrary = [
    {
        name: "Bench Press",
        category: "Chest",
        type: "Compound",
        primary: ["Chest"],
        secondary: ["Triceps", "Shoulders"],
        description: "A compound exercise that primarily targets the chest muscles while also engaging the triceps and shoulders."
    },
    {
        name: "Squats",
        category: "Legs",
        type: "Compound",
        primary: ["Quadriceps"],
        secondary: ["Glutes", "Hamstrings", "Core"],
        description: "A fundamental compound exercise that targets the entire lower body and core."
    },
    {
        name: "Deadlift",
        category: "Back",
        type: "Compound",
        primary: ["Back", "Hamstrings"],
        secondary: ["Glutes", "Core", "Forearms"],
        description: "A full-body compound exercise that builds overall strength and muscle mass."
    },
    {
        name: "Pull-ups",
        category: "Back",
        type: "Compound",
        primary: ["Back", "Biceps"],
        secondary: ["Shoulders", "Core"],
        description: "An upper body compound exercise that primarily targets the back and biceps."
    },
    {
        name: "Overhead Press",
        category: "Shoulders",
        type: "Compound",
        primary: ["Shoulders"],
        secondary: ["Triceps", "Upper Chest"],
        description: "A compound exercise that targets the shoulders while also engaging the triceps and upper chest."
    },
    {
        name: "Romanian Deadlift",
        category: "Legs",
        type: "Compound",
        primary: ["Hamstrings"],
        secondary: ["Glutes", "Lower Back"],
        description: "A variation of the deadlift that focuses on the hamstrings and glutes."
    },
    {
        name: "Lunges",
        category: "Legs",
        type: "Compound",
        primary: ["Quadriceps"],
        secondary: ["Glutes", "Hamstrings"],
        description: "A unilateral exercise that targets the legs while improving balance and stability."
    },
    {
        name: "Bent Over Rows",
        category: "Back",
        type: "Compound",
        primary: ["Back"],
        secondary: ["Biceps", "Shoulders"],
        description: "A compound exercise that targets the back muscles while also engaging the biceps and shoulders."
    }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Set up program selection
    const programButtons = document.querySelectorAll('.program-select');
    programButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update button styles
            programButtons.forEach(btn => {
                btn.classList.remove('bg-primary', 'text-white');
                btn.classList.add('bg-gray-200', 'text-gray-700');
            });
            button.classList.remove('bg-gray-200', 'text-gray-700');
            button.classList.add('bg-primary', 'text-white');

            // Update program display
            const program = button.dataset.program;
            updateProgramDisplay(program);
        });
    });

    // Set up exercise search
    const searchInput = document.getElementById('exerciseSearch');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredExercises = exerciseLibrary.filter(exercise => 
            exercise.name.toLowerCase().includes(searchTerm) ||
            exercise.category.toLowerCase().includes(searchTerm) ||
            exercise.type.toLowerCase().includes(searchTerm)
        );
        updateExerciseList(filteredExercises);
    });

    // Initialize with beginner program
    updateProgramDisplay('beginner');
    updateExerciseList(exerciseLibrary);
});

// Update program display
function updateProgramDisplay(program) {
    const programData = trainingPrograms[program];
    const programTitle = document.getElementById('programTitle');
    const programDescription = document.getElementById('programDescription');
    const workoutSchedule = document.getElementById('workoutSchedule');

    programTitle.textContent = programData.title;
    programDescription.textContent = programData.description;

    // Clear and update workout schedule
    workoutSchedule.innerHTML = '';
    programData.schedule.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.className = 'bg-gray-50 p-4 rounded-lg';
        
        const dayHeader = document.createElement('h3');
        dayHeader.className = 'font-semibold text-text mb-2';
        dayHeader.textContent = day.day;
        dayElement.appendChild(dayHeader);

        if (day.exercises.length > 0) {
            const exerciseList = document.createElement('ul');
            exerciseList.className = 'space-y-2';
            
            day.exercises.forEach(exercise => {
                const exerciseItem = document.createElement('li');
                exerciseItem.className = 'text-gray-600';
                exerciseItem.innerHTML = `
                    <div class="flex justify-between items-center">
                        <span>${exercise.name}</span>
                        <span class="text-sm text-gray-500">${exercise.sets} sets × ${exercise.reps}</span>
                    </div>
                    <div class="text-sm text-gray-500">Rest: ${exercise.rest}</div>
                `;
                exerciseList.appendChild(exerciseItem);
            });
            
            dayElement.appendChild(exerciseList);
        } else {
            const restDay = document.createElement('p');
            restDay.className = 'text-gray-600 italic';
            restDay.textContent = 'Rest Day';
            dayElement.appendChild(restDay);
        }

        workoutSchedule.appendChild(dayElement);
    });
}

// Update exercise list
function updateExerciseList(exercises) {
    const exerciseList = document.getElementById('exerciseList');
    exerciseList.innerHTML = '';

    exercises.forEach(exercise => {
        const exerciseElement = document.createElement('div');
        exerciseElement.className = 'bg-gray-50 p-4 rounded-lg';
        exerciseElement.innerHTML = `
            <h3 class="font-semibold text-text mb-2">${exercise.name}</h3>
            <p class="text-sm text-gray-600">Category: ${exercise.category}</p>
            <p class="text-sm text-gray-600">Type: ${exercise.type}</p>
            <p class="text-sm text-gray-600 mt-2">${exercise.description}</p>
            <div class="mt-2">
                <span class="inline-block bg-primary/10 text-primary px-2 py-1 rounded text-sm">${exercise.type}</span>
                <span class="inline-block bg-primary/10 text-primary px-2 py-1 rounded text-sm">${exercise.category}</span>
            </div>
        `;
        exerciseList.appendChild(exerciseElement);
    });
} 