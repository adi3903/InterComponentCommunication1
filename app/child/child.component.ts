import { Component, Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent 
{
  @Output() public submit = new EventEmitter();
  public Submit()
  {
    this.submit.emit("Submitted successfully");
  }
}
