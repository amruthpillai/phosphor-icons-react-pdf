import { EggIcon as EggBoldIcon } from "../bold/Egg";
import { EggIcon as EggDuotoneIcon } from "../duotone/Egg";
import { EggIcon as EggFillIcon } from "../fill/Egg";
import { EggIcon as EggLightIcon } from "../light/Egg";
import { EggIcon as EggRegularIcon } from "../regular/Egg";
import { EggIcon as EggThinIcon } from "../thin/Egg";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: EggThinIcon,
	light: EggLightIcon,
	regular: EggRegularIcon,
	bold: EggBoldIcon,
	fill: EggFillIcon,
	duotone: EggDuotoneIcon,
} as const;

export function EggIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { EggIcon as Egg };
