import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import {BooksStore} from '../../../store/book-store';

@Component({
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './book.component.html',
  providers: [BooksStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksComponent implements OnInit {
  readonly bookStore = inject(BooksStore);

  ngOnInit(): void {
    console.debug('BooksComponent initialized');
  }

}
