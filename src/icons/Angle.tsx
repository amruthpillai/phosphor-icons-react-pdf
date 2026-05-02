import { AngleIcon as AngleBoldIcon } from "../bold/Angle";
import { AngleIcon as AngleDuotoneIcon } from "../duotone/Angle";
import { AngleIcon as AngleFillIcon } from "../fill/Angle";
import { AngleIcon as AngleLightIcon } from "../light/Angle";
import { AngleIcon as AngleRegularIcon } from "../regular/Angle";
import { AngleIcon as AngleThinIcon } from "../thin/Angle";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: AngleThinIcon,
	light: AngleLightIcon,
	regular: AngleRegularIcon,
	bold: AngleBoldIcon,
	fill: AngleFillIcon,
	duotone: AngleDuotoneIcon,
} as const;

export function AngleIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { AngleIcon as Angle };
