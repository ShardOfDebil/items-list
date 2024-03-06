import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {IGameCard} from '../../../core/interfaces/data.interface';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemCardComponent implements OnInit {
  public gameCards: IGameCard[] = [];
  constructor(
    private router: Router,
    private dataService: DataService,
    private cdr: ChangeDetectorRef,
  ) { }

  public ngOnInit(): void {
    this.dataService.getGameCardsPublic().subscribe((cards: IGameCard[]) => {
      this.gameCards = cards;
      this.cdr.markForCheck();
    });
  }

  public openDetails(): void {

  }
}
