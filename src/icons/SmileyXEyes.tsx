import { SmileyXEyesIcon as SmileyXEyesBoldIcon } from "../bold/SmileyXEyes";
import { SmileyXEyesIcon as SmileyXEyesDuotoneIcon } from "../duotone/SmileyXEyes";
import { SmileyXEyesIcon as SmileyXEyesFillIcon } from "../fill/SmileyXEyes";
import { SmileyXEyesIcon as SmileyXEyesLightIcon } from "../light/SmileyXEyes";
import { SmileyXEyesIcon as SmileyXEyesRegularIcon } from "../regular/SmileyXEyes";
import { SmileyXEyesIcon as SmileyXEyesThinIcon } from "../thin/SmileyXEyes";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SmileyXEyesThinIcon,
	light: SmileyXEyesLightIcon,
	regular: SmileyXEyesRegularIcon,
	bold: SmileyXEyesBoldIcon,
	fill: SmileyXEyesFillIcon,
	duotone: SmileyXEyesDuotoneIcon,
} as const;

export function SmileyXEyesIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SmileyXEyesIcon as SmileyXEyes };
