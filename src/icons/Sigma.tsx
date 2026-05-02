import { SigmaIcon as SigmaBoldIcon } from "../bold/Sigma";
import { SigmaIcon as SigmaDuotoneIcon } from "../duotone/Sigma";
import { SigmaIcon as SigmaFillIcon } from "../fill/Sigma";
import { SigmaIcon as SigmaLightIcon } from "../light/Sigma";
import { SigmaIcon as SigmaRegularIcon } from "../regular/Sigma";
import { SigmaIcon as SigmaThinIcon } from "../thin/Sigma";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SigmaThinIcon,
	light: SigmaLightIcon,
	regular: SigmaRegularIcon,
	bold: SigmaBoldIcon,
	fill: SigmaFillIcon,
	duotone: SigmaDuotoneIcon,
} as const;

export function SigmaIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SigmaIcon as Sigma };
