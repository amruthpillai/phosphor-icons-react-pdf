import { SpeakerSlashIcon as SpeakerSlashBoldIcon } from "../bold/SpeakerSlash";
import { SpeakerSlashIcon as SpeakerSlashDuotoneIcon } from "../duotone/SpeakerSlash";
import { SpeakerSlashIcon as SpeakerSlashFillIcon } from "../fill/SpeakerSlash";
import { SpeakerSlashIcon as SpeakerSlashLightIcon } from "../light/SpeakerSlash";
import { SpeakerSlashIcon as SpeakerSlashRegularIcon } from "../regular/SpeakerSlash";
import { SpeakerSlashIcon as SpeakerSlashThinIcon } from "../thin/SpeakerSlash";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SpeakerSlashThinIcon,
	light: SpeakerSlashLightIcon,
	regular: SpeakerSlashRegularIcon,
	bold: SpeakerSlashBoldIcon,
	fill: SpeakerSlashFillIcon,
	duotone: SpeakerSlashDuotoneIcon,
} as const;

export function SpeakerSlashIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SpeakerSlashIcon as SpeakerSlash };
