import { BankIcon as BankBoldIcon } from "../bold/Bank";
import { BankIcon as BankDuotoneIcon } from "../duotone/Bank";
import { BankIcon as BankFillIcon } from "../fill/Bank";
import { BankIcon as BankLightIcon } from "../light/Bank";
import { BankIcon as BankRegularIcon } from "../regular/Bank";
import { BankIcon as BankThinIcon } from "../thin/Bank";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BankThinIcon,
	light: BankLightIcon,
	regular: BankRegularIcon,
	bold: BankBoldIcon,
	fill: BankFillIcon,
	duotone: BankDuotoneIcon,
} as const;

export function BankIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BankIcon as Bank };
