import {signalStore, withState} from '@ngrx/signals';
import {BooksState} from '../model/book-state';

const initialState: BooksState = {
  books: [],
  isLoading: false,
  filter: {query: '', order: 'asc'},
};

export const BooksStore = signalStore(
  { providedIn: 'root' },
  withState(initialState)
);
