import { FileTextIcon as FileTextBoldIcon } from "../bold/FileText";
import { FileTextIcon as FileTextDuotoneIcon } from "../duotone/FileText";
import { FileTextIcon as FileTextFillIcon } from "../fill/FileText";
import { FileTextIcon as FileTextLightIcon } from "../light/FileText";
import { FileTextIcon as FileTextRegularIcon } from "../regular/FileText";
import { FileTextIcon as FileTextThinIcon } from "../thin/FileText";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FileTextThinIcon,
	light: FileTextLightIcon,
	regular: FileTextRegularIcon,
	bold: FileTextBoldIcon,
	fill: FileTextFillIcon,
	duotone: FileTextDuotoneIcon,
} as const;

export function FileTextIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FileTextIcon as FileText };
