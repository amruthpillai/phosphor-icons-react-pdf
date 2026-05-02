import { BowlingBallIcon as BowlingBallBoldIcon } from "../bold/BowlingBall";
import { BowlingBallIcon as BowlingBallDuotoneIcon } from "../duotone/BowlingBall";
import { BowlingBallIcon as BowlingBallFillIcon } from "../fill/BowlingBall";
import { BowlingBallIcon as BowlingBallLightIcon } from "../light/BowlingBall";
import { BowlingBallIcon as BowlingBallRegularIcon } from "../regular/BowlingBall";
import { BowlingBallIcon as BowlingBallThinIcon } from "../thin/BowlingBall";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BowlingBallThinIcon,
	light: BowlingBallLightIcon,
	regular: BowlingBallRegularIcon,
	bold: BowlingBallBoldIcon,
	fill: BowlingBallFillIcon,
	duotone: BowlingBallDuotoneIcon,
} as const;

export function BowlingBallIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BowlingBallIcon as BowlingBall };
