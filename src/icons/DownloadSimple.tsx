import { DownloadSimpleIcon as DownloadSimpleBoldIcon } from "../bold/DownloadSimple";
import { DownloadSimpleIcon as DownloadSimpleDuotoneIcon } from "../duotone/DownloadSimple";
import { DownloadSimpleIcon as DownloadSimpleFillIcon } from "../fill/DownloadSimple";
import { DownloadSimpleIcon as DownloadSimpleLightIcon } from "../light/DownloadSimple";
import { DownloadSimpleIcon as DownloadSimpleRegularIcon } from "../regular/DownloadSimple";
import { DownloadSimpleIcon as DownloadSimpleThinIcon } from "../thin/DownloadSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DownloadSimpleThinIcon,
	light: DownloadSimpleLightIcon,
	regular: DownloadSimpleRegularIcon,
	bold: DownloadSimpleBoldIcon,
	fill: DownloadSimpleFillIcon,
	duotone: DownloadSimpleDuotoneIcon,
} as const;

export function DownloadSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DownloadSimpleIcon as DownloadSimple };
