import { CompassToolIcon as CompassToolBoldIcon } from "../bold/CompassTool";
import { CompassToolIcon as CompassToolDuotoneIcon } from "../duotone/CompassTool";
import { CompassToolIcon as CompassToolFillIcon } from "../fill/CompassTool";
import { CompassToolIcon as CompassToolLightIcon } from "../light/CompassTool";
import { CompassToolIcon as CompassToolRegularIcon } from "../regular/CompassTool";
import { CompassToolIcon as CompassToolThinIcon } from "../thin/CompassTool";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CompassToolThinIcon,
	light: CompassToolLightIcon,
	regular: CompassToolRegularIcon,
	bold: CompassToolBoldIcon,
	fill: CompassToolFillIcon,
	duotone: CompassToolDuotoneIcon,
} as const;

export function CompassToolIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CompassToolIcon as CompassTool };
