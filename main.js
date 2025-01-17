const input = document.querySelector('.calculator input');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (value === 'AC') {
                input.value = '';
            } 
            else if (value === 'DEL') {
                input.value = input.value.slice(0, -1);
            } 
            
            else if (value === '=') {
                try {
                    input.value = eval(input.value);
                } 
                catch {
                    input.value = 'Error';
                }
            } 
            
            else {
                input.value += value;
            }
        });
    });