import { SelectionForegroundIcon as SelectionForegroundBoldIcon } from "../bold/SelectionForeground";
import { SelectionForegroundIcon as SelectionForegroundDuotoneIcon } from "../duotone/SelectionForeground";
import { SelectionForegroundIcon as SelectionForegroundFillIcon } from "../fill/SelectionForeground";
import { SelectionForegroundIcon as SelectionForegroundLightIcon } from "../light/SelectionForeground";
import { SelectionForegroundIcon as SelectionForegroundRegularIcon } from "../regular/SelectionForeground";
import { SelectionForegroundIcon as SelectionForegroundThinIcon } from "../thin/SelectionForeground";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SelectionForegroundThinIcon,
	light: SelectionForegroundLightIcon,
	regular: SelectionForegroundRegularIcon,
	bold: SelectionForegroundBoldIcon,
	fill: SelectionForegroundFillIcon,
	duotone: SelectionForegroundDuotoneIcon,
} as const;

export function SelectionForegroundIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SelectionForegroundIcon as SelectionForeground };
