import {StrongMap} from '../map';
import {StrongDouble, makeDouble} from '../types/double';

export class StrongVec4 extends StrongMap {
	public readonly x: StrongDouble;
	public readonly y: StrongDouble;
	public readonly z: StrongDouble;
	public readonly w: StrongDouble;

	constructor(x: number | null, y: number | null, z: number | null, w: number | null) {
		super();

		this.x = makeDouble(x, 0);
		this.y = makeDouble(y, 0);
		this.z = makeDouble(z, 0);
		this.w = makeDouble(w, 0);
	}
}
