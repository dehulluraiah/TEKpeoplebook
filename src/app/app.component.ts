import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import  'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent  {
  name = 'Welcome To TekPeopleBook';
//Api Services
private employeeListAPI = 'https://jsonplaceholder.typicode.com/users';
data: any = [];
constructor(private http:Http){
this.getEmployeeData();
console.log(this.employees)
}
getEmployeeData(){
   return this.http.get(this.employeeListAPI)
   .map((res: Response) => res.json()).subscribe(data =>
   {
     this.data = data;
     console.log(data);
   },
   
   err => console.error(err), 
   () => console.log('Data loaded') )

}

employees = [
  {
    "employeeID" : '2442',
    "employeeName" : 'Pramod J Rao',
    "mobileNo" : '9844550628',
    "designation" : 'QA Lead',
    "emailID" : 'prrao@teksystems.com',
    "gender" : "male"
},
  {
    "employeeID" : '2346',
    "employeeName" : 'Sisir Das',
    "mobileNo" : '9986368639',
    "designation" : 'UI Tech Lead',
    "emailID" : 'sdas@teksystems.com',
    "gender" : "male"
},
  {
    "employeeID" : '2480',
    "employeeName" : 'Suneetha Keerthipati',
    "mobileNo" : '7259284725',
    "designation" : 'Test Lead',
    "emailID" : 'skeerthi@teksystems.com',
    "gender" : "female"

},
  {
    "employeeID" : '2494',
    "employeeName" : 'Anila Dhharisi',
    "mobileNo" : '9901437534',
    "designation" : 'Module Lead',
    "emailID" : 'adhharis@teksystems.com',
    "gender" : "female"    
},
  {
    "employeeID" : '2685',
    "employeeName" : 'Siana Rachel Zachariah',
    "mobileNo" : '9740579195',
    "designation" : 'Developer',
    "emailID" : 'szachari@teksystems.com',
    "gender" : "female"
},
  {
    "employeeID" : '2940',
    "employeeName" : 'Samrat Chatterjee',
    "mobileNo" : '8050215556',
    "designation" : 'Senior Software Engineer',
    "emailID" : 'schatterjee@teksystems.com',
    "gender" : "male"
},
  {
    "employeeID" : '2692',
    "employeeName" : 'Santosh Kumar',
    "mobileNo" : '9980013044',
    "designation" : 'Test Lead',
    "emailID" : 'skumarb@teksystems.com',
    "gender" : "male"
},
  {
    "employeeID" : '2715',
    "employeeName" : 'RajKumar S',
    "mobileNo" : '9611102236',
    "designation" : 'Service Delivery Manager',
    "emailID" : 'srajkuma@TEKsystems.com',
    "gender" : "male"
},
  {
    "employeeID" : '2907',
    "employeeName" : 'Deepak BH',
    "mobileNo" : '8553735572',
    "designation" : 'Developer',
    "emailID" : 'dehulluraiah@teksystems.com',
    "gender" : "male"
}
  ]


}
