import { SunHorizonIcon as SunHorizonBoldIcon } from "../bold/SunHorizon";
import { SunHorizonIcon as SunHorizonDuotoneIcon } from "../duotone/SunHorizon";
import { SunHorizonIcon as SunHorizonFillIcon } from "../fill/SunHorizon";
import { SunHorizonIcon as SunHorizonLightIcon } from "../light/SunHorizon";
import { SunHorizonIcon as SunHorizonRegularIcon } from "../regular/SunHorizon";
import { SunHorizonIcon as SunHorizonThinIcon } from "../thin/SunHorizon";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SunHorizonThinIcon,
	light: SunHorizonLightIcon,
	regular: SunHorizonRegularIcon,
	bold: SunHorizonBoldIcon,
	fill: SunHorizonFillIcon,
	duotone: SunHorizonDuotoneIcon,
} as const;

export function SunHorizonIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SunHorizonIcon as SunHorizon };
