import { CaretDownIcon as CaretDownBoldIcon } from "../bold/CaretDown";
import { CaretDownIcon as CaretDownDuotoneIcon } from "../duotone/CaretDown";
import { CaretDownIcon as CaretDownFillIcon } from "../fill/CaretDown";
import { CaretDownIcon as CaretDownLightIcon } from "../light/CaretDown";
import { CaretDownIcon as CaretDownRegularIcon } from "../regular/CaretDown";
import { CaretDownIcon as CaretDownThinIcon } from "../thin/CaretDown";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CaretDownThinIcon,
	light: CaretDownLightIcon,
	regular: CaretDownRegularIcon,
	bold: CaretDownBoldIcon,
	fill: CaretDownFillIcon,
	duotone: CaretDownDuotoneIcon,
} as const;

export function CaretDownIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CaretDownIcon as CaretDown };
