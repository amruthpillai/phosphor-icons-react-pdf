import { StickerIcon as StickerBoldIcon } from "../bold/Sticker";
import { StickerIcon as StickerDuotoneIcon } from "../duotone/Sticker";
import { StickerIcon as StickerFillIcon } from "../fill/Sticker";
import { StickerIcon as StickerLightIcon } from "../light/Sticker";
import { StickerIcon as StickerRegularIcon } from "../regular/Sticker";
import { StickerIcon as StickerThinIcon } from "../thin/Sticker";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: StickerThinIcon,
	light: StickerLightIcon,
	regular: StickerRegularIcon,
	bold: StickerBoldIcon,
	fill: StickerFillIcon,
	duotone: StickerDuotoneIcon,
} as const;

export function StickerIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { StickerIcon as Sticker };
