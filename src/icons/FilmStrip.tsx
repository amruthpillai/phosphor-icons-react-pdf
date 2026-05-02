import { FilmStripIcon as FilmStripBoldIcon } from "../bold/FilmStrip";
import { FilmStripIcon as FilmStripDuotoneIcon } from "../duotone/FilmStrip";
import { FilmStripIcon as FilmStripFillIcon } from "../fill/FilmStrip";
import { FilmStripIcon as FilmStripLightIcon } from "../light/FilmStrip";
import { FilmStripIcon as FilmStripRegularIcon } from "../regular/FilmStrip";
import { FilmStripIcon as FilmStripThinIcon } from "../thin/FilmStrip";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FilmStripThinIcon,
	light: FilmStripLightIcon,
	regular: FilmStripRegularIcon,
	bold: FilmStripBoldIcon,
	fill: FilmStripFillIcon,
	duotone: FilmStripDuotoneIcon,
} as const;

export function FilmStripIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FilmStripIcon as FilmStrip };
