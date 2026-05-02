import { PiIcon as PiBoldIcon } from "../bold/Pi";
import { PiIcon as PiDuotoneIcon } from "../duotone/Pi";
import { PiIcon as PiFillIcon } from "../fill/Pi";
import { PiIcon as PiLightIcon } from "../light/Pi";
import { PiIcon as PiRegularIcon } from "../regular/Pi";
import { PiIcon as PiThinIcon } from "../thin/Pi";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PiThinIcon,
	light: PiLightIcon,
	regular: PiRegularIcon,
	bold: PiBoldIcon,
	fill: PiFillIcon,
	duotone: PiDuotoneIcon,
} as const;

export function PiIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PiIcon as Pi };
