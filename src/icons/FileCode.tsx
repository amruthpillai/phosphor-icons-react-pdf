import { FileCodeIcon as FileCodeBoldIcon } from "../bold/FileCode";
import { FileCodeIcon as FileCodeDuotoneIcon } from "../duotone/FileCode";
import { FileCodeIcon as FileCodeFillIcon } from "../fill/FileCode";
import { FileCodeIcon as FileCodeLightIcon } from "../light/FileCode";
import { FileCodeIcon as FileCodeRegularIcon } from "../regular/FileCode";
import { FileCodeIcon as FileCodeThinIcon } from "../thin/FileCode";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FileCodeThinIcon,
	light: FileCodeLightIcon,
	regular: FileCodeRegularIcon,
	bold: FileCodeBoldIcon,
	fill: FileCodeFillIcon,
	duotone: FileCodeDuotoneIcon,
} as const;

export function FileCodeIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FileCodeIcon as FileCode };
