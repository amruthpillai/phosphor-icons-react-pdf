import { ExportIcon as ExportBoldIcon } from "../bold/Export";
import { ExportIcon as ExportDuotoneIcon } from "../duotone/Export";
import { ExportIcon as ExportFillIcon } from "../fill/Export";
import { ExportIcon as ExportLightIcon } from "../light/Export";
import { ExportIcon as ExportRegularIcon } from "../regular/Export";
import { ExportIcon as ExportThinIcon } from "../thin/Export";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ExportThinIcon,
	light: ExportLightIcon,
	regular: ExportRegularIcon,
	bold: ExportBoldIcon,
	fill: ExportFillIcon,
	duotone: ExportDuotoneIcon,
} as const;

export function ExportIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ExportIcon as Export };
