import { WebcamSlashIcon as WebcamSlashBoldIcon } from "../bold/WebcamSlash";
import { WebcamSlashIcon as WebcamSlashDuotoneIcon } from "../duotone/WebcamSlash";
import { WebcamSlashIcon as WebcamSlashFillIcon } from "../fill/WebcamSlash";
import { WebcamSlashIcon as WebcamSlashLightIcon } from "../light/WebcamSlash";
import { WebcamSlashIcon as WebcamSlashRegularIcon } from "../regular/WebcamSlash";
import { WebcamSlashIcon as WebcamSlashThinIcon } from "../thin/WebcamSlash";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: WebcamSlashThinIcon,
	light: WebcamSlashLightIcon,
	regular: WebcamSlashRegularIcon,
	bold: WebcamSlashBoldIcon,
	fill: WebcamSlashFillIcon,
	duotone: WebcamSlashDuotoneIcon,
} as const;

export function WebcamSlashIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { WebcamSlashIcon as WebcamSlash };
