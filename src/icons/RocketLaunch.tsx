import { RocketLaunchIcon as RocketLaunchBoldIcon } from "../bold/RocketLaunch";
import { RocketLaunchIcon as RocketLaunchDuotoneIcon } from "../duotone/RocketLaunch";
import { RocketLaunchIcon as RocketLaunchFillIcon } from "../fill/RocketLaunch";
import { RocketLaunchIcon as RocketLaunchLightIcon } from "../light/RocketLaunch";
import { RocketLaunchIcon as RocketLaunchRegularIcon } from "../regular/RocketLaunch";
import { RocketLaunchIcon as RocketLaunchThinIcon } from "../thin/RocketLaunch";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: RocketLaunchThinIcon,
	light: RocketLaunchLightIcon,
	regular: RocketLaunchRegularIcon,
	bold: RocketLaunchBoldIcon,
	fill: RocketLaunchFillIcon,
	duotone: RocketLaunchDuotoneIcon,
} as const;

export function RocketLaunchIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { RocketLaunchIcon as RocketLaunch };
