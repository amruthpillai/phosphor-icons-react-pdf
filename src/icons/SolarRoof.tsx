import { SolarRoofIcon as SolarRoofBoldIcon } from "../bold/SolarRoof";
import { SolarRoofIcon as SolarRoofDuotoneIcon } from "../duotone/SolarRoof";
import { SolarRoofIcon as SolarRoofFillIcon } from "../fill/SolarRoof";
import { SolarRoofIcon as SolarRoofLightIcon } from "../light/SolarRoof";
import { SolarRoofIcon as SolarRoofRegularIcon } from "../regular/SolarRoof";
import { SolarRoofIcon as SolarRoofThinIcon } from "../thin/SolarRoof";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SolarRoofThinIcon,
	light: SolarRoofLightIcon,
	regular: SolarRoofRegularIcon,
	bold: SolarRoofBoldIcon,
	fill: SolarRoofFillIcon,
	duotone: SolarRoofDuotoneIcon,
} as const;

export function SolarRoofIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SolarRoofIcon as SolarRoof };
