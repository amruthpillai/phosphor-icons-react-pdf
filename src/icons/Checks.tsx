import { ChecksIcon as ChecksBoldIcon } from "../bold/Checks";
import { ChecksIcon as ChecksDuotoneIcon } from "../duotone/Checks";
import { ChecksIcon as ChecksFillIcon } from "../fill/Checks";
import { ChecksIcon as ChecksLightIcon } from "../light/Checks";
import { ChecksIcon as ChecksRegularIcon } from "../regular/Checks";
import { ChecksIcon as ChecksThinIcon } from "../thin/Checks";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ChecksThinIcon,
	light: ChecksLightIcon,
	regular: ChecksRegularIcon,
	bold: ChecksBoldIcon,
	fill: ChecksFillIcon,
	duotone: ChecksDuotoneIcon,
} as const;

export function ChecksIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ChecksIcon as Checks };
