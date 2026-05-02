import { GenderTransgenderIcon as GenderTransgenderBoldIcon } from "../bold/GenderTransgender";
import { GenderTransgenderIcon as GenderTransgenderDuotoneIcon } from "../duotone/GenderTransgender";
import { GenderTransgenderIcon as GenderTransgenderFillIcon } from "../fill/GenderTransgender";
import { GenderTransgenderIcon as GenderTransgenderLightIcon } from "../light/GenderTransgender";
import { GenderTransgenderIcon as GenderTransgenderRegularIcon } from "../regular/GenderTransgender";
import { GenderTransgenderIcon as GenderTransgenderThinIcon } from "../thin/GenderTransgender";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GenderTransgenderThinIcon,
	light: GenderTransgenderLightIcon,
	regular: GenderTransgenderRegularIcon,
	bold: GenderTransgenderBoldIcon,
	fill: GenderTransgenderFillIcon,
	duotone: GenderTransgenderDuotoneIcon,
} as const;

export function GenderTransgenderIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GenderTransgenderIcon as GenderTransgender };
