const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentExpression = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const id = button.id;
        switch (id) {
            case 'clear':
                currentExpression = '';
                display.value = '';
                break;
            case 'backspace':
                currentExpression = currentExpression.slice(0, -1);
                display.value = currentExpression;
                break;
            case 'sin':
                currentExpression += 'Math.sin(';
                display.value = currentExpression;
                break;
            case 'cos':
                currentExpression += 'Math.cos(';
                display.value = currentExpression;
                break;
            case 'tan':
                currentExpression += 'Math.tan(';
                display.value = currentExpression;
                break;
            case 'log':
                currentExpression += 'Math.log10(';
                display.value = currentExpression;
                break;
            case 'ln':
                currentExpression += 'Math.log(';
                display.value = currentExpression;
                break;
            case 'sqrt':
                currentExpression += 'Math.sqrt(';
                display.value = currentExpression;
                break;
            case 'power':
                currentExpression += '**';
                display.value = currentExpression;
                break;
            case 'equals':
                try {
                    const result = eval(currentExpression);
                    display.value = result;
                    currentExpression = result.toString();
                } catch (error) {
                    display.value = 'Error';
                    currentExpression = '';
                }
                break;
            default:
                currentExpression += button.textContent;
                display.value = currentExpression;
                break;
        }
    });
});
