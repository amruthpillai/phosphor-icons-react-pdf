import { PentagramIcon as PentagramBoldIcon } from "../bold/Pentagram";
import { PentagramIcon as PentagramDuotoneIcon } from "../duotone/Pentagram";
import { PentagramIcon as PentagramFillIcon } from "../fill/Pentagram";
import { PentagramIcon as PentagramLightIcon } from "../light/Pentagram";
import { PentagramIcon as PentagramRegularIcon } from "../regular/Pentagram";
import { PentagramIcon as PentagramThinIcon } from "../thin/Pentagram";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PentagramThinIcon,
	light: PentagramLightIcon,
	regular: PentagramRegularIcon,
	bold: PentagramBoldIcon,
	fill: PentagramFillIcon,
	duotone: PentagramDuotoneIcon,
} as const;

export function PentagramIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PentagramIcon as Pentagram };
