import { ImageIcon as ImageBoldIcon } from "../bold/Image";
import { ImageIcon as ImageDuotoneIcon } from "../duotone/Image";
import { ImageIcon as ImageFillIcon } from "../fill/Image";
import { ImageIcon as ImageLightIcon } from "../light/Image";
import { ImageIcon as ImageRegularIcon } from "../regular/Image";
import { ImageIcon as ImageThinIcon } from "../thin/Image";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ImageThinIcon,
	light: ImageLightIcon,
	regular: ImageRegularIcon,
	bold: ImageBoldIcon,
	fill: ImageFillIcon,
	duotone: ImageDuotoneIcon,
} as const;

export function ImageIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ImageIcon as Image };
