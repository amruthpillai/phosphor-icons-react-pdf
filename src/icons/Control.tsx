import { ControlIcon as ControlBoldIcon } from "../bold/Control";
import { ControlIcon as ControlDuotoneIcon } from "../duotone/Control";
import { ControlIcon as ControlFillIcon } from "../fill/Control";
import { ControlIcon as ControlLightIcon } from "../light/Control";
import { ControlIcon as ControlRegularIcon } from "../regular/Control";
import { ControlIcon as ControlThinIcon } from "../thin/Control";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ControlThinIcon,
	light: ControlLightIcon,
	regular: ControlRegularIcon,
	bold: ControlBoldIcon,
	fill: ControlFillIcon,
	duotone: ControlDuotoneIcon,
} as const;

export function ControlIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ControlIcon as Control };
