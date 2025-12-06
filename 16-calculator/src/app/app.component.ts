import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  display = '0';
  previousValue = 0;
  operator: string | null = null;
  waitingForNewValue = false;

  handleNumber(num: string) {
    if (this.waitingForNewValue) {
      this.display = num;
      this.waitingForNewValue = false;
    } else {
      this.display = this.display === '0' ? num : this.display + num;
    }
  }

  handleDecimal() {
    if (this.waitingForNewValue) {
      this.display = '0.';
      this.waitingForNewValue = false;
    } else if (!this.display.includes('.')) {
      this.display += '.';
    }
  }

  handleOperator(op: string) {
    const currentValue = parseFloat(this.display);
    
    if (this.operator && !this.waitingForNewValue) {
      this.calculate();
    } else {
      this.previousValue = currentValue;
    }
    
    this.operator = op;
    this.waitingForNewValue = true;
  }

  calculate() {
    if (!this.operator) return;
    
    const current = parseFloat(this.display);
    let result = 0;
    
    switch (this.operator) {
      case '+':
        result = this.previousValue + current;
        break;
      case '-':
        result = this.previousValue - current;
        break;
      case '*':
        result = this.previousValue * current;
        break;
      case '/':
        result = this.previousValue / current;
        break;
    }
    
    this.display = result.toString();
    this.operator = null;
    this.waitingForNewValue = true;
  }

  clear() {
    this.display = '0';
    this.previousValue = 0;
    this.operator = null;
    this.waitingForNewValue = false;
  }

  toggleSign() {
    this.display = (parseFloat(this.display) * -1).toString();
  }

  handlePercent() {
    this.display = (parseFloat(this.display) / 100).toString();
  }
}
