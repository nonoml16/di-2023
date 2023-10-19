import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Sex, Student } from 'src/app/models/alumno.interface';

const STUDENTS: Student[] = [
  {id: 1, name: 'Miguel', lastname: 'Campos', sex: Sex.Female, age: 25, subjects: [{name: 'Math', hours: 5},{name: 'Spanish', hours: 4}], paid: true},
  {id: 2, name: 'Pepe', lastname: 'García', sex: Sex.Female, age: 25, subjects: [{name: 'Math', hours: 10}, {name: 'Spanish', hours: 30}],paid: false}
];

@Component({
  selector: 'app-tabla-angular',
  templateUrl: './tabla-angular.component.html',
  styleUrls: ['./tabla-angular.component.css']
})
export class TablaAngularComponent {
  displayedColumns: string[] = ['id', 'name', 'lastname', 'sex', 'age', 'subjects', 'paid'];
  dataSource = STUDENTS;
}
