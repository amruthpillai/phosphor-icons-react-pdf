import { SailboatIcon as SailboatBoldIcon } from "../bold/Sailboat";
import { SailboatIcon as SailboatDuotoneIcon } from "../duotone/Sailboat";
import { SailboatIcon as SailboatFillIcon } from "../fill/Sailboat";
import { SailboatIcon as SailboatLightIcon } from "../light/Sailboat";
import { SailboatIcon as SailboatRegularIcon } from "../regular/Sailboat";
import { SailboatIcon as SailboatThinIcon } from "../thin/Sailboat";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SailboatThinIcon,
	light: SailboatLightIcon,
	regular: SailboatRegularIcon,
	bold: SailboatBoldIcon,
	fill: SailboatFillIcon,
	duotone: SailboatDuotoneIcon,
} as const;

export function SailboatIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SailboatIcon as Sailboat };
