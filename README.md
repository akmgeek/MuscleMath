# FitCalc - Your Complete Fitness Solution

FitCalc is a comprehensive fitness website that helps users track their fitness journey, calculate body composition metrics, plan their nutrition, and follow structured workout programs.

## Features

- **Body Composition Calculators**
  - BMI Calculator
  - BMR Calculator
  - TDEE Calculator
  - Body Fat Percentage Calculator

- **Nutrition Planning**
  - Daily Calorie Calculator
  - Macronutrient Distribution
  - Water Intake Calculator

- **Training Programs**
  - Beginner Full Body Program
  - Intermediate Split Program
  - Advanced PPL Program
  - Detailed Exercise Instructions

- **Progress Tracking**
  - Weight Tracking
  - Body Measurements
  - Progress Charts
  - Historical Data

## Technologies Used

- HTML5
- CSS3 (with Tailwind CSS)
- JavaScript (Vanilla)
- Chart.js for Data Visualization
- Local Storage for Data Persistence

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/fitcalc.git
   cd fitcalc
   ```

2. Open the project in your preferred code editor.

3. Start a local server to run the project. You can use any of these methods:

   - Using Python:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Python 2
     python -m SimpleHTTPServer 8000
     ```

   - Using Node.js:
     ```bash
     # Install http-server globally
     npm install -g http-server
     
     # Run the server
     http-server
     ```

   - Using VS Code's Live Server extension

4. Open your browser and navigate to:
   - `http://localhost:8000` (if using Python or Node.js)
   - Or the URL provided by your local server

## Project Structure

```
fitcalc/
├── index.html
├── calculators.html
├── nutrition.html
├── training.html
├── progress.html
├── css/
│   └── styles.css
├── js/
│   ├── main.js
│   ├── calculators.js
│   ├── nutrition.js
│   ├── training.js
│   └── progress.js
└── README.md
```

## Usage

1. **Calculators Page**
   - Enter your measurements to calculate BMI, BMR, TDEE, and body fat percentage
   - Get instant results with detailed explanations

2. **Nutrition Page**
   - Calculate your daily calorie needs based on your goals
   - Get personalized macronutrient recommendations
   - Track your water intake

3. **Training Page**
   - Choose from different workout programs based on your experience level
   - View detailed exercise instructions and schedules
   - Follow progressive overload principles

4. **Progress Page**
   - Track your weight and measurements over time
   - View progress charts and trends
   - Keep notes about your fitness journey

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Tailwind CSS for the styling framework
- Chart.js for the data visualization
- All the fitness formulas and calculations are based on scientific research and widely accepted methods 