import { ThreeDIcon as ThreeDBoldIcon } from "../bold/ThreeD";
import { ThreeDIcon as ThreeDDuotoneIcon } from "../duotone/ThreeD";
import { ThreeDIcon as ThreeDFillIcon } from "../fill/ThreeD";
import { ThreeDIcon as ThreeDLightIcon } from "../light/ThreeD";
import { ThreeDIcon as ThreeDRegularIcon } from "../regular/ThreeD";
import { ThreeDIcon as ThreeDThinIcon } from "../thin/ThreeD";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ThreeDThinIcon,
	light: ThreeDLightIcon,
	regular: ThreeDRegularIcon,
	bold: ThreeDBoldIcon,
	fill: ThreeDFillIcon,
	duotone: ThreeDDuotoneIcon,
} as const;

export function ThreeDIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ThreeDIcon as ThreeD };
