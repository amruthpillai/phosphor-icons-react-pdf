import { HandDepositIcon as HandDepositBoldIcon } from "../bold/HandDeposit";
import { HandDepositIcon as HandDepositDuotoneIcon } from "../duotone/HandDeposit";
import { HandDepositIcon as HandDepositFillIcon } from "../fill/HandDeposit";
import { HandDepositIcon as HandDepositLightIcon } from "../light/HandDeposit";
import { HandDepositIcon as HandDepositRegularIcon } from "../regular/HandDeposit";
import { HandDepositIcon as HandDepositThinIcon } from "../thin/HandDeposit";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HandDepositThinIcon,
	light: HandDepositLightIcon,
	regular: HandDepositRegularIcon,
	bold: HandDepositBoldIcon,
	fill: HandDepositFillIcon,
	duotone: HandDepositDuotoneIcon,
} as const;

export function HandDepositIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HandDepositIcon as HandDeposit };
