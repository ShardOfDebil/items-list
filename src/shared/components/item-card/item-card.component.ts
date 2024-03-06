import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {IGameCard} from '../../../core/interfaces/data.interface';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemCardComponent implements OnInit {
  @Input() public data!: IGameCard;

  public ngOnInit(): void {
  }

  public openDetails(): void {
    // Логика для открытия деталей
  }
}
