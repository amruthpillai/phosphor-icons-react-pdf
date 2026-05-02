import { VanIcon as VanBoldIcon } from "../bold/Van";
import { VanIcon as VanDuotoneIcon } from "../duotone/Van";
import { VanIcon as VanFillIcon } from "../fill/Van";
import { VanIcon as VanLightIcon } from "../light/Van";
import { VanIcon as VanRegularIcon } from "../regular/Van";
import { VanIcon as VanThinIcon } from "../thin/Van";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: VanThinIcon,
	light: VanLightIcon,
	regular: VanRegularIcon,
	bold: VanBoldIcon,
	fill: VanFillIcon,
	duotone: VanDuotoneIcon,
} as const;

export function VanIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { VanIcon as Van };
