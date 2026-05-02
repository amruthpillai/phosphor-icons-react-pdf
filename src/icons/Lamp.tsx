import { LampIcon as LampBoldIcon } from "../bold/Lamp";
import { LampIcon as LampDuotoneIcon } from "../duotone/Lamp";
import { LampIcon as LampFillIcon } from "../fill/Lamp";
import { LampIcon as LampLightIcon } from "../light/Lamp";
import { LampIcon as LampRegularIcon } from "../regular/Lamp";
import { LampIcon as LampThinIcon } from "../thin/Lamp";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: LampThinIcon,
	light: LampLightIcon,
	regular: LampRegularIcon,
	bold: LampBoldIcon,
	fill: LampFillIcon,
	duotone: LampDuotoneIcon,
} as const;

export function LampIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { LampIcon as Lamp };
