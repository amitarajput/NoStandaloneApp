import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent implements OnInit {

  category={
    title:'',
    description: '',
  };

  constructor(private _category:CategoryService, private _snack:MatSnackBar){}

  ngOnInit(): void {
      
  }

  formSubmit()
  {
    if(this.category.title.trim()=='' || this.category.title==null)
    {
     this._snack.open('Title Required !!' , '',{
      duration: 3000,
     });
     return;
    }
    //all done
    this._category.addCategory(this.category).subscribe(
      (date:any)=>{
        this.category.title='';
        this.category.description='';
        Swal.fire("success !!", 'category is added successfully', 'success');
      },
      (error:any)=>{
        console.log(error);
        Swal.fire('Error !!', 'server error !!', 'error')
      }
    )
  }

}