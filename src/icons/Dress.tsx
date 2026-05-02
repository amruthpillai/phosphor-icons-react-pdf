import { DressIcon as DressBoldIcon } from "../bold/Dress";
import { DressIcon as DressDuotoneIcon } from "../duotone/Dress";
import { DressIcon as DressFillIcon } from "../fill/Dress";
import { DressIcon as DressLightIcon } from "../light/Dress";
import { DressIcon as DressRegularIcon } from "../regular/Dress";
import { DressIcon as DressThinIcon } from "../thin/Dress";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DressThinIcon,
	light: DressLightIcon,
	regular: DressRegularIcon,
	bold: DressBoldIcon,
	fill: DressFillIcon,
	duotone: DressDuotoneIcon,
} as const;

export function DressIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DressIcon as Dress };
