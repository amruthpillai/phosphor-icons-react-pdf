import { EyeClosedIcon as EyeClosedBoldIcon } from "../bold/EyeClosed";
import { EyeClosedIcon as EyeClosedDuotoneIcon } from "../duotone/EyeClosed";
import { EyeClosedIcon as EyeClosedFillIcon } from "../fill/EyeClosed";
import { EyeClosedIcon as EyeClosedLightIcon } from "../light/EyeClosed";
import { EyeClosedIcon as EyeClosedRegularIcon } from "../regular/EyeClosed";
import { EyeClosedIcon as EyeClosedThinIcon } from "../thin/EyeClosed";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: EyeClosedThinIcon,
	light: EyeClosedLightIcon,
	regular: EyeClosedRegularIcon,
	bold: EyeClosedBoldIcon,
	fill: EyeClosedFillIcon,
	duotone: EyeClosedDuotoneIcon,
} as const;

export function EyeClosedIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { EyeClosedIcon as EyeClosed };
