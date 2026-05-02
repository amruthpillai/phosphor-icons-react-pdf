import { SubtitlesSlashIcon as SubtitlesSlashBoldIcon } from "../bold/SubtitlesSlash";
import { SubtitlesSlashIcon as SubtitlesSlashDuotoneIcon } from "../duotone/SubtitlesSlash";
import { SubtitlesSlashIcon as SubtitlesSlashFillIcon } from "../fill/SubtitlesSlash";
import { SubtitlesSlashIcon as SubtitlesSlashLightIcon } from "../light/SubtitlesSlash";
import { SubtitlesSlashIcon as SubtitlesSlashRegularIcon } from "../regular/SubtitlesSlash";
import { SubtitlesSlashIcon as SubtitlesSlashThinIcon } from "../thin/SubtitlesSlash";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SubtitlesSlashThinIcon,
	light: SubtitlesSlashLightIcon,
	regular: SubtitlesSlashRegularIcon,
	bold: SubtitlesSlashBoldIcon,
	fill: SubtitlesSlashFillIcon,
	duotone: SubtitlesSlashDuotoneIcon,
} as const;

export function SubtitlesSlashIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SubtitlesSlashIcon as SubtitlesSlash };
