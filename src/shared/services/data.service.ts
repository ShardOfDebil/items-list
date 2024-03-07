import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { IItem } from '../../core/interfaces/data.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private cardsSubject: BehaviorSubject<IItem[]> = new BehaviorSubject<IItem[]>([]);
  private cards$: Observable<IItem[]> = this.cardsSubject.asObservable()
    .pipe(shareReplay(1));

  constructor(private http: HttpClient) {
    this.loadInitialData();
  }

  private loadInitialData(): void {
    this.http.get<{itemList: IItem[]}>('assets/data/sitedb.json').pipe(
      map(({itemList}) => [...itemList, ...JSON.parse(localStorage.getItem('additionalCards') || '[]')])
    ).subscribe((data: IItem[]) => this.cardsSubject.next(data));
  }

  public getCardsPublic(): Observable<IItem[]> {
    return this.cards$;
  }

  public getCardById(id: number): Observable<IItem | undefined> {
    return this.cards$.pipe(
      map((cards: IItem[]) => cards.find((card: IItem, index: number): boolean => index === id))
    );
  }

  public addCard(card: IItem): void {
    const additionalCards: IItem[] = JSON.parse(localStorage.getItem('additionalCards') || '[]');
    additionalCards.push(card);
    localStorage.setItem('additionalCards', JSON.stringify(additionalCards));

    this.cardsSubject.next([...this.cardsSubject.getValue(), card]);
  }
}
