import { Component, OnInit } from '@angular/core';
import { PatientService } from './services/patient.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  patients : any;
  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.findAllPatients().then(patients => this.patients = patients);
  }
}
