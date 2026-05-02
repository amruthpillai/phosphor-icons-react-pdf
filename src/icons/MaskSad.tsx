import { MaskSadIcon as MaskSadBoldIcon } from "../bold/MaskSad";
import { MaskSadIcon as MaskSadDuotoneIcon } from "../duotone/MaskSad";
import { MaskSadIcon as MaskSadFillIcon } from "../fill/MaskSad";
import { MaskSadIcon as MaskSadLightIcon } from "../light/MaskSad";
import { MaskSadIcon as MaskSadRegularIcon } from "../regular/MaskSad";
import { MaskSadIcon as MaskSadThinIcon } from "../thin/MaskSad";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MaskSadThinIcon,
	light: MaskSadLightIcon,
	regular: MaskSadRegularIcon,
	bold: MaskSadBoldIcon,
	fill: MaskSadFillIcon,
	duotone: MaskSadDuotoneIcon,
} as const;

export function MaskSadIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MaskSadIcon as MaskSad };
