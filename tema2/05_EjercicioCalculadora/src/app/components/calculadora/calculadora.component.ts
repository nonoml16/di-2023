import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  result: string = '';
  currentNumber: string = '';
  operator: string = '';
  digits: string[] = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];

  addToResult(digit: string) {
    this.currentNumber += digit;
    this.result = this.currentNumber;
  }

  addOperator(operator: string) {
    if (this.currentNumber !== '') {
      this.operator = operator;
      this.result = this.currentNumber + ' ' + operator;
      this.currentNumber = '';
    }
  }

  clearResult() {
    this.result = '';
    this.currentNumber = '';
    this.operator = '';
  }

  calculate() {
    if (this.currentNumber !== '' && this.operator !== '') {
      const num1 = parseFloat(this.currentNumber);
      const num2 = parseFloat(this.result.split(' ')[0]);
      switch (this.operator) {
        case '+':
          this.result = (num2 + num1).toString();
          break;
        case '-':
          this.result = (num2 - num1).toString();
          break;
        case '*':
          this.result = (num2 * num1).toString();
          break;
        case '/':
          this.result = (num2 / num1).toString();
          break;
      }
      this.operator = '';
      this.currentNumber = '';
    }
  }
}
