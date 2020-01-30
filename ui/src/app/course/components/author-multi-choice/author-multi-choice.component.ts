import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';
import { arrayUnsubscribe } from '../../../common/utils/array';
import { AuthorService } from '../../services/author.service';
import { TStoreCoursesModule } from '../../store/index.types';
import { setAuthorsList, setCoursesList } from '../../store/reducers/courses.reducer';
import { getCoursesList, getAuthorsList } from '../../store/selectors';
import { TAuthor, TCourse } from '../../types';

@Component({
	selector: 'app-author-multi-choice',
	templateUrl: './author-multi-choice.component.html',
	styleUrls: ['./author-multi-choice.component.scss']
})
export class AuthorMultiChoiceComponent implements OnInit, OnDestroy {

	public items: Observable<TAuthor[]> = new Observable;
	private _subs: Subscription[] = [];

	constructor(
		private _cdRef: ChangeDetectorRef,
		private _authorService: AuthorService,
		private _store: Store<TStoreCoursesModule>,
	) {
		this._refreshListAuthors();
	}

	ngOnInit() {
		this.items = this._store.pipe(select(getAuthorsList));
	}


	ngOnDestroy(): void {
		arrayUnsubscribe(this._subs);
	}

	public getTitle(author: TAuthor): string {
		return author.name;
	}


	public getId(author: TAuthor): string {
		return author.name;
	}

	private _refreshListAuthors() {
		this._subs.push(this._authorService.getAuthors()
			.subscribe(this._setListAuthors.bind(this))
		);
	}

	private _setListAuthors(authors: TAuthor[]) {
		this._store.dispatch(setAuthorsList({ payload: authors }));
		this._cdRef.markForCheck();
	}
}
