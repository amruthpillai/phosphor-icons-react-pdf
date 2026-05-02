import { BathtubIcon as BathtubBoldIcon } from "../bold/Bathtub";
import { BathtubIcon as BathtubDuotoneIcon } from "../duotone/Bathtub";
import { BathtubIcon as BathtubFillIcon } from "../fill/Bathtub";
import { BathtubIcon as BathtubLightIcon } from "../light/Bathtub";
import { BathtubIcon as BathtubRegularIcon } from "../regular/Bathtub";
import { BathtubIcon as BathtubThinIcon } from "../thin/Bathtub";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BathtubThinIcon,
	light: BathtubLightIcon,
	regular: BathtubRegularIcon,
	bold: BathtubBoldIcon,
	fill: BathtubFillIcon,
	duotone: BathtubDuotoneIcon,
} as const;

export function BathtubIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BathtubIcon as Bathtub };
