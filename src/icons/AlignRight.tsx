import { AlignRightIcon as AlignRightBoldIcon } from "../bold/AlignRight";
import { AlignRightIcon as AlignRightDuotoneIcon } from "../duotone/AlignRight";
import { AlignRightIcon as AlignRightFillIcon } from "../fill/AlignRight";
import { AlignRightIcon as AlignRightLightIcon } from "../light/AlignRight";
import { AlignRightIcon as AlignRightRegularIcon } from "../regular/AlignRight";
import { AlignRightIcon as AlignRightThinIcon } from "../thin/AlignRight";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: AlignRightThinIcon,
	light: AlignRightLightIcon,
	regular: AlignRightRegularIcon,
	bold: AlignRightBoldIcon,
	fill: AlignRightFillIcon,
	duotone: AlignRightDuotoneIcon,
} as const;

export function AlignRightIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { AlignRightIcon as AlignRight };
