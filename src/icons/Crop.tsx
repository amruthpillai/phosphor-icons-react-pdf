import { CropIcon as CropBoldIcon } from "../bold/Crop";
import { CropIcon as CropDuotoneIcon } from "../duotone/Crop";
import { CropIcon as CropFillIcon } from "../fill/Crop";
import { CropIcon as CropLightIcon } from "../light/Crop";
import { CropIcon as CropRegularIcon } from "../regular/Crop";
import { CropIcon as CropThinIcon } from "../thin/Crop";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CropThinIcon,
	light: CropLightIcon,
	regular: CropRegularIcon,
	bold: CropBoldIcon,
	fill: CropFillIcon,
	duotone: CropDuotoneIcon,
} as const;

export function CropIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CropIcon as Crop };
