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
    this.cards$ = this.cardsSubject.asObservable().pipe(shareReplay(1));
    this.loadInitialData();
  }

  private loadInitialData(): void {
    this.http.get<{itemList: IItem[]}>('assets/data/sitedb.json').pipe(
      map(({itemList}) => {
        const localData: IItem[] = JSON.parse(localStorage.getItem('additionalCards') || '[]');
        return [...itemList, ...localData];
      })
    ).subscribe({
      next: (data: IItem[]) => this.cardsSubject.next(data),
      error: (error: any) => console.error('Error loading initial data', error)
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
    const additionalCards: IItem[] = JSON.parse(localStorage.getItem('additionalCards') || '[]');
    additionalCards.push(card);
    localStorage.setItem('additionalCards', JSON.stringify(additionalCards));
  }
}
