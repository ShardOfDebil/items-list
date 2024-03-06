import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, shareReplay} from 'rxjs';
import { map } from 'rxjs/operators';
import {IGameCard} from '../../core/interfaces/data.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  public getGameCards(): Observable<IGameCard[]> {
    const localData: IGameCard[] = JSON.parse(localStorage.getItem('additionalGameCards') || '[]');
    return this.http.get<{gameCards: IGameCard[]}>('assets/data/sitedb.json').pipe(
      map((response: {gameCards: IGameCard[]}) => [...response.gameCards, ...localData]),
      shareReplay(1)
    );
  }

  public getGameCardsPublic(): Observable<IGameCard[]> {
    return this.getGameCards();
  }

  public getGameCardById(id: number): Observable<IGameCard | undefined> {
    return this.getGameCardsPublic().pipe(
      map((cards: IGameCard[]) => cards.find((card: IGameCard, index: number): boolean => index === id))
    );
  }

  public addGameCard(card: IGameCard): void {
    const additionalCards: IGameCard[] = JSON.parse(localStorage.getItem('additionalGameCards') || '[]');
    additionalCards.push(card);
    localStorage.setItem('additionalGameCards', JSON.stringify(additionalCards));
  }
}
