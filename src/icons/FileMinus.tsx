import { FileMinusIcon as FileMinusBoldIcon } from "../bold/FileMinus";
import { FileMinusIcon as FileMinusDuotoneIcon } from "../duotone/FileMinus";
import { FileMinusIcon as FileMinusFillIcon } from "../fill/FileMinus";
import { FileMinusIcon as FileMinusLightIcon } from "../light/FileMinus";
import { FileMinusIcon as FileMinusRegularIcon } from "../regular/FileMinus";
import { FileMinusIcon as FileMinusThinIcon } from "../thin/FileMinus";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FileMinusThinIcon,
	light: FileMinusLightIcon,
	regular: FileMinusRegularIcon,
	bold: FileMinusBoldIcon,
	fill: FileMinusFillIcon,
	duotone: FileMinusDuotoneIcon,
} as const;

export function FileMinusIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FileMinusIcon as FileMinus };
