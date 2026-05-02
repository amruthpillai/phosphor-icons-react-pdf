import { DivideIcon as DivideBoldIcon } from "../bold/Divide";
import { DivideIcon as DivideDuotoneIcon } from "../duotone/Divide";
import { DivideIcon as DivideFillIcon } from "../fill/Divide";
import { DivideIcon as DivideLightIcon } from "../light/Divide";
import { DivideIcon as DivideRegularIcon } from "../regular/Divide";
import { DivideIcon as DivideThinIcon } from "../thin/Divide";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DivideThinIcon,
	light: DivideLightIcon,
	regular: DivideRegularIcon,
	bold: DivideBoldIcon,
	fill: DivideFillIcon,
	duotone: DivideDuotoneIcon,
} as const;

export function DivideIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DivideIcon as Divide };
