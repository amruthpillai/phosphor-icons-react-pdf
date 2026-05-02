import { ToggleRightIcon as ToggleRightBoldIcon } from "../bold/ToggleRight";
import { ToggleRightIcon as ToggleRightDuotoneIcon } from "../duotone/ToggleRight";
import { ToggleRightIcon as ToggleRightFillIcon } from "../fill/ToggleRight";
import { ToggleRightIcon as ToggleRightLightIcon } from "../light/ToggleRight";
import { ToggleRightIcon as ToggleRightRegularIcon } from "../regular/ToggleRight";
import { ToggleRightIcon as ToggleRightThinIcon } from "../thin/ToggleRight";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ToggleRightThinIcon,
	light: ToggleRightLightIcon,
	regular: ToggleRightRegularIcon,
	bold: ToggleRightBoldIcon,
	fill: ToggleRightFillIcon,
	duotone: ToggleRightDuotoneIcon,
} as const;

export function ToggleRightIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ToggleRightIcon as ToggleRight };
