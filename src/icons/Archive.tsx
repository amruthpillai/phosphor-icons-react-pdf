import { ArchiveIcon as ArchiveBoldIcon } from "../bold/Archive";
import { ArchiveIcon as ArchiveDuotoneIcon } from "../duotone/Archive";
import { ArchiveIcon as ArchiveFillIcon } from "../fill/Archive";
import { ArchiveIcon as ArchiveLightIcon } from "../light/Archive";
import { ArchiveIcon as ArchiveRegularIcon } from "../regular/Archive";
import { ArchiveIcon as ArchiveThinIcon } from "../thin/Archive";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArchiveThinIcon,
	light: ArchiveLightIcon,
	regular: ArchiveRegularIcon,
	bold: ArchiveBoldIcon,
	fill: ArchiveFillIcon,
	duotone: ArchiveDuotoneIcon,
} as const;

export function ArchiveIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArchiveIcon as Archive };
