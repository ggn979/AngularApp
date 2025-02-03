import { Component, Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-customer-form',
  standalone: false,
  
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.css'
})
export class CustomerFormComponent {
  @Input() childFullName: string = '';  // Receives data from parent
  cFullName: string = '';
  @Output() messageEvent = new EventEmitter<string>();
  sendMessage() {
    this.messageEvent.emit(this.cFullName)
  }
}
