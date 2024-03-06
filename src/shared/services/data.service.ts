import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, shareReplay} from 'rxjs';
import { map } from 'rxjs/operators';
import {IGameCard} from '../../core/interfaces/data.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private cache$: Observable<IGameCard[]> | undefined;
  constructor(private http: HttpClient) { }

  private getGameCards(): Observable<IGameCard[]> {
    if (!this.cache$) {
      this.cache$ = this.http.get<{gameCards: IGameCard[]}>('assets/data/sitedb.json').pipe(
        map((response: {gameCards: IGameCard[]}) => response.gameCards),
        shareReplay(1)
      );
    }
    return this.cache$;
  }

  public getGameCardsPublic(): Observable<IGameCard[]> {
    return this.getGameCards();
  }

  public getGameCardById(id: number): Observable<IGameCard | undefined> {
    return this.getGameCardsPublic().pipe(
      map((cards: IGameCard[]) => cards.find((card: IGameCard, index: number): boolean => index === id))
    );
  }
}
