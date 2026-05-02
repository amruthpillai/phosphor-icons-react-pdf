import { TranslateIcon as TranslateBoldIcon } from "../bold/Translate";
import { TranslateIcon as TranslateDuotoneIcon } from "../duotone/Translate";
import { TranslateIcon as TranslateFillIcon } from "../fill/Translate";
import { TranslateIcon as TranslateLightIcon } from "../light/Translate";
import { TranslateIcon as TranslateRegularIcon } from "../regular/Translate";
import { TranslateIcon as TranslateThinIcon } from "../thin/Translate";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TranslateThinIcon,
	light: TranslateLightIcon,
	regular: TranslateRegularIcon,
	bold: TranslateBoldIcon,
	fill: TranslateFillIcon,
	duotone: TranslateDuotoneIcon,
} as const;

export function TranslateIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TranslateIcon as Translate };
