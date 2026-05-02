import { AirplaneIcon as AirplaneBoldIcon } from "../bold/Airplane";
import { AirplaneIcon as AirplaneDuotoneIcon } from "../duotone/Airplane";
import { AirplaneIcon as AirplaneFillIcon } from "../fill/Airplane";
import { AirplaneIcon as AirplaneLightIcon } from "../light/Airplane";
import { AirplaneIcon as AirplaneRegularIcon } from "../regular/Airplane";
import { AirplaneIcon as AirplaneThinIcon } from "../thin/Airplane";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: AirplaneThinIcon,
	light: AirplaneLightIcon,
	regular: AirplaneRegularIcon,
	bold: AirplaneBoldIcon,
	fill: AirplaneFillIcon,
	duotone: AirplaneDuotoneIcon,
} as const;

export function AirplaneIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { AirplaneIcon as Airplane };
