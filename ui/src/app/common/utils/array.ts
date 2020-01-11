import { Subscription } from 'rxjs/internal/Subscription';

export function arrayUnsubscribe(subs: Subscription[] = []) {
	subs.forEach((sub: Subscription) => sub.unsubscribe());
}
