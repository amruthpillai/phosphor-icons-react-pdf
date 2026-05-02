import { RocketIcon as RocketBoldIcon } from "../bold/Rocket";
import { RocketIcon as RocketDuotoneIcon } from "../duotone/Rocket";
import { RocketIcon as RocketFillIcon } from "../fill/Rocket";
import { RocketIcon as RocketLightIcon } from "../light/Rocket";
import { RocketIcon as RocketRegularIcon } from "../regular/Rocket";
import { RocketIcon as RocketThinIcon } from "../thin/Rocket";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: RocketThinIcon,
	light: RocketLightIcon,
	regular: RocketRegularIcon,
	bold: RocketBoldIcon,
	fill: RocketFillIcon,
	duotone: RocketDuotoneIcon,
} as const;

export function RocketIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { RocketIcon as Rocket };
