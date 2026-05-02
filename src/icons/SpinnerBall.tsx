import { SpinnerBallIcon as SpinnerBallBoldIcon } from "../bold/SpinnerBall";
import { SpinnerBallIcon as SpinnerBallDuotoneIcon } from "../duotone/SpinnerBall";
import { SpinnerBallIcon as SpinnerBallFillIcon } from "../fill/SpinnerBall";
import { SpinnerBallIcon as SpinnerBallLightIcon } from "../light/SpinnerBall";
import { SpinnerBallIcon as SpinnerBallRegularIcon } from "../regular/SpinnerBall";
import { SpinnerBallIcon as SpinnerBallThinIcon } from "../thin/SpinnerBall";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SpinnerBallThinIcon,
	light: SpinnerBallLightIcon,
	regular: SpinnerBallRegularIcon,
	bold: SpinnerBallBoldIcon,
	fill: SpinnerBallFillIcon,
	duotone: SpinnerBallDuotoneIcon,
} as const;

export function SpinnerBallIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SpinnerBallIcon as SpinnerBall };
