import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import {ROUTE_PATH} from '../../core/const/routes.enum';
import {DataService} from '../../shared/services/data.service';

@Component({
  selector: 'app-item-new-page',
  templateUrl: './item-new-page.component.html',
  styleUrls: ['./item-new-page.component.scss']
})
export class ItemNewPageComponent implements OnInit {
  public itemForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dataService: DataService,
    private _snackBar: MatSnackBar,
  ) {
    this.itemForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      type: ['', [Validators.required, Validators.minLength(4)]],
      description: [''],
    });
  }

  public ngOnInit(): void {
  }

  public openSnackBar(): void {
    this._snackBar.open('Item successfully added', '', {
      duration: 3000
    });
  }
  public onSubmit(): void {
    if (this.itemForm.valid) {
      this.dataService.addCard(this.itemForm.value);
      console.log('Item added:', this.itemForm.value);
      this.itemForm.reset();
      this.router.navigate([ROUTE_PATH.EMPTY]).then((r: boolean) => {
      });
      this.openSnackBar();
    }
  }
}
