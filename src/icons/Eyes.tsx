import { EyesIcon as EyesBoldIcon } from "../bold/Eyes";
import { EyesIcon as EyesDuotoneIcon } from "../duotone/Eyes";
import { EyesIcon as EyesFillIcon } from "../fill/Eyes";
import { EyesIcon as EyesLightIcon } from "../light/Eyes";
import { EyesIcon as EyesRegularIcon } from "../regular/Eyes";
import { EyesIcon as EyesThinIcon } from "../thin/Eyes";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: EyesThinIcon,
	light: EyesLightIcon,
	regular: EyesRegularIcon,
	bold: EyesBoldIcon,
	fill: EyesFillIcon,
	duotone: EyesDuotoneIcon,
} as const;

export function EyesIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { EyesIcon as Eyes };
