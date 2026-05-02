import { FileHtmlIcon as FileHtmlBoldIcon } from "../bold/FileHtml";
import { FileHtmlIcon as FileHtmlDuotoneIcon } from "../duotone/FileHtml";
import { FileHtmlIcon as FileHtmlFillIcon } from "../fill/FileHtml";
import { FileHtmlIcon as FileHtmlLightIcon } from "../light/FileHtml";
import { FileHtmlIcon as FileHtmlRegularIcon } from "../regular/FileHtml";
import { FileHtmlIcon as FileHtmlThinIcon } from "../thin/FileHtml";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FileHtmlThinIcon,
	light: FileHtmlLightIcon,
	regular: FileHtmlRegularIcon,
	bold: FileHtmlBoldIcon,
	fill: FileHtmlFillIcon,
	duotone: FileHtmlDuotoneIcon,
} as const;

export function FileHtmlIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FileHtmlIcon as FileHtml };
