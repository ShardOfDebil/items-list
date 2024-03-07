import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, shareReplay} from 'rxjs';
import { map } from 'rxjs/operators';
import {IItem} from '../../core/interfaces/data.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private cardsSubject: BehaviorSubject<IItem[]> = new BehaviorSubject<IItem[]>([]);
  private cards$: Observable<IItem[]> = this.cardsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadInitialData();
  }

  private loadInitialData(): void {
    const localData: IItem[] = JSON.parse(localStorage.getItem('additionalCards') || '[]');
    this.http.get<{itemList: IItem[]}>('assets/data/sitedb.json').pipe(
      map(({itemList}) => [...itemList, ...localData])
    ).subscribe((data: IItem[]) => {
      this.cardsSubject.next(data);
    });
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
    const currentCards: IItem[] = this.cardsSubject.getValue();
    const updatedCards: IItem[] = [...currentCards, card];
    this.cardsSubject.next(updatedCards);

    localStorage.setItem('additionalCards', JSON.stringify(updatedCards));
  }
}
