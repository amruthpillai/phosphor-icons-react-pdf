import { AirplayIcon as AirplayBoldIcon } from "../bold/Airplay";
import { AirplayIcon as AirplayDuotoneIcon } from "../duotone/Airplay";
import { AirplayIcon as AirplayFillIcon } from "../fill/Airplay";
import { AirplayIcon as AirplayLightIcon } from "../light/Airplay";
import { AirplayIcon as AirplayRegularIcon } from "../regular/Airplay";
import { AirplayIcon as AirplayThinIcon } from "../thin/Airplay";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: AirplayThinIcon,
	light: AirplayLightIcon,
	regular: AirplayRegularIcon,
	bold: AirplayBoldIcon,
	fill: AirplayFillIcon,
	duotone: AirplayDuotoneIcon,
} as const;

export function AirplayIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { AirplayIcon as Airplay };
