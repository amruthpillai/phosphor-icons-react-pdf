import { MicrophoneSlashIcon as MicrophoneSlashBoldIcon } from "../bold/MicrophoneSlash";
import { MicrophoneSlashIcon as MicrophoneSlashDuotoneIcon } from "../duotone/MicrophoneSlash";
import { MicrophoneSlashIcon as MicrophoneSlashFillIcon } from "../fill/MicrophoneSlash";
import { MicrophoneSlashIcon as MicrophoneSlashLightIcon } from "../light/MicrophoneSlash";
import { MicrophoneSlashIcon as MicrophoneSlashRegularIcon } from "../regular/MicrophoneSlash";
import { MicrophoneSlashIcon as MicrophoneSlashThinIcon } from "../thin/MicrophoneSlash";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MicrophoneSlashThinIcon,
	light: MicrophoneSlashLightIcon,
	regular: MicrophoneSlashRegularIcon,
	bold: MicrophoneSlashBoldIcon,
	fill: MicrophoneSlashFillIcon,
	duotone: MicrophoneSlashDuotoneIcon,
} as const;

export function MicrophoneSlashIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MicrophoneSlashIcon as MicrophoneSlash };
