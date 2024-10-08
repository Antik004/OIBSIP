function convert() {
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    const unit = document.getElementById('unit').value;
    const resultElement = document.getElementById('result');
  
    let celsius, fahrenheit, kelvin, resultText;
  
    switch (unit) {
      case 'Celsius':
        celsius = inputTemp;
        fahrenheit = (celsius * 9 / 5) + 32;
        kelvin = celsius + 273.15;
        resultText = `${celsius}°C is ${fahrenheit}°F and ${kelvin}K`;
        break;
  
      case 'Fahrenheit':
        fahrenheit = inputTemp;
        celsius = (fahrenheit - 32) * 5 / 9;
        kelvin = celsius + 273.15;
        resultText = `${fahrenheit}°F is ${celsius}°C and ${kelvin}K`;
        break;
  
      case 'Kelvin':
        kelvin = inputTemp;
        celsius = kelvin - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;
        resultText = `${kelvin}K is ${celsius}°C and ${fahrenheit}°F`;
        break;
  
      default:
        resultText = 'Invalid Input';
    }
  
    resultElement.innerText = resultText;
  }
  