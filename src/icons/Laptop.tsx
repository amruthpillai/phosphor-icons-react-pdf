import { LaptopIcon as LaptopBoldIcon } from "../bold/Laptop";
import { LaptopIcon as LaptopDuotoneIcon } from "../duotone/Laptop";
import { LaptopIcon as LaptopFillIcon } from "../fill/Laptop";
import { LaptopIcon as LaptopLightIcon } from "../light/Laptop";
import { LaptopIcon as LaptopRegularIcon } from "../regular/Laptop";
import { LaptopIcon as LaptopThinIcon } from "../thin/Laptop";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: LaptopThinIcon,
	light: LaptopLightIcon,
	regular: LaptopRegularIcon,
	bold: LaptopBoldIcon,
	fill: LaptopFillIcon,
	duotone: LaptopDuotoneIcon,
} as const;

export function LaptopIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { LaptopIcon as Laptop };
