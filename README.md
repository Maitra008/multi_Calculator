# Multi-Purpose Calculator Web App 🧮

> A modern, responsive web application featuring three powerful calculators - Basic Calculator, SIP Calculator, and Loan EMI Calculator. Built with React and Vite for optimal performance.

[![Live Demo](https://img.shields.io/badge/demo-online-brightgreen)](https://your-demo-link.vercel.app)
[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0.8-purple)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Usage Guide](#usage-guide)
- [Formulas Used](#formulas-used)
- [Learning Outcomes](#learning-outcomes)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

This project is a comprehensive calculator application that combines three essential calculators into one intuitive interface. Developed as part of my web development learning journey, this project demonstrates proficiency in modern React development, responsive design, and practical financial calculations.

## Features

### 1. Basic Calculator
- Standard arithmetic operations (addition, subtraction, multiplication, division)
- Percentage calculations
- Decimal point support
- Sign toggle (+/-)
- Clear function
- Modern iOS-style interface

### 2. SIP Calculator (Systematic Investment Plan)
Calculate your mutual fund investments with:
- Monthly investment amount slider
- Expected annual return rate
- Investment tenure in years
- Real-time calculation of:
  - Total investment amount
  - Estimated returns
  - Maturity amount
- Interactive sliders and number inputs

### 3. Loan/EMI Calculator
Calculate your loan EMI (Equated Monthly Installment) with:
- Loan amount slider
- Interest rate per annum
- Loan tenure in years
- Detailed breakdown showing:
  - Monthly EMI
  - Principal amount
  - Total interest payable
  - Total amount payable

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern gradients and transitions

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd calculator
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open automatically in your default browser at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The optimized production build will be generated in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Deployment

The app comes pre-configured for easy deployment to popular hosting platforms:

### Deploy to Vercel (Recommended)

1. **Via Vercel CLI:**
   ```bash
   npm install -g vercel
   vercel login
   vercel --prod
   ```

2. **Via Vercel Dashboard:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your Git repository
   - Vercel will auto-detect Vite and deploy

### Deploy to Netlify

1. **Via Netlify Drop:**
   - Run `npm run build`
   - Go to [netlify.com/drop](https://app.netlify.com/drop)
   - Drag and drop the `dist` folder

2. **Via Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify deploy --prod
   ```

3. **Via Netlify Dashboard:**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository
   - Build settings are auto-configured via `netlify.toml`

### Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. Update `vite.config.js` with your repo name:
   ```js
   export default defineConfig({
     base: '/your-repo-name/',
     plugins: [react()]
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

## Project Structure

```
calculator/
├── src/
│   ├── components/
│   │   ├── BasicCalculator.jsx
│   │   ├── BasicCalculator.css
│   │   ├── SIPCalculator.jsx
│   │   ├── SIPCalculator.css
│   │   ├── LoanCalculator.jsx
│   │   └── LoanCalculator.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Usage

### Basic Calculator
1. Click the "Basic" tab
2. Use the number buttons to input values
3. Use operator buttons (+, −, ×, ÷) for calculations
4. Press "=" to get the result
5. Use "AC" to clear all
6. Use "+/-" to toggle sign
7. Use "%" for percentage

### SIP Calculator
1. Click the "SIP" tab
2. Adjust the monthly investment amount using the slider or input field
3. Set the expected return rate (percentage per annum)
4. Set the investment time period in years
5. Click "Calculate" to see:
   - Total amount you will invest
   - Estimated returns on your investment
   - Final maturity amount

### Loan Calculator
1. Click the "Loan" tab
2. Set the loan amount using the slider or input field
3. Set the interest rate (percentage per annum)
4. Set the loan tenure in years
5. Click "Calculate EMI" to see:
   - Monthly EMI payment
   - Principal amount
   - Total interest payable
   - Total amount you'll pay

## Formulas Used

### SIP Formula
```
M = P × ({[1 + i]^n – 1} / i) × (1 + i)
```
Where:
- M = Maturity Amount
- P = Monthly Investment
- i = Monthly Interest Rate (Annual Rate / 12 / 100)
- n = Total number of months

### EMI Formula
```
EMI = [P × R × (1+R)^N] / [(1+R)^N-1]
```
Where:
- P = Principal Loan Amount
- R = Monthly Interest Rate (Annual Rate / 12 / 100)
- N = Total number of months

## Customization

You can customize the color scheme by modifying the CSS gradient colors in the respective component CSS files. The default gradient uses:
- Primary: `#667eea` (purple-blue)
- Secondary: `#764ba2` (purple)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📚 Learning Outcomes

This project helped me develop and strengthen the following skills:

### Technical Skills
- **React Hooks**: Mastered useState for state management across multiple calculator components
- **Component Architecture**: Designed reusable, modular components with clear separation of concerns
- **Responsive Design**: Implemented mobile-first CSS with media queries for all device sizes
- **Mathematical Computations**: Applied complex financial formulas (SIP, EMI) in JavaScript
- **Build Tools**: Configured and optimized Vite for fast development and production builds
- **Version Control**: Managed project versions using Git and GitHub
- **Deployment**: Deployed application to cloud platforms (Vercel/Netlify)

### Soft Skills
- Problem-solving in calculator logic and edge case handling
- UI/UX design principles for intuitive user interfaces
- Project documentation and README writing
- Code organization and best practices

## 🚀 Future Enhancements

- [ ] Add currency converter
- [ ] Implement calculator history/memory feature
- [ ] Add scientific calculator mode
- [ ] Dark/Light theme toggle
- [ ] Export calculations as PDF
- [ ] Add more financial calculators (PPF, FD, RD)
- [ ] Voice input for calculations
- [ ] Unit conversion calculator
- [ ] PWA support for offline usage
- [ ] Add unit tests with Jest/Vitest

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 👨‍💻 Author

**Your Name**
- GitHub: [@Maitra008](https://github.com/Maitra008)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Portfolio: [Your Portfolio](https://yourwebsite.com)

## 🙏 Acknowledgments

- React Documentation for excellent learning resources
- Vite team for the amazing build tool
- Icons and design inspiration from various sources

---

⭐ If you found this project helpful, please give it a star!

Made with ❤️ by a B.Tech Student
