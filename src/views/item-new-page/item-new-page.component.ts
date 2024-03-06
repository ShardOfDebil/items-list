import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-item-new-page',
  templateUrl: './item-new-page.component.html',
  styleUrls: ['./item-new-page.component.scss']
})
export class ItemNewPageComponent implements OnInit {
  public itemForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.itemForm = this.fb.group({
      name: ['', Validators.required, Validators.min(3)],
      genre: ['', Validators.required, Validators.min(3)],
      releaseDate: ['', Validators.required],
      description: [''],
    });
  }

  public ngOnInit(): void {
  }

  public onSubmit(): void {
    if (this.itemForm.valid) {
      console.log(this.itemForm.value);
      // Здесь логика для добавления данных из формы в ваш список айтемов или отправка на сервер
    }
  }
}
