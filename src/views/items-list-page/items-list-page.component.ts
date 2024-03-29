import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ROUTE_PATH} from '../../core/const/routes.enum';
import {IItem} from '../../core/interfaces/data.interface';
import {DataService} from '../../shared/services/data.service';

@Component({
  selector: 'app-items-list-page',
  templateUrl: './items-list-page.component.html',
  styleUrls: ['./items-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemsListPageComponent implements OnInit {
  public cards: IItem[] = [];

  constructor(
    private router: Router,
    private dataService: DataService,
    private cdr: ChangeDetectorRef,
  ) { }

  public ngOnInit(): void {
    this.fetchGameCards();
  }

  public fetchGameCards(): void {
    this.dataService.getCardsPublic().subscribe((cards: IItem[]) => {
      this.cards = cards;
      this.cdr.markForCheck();
    });
  }

  public openDetails(id: number): void {
    this.router.navigate([`/${ROUTE_PATH.DETAILED_PAGE}`, id]).then((r: boolean) => {
    });
  }
}
