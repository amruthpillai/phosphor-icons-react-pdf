import { ToggleLeftIcon as ToggleLeftBoldIcon } from "../bold/ToggleLeft";
import { ToggleLeftIcon as ToggleLeftDuotoneIcon } from "../duotone/ToggleLeft";
import { ToggleLeftIcon as ToggleLeftFillIcon } from "../fill/ToggleLeft";
import { ToggleLeftIcon as ToggleLeftLightIcon } from "../light/ToggleLeft";
import { ToggleLeftIcon as ToggleLeftRegularIcon } from "../regular/ToggleLeft";
import { ToggleLeftIcon as ToggleLeftThinIcon } from "../thin/ToggleLeft";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ToggleLeftThinIcon,
	light: ToggleLeftLightIcon,
	regular: ToggleLeftRegularIcon,
	bold: ToggleLeftBoldIcon,
	fill: ToggleLeftFillIcon,
	duotone: ToggleLeftDuotoneIcon,
} as const;

export function ToggleLeftIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ToggleLeftIcon as ToggleLeft };
