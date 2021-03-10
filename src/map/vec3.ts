import {StrongMap} from '../map';
import {StrongDouble, makeDouble} from '../types/double';

export class StrongVec3 extends StrongMap {
	public readonly x: StrongDouble;
	public readonly y: StrongDouble;
	public readonly z: StrongDouble;

	constructor(x: number | null, y: number | null, z: number | null) {
		super();

		this.x = makeDouble(x, 0);
		this.y = makeDouble(y, 0);
		this.z = makeDouble(z, 0);
	}
}
