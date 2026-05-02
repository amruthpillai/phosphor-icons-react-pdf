import { FlashlightIcon as FlashlightBoldIcon } from "../bold/Flashlight";
import { FlashlightIcon as FlashlightDuotoneIcon } from "../duotone/Flashlight";
import { FlashlightIcon as FlashlightFillIcon } from "../fill/Flashlight";
import { FlashlightIcon as FlashlightLightIcon } from "../light/Flashlight";
import { FlashlightIcon as FlashlightRegularIcon } from "../regular/Flashlight";
import { FlashlightIcon as FlashlightThinIcon } from "../thin/Flashlight";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FlashlightThinIcon,
	light: FlashlightLightIcon,
	regular: FlashlightRegularIcon,
	bold: FlashlightBoldIcon,
	fill: FlashlightFillIcon,
	duotone: FlashlightDuotoneIcon,
} as const;

export function FlashlightIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FlashlightIcon as Flashlight };
