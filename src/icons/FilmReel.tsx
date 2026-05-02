import { FilmReelIcon as FilmReelBoldIcon } from "../bold/FilmReel";
import { FilmReelIcon as FilmReelDuotoneIcon } from "../duotone/FilmReel";
import { FilmReelIcon as FilmReelFillIcon } from "../fill/FilmReel";
import { FilmReelIcon as FilmReelLightIcon } from "../light/FilmReel";
import { FilmReelIcon as FilmReelRegularIcon } from "../regular/FilmReel";
import { FilmReelIcon as FilmReelThinIcon } from "../thin/FilmReel";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FilmReelThinIcon,
	light: FilmReelLightIcon,
	regular: FilmReelRegularIcon,
	bold: FilmReelBoldIcon,
	fill: FilmReelFillIcon,
	duotone: FilmReelDuotoneIcon,
} as const;

export function FilmReelIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FilmReelIcon as FilmReel };
