import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {IGameCard} from '../../core/interfaces/data.interface';
import {DataService} from '../../shared/services/data.service';

@Component({
  selector: 'app-items-list-page',
  templateUrl: './items-list-page.component.html',
  styleUrls: ['./items-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemsListPageComponent implements OnInit {
  public gameCards: IGameCard[] = [];

  constructor(
    private dataService: DataService,
    private cdr: ChangeDetectorRef
  ) { }

  public ngOnInit(): void {
    this.dataService.getGameCardsPublic().subscribe((cards: IGameCard[]) => {
      this.gameCards = cards;
      this.cdr.markForCheck();
    });
  }

}
