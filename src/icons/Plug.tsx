import { PlugIcon as PlugBoldIcon } from "../bold/Plug";
import { PlugIcon as PlugDuotoneIcon } from "../duotone/Plug";
import { PlugIcon as PlugFillIcon } from "../fill/Plug";
import { PlugIcon as PlugLightIcon } from "../light/Plug";
import { PlugIcon as PlugRegularIcon } from "../regular/Plug";
import { PlugIcon as PlugThinIcon } from "../thin/Plug";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PlugThinIcon,
	light: PlugLightIcon,
	regular: PlugRegularIcon,
	bold: PlugBoldIcon,
	fill: PlugFillIcon,
	duotone: PlugDuotoneIcon,
} as const;

export function PlugIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PlugIcon as Plug };
