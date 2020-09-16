import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  constructor() { }
  @Output() outputTitle = new EventEmitter<string>();
  
  // title: string = 'uhuh';
  // salary = new FormControl();

  ngOnInit(): void {
    // this.outputTitle.emit(this.title);
  }

 
 
}
