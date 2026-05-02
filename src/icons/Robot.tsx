import { RobotIcon as RobotBoldIcon } from "../bold/Robot";
import { RobotIcon as RobotDuotoneIcon } from "../duotone/Robot";
import { RobotIcon as RobotFillIcon } from "../fill/Robot";
import { RobotIcon as RobotLightIcon } from "../light/Robot";
import { RobotIcon as RobotRegularIcon } from "../regular/Robot";
import { RobotIcon as RobotThinIcon } from "../thin/Robot";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: RobotThinIcon,
	light: RobotLightIcon,
	regular: RobotRegularIcon,
	bold: RobotBoldIcon,
	fill: RobotFillIcon,
	duotone: RobotDuotoneIcon,
} as const;

export function RobotIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { RobotIcon as Robot };
