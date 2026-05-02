import { HeadphonesIcon as HeadphonesBoldIcon } from "../bold/Headphones";
import { HeadphonesIcon as HeadphonesDuotoneIcon } from "../duotone/Headphones";
import { HeadphonesIcon as HeadphonesFillIcon } from "../fill/Headphones";
import { HeadphonesIcon as HeadphonesLightIcon } from "../light/Headphones";
import { HeadphonesIcon as HeadphonesRegularIcon } from "../regular/Headphones";
import { HeadphonesIcon as HeadphonesThinIcon } from "../thin/Headphones";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HeadphonesThinIcon,
	light: HeadphonesLightIcon,
	regular: HeadphonesRegularIcon,
	bold: HeadphonesBoldIcon,
	fill: HeadphonesFillIcon,
	duotone: HeadphonesDuotoneIcon,
} as const;

export function HeadphonesIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HeadphonesIcon as Headphones };
