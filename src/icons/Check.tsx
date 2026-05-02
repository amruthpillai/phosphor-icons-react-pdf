import { CheckIcon as CheckBoldIcon } from "../bold/Check";
import { CheckIcon as CheckDuotoneIcon } from "../duotone/Check";
import { CheckIcon as CheckFillIcon } from "../fill/Check";
import { CheckIcon as CheckLightIcon } from "../light/Check";
import { CheckIcon as CheckRegularIcon } from "../regular/Check";
import { CheckIcon as CheckThinIcon } from "../thin/Check";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CheckThinIcon,
	light: CheckLightIcon,
	regular: CheckRegularIcon,
	bold: CheckBoldIcon,
	fill: CheckFillIcon,
	duotone: CheckDuotoneIcon,
} as const;

export function CheckIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CheckIcon as Check };
