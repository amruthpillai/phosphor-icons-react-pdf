import { FolderSimpleStarIcon as FolderSimpleStarBoldIcon } from "../bold/FolderSimpleStar";
import { FolderSimpleStarIcon as FolderSimpleStarDuotoneIcon } from "../duotone/FolderSimpleStar";
import { FolderSimpleStarIcon as FolderSimpleStarFillIcon } from "../fill/FolderSimpleStar";
import { FolderSimpleStarIcon as FolderSimpleStarLightIcon } from "../light/FolderSimpleStar";
import { FolderSimpleStarIcon as FolderSimpleStarRegularIcon } from "../regular/FolderSimpleStar";
import { FolderSimpleStarIcon as FolderSimpleStarThinIcon } from "../thin/FolderSimpleStar";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FolderSimpleStarThinIcon,
	light: FolderSimpleStarLightIcon,
	regular: FolderSimpleStarRegularIcon,
	bold: FolderSimpleStarBoldIcon,
	fill: FolderSimpleStarFillIcon,
	duotone: FolderSimpleStarDuotoneIcon,
} as const;

export function FolderSimpleStarIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FolderSimpleStarIcon as FolderSimpleStar };
