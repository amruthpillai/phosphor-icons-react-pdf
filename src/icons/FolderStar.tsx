import { FolderStarIcon as FolderStarBoldIcon } from "../bold/FolderStar";
import { FolderStarIcon as FolderStarDuotoneIcon } from "../duotone/FolderStar";
import { FolderStarIcon as FolderStarFillIcon } from "../fill/FolderStar";
import { FolderStarIcon as FolderStarLightIcon } from "../light/FolderStar";
import { FolderStarIcon as FolderStarRegularIcon } from "../regular/FolderStar";
import { FolderStarIcon as FolderStarThinIcon } from "../thin/FolderStar";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FolderStarThinIcon,
	light: FolderStarLightIcon,
	regular: FolderStarRegularIcon,
	bold: FolderStarBoldIcon,
	fill: FolderStarFillIcon,
	duotone: FolderStarDuotoneIcon,
} as const;

export function FolderStarIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FolderStarIcon as FolderStar };
