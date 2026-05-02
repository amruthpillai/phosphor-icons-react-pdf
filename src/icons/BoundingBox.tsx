import { BoundingBoxIcon as BoundingBoxBoldIcon } from "../bold/BoundingBox";
import { BoundingBoxIcon as BoundingBoxDuotoneIcon } from "../duotone/BoundingBox";
import { BoundingBoxIcon as BoundingBoxFillIcon } from "../fill/BoundingBox";
import { BoundingBoxIcon as BoundingBoxLightIcon } from "../light/BoundingBox";
import { BoundingBoxIcon as BoundingBoxRegularIcon } from "../regular/BoundingBox";
import { BoundingBoxIcon as BoundingBoxThinIcon } from "../thin/BoundingBox";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BoundingBoxThinIcon,
	light: BoundingBoxLightIcon,
	regular: BoundingBoxRegularIcon,
	bold: BoundingBoxBoldIcon,
	fill: BoundingBoxFillIcon,
	duotone: BoundingBoxDuotoneIcon,
} as const;

export function BoundingBoxIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BoundingBoxIcon as BoundingBox };
