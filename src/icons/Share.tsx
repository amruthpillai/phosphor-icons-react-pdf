import { ShareIcon as ShareBoldIcon } from "../bold/Share";
import { ShareIcon as ShareDuotoneIcon } from "../duotone/Share";
import { ShareIcon as ShareFillIcon } from "../fill/Share";
import { ShareIcon as ShareLightIcon } from "../light/Share";
import { ShareIcon as ShareRegularIcon } from "../regular/Share";
import { ShareIcon as ShareThinIcon } from "../thin/Share";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ShareThinIcon,
	light: ShareLightIcon,
	regular: ShareRegularIcon,
	bold: ShareBoldIcon,
	fill: ShareFillIcon,
	duotone: ShareDuotoneIcon,
} as const;

export function ShareIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ShareIcon as Share };
