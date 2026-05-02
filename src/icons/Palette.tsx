import { PaletteIcon as PaletteBoldIcon } from "../bold/Palette";
import { PaletteIcon as PaletteDuotoneIcon } from "../duotone/Palette";
import { PaletteIcon as PaletteFillIcon } from "../fill/Palette";
import { PaletteIcon as PaletteLightIcon } from "../light/Palette";
import { PaletteIcon as PaletteRegularIcon } from "../regular/Palette";
import { PaletteIcon as PaletteThinIcon } from "../thin/Palette";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PaletteThinIcon,
	light: PaletteLightIcon,
	regular: PaletteRegularIcon,
	bold: PaletteBoldIcon,
	fill: PaletteFillIcon,
	duotone: PaletteDuotoneIcon,
} as const;

export function PaletteIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PaletteIcon as Palette };
