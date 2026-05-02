import { BalloonIcon as BalloonBoldIcon } from "../bold/Balloon";
import { BalloonIcon as BalloonDuotoneIcon } from "../duotone/Balloon";
import { BalloonIcon as BalloonFillIcon } from "../fill/Balloon";
import { BalloonIcon as BalloonLightIcon } from "../light/Balloon";
import { BalloonIcon as BalloonRegularIcon } from "../regular/Balloon";
import { BalloonIcon as BalloonThinIcon } from "../thin/Balloon";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BalloonThinIcon,
	light: BalloonLightIcon,
	regular: BalloonRegularIcon,
	bold: BalloonBoldIcon,
	fill: BalloonFillIcon,
	duotone: BalloonDuotoneIcon,
} as const;

export function BalloonIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BalloonIcon as Balloon };
