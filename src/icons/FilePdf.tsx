import { FilePdfIcon as FilePdfBoldIcon } from "../bold/FilePdf";
import { FilePdfIcon as FilePdfDuotoneIcon } from "../duotone/FilePdf";
import { FilePdfIcon as FilePdfFillIcon } from "../fill/FilePdf";
import { FilePdfIcon as FilePdfLightIcon } from "../light/FilePdf";
import { FilePdfIcon as FilePdfRegularIcon } from "../regular/FilePdf";
import { FilePdfIcon as FilePdfThinIcon } from "../thin/FilePdf";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FilePdfThinIcon,
	light: FilePdfLightIcon,
	regular: FilePdfRegularIcon,
	bold: FilePdfBoldIcon,
	fill: FilePdfFillIcon,
	duotone: FilePdfDuotoneIcon,
} as const;

export function FilePdfIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FilePdfIcon as FilePdf };
