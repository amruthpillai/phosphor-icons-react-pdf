import { BrowsersIcon as BrowsersBoldIcon } from "../bold/Browsers";
import { BrowsersIcon as BrowsersDuotoneIcon } from "../duotone/Browsers";
import { BrowsersIcon as BrowsersFillIcon } from "../fill/Browsers";
import { BrowsersIcon as BrowsersLightIcon } from "../light/Browsers";
import { BrowsersIcon as BrowsersRegularIcon } from "../regular/Browsers";
import { BrowsersIcon as BrowsersThinIcon } from "../thin/Browsers";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BrowsersThinIcon,
	light: BrowsersLightIcon,
	regular: BrowsersRegularIcon,
	bold: BrowsersBoldIcon,
	fill: BrowsersFillIcon,
	duotone: BrowsersDuotoneIcon,
} as const;

export function BrowsersIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BrowsersIcon as Browsers };
