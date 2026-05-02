import { WaveformSlashIcon as WaveformSlashBoldIcon } from "../bold/WaveformSlash";
import { WaveformSlashIcon as WaveformSlashDuotoneIcon } from "../duotone/WaveformSlash";
import { WaveformSlashIcon as WaveformSlashFillIcon } from "../fill/WaveformSlash";
import { WaveformSlashIcon as WaveformSlashLightIcon } from "../light/WaveformSlash";
import { WaveformSlashIcon as WaveformSlashRegularIcon } from "../regular/WaveformSlash";
import { WaveformSlashIcon as WaveformSlashThinIcon } from "../thin/WaveformSlash";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: WaveformSlashThinIcon,
	light: WaveformSlashLightIcon,
	regular: WaveformSlashRegularIcon,
	bold: WaveformSlashBoldIcon,
	fill: WaveformSlashFillIcon,
	duotone: WaveformSlashDuotoneIcon,
} as const;

export function WaveformSlashIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { WaveformSlashIcon as WaveformSlash };
