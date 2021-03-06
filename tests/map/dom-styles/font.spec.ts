import {DOMStylesFont} from '../../../src/map/dom-styles/font';

const EXPECTED_STRONG_PROPERTIES = [
	{name: 'enabled', expectedValueType: 'boolean', expectedValue: true},
	{name: 'color', expectedValueType: 'string', expectedValue: '#FFFFFF'},
	{name: 'size', expectedValueType: 'string', expectedValue: '12px'},
	{name: 'family', expectedValueType: 'string', expectedValue: 'sans-serif'},
	{name: 'weight', expectedValueType: 'string', expectedValue: 'normal'},
	{name: 'lineHeight', expectedValueType: 'string', expectedValue: 'normal'},
	{name: 'stretch', expectedValueType: 'string', expectedValue: 'normal'},
	{name: 'variant', expectedValueType: 'string', expectedValue: 'normal'}
];
describe('DomStylesFont', () => {
	let instance: DOMStylesFont;

	beforeAll(() => {
		instance = new DOMStylesFont();
	});

	describe('Constructor', () => {
		for (const prop of EXPECTED_STRONG_PROPERTIES) {
			describe(`strong property ${prop.name}`, () => {
				it(`should be a function`, () => {
					expect(instance).toHaveProperty(prop.name);
					expect(typeof instance[prop.name]).toBe('function');
				});

				it(`should have initial value '${prop.expectedValue}'`, () => {
					expect(typeof instance[prop.name]()).toBe(prop.expectedValueType);
					expect(instance[prop.name]()).toBe(prop.expectedValue);
				});
			});
		}
	});
});
