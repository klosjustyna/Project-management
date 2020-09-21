import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { FormControl } from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import { FormControl} from '@angular/forms';


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  name = new FormControl();
  client = new FormControl();
  address = new FormControl();
  nip = new FormControl();
  deadline = new FormControl();
  sallary = new FormControl();
  worker = new FormControl();

  constructor(private http:HttpClient) { }


  ngOnInit(): void {  }
  
  showProjects(){
    this.http.get('/api').subscribe();
  }

  saveProject(){
      this.http.post('/api',
      {
          "name" : this.name.value,
          "deadline" :  this.deadline.value,
          "sallary" : this.sallary.value, 
          "is_finish" : 'false', 
          "client" : this.client.value, 
          "worker" : this.worker.value,
      })
      .subscribe(
          (val) => {
              console.log("POST call successful value returned in body", 
                          val);
          },
          response => {
              console.log("POST call in error", response);
          },
          () => {
              console.log("The POST observable is now completed.");
          });
  }

}
 
 
