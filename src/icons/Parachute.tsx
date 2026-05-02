import { ParachuteIcon as ParachuteBoldIcon } from "../bold/Parachute";
import { ParachuteIcon as ParachuteDuotoneIcon } from "../duotone/Parachute";
import { ParachuteIcon as ParachuteFillIcon } from "../fill/Parachute";
import { ParachuteIcon as ParachuteLightIcon } from "../light/Parachute";
import { ParachuteIcon as ParachuteRegularIcon } from "../regular/Parachute";
import { ParachuteIcon as ParachuteThinIcon } from "../thin/Parachute";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ParachuteThinIcon,
	light: ParachuteLightIcon,
	regular: ParachuteRegularIcon,
	bold: ParachuteBoldIcon,
	fill: ParachuteFillIcon,
	duotone: ParachuteDuotoneIcon,
} as const;

export function ParachuteIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ParachuteIcon as Parachute };
