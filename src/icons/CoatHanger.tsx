import { CoatHangerIcon as CoatHangerBoldIcon } from "../bold/CoatHanger";
import { CoatHangerIcon as CoatHangerDuotoneIcon } from "../duotone/CoatHanger";
import { CoatHangerIcon as CoatHangerFillIcon } from "../fill/CoatHanger";
import { CoatHangerIcon as CoatHangerLightIcon } from "../light/CoatHanger";
import { CoatHangerIcon as CoatHangerRegularIcon } from "../regular/CoatHanger";
import { CoatHangerIcon as CoatHangerThinIcon } from "../thin/CoatHanger";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CoatHangerThinIcon,
	light: CoatHangerLightIcon,
	regular: CoatHangerRegularIcon,
	bold: CoatHangerBoldIcon,
	fill: CoatHangerFillIcon,
	duotone: CoatHangerDuotoneIcon,
} as const;

export function CoatHangerIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CoatHangerIcon as CoatHanger };
