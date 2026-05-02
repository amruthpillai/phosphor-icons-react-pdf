import { EyeIcon as EyeBoldIcon } from "../bold/Eye";
import { EyeIcon as EyeDuotoneIcon } from "../duotone/Eye";
import { EyeIcon as EyeFillIcon } from "../fill/Eye";
import { EyeIcon as EyeLightIcon } from "../light/Eye";
import { EyeIcon as EyeRegularIcon } from "../regular/Eye";
import { EyeIcon as EyeThinIcon } from "../thin/Eye";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: EyeThinIcon,
	light: EyeLightIcon,
	regular: EyeRegularIcon,
	bold: EyeBoldIcon,
	fill: EyeFillIcon,
	duotone: EyeDuotoneIcon,
} as const;

export function EyeIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { EyeIcon as Eye };
