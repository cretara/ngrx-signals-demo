import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import {BooksStore} from '../../../store/book-store';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

@Component({
  standalone: true,
  imports: [JsonPipe, MatProgressSpinner],
  templateUrl: './book.component.html',
  providers: [BooksStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksComponent implements OnInit {
  readonly bookStore = inject(BooksStore);

  public loading = this.bookStore.isLoading;

  ngOnInit(): void {
    console.debug('BooksComponent initialized');
  }

}
