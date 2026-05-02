import { OptionIcon as OptionBoldIcon } from "../bold/Option";
import { OptionIcon as OptionDuotoneIcon } from "../duotone/Option";
import { OptionIcon as OptionFillIcon } from "../fill/Option";
import { OptionIcon as OptionLightIcon } from "../light/Option";
import { OptionIcon as OptionRegularIcon } from "../regular/Option";
import { OptionIcon as OptionThinIcon } from "../thin/Option";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: OptionThinIcon,
	light: OptionLightIcon,
	regular: OptionRegularIcon,
	bold: OptionBoldIcon,
	fill: OptionFillIcon,
	duotone: OptionDuotoneIcon,
} as const;

export function OptionIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { OptionIcon as Option };
