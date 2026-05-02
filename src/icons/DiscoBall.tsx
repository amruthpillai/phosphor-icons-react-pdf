import { DiscoBallIcon as DiscoBallBoldIcon } from "../bold/DiscoBall";
import { DiscoBallIcon as DiscoBallDuotoneIcon } from "../duotone/DiscoBall";
import { DiscoBallIcon as DiscoBallFillIcon } from "../fill/DiscoBall";
import { DiscoBallIcon as DiscoBallLightIcon } from "../light/DiscoBall";
import { DiscoBallIcon as DiscoBallRegularIcon } from "../regular/DiscoBall";
import { DiscoBallIcon as DiscoBallThinIcon } from "../thin/DiscoBall";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DiscoBallThinIcon,
	light: DiscoBallLightIcon,
	regular: DiscoBallRegularIcon,
	bold: DiscoBallBoldIcon,
	fill: DiscoBallFillIcon,
	duotone: DiscoBallDuotoneIcon,
} as const;

export function DiscoBallIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DiscoBallIcon as DiscoBall };
