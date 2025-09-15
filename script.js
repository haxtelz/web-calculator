class Calculator {
    constructor(previousOperandElement, currentOperandElement) {
        this.previousOperandElement = previousOperandElement;
        this.currentOperandElement = currentOperandElement;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
        this.shouldResetDisplay = false;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
        if (this.currentOperand === '') {
            this.currentOperand = '0';
        }
    }

    appendNumber(number) {
        if (this.shouldResetDisplay) {
            this.currentOperand = '';
            this.shouldResetDisplay = false;
        }
        
        if (number === '.' && this.currentOperand.includes('.')) return;
        
        if (this.currentOperand === '0' && number !== '.') {
            this.currentOperand = number;
        } else {
            this.currentOperand = this.currentOperand.toString() + number.toString();
        }
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        
        if (this.previousOperand !== '') {
            this.compute();
        }
        
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        
        if (isNaN(prev) || isNaN(current)) return;
        
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '/':
                if (current === 0) {
                    alert('Cannot divide by zero!');
                    return;
                }
                computation = prev / current;
                break;
            default:
                return;
        }
        
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
        this.shouldResetDisplay = true;
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        
        let integerDisplay;
        if (isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 });
        }
        
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
    }

    updateDisplay() {
        this.currentOperandElement.innerText = this.getDisplayNumber(this.currentOperand) || '0';
        
        if (this.operation != null) {
            this.previousOperandElement.innerText =
                `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        } else {
            this.previousOperandElement.innerText = '';
        }
        
        // Update operator button styling
        document.querySelectorAll('.btn-operator').forEach(button => {
            button.classList.remove('active');
        });
        
        if (this.operation) {
            const operatorButton = document.querySelector(`[data-operator="${this.operation}"]`);
            if (operatorButton) {
                operatorButton.classList.add('active');
            }
        }
    }
}

// Initialize calculator
const previousOperandElement = document.getElementById('previous-operand');
const currentOperandElement = document.getElementById('current-operand');
const calculator = new Calculator(previousOperandElement, currentOperandElement);

// Number buttons
document.querySelectorAll('[data-number]').forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.dataset.number);
        calculator.updateDisplay();
    });
});

// Operator buttons
document.querySelectorAll('[data-operator]').forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.dataset.operator);
        calculator.updateDisplay();
    });
});

// Equals button
document.getElementById('equals').addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
});

// Clear button
document.getElementById('clear').addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
});

// Delete button
document.getElementById('delete').addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
});

// Decimal button
document.getElementById('decimal').addEventListener('click', () => {
    calculator.appendNumber('.');
    calculator.updateDisplay();
});

// Keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    
    // Numbers
    if (key >= '0' && key <= '9') {
        calculator.appendNumber(key);
        calculator.updateDisplay();
    }
    
    // Operators
    if (key === '+' || key === '-' || key === '*' || key === '/') {
        calculator.chooseOperation(key);
        calculator.updateDisplay();
    }
    
    // Enter or equals
    if (key === 'Enter' || key === '=') {
        event.preventDefault();
        calculator.compute();
        calculator.updateDisplay();
    }
    
    // Escape or clear
    if (key === 'Escape' || key === 'c' || key === 'C') {
        calculator.clear();
        calculator.updateDisplay();
    }
    
    // Backspace or delete
    if (key === 'Backspace' || key === 'Delete') {
        calculator.delete();
        calculator.updateDisplay();
    }
    
    // Decimal point
    if (key === '.' || key === ',') {
        calculator.appendNumber('.');
        calculator.updateDisplay();
    }
});

// Initialize display
calculator.updateDisplay();