import { SmileyStickerIcon as SmileyStickerBoldIcon } from "../bold/SmileySticker";
import { SmileyStickerIcon as SmileyStickerDuotoneIcon } from "../duotone/SmileySticker";
import { SmileyStickerIcon as SmileyStickerFillIcon } from "../fill/SmileySticker";
import { SmileyStickerIcon as SmileyStickerLightIcon } from "../light/SmileySticker";
import { SmileyStickerIcon as SmileyStickerRegularIcon } from "../regular/SmileySticker";
import { SmileyStickerIcon as SmileyStickerThinIcon } from "../thin/SmileySticker";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SmileyStickerThinIcon,
	light: SmileyStickerLightIcon,
	regular: SmileyStickerRegularIcon,
	bold: SmileyStickerBoldIcon,
	fill: SmileyStickerFillIcon,
	duotone: SmileyStickerDuotoneIcon,
} as const;

export function SmileyStickerIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SmileyStickerIcon as SmileySticker };
