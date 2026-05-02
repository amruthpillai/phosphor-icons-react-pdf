import { StopIcon as StopBoldIcon } from "../bold/Stop";
import { StopIcon as StopDuotoneIcon } from "../duotone/Stop";
import { StopIcon as StopFillIcon } from "../fill/Stop";
import { StopIcon as StopLightIcon } from "../light/Stop";
import { StopIcon as StopRegularIcon } from "../regular/Stop";
import { StopIcon as StopThinIcon } from "../thin/Stop";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: StopThinIcon,
	light: StopLightIcon,
	regular: StopRegularIcon,
	bold: StopBoldIcon,
	fill: StopFillIcon,
	duotone: StopDuotoneIcon,
} as const;

export function StopIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { StopIcon as Stop };
