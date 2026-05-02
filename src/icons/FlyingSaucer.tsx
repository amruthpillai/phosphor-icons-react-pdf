import { FlyingSaucerIcon as FlyingSaucerBoldIcon } from "../bold/FlyingSaucer";
import { FlyingSaucerIcon as FlyingSaucerDuotoneIcon } from "../duotone/FlyingSaucer";
import { FlyingSaucerIcon as FlyingSaucerFillIcon } from "../fill/FlyingSaucer";
import { FlyingSaucerIcon as FlyingSaucerLightIcon } from "../light/FlyingSaucer";
import { FlyingSaucerIcon as FlyingSaucerRegularIcon } from "../regular/FlyingSaucer";
import { FlyingSaucerIcon as FlyingSaucerThinIcon } from "../thin/FlyingSaucer";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FlyingSaucerThinIcon,
	light: FlyingSaucerLightIcon,
	regular: FlyingSaucerRegularIcon,
	bold: FlyingSaucerBoldIcon,
	fill: FlyingSaucerFillIcon,
	duotone: FlyingSaucerDuotoneIcon,
} as const;

export function FlyingSaucerIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FlyingSaucerIcon as FlyingSaucer };
