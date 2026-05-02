import { AppWindowIcon as AppWindowBoldIcon } from "../bold/AppWindow";
import { AppWindowIcon as AppWindowDuotoneIcon } from "../duotone/AppWindow";
import { AppWindowIcon as AppWindowFillIcon } from "../fill/AppWindow";
import { AppWindowIcon as AppWindowLightIcon } from "../light/AppWindow";
import { AppWindowIcon as AppWindowRegularIcon } from "../regular/AppWindow";
import { AppWindowIcon as AppWindowThinIcon } from "../thin/AppWindow";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: AppWindowThinIcon,
	light: AppWindowLightIcon,
	regular: AppWindowRegularIcon,
	bold: AppWindowBoldIcon,
	fill: AppWindowFillIcon,
	duotone: AppWindowDuotoneIcon,
} as const;

export function AppWindowIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { AppWindowIcon as AppWindow };
