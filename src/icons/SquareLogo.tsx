import { SquareLogoIcon as SquareLogoBoldIcon } from "../bold/SquareLogo";
import { SquareLogoIcon as SquareLogoDuotoneIcon } from "../duotone/SquareLogo";
import { SquareLogoIcon as SquareLogoFillIcon } from "../fill/SquareLogo";
import { SquareLogoIcon as SquareLogoLightIcon } from "../light/SquareLogo";
import { SquareLogoIcon as SquareLogoRegularIcon } from "../regular/SquareLogo";
import { SquareLogoIcon as SquareLogoThinIcon } from "../thin/SquareLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SquareLogoThinIcon,
	light: SquareLogoLightIcon,
	regular: SquareLogoRegularIcon,
	bold: SquareLogoBoldIcon,
	fill: SquareLogoFillIcon,
	duotone: SquareLogoDuotoneIcon,
} as const;

export function SquareLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SquareLogoIcon as SquareLogo };
