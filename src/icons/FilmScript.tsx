import { FilmScriptIcon as FilmScriptBoldIcon } from "../bold/FilmScript";
import { FilmScriptIcon as FilmScriptDuotoneIcon } from "../duotone/FilmScript";
import { FilmScriptIcon as FilmScriptFillIcon } from "../fill/FilmScript";
import { FilmScriptIcon as FilmScriptLightIcon } from "../light/FilmScript";
import { FilmScriptIcon as FilmScriptRegularIcon } from "../regular/FilmScript";
import { FilmScriptIcon as FilmScriptThinIcon } from "../thin/FilmScript";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FilmScriptThinIcon,
	light: FilmScriptLightIcon,
	regular: FilmScriptRegularIcon,
	bold: FilmScriptBoldIcon,
	fill: FilmScriptFillIcon,
	duotone: FilmScriptDuotoneIcon,
} as const;

export function FilmScriptIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FilmScriptIcon as FilmScript };
