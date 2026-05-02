import { TagChevronIcon as TagChevronBoldIcon } from "../bold/TagChevron";
import { TagChevronIcon as TagChevronDuotoneIcon } from "../duotone/TagChevron";
import { TagChevronIcon as TagChevronFillIcon } from "../fill/TagChevron";
import { TagChevronIcon as TagChevronLightIcon } from "../light/TagChevron";
import { TagChevronIcon as TagChevronRegularIcon } from "../regular/TagChevron";
import { TagChevronIcon as TagChevronThinIcon } from "../thin/TagChevron";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TagChevronThinIcon,
	light: TagChevronLightIcon,
	regular: TagChevronRegularIcon,
	bold: TagChevronBoldIcon,
	fill: TagChevronFillIcon,
	duotone: TagChevronDuotoneIcon,
} as const;

export function TagChevronIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TagChevronIcon as TagChevron };
