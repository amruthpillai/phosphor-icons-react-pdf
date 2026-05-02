import { BeachBallIcon as BeachBallBoldIcon } from "../bold/BeachBall";
import { BeachBallIcon as BeachBallDuotoneIcon } from "../duotone/BeachBall";
import { BeachBallIcon as BeachBallFillIcon } from "../fill/BeachBall";
import { BeachBallIcon as BeachBallLightIcon } from "../light/BeachBall";
import { BeachBallIcon as BeachBallRegularIcon } from "../regular/BeachBall";
import { BeachBallIcon as BeachBallThinIcon } from "../thin/BeachBall";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BeachBallThinIcon,
	light: BeachBallLightIcon,
	regular: BeachBallRegularIcon,
	bold: BeachBallBoldIcon,
	fill: BeachBallFillIcon,
	duotone: BeachBallDuotoneIcon,
} as const;

export function BeachBallIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BeachBallIcon as BeachBall };
