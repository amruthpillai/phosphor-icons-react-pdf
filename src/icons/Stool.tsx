import { StoolIcon as StoolBoldIcon } from "../bold/Stool";
import { StoolIcon as StoolDuotoneIcon } from "../duotone/Stool";
import { StoolIcon as StoolFillIcon } from "../fill/Stool";
import { StoolIcon as StoolLightIcon } from "../light/Stool";
import { StoolIcon as StoolRegularIcon } from "../regular/Stool";
import { StoolIcon as StoolThinIcon } from "../thin/Stool";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: StoolThinIcon,
	light: StoolLightIcon,
	regular: StoolRegularIcon,
	bold: StoolBoldIcon,
	fill: StoolFillIcon,
	duotone: StoolDuotoneIcon,
} as const;

export function StoolIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { StoolIcon as Stool };
