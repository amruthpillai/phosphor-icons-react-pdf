import { BarricadeIcon as BarricadeBoldIcon } from "../bold/Barricade";
import { BarricadeIcon as BarricadeDuotoneIcon } from "../duotone/Barricade";
import { BarricadeIcon as BarricadeFillIcon } from "../fill/Barricade";
import { BarricadeIcon as BarricadeLightIcon } from "../light/Barricade";
import { BarricadeIcon as BarricadeRegularIcon } from "../regular/Barricade";
import { BarricadeIcon as BarricadeThinIcon } from "../thin/Barricade";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BarricadeThinIcon,
	light: BarricadeLightIcon,
	regular: BarricadeRegularIcon,
	bold: BarricadeBoldIcon,
	fill: BarricadeFillIcon,
	duotone: BarricadeDuotoneIcon,
} as const;

export function BarricadeIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BarricadeIcon as Barricade };
