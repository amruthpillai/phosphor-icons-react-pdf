import { DotsSixIcon as DotsSixBoldIcon } from "../bold/DotsSix";
import { DotsSixIcon as DotsSixDuotoneIcon } from "../duotone/DotsSix";
import { DotsSixIcon as DotsSixFillIcon } from "../fill/DotsSix";
import { DotsSixIcon as DotsSixLightIcon } from "../light/DotsSix";
import { DotsSixIcon as DotsSixRegularIcon } from "../regular/DotsSix";
import { DotsSixIcon as DotsSixThinIcon } from "../thin/DotsSix";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DotsSixThinIcon,
	light: DotsSixLightIcon,
	regular: DotsSixRegularIcon,
	bold: DotsSixBoldIcon,
	fill: DotsSixFillIcon,
	duotone: DotsSixDuotoneIcon,
} as const;

export function DotsSixIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DotsSixIcon as DotsSix };
