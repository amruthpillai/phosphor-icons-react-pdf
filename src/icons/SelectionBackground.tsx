import { SelectionBackgroundIcon as SelectionBackgroundBoldIcon } from "../bold/SelectionBackground";
import { SelectionBackgroundIcon as SelectionBackgroundDuotoneIcon } from "../duotone/SelectionBackground";
import { SelectionBackgroundIcon as SelectionBackgroundFillIcon } from "../fill/SelectionBackground";
import { SelectionBackgroundIcon as SelectionBackgroundLightIcon } from "../light/SelectionBackground";
import { SelectionBackgroundIcon as SelectionBackgroundRegularIcon } from "../regular/SelectionBackground";
import { SelectionBackgroundIcon as SelectionBackgroundThinIcon } from "../thin/SelectionBackground";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SelectionBackgroundThinIcon,
	light: SelectionBackgroundLightIcon,
	regular: SelectionBackgroundRegularIcon,
	bold: SelectionBackgroundBoldIcon,
	fill: SelectionBackgroundFillIcon,
	duotone: SelectionBackgroundDuotoneIcon,
} as const;

export function SelectionBackgroundIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SelectionBackgroundIcon as SelectionBackground };
