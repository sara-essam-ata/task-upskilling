import { Component } from '@angular/core';
import { FormGroup ,FormControl ,Validators} from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  
})
export class ContactComponent {
  constructor(private _AuthService:AuthService ){}

  regesterForm:FormGroup = new FormGroup({
    email:new FormControl(null ,[Validators.email]),
    phone:new FormControl(null ,[Validators.pattern(/^(\+201|01)[0-2,5]{1}[0-9]{8}$/)]),
    name:new FormControl(null ,[Validators.required ,Validators.pattern(/^[A-Z][a-z]{3,15}$/)]),
  });
  submitRegister(formInfo:FormGroup){
    this._AuthService.register(formInfo.value).subscribe((response)=>{
         console.log(response);
         alert(response.message)
     
    })
    console.log(formInfo);
  }

  ngOnInit(): void {
    
  }

}
