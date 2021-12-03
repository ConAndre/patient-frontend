import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  findAllPatients = (): Promise<any> => {
    return fetch('http://lab10redo-env.eba-8meycpvw.us-east-2.elasticbeanstalk.com/api/v1/patients').then(response => response.json())
  }
  constructor() { }
}
