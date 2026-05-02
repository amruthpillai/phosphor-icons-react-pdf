import { SpeakerSimpleSlashIcon as SpeakerSimpleSlashBoldIcon } from "../bold/SpeakerSimpleSlash";
import { SpeakerSimpleSlashIcon as SpeakerSimpleSlashDuotoneIcon } from "../duotone/SpeakerSimpleSlash";
import { SpeakerSimpleSlashIcon as SpeakerSimpleSlashFillIcon } from "../fill/SpeakerSimpleSlash";
import { SpeakerSimpleSlashIcon as SpeakerSimpleSlashLightIcon } from "../light/SpeakerSimpleSlash";
import { SpeakerSimpleSlashIcon as SpeakerSimpleSlashRegularIcon } from "../regular/SpeakerSimpleSlash";
import { SpeakerSimpleSlashIcon as SpeakerSimpleSlashThinIcon } from "../thin/SpeakerSimpleSlash";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SpeakerSimpleSlashThinIcon,
	light: SpeakerSimpleSlashLightIcon,
	regular: SpeakerSimpleSlashRegularIcon,
	bold: SpeakerSimpleSlashBoldIcon,
	fill: SpeakerSimpleSlashFillIcon,
	duotone: SpeakerSimpleSlashDuotoneIcon,
} as const;

export function SpeakerSimpleSlashIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SpeakerSimpleSlashIcon as SpeakerSimpleSlash };
