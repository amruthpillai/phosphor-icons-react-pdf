import { NewspaperIcon as NewspaperBoldIcon } from "../bold/Newspaper";
import { NewspaperIcon as NewspaperDuotoneIcon } from "../duotone/Newspaper";
import { NewspaperIcon as NewspaperFillIcon } from "../fill/Newspaper";
import { NewspaperIcon as NewspaperLightIcon } from "../light/Newspaper";
import { NewspaperIcon as NewspaperRegularIcon } from "../regular/Newspaper";
import { NewspaperIcon as NewspaperThinIcon } from "../thin/Newspaper";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NewspaperThinIcon,
	light: NewspaperLightIcon,
	regular: NewspaperRegularIcon,
	bold: NewspaperBoldIcon,
	fill: NewspaperFillIcon,
	duotone: NewspaperDuotoneIcon,
} as const;

export function NewspaperIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NewspaperIcon as Newspaper };
