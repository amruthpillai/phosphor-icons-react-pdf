import { TildeIcon as TildeBoldIcon } from "../bold/Tilde";
import { TildeIcon as TildeDuotoneIcon } from "../duotone/Tilde";
import { TildeIcon as TildeFillIcon } from "../fill/Tilde";
import { TildeIcon as TildeLightIcon } from "../light/Tilde";
import { TildeIcon as TildeRegularIcon } from "../regular/Tilde";
import { TildeIcon as TildeThinIcon } from "../thin/Tilde";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TildeThinIcon,
	light: TildeLightIcon,
	regular: TildeRegularIcon,
	bold: TildeBoldIcon,
	fill: TildeFillIcon,
	duotone: TildeDuotoneIcon,
} as const;

export function TildeIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TildeIcon as Tilde };
