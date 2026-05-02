import { SignpostIcon as SignpostBoldIcon } from "../bold/Signpost";
import { SignpostIcon as SignpostDuotoneIcon } from "../duotone/Signpost";
import { SignpostIcon as SignpostFillIcon } from "../fill/Signpost";
import { SignpostIcon as SignpostLightIcon } from "../light/Signpost";
import { SignpostIcon as SignpostRegularIcon } from "../regular/Signpost";
import { SignpostIcon as SignpostThinIcon } from "../thin/Signpost";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SignpostThinIcon,
	light: SignpostLightIcon,
	regular: SignpostRegularIcon,
	bold: SignpostBoldIcon,
	fill: SignpostFillIcon,
	duotone: SignpostDuotoneIcon,
} as const;

export function SignpostIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SignpostIcon as Signpost };
