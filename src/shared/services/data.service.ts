import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {IGameCard} from '../../core/interfaces/data.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  private getGameCards(): Observable<IGameCard[]> {
    return this.http.get<{gameCards: IGameCard[]}>('assets/data/sitedb.json')
      .pipe(
        map((response: {gameCards: IGameCard[]}) => response.gameCards)
      );
  }

  public getGameCardsPublic(): Observable<IGameCard[]> {
    return this.getGameCards();
  }
}
