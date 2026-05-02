import { ScreencastIcon as ScreencastBoldIcon } from "../bold/Screencast";
import { ScreencastIcon as ScreencastDuotoneIcon } from "../duotone/Screencast";
import { ScreencastIcon as ScreencastFillIcon } from "../fill/Screencast";
import { ScreencastIcon as ScreencastLightIcon } from "../light/Screencast";
import { ScreencastIcon as ScreencastRegularIcon } from "../regular/Screencast";
import { ScreencastIcon as ScreencastThinIcon } from "../thin/Screencast";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ScreencastThinIcon,
	light: ScreencastLightIcon,
	regular: ScreencastRegularIcon,
	bold: ScreencastBoldIcon,
	fill: ScreencastFillIcon,
	duotone: ScreencastDuotoneIcon,
} as const;

export function ScreencastIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ScreencastIcon as Screencast };
