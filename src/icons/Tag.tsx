import { TagIcon as TagBoldIcon } from "../bold/Tag";
import { TagIcon as TagDuotoneIcon } from "../duotone/Tag";
import { TagIcon as TagFillIcon } from "../fill/Tag";
import { TagIcon as TagLightIcon } from "../light/Tag";
import { TagIcon as TagRegularIcon } from "../regular/Tag";
import { TagIcon as TagThinIcon } from "../thin/Tag";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TagThinIcon,
	light: TagLightIcon,
	regular: TagRegularIcon,
	bold: TagBoldIcon,
	fill: TagFillIcon,
	duotone: TagDuotoneIcon,
} as const;

export function TagIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TagIcon as Tag };
