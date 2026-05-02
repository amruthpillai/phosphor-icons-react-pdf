import { ToteIcon as ToteBoldIcon } from "../bold/Tote";
import { ToteIcon as ToteDuotoneIcon } from "../duotone/Tote";
import { ToteIcon as ToteFillIcon } from "../fill/Tote";
import { ToteIcon as ToteLightIcon } from "../light/Tote";
import { ToteIcon as ToteRegularIcon } from "../regular/Tote";
import { ToteIcon as ToteThinIcon } from "../thin/Tote";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ToteThinIcon,
	light: ToteLightIcon,
	regular: ToteRegularIcon,
	bold: ToteBoldIcon,
	fill: ToteFillIcon,
	duotone: ToteDuotoneIcon,
} as const;

export function ToteIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ToteIcon as Tote };
