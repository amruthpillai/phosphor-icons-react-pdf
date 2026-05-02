import { MountainsIcon as MountainsBoldIcon } from "../bold/Mountains";
import { MountainsIcon as MountainsDuotoneIcon } from "../duotone/Mountains";
import { MountainsIcon as MountainsFillIcon } from "../fill/Mountains";
import { MountainsIcon as MountainsLightIcon } from "../light/Mountains";
import { MountainsIcon as MountainsRegularIcon } from "../regular/Mountains";
import { MountainsIcon as MountainsThinIcon } from "../thin/Mountains";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MountainsThinIcon,
	light: MountainsLightIcon,
	regular: MountainsRegularIcon,
	bold: MountainsBoldIcon,
	fill: MountainsFillIcon,
	duotone: MountainsDuotoneIcon,
} as const;

export function MountainsIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MountainsIcon as Mountains };
