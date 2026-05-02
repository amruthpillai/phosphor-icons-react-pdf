import { PiggyBankIcon as PiggyBankBoldIcon } from "../bold/PiggyBank";
import { PiggyBankIcon as PiggyBankDuotoneIcon } from "../duotone/PiggyBank";
import { PiggyBankIcon as PiggyBankFillIcon } from "../fill/PiggyBank";
import { PiggyBankIcon as PiggyBankLightIcon } from "../light/PiggyBank";
import { PiggyBankIcon as PiggyBankRegularIcon } from "../regular/PiggyBank";
import { PiggyBankIcon as PiggyBankThinIcon } from "../thin/PiggyBank";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PiggyBankThinIcon,
	light: PiggyBankLightIcon,
	regular: PiggyBankRegularIcon,
	bold: PiggyBankBoldIcon,
	fill: PiggyBankFillIcon,
	duotone: PiggyBankDuotoneIcon,
} as const;

export function PiggyBankIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PiggyBankIcon as PiggyBank };
