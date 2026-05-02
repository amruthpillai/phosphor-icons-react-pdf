import { HandWithdrawIcon as HandWithdrawBoldIcon } from "../bold/HandWithdraw";
import { HandWithdrawIcon as HandWithdrawDuotoneIcon } from "../duotone/HandWithdraw";
import { HandWithdrawIcon as HandWithdrawFillIcon } from "../fill/HandWithdraw";
import { HandWithdrawIcon as HandWithdrawLightIcon } from "../light/HandWithdraw";
import { HandWithdrawIcon as HandWithdrawRegularIcon } from "../regular/HandWithdraw";
import { HandWithdrawIcon as HandWithdrawThinIcon } from "../thin/HandWithdraw";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HandWithdrawThinIcon,
	light: HandWithdrawLightIcon,
	regular: HandWithdrawRegularIcon,
	bold: HandWithdrawBoldIcon,
	fill: HandWithdrawFillIcon,
	duotone: HandWithdrawDuotoneIcon,
} as const;

export function HandWithdrawIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HandWithdrawIcon as HandWithdraw };
