import { FileXIcon as FileXBoldIcon } from "../bold/FileX";
import { FileXIcon as FileXDuotoneIcon } from "../duotone/FileX";
import { FileXIcon as FileXFillIcon } from "../fill/FileX";
import { FileXIcon as FileXLightIcon } from "../light/FileX";
import { FileXIcon as FileXRegularIcon } from "../regular/FileX";
import { FileXIcon as FileXThinIcon } from "../thin/FileX";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FileXThinIcon,
	light: FileXLightIcon,
	regular: FileXRegularIcon,
	bold: FileXBoldIcon,
	fill: FileXFillIcon,
	duotone: FileXDuotoneIcon,
} as const;

export function FileXIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FileXIcon as FileX };
