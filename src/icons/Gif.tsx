import { GifIcon as GifBoldIcon } from "../bold/Gif";
import { GifIcon as GifDuotoneIcon } from "../duotone/Gif";
import { GifIcon as GifFillIcon } from "../fill/Gif";
import { GifIcon as GifLightIcon } from "../light/Gif";
import { GifIcon as GifRegularIcon } from "../regular/Gif";
import { GifIcon as GifThinIcon } from "../thin/Gif";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GifThinIcon,
	light: GifLightIcon,
	regular: GifRegularIcon,
	bold: GifBoldIcon,
	fill: GifFillIcon,
	duotone: GifDuotoneIcon,
} as const;

export function GifIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GifIcon as Gif };
