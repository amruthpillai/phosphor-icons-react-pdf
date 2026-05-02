import { FanIcon as FanBoldIcon } from "../bold/Fan";
import { FanIcon as FanDuotoneIcon } from "../duotone/Fan";
import { FanIcon as FanFillIcon } from "../fill/Fan";
import { FanIcon as FanLightIcon } from "../light/Fan";
import { FanIcon as FanRegularIcon } from "../regular/Fan";
import { FanIcon as FanThinIcon } from "../thin/Fan";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FanThinIcon,
	light: FanLightIcon,
	regular: FanRegularIcon,
	bold: FanBoldIcon,
	fill: FanFillIcon,
	duotone: FanDuotoneIcon,
} as const;

export function FanIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FanIcon as Fan };
