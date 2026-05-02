import { ImageBrokenIcon as ImageBrokenBoldIcon } from "../bold/ImageBroken";
import { ImageBrokenIcon as ImageBrokenDuotoneIcon } from "../duotone/ImageBroken";
import { ImageBrokenIcon as ImageBrokenFillIcon } from "../fill/ImageBroken";
import { ImageBrokenIcon as ImageBrokenLightIcon } from "../light/ImageBroken";
import { ImageBrokenIcon as ImageBrokenRegularIcon } from "../regular/ImageBroken";
import { ImageBrokenIcon as ImageBrokenThinIcon } from "../thin/ImageBroken";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ImageBrokenThinIcon,
	light: ImageBrokenLightIcon,
	regular: ImageBrokenRegularIcon,
	bold: ImageBrokenBoldIcon,
	fill: ImageBrokenFillIcon,
	duotone: ImageBrokenDuotoneIcon,
} as const;

export function ImageBrokenIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ImageBrokenIcon as ImageBroken };
