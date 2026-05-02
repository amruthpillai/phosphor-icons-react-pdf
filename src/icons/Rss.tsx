import { RssIcon as RssBoldIcon } from "../bold/Rss";
import { RssIcon as RssDuotoneIcon } from "../duotone/Rss";
import { RssIcon as RssFillIcon } from "../fill/Rss";
import { RssIcon as RssLightIcon } from "../light/Rss";
import { RssIcon as RssRegularIcon } from "../regular/Rss";
import { RssIcon as RssThinIcon } from "../thin/Rss";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: RssThinIcon,
	light: RssLightIcon,
	regular: RssRegularIcon,
	bold: RssBoldIcon,
	fill: RssFillIcon,
	duotone: RssDuotoneIcon,
} as const;

export function RssIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { RssIcon as Rss };
