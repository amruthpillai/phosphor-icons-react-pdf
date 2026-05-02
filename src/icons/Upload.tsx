import { UploadIcon as UploadBoldIcon } from "../bold/Upload";
import { UploadIcon as UploadDuotoneIcon } from "../duotone/Upload";
import { UploadIcon as UploadFillIcon } from "../fill/Upload";
import { UploadIcon as UploadLightIcon } from "../light/Upload";
import { UploadIcon as UploadRegularIcon } from "../regular/Upload";
import { UploadIcon as UploadThinIcon } from "../thin/Upload";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: UploadThinIcon,
	light: UploadLightIcon,
	regular: UploadRegularIcon,
	bold: UploadBoldIcon,
	fill: UploadFillIcon,
	duotone: UploadDuotoneIcon,
} as const;

export function UploadIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { UploadIcon as Upload };
