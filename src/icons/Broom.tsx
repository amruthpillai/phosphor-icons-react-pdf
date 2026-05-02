import { BroomIcon as BroomBoldIcon } from "../bold/Broom";
import { BroomIcon as BroomDuotoneIcon } from "../duotone/Broom";
import { BroomIcon as BroomFillIcon } from "../fill/Broom";
import { BroomIcon as BroomLightIcon } from "../light/Broom";
import { BroomIcon as BroomRegularIcon } from "../regular/Broom";
import { BroomIcon as BroomThinIcon } from "../thin/Broom";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BroomThinIcon,
	light: BroomLightIcon,
	regular: BroomRegularIcon,
	bold: BroomBoldIcon,
	fill: BroomFillIcon,
	duotone: BroomDuotoneIcon,
} as const;

export function BroomIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BroomIcon as Broom };
