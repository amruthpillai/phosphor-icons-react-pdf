import { PoliceCarIcon as PoliceCarBoldIcon } from "../bold/PoliceCar";
import { PoliceCarIcon as PoliceCarDuotoneIcon } from "../duotone/PoliceCar";
import { PoliceCarIcon as PoliceCarFillIcon } from "../fill/PoliceCar";
import { PoliceCarIcon as PoliceCarLightIcon } from "../light/PoliceCar";
import { PoliceCarIcon as PoliceCarRegularIcon } from "../regular/PoliceCar";
import { PoliceCarIcon as PoliceCarThinIcon } from "../thin/PoliceCar";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PoliceCarThinIcon,
	light: PoliceCarLightIcon,
	regular: PoliceCarRegularIcon,
	bold: PoliceCarBoldIcon,
	fill: PoliceCarFillIcon,
	duotone: PoliceCarDuotoneIcon,
} as const;

export function PoliceCarIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PoliceCarIcon as PoliceCar };
