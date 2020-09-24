import KVPRule from '../rule';
import KVPRuleFn from '../fn';
import KVPRuleNode from '../node';
import KVPRuleNodeType from '../node-type';
export type KVPOpLessThan<CallerType> = (a: number) => CallerType;

const lessThanFn = (curr: number, target: number) => {
	return curr < target;
};

export default function createLessThan<CallerType>(
	caller: CallerType,
	rule: KVPRule
): KVPOpLessThan<CallerType> {
	function lessThan(target: number): CallerType {
		const ruleFn: KVPRuleFn = (curr: number) => {
			return lessThanFn(curr, target);
		};

		const node = new KVPRuleNode('LESS_THAN', KVPRuleNodeType.CMP, ruleFn);
		rule.add(node);

		return caller;
	}

	return lessThan;
}
