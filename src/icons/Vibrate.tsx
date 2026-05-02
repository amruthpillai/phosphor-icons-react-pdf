import { VibrateIcon as VibrateBoldIcon } from "../bold/Vibrate";
import { VibrateIcon as VibrateDuotoneIcon } from "../duotone/Vibrate";
import { VibrateIcon as VibrateFillIcon } from "../fill/Vibrate";
import { VibrateIcon as VibrateLightIcon } from "../light/Vibrate";
import { VibrateIcon as VibrateRegularIcon } from "../regular/Vibrate";
import { VibrateIcon as VibrateThinIcon } from "../thin/Vibrate";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: VibrateThinIcon,
	light: VibrateLightIcon,
	regular: VibrateRegularIcon,
	bold: VibrateBoldIcon,
	fill: VibrateFillIcon,
	duotone: VibrateDuotoneIcon,
} as const;

export function VibrateIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { VibrateIcon as Vibrate };
