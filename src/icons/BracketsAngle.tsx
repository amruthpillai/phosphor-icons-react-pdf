import { BracketsAngleIcon as BracketsAngleBoldIcon } from "../bold/BracketsAngle";
import { BracketsAngleIcon as BracketsAngleDuotoneIcon } from "../duotone/BracketsAngle";
import { BracketsAngleIcon as BracketsAngleFillIcon } from "../fill/BracketsAngle";
import { BracketsAngleIcon as BracketsAngleLightIcon } from "../light/BracketsAngle";
import { BracketsAngleIcon as BracketsAngleRegularIcon } from "../regular/BracketsAngle";
import { BracketsAngleIcon as BracketsAngleThinIcon } from "../thin/BracketsAngle";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BracketsAngleThinIcon,
	light: BracketsAngleLightIcon,
	regular: BracketsAngleRegularIcon,
	bold: BracketsAngleBoldIcon,
	fill: BracketsAngleFillIcon,
	duotone: BracketsAngleDuotoneIcon,
} as const;

export function BracketsAngleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BracketsAngleIcon as BracketsAngle };
