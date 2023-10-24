import { Component } from '@angular/core';
import { UsresService } from '../usres.service';

@Component({
  selector: 'app-testymonials',
  templateUrl: './testymonials.component.html',
  styleUrls: ['./testymonials.component.scss']
})
export class TestymonialsComponent {

  users:any[]=[];
  constructor(private _UsresService:UsresService){}

  ngOnInit(): void {
        this._UsresService.getUsers().subscribe((response)=>{
          this.users = response.data;
        })
  }

}
