import { ThermometerSimpleIcon as ThermometerSimpleBoldIcon } from "../bold/ThermometerSimple";
import { ThermometerSimpleIcon as ThermometerSimpleDuotoneIcon } from "../duotone/ThermometerSimple";
import { ThermometerSimpleIcon as ThermometerSimpleFillIcon } from "../fill/ThermometerSimple";
import { ThermometerSimpleIcon as ThermometerSimpleLightIcon } from "../light/ThermometerSimple";
import { ThermometerSimpleIcon as ThermometerSimpleRegularIcon } from "../regular/ThermometerSimple";
import { ThermometerSimpleIcon as ThermometerSimpleThinIcon } from "../thin/ThermometerSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ThermometerSimpleThinIcon,
	light: ThermometerSimpleLightIcon,
	regular: ThermometerSimpleRegularIcon,
	bold: ThermometerSimpleBoldIcon,
	fill: ThermometerSimpleFillIcon,
	duotone: ThermometerSimpleDuotoneIcon,
} as const;

export function ThermometerSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ThermometerSimpleIcon as ThermometerSimple };
