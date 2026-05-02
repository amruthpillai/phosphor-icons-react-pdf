import { MonitorPlayIcon as MonitorPlayBoldIcon } from "../bold/MonitorPlay";
import { MonitorPlayIcon as MonitorPlayDuotoneIcon } from "../duotone/MonitorPlay";
import { MonitorPlayIcon as MonitorPlayFillIcon } from "../fill/MonitorPlay";
import { MonitorPlayIcon as MonitorPlayLightIcon } from "../light/MonitorPlay";
import { MonitorPlayIcon as MonitorPlayRegularIcon } from "../regular/MonitorPlay";
import { MonitorPlayIcon as MonitorPlayThinIcon } from "../thin/MonitorPlay";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MonitorPlayThinIcon,
	light: MonitorPlayLightIcon,
	regular: MonitorPlayRegularIcon,
	bold: MonitorPlayBoldIcon,
	fill: MonitorPlayFillIcon,
	duotone: MonitorPlayDuotoneIcon,
} as const;

export function MonitorPlayIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MonitorPlayIcon as MonitorPlay };
