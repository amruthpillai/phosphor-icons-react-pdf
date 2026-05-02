import { FilmSlateIcon as FilmSlateBoldIcon } from "../bold/FilmSlate";
import { FilmSlateIcon as FilmSlateDuotoneIcon } from "../duotone/FilmSlate";
import { FilmSlateIcon as FilmSlateFillIcon } from "../fill/FilmSlate";
import { FilmSlateIcon as FilmSlateLightIcon } from "../light/FilmSlate";
import { FilmSlateIcon as FilmSlateRegularIcon } from "../regular/FilmSlate";
import { FilmSlateIcon as FilmSlateThinIcon } from "../thin/FilmSlate";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FilmSlateThinIcon,
	light: FilmSlateLightIcon,
	regular: FilmSlateRegularIcon,
	bold: FilmSlateBoldIcon,
	fill: FilmSlateFillIcon,
	duotone: FilmSlateDuotoneIcon,
} as const;

export function FilmSlateIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FilmSlateIcon as FilmSlate };
