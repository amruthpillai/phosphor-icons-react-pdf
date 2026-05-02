import { SoccerBallIcon as SoccerBallBoldIcon } from "../bold/SoccerBall";
import { SoccerBallIcon as SoccerBallDuotoneIcon } from "../duotone/SoccerBall";
import { SoccerBallIcon as SoccerBallFillIcon } from "../fill/SoccerBall";
import { SoccerBallIcon as SoccerBallLightIcon } from "../light/SoccerBall";
import { SoccerBallIcon as SoccerBallRegularIcon } from "../regular/SoccerBall";
import { SoccerBallIcon as SoccerBallThinIcon } from "../thin/SoccerBall";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SoccerBallThinIcon,
	light: SoccerBallLightIcon,
	regular: SoccerBallRegularIcon,
	bold: SoccerBallBoldIcon,
	fill: SoccerBallFillIcon,
	duotone: SoccerBallDuotoneIcon,
} as const;

export function SoccerBallIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SoccerBallIcon as SoccerBall };
