import { DownloadIcon as DownloadBoldIcon } from "../bold/Download";
import { DownloadIcon as DownloadDuotoneIcon } from "../duotone/Download";
import { DownloadIcon as DownloadFillIcon } from "../fill/Download";
import { DownloadIcon as DownloadLightIcon } from "../light/Download";
import { DownloadIcon as DownloadRegularIcon } from "../regular/Download";
import { DownloadIcon as DownloadThinIcon } from "../thin/Download";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DownloadThinIcon,
	light: DownloadLightIcon,
	regular: DownloadRegularIcon,
	bold: DownloadBoldIcon,
	fill: DownloadFillIcon,
	duotone: DownloadDuotoneIcon,
} as const;

export function DownloadIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DownloadIcon as Download };
