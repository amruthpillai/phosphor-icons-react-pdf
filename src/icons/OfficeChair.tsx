import { OfficeChairIcon as OfficeChairBoldIcon } from "../bold/OfficeChair";
import { OfficeChairIcon as OfficeChairDuotoneIcon } from "../duotone/OfficeChair";
import { OfficeChairIcon as OfficeChairFillIcon } from "../fill/OfficeChair";
import { OfficeChairIcon as OfficeChairLightIcon } from "../light/OfficeChair";
import { OfficeChairIcon as OfficeChairRegularIcon } from "../regular/OfficeChair";
import { OfficeChairIcon as OfficeChairThinIcon } from "../thin/OfficeChair";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: OfficeChairThinIcon,
	light: OfficeChairLightIcon,
	regular: OfficeChairRegularIcon,
	bold: OfficeChairBoldIcon,
	fill: OfficeChairFillIcon,
	duotone: OfficeChairDuotoneIcon,
} as const;

export function OfficeChairIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { OfficeChairIcon as OfficeChair };
