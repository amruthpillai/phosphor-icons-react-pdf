import { TennisBallIcon as TennisBallBoldIcon } from "../bold/TennisBall";
import { TennisBallIcon as TennisBallDuotoneIcon } from "../duotone/TennisBall";
import { TennisBallIcon as TennisBallFillIcon } from "../fill/TennisBall";
import { TennisBallIcon as TennisBallLightIcon } from "../light/TennisBall";
import { TennisBallIcon as TennisBallRegularIcon } from "../regular/TennisBall";
import { TennisBallIcon as TennisBallThinIcon } from "../thin/TennisBall";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TennisBallThinIcon,
	light: TennisBallLightIcon,
	regular: TennisBallRegularIcon,
	bold: TennisBallBoldIcon,
	fill: TennisBallFillIcon,
	duotone: TennisBallDuotoneIcon,
} as const;

export function TennisBallIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TennisBallIcon as TennisBall };
