import { FlagIcon as FlagBoldIcon } from "../bold/Flag";
import { FlagIcon as FlagDuotoneIcon } from "../duotone/Flag";
import { FlagIcon as FlagFillIcon } from "../fill/Flag";
import { FlagIcon as FlagLightIcon } from "../light/Flag";
import { FlagIcon as FlagRegularIcon } from "../regular/Flag";
import { FlagIcon as FlagThinIcon } from "../thin/Flag";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FlagThinIcon,
	light: FlagLightIcon,
	regular: FlagRegularIcon,
	bold: FlagBoldIcon,
	fill: FlagFillIcon,
	duotone: FlagDuotoneIcon,
} as const;

export function FlagIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FlagIcon as Flag };
