import {STData} from './data';
import {STRules} from './rules';

export interface StrongType<ValueT> {
	(val?: ValueT | null): ValueT;
	get: (fallback: ValueT) => ValueT;
	getNull: () => ValueT | null;
	reset: () => void;
	typeId: 'StrongType' | string;
}

export function makeStrong<ValueT>(
	initial: ValueT | null | undefined,
	fallbackArg: ValueT,
	rules?: STRules<ValueT>
): StrongType<ValueT> {
	const instance = new STData<ValueT>(initial, fallbackArg, rules);

	const localFallback = fallbackArg !== undefined ? fallbackArg : instance.fallbackDefault;

	return Object.assign(
		(val?: ValueT | null): ValueT => {
			if (typeof val !== 'undefined') {
				instance.set(val);
			}

			return instance.get(localFallback);
		},
		{
			get: (fallback: ValueT): ValueT => {
				return instance.get(fallback);
			},
			getNull: (): ValueT | null => {
				return instance.getNull();
			},
			reset: (): void => {
				instance.reset();
			},
			typeId: 'StrongType'
		}
	);
	function increment(val): number {
		if (typeof val !== null) {
			return val.add(1);
		}

		if (typeof val === null) {
			return fallbackArg as any;
		}

		return val;
	}
}
