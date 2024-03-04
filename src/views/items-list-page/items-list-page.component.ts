import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-items-list-page',
  templateUrl: './items-list-page.component.html',
  styleUrls: ['./items-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemsListPageComponent implements OnInit {


  constructor(

  ) {
  }

  public ngOnInit(): void {
  }

}
