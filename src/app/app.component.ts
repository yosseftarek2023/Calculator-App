import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator';
  output:string = '';

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const keyValue = event.key; 

    if (keyValue === 'Backspace') {
      this.handleBackspace();
    } else {
      if (this.isValidNumberKey(keyValue)) {
        this.getAction(keyValue); 
      } 
    }
  }

  isValidNumberKey(keyValue: string): boolean {
    return /^\d$/.test(keyValue);
  }

  handleBackspace() {
    this.output = this.output.slice(0, -1);
  }

  getAction(item:any){
    this.output += item;
  }

  equal() {
    try {
      const result = eval(this.output);
      if (isNaN(result)) {
        throw new Error("Invalid expression");
      }
      this.output = result.toFixed(1);
    } catch (error) {
      alert("Error: ");
    }
  }

  clear(){
    this.output = '';
  }
  
  
}
