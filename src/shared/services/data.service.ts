import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, shareReplay} from 'rxjs';
import { map } from 'rxjs/operators';
import {IItem} from '../../core/interfaces/data.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  private getCards(): Observable<IItem[]> {
    const localData: IItem[] = JSON.parse(localStorage.getItem('additionalGameCards') || '[]');
    return this.http.get<{gameCards: IItem[]}>('assets/data/sitedb.json').pipe(
      map((response: {gameCards: IItem[]}) => [...response.gameCards, ...localData]),
      shareReplay(1)
    );
  }

  public getCardsPublic(): Observable<IItem[]> {
    return this.getCards();
  }

  public getCardById(id: number): Observable<IItem | undefined> {
    return this.getCardsPublic().pipe(
      map((cards: IItem[]) => cards.find((card: IItem, index: number): boolean => index === id))
    );
  }

  public addCard(card: IItem): void {
    const additionalCards: IItem[] = JSON.parse(localStorage.getItem('additionalGameCards') || '[]');
    additionalCards.push(card);
    localStorage.setItem('additionalGameCards', JSON.stringify(additionalCards));
  }
}
