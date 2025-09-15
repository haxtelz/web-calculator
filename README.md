# 🧮 Calculator Website

A beautiful, responsive web calculator built with vanilla HTML, CSS, and JavaScript. Features a modern glass-morphism design with full keyboard support and comprehensive arithmetic operations.

![Calculator Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

### 🎯 Core Functionality
- **Basic Arithmetic Operations**: Addition (+), Subtraction (−), Multiplication (×), Division (÷)
- **Decimal Support**: Handle floating-point numbers with precision
- **Clear & Delete**: Clear all (C) or delete last digit (⌫)
- **Error Handling**: Division by zero protection with user alerts
- **Continuous Calculations**: Chain operations without pressing equals

### 🎨 User Interface
- **Modern Glass-morphism Design**: Sleek, translucent interface with backdrop blur
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Visual Feedback**: Hover effects, active states, and smooth transitions
- **Intuitive Button Layout**: Standard calculator button arrangement
- **Professional Display**: Shows current operation and previous operand

### ⌨️ Keyboard Support
- **Number Keys**: 0-9 for digit input
- **Operator Keys**: +, -, *, / for arithmetic operations
- **Enter/=**: Execute calculation
- **Escape/C**: Clear calculator
- **Backspace/Delete**: Remove last digit
- **Decimal Point**: . or , for decimal input

### 📱 Responsive Design
- **Mobile-First Approach**: Optimized for all screen sizes
- **Touch-Friendly**: Large buttons perfect for touch interaction
- **Fluid Layout**: Adapts beautifully to any device orientation

## 🚀 Quick Start

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software or dependencies required

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/calculator-website.git
   cd calculator-website
   ```

2. **Open in browser**
   ```bash
   # Option 1: Double-click index.html
   # Option 2: Open with live server (recommended for development)
   # Option 3: Use any local server
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

3. **Start calculating!** 🎉

## 📁 Project Structure

```
calculator-website/
├── index.html          # Main HTML structure
├── style.css           # CSS styling and responsive design
├── script.js           # JavaScript calculator logic
└── README.md           # Project documentation
```

## 🎮 How to Use

### Basic Operations
1. **Input numbers** by clicking number buttons or using keyboard
2. **Select operation** (+, −, ×, ÷) by clicking or using keyboard
3. **Enter second number** 
4. **Press equals (=)** or Enter to calculate
5. **Continue with result** or clear to start fresh

### Advanced Features
- **Chaining calculations**: Results automatically carry over for continued operations
- **Decimal precision**: Use the decimal point (.) for floating-point numbers
- **Error recovery**: Division by zero shows alert and preserves state
- **Visual feedback**: Current operation displayed above main result

### Keyboard Shortcuts
| Key | Action |
|-----|--------|
| `0-9` | Enter digits |
| `+` `-` `*` `/` | Arithmetic operations |
| `Enter` `=` | Calculate result |
| `Escape` `C` | Clear all |
| `Backspace` `Delete` | Delete last digit |
| `.` `,` | Decimal point |

## 🛠️ Technical Details

### Technologies Used
- **HTML5**: Semantic structure and accessibility
- **CSS3**: Modern styling with Flexbox and Grid
- **Vanilla JavaScript**: ES6+ features and object-oriented design

### Browser Compatibility
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 11+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Performance Features
- **Lightweight**: No external dependencies
- **Fast loading**: Optimized CSS and minimal JavaScript
- **Smooth animations**: Hardware-accelerated transitions
- **Memory efficient**: Clean JavaScript architecture

## 🎨 Customization

### Color Scheme
The calculator uses a modern gradient background with customizable colors in `style.css`:

```css
/* Main gradient background */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Button colors */
.btn-number { background: #f8f9fa; }      /* Number buttons */
.btn-operator { background: #6c757d; }    /* Operator buttons */
.btn-equals { background: #007bff; }      /* Equals button */
.btn-clear { background: #dc3545; }       /* Clear button */
```

### Layout Modifications
- Adjust button sizes in `.btn` class
- Modify grid layout in `.buttons` class
- Change calculator dimensions in `.calculator` class

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Setup
```bash
# Clone your fork
git clone https://github.com/yourusername/calculator-website.git
cd calculator-website

# Create feature branch
git checkout -b feature/your-feature-name

# Make changes and test
# Open index.html in browser to test

# Commit and push
git add .
git commit -m "Description of changes"
git push origin feature/your-feature-name
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Acknowledgments

- Design inspired by modern calculator apps
- Glass-morphism design trend
- Web accessibility best practices
- Mobile-first responsive design principles

## 📧 Contact

- **GitHub**: [@yourusername](https://github.com/yourusername)
- **Email**: your.email@example.com
- **Project Link**: [https://github.com/yourusername/calculator-website](https://github.com/yourusername/calculator-website)

---

⭐ **Star this repo** if you found it helpful!

Built with ❤️ using vanilla web technologies