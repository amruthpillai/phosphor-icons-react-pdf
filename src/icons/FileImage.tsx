import { FileImageIcon as FileImageBoldIcon } from "../bold/FileImage";
import { FileImageIcon as FileImageDuotoneIcon } from "../duotone/FileImage";
import { FileImageIcon as FileImageFillIcon } from "../fill/FileImage";
import { FileImageIcon as FileImageLightIcon } from "../light/FileImage";
import { FileImageIcon as FileImageRegularIcon } from "../regular/FileImage";
import { FileImageIcon as FileImageThinIcon } from "../thin/FileImage";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FileImageThinIcon,
	light: FileImageLightIcon,
	regular: FileImageRegularIcon,
	bold: FileImageBoldIcon,
	fill: FileImageFillIcon,
	duotone: FileImageDuotoneIcon,
} as const;

export function FileImageIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FileImageIcon as FileImage };
