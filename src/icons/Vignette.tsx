import { VignetteIcon as VignetteBoldIcon } from "../bold/Vignette";
import { VignetteIcon as VignetteDuotoneIcon } from "../duotone/Vignette";
import { VignetteIcon as VignetteFillIcon } from "../fill/Vignette";
import { VignetteIcon as VignetteLightIcon } from "../light/Vignette";
import { VignetteIcon as VignetteRegularIcon } from "../regular/Vignette";
import { VignetteIcon as VignetteThinIcon } from "../thin/Vignette";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: VignetteThinIcon,
	light: VignetteLightIcon,
	regular: VignetteRegularIcon,
	bold: VignetteBoldIcon,
	fill: VignetteFillIcon,
	duotone: VignetteDuotoneIcon,
} as const;

export function VignetteIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { VignetteIcon as Vignette };
