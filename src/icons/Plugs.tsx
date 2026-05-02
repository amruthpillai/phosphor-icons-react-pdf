import { PlugsIcon as PlugsBoldIcon } from "../bold/Plugs";
import { PlugsIcon as PlugsDuotoneIcon } from "../duotone/Plugs";
import { PlugsIcon as PlugsFillIcon } from "../fill/Plugs";
import { PlugsIcon as PlugsLightIcon } from "../light/Plugs";
import { PlugsIcon as PlugsRegularIcon } from "../regular/Plugs";
import { PlugsIcon as PlugsThinIcon } from "../thin/Plugs";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PlugsThinIcon,
	light: PlugsLightIcon,
	regular: PlugsRegularIcon,
	bold: PlugsBoldIcon,
	fill: PlugsFillIcon,
	duotone: PlugsDuotoneIcon,
} as const;

export function PlugsIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PlugsIcon as Plugs };
