import {StrongMap} from '../map';
import {StrongDouble, makeDouble} from '../types/double';

export class StrongRange extends StrongMap {
	public readonly min: StrongDouble;
	public readonly max: StrongDouble;

	constructor(defaultMin: number | null, defaultMax: number | null) {
		super();

		this.min = makeDouble(defaultMin, 0);
		this.max = makeDouble(defaultMax, 0);
	}
}
