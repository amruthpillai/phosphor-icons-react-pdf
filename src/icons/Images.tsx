import { ImagesIcon as ImagesBoldIcon } from "../bold/Images";
import { ImagesIcon as ImagesDuotoneIcon } from "../duotone/Images";
import { ImagesIcon as ImagesFillIcon } from "../fill/Images";
import { ImagesIcon as ImagesLightIcon } from "../light/Images";
import { ImagesIcon as ImagesRegularIcon } from "../regular/Images";
import { ImagesIcon as ImagesThinIcon } from "../thin/Images";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ImagesThinIcon,
	light: ImagesLightIcon,
	regular: ImagesRegularIcon,
	bold: ImagesBoldIcon,
	fill: ImagesFillIcon,
	duotone: ImagesDuotoneIcon,
} as const;

export function ImagesIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ImagesIcon as Images };
