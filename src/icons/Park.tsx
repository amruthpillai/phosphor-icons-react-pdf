import { ParkIcon as ParkBoldIcon } from "../bold/Park";
import { ParkIcon as ParkDuotoneIcon } from "../duotone/Park";
import { ParkIcon as ParkFillIcon } from "../fill/Park";
import { ParkIcon as ParkLightIcon } from "../light/Park";
import { ParkIcon as ParkRegularIcon } from "../regular/Park";
import { ParkIcon as ParkThinIcon } from "../thin/Park";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ParkThinIcon,
	light: ParkLightIcon,
	regular: ParkRegularIcon,
	bold: ParkBoldIcon,
	fill: ParkFillIcon,
	duotone: ParkDuotoneIcon,
} as const;

export function ParkIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ParkIcon as Park };
