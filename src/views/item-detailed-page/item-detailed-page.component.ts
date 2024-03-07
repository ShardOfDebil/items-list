import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {catchError, of, switchMap} from 'rxjs';
import {IItem} from '../../core/interfaces/data.interface';
import {DataService} from '../../shared/services/data.service';

@Component({
  selector: 'app-item-detailed-page',
  templateUrl: './item-detailed-page.component.html',
  styleUrls: ['./item-detailed-page.component.scss']
})
export class ItemDetailedPageComponent implements OnInit {
  public item!: IItem;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  public ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        if (id) {
          return this.dataService.getCardById(+id);
        } else {
          return of(null);
        }
      }),
      catchError(error => {
        console.error('Error fetching game details', error);
        return of(null);
      })
    ).subscribe(card => {
      if (card) {
        this.item = card;
      } else {
        console.log('Game card not found or ID is missing');
      }
    });
  }
}
