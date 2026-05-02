import { QuotesIcon as QuotesBoldIcon } from "../bold/Quotes";
import { QuotesIcon as QuotesDuotoneIcon } from "../duotone/Quotes";
import { QuotesIcon as QuotesFillIcon } from "../fill/Quotes";
import { QuotesIcon as QuotesLightIcon } from "../light/Quotes";
import { QuotesIcon as QuotesRegularIcon } from "../regular/Quotes";
import { QuotesIcon as QuotesThinIcon } from "../thin/Quotes";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: QuotesThinIcon,
	light: QuotesLightIcon,
	regular: QuotesRegularIcon,
	bold: QuotesBoldIcon,
	fill: QuotesFillIcon,
	duotone: QuotesDuotoneIcon,
} as const;

export function QuotesIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { QuotesIcon as Quotes };
