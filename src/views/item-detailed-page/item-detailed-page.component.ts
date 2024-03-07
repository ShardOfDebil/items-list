import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {catchError, of, Subject, switchMap, takeUntil} from 'rxjs';
import {IItem} from '../../core/interfaces/data.interface';
import {DataService} from '../../shared/services/data.service';

@Component({
  selector: 'app-item-detailed-page',
  templateUrl: './item-detailed-page.component.html',
  styleUrls: ['./item-detailed-page.component.scss']
})
export class ItemDetailedPageComponent implements OnInit, OnDestroy {
  public item!: IItem;
  private destroy$: Subject<void> = new Subject<void>();

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
        console.error('Error fetching card details', error);
        return of(null);
      }),
      takeUntil(this.destroy$)
    ).subscribe(card => {
      if (card) {
        this.item = card;
      } else {
        console.log('card not found or ID is missing');
      }
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
