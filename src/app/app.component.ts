import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'altrantask';

  userInformationArray=[]
  userInformationForm:FormGroup
  hobbies:FormArray
  constructor(private formBulider:FormBuilder){
    this.userInformationForm=this.formBulider.group({
      name:['',Validators.required],
      age:['',Validators.required],
      gender:['',Validators.required],
      hobbies:this.formBulider.array([this.createNewHobby()]),
      checked:['',Validators.required]
    })
  }

  createNewHobby(){
    return this.formBulider.group({
      hobby:['']
    })
  }

  addHobbyToArray(){
    this.hobbies=this.userInformationForm.get('hobbies') as FormArray
    this.hobbies.push(this.createNewHobby())
  }

  deleteHobbyFromArray(index){
    let hobbiesArray=this.userInformationForm.get('hobbies') as FormArray
    hobbiesArray.removeAt(index)

  }

  addInformation(){
    this.userInformationArray.push(this.userInformationForm.value)
  }

  deleteRecordFromArray(index){
    this.userInformationArray.splice(index,1)
  }

  clearFormArray(){
    let hobbiesArray=this.userInformationForm.get('hobbies') as FormArray
    let index=hobbiesArray.length
    while(index > 0){
      hobbiesArray.removeAt(index)
      index--;
    }
  }

  validate(event){
    if(event.target.checked==false){
      this.userInformationForm.invalid
    }
  }
  resetForm(){
    this.userInformationForm.reset()
    this.clearFormArray()
  }
}
