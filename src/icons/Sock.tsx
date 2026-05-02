import { SockIcon as SockBoldIcon } from "../bold/Sock";
import { SockIcon as SockDuotoneIcon } from "../duotone/Sock";
import { SockIcon as SockFillIcon } from "../fill/Sock";
import { SockIcon as SockLightIcon } from "../light/Sock";
import { SockIcon as SockRegularIcon } from "../regular/Sock";
import { SockIcon as SockThinIcon } from "../thin/Sock";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SockThinIcon,
	light: SockLightIcon,
	regular: SockRegularIcon,
	bold: SockBoldIcon,
	fill: SockFillIcon,
	duotone: SockDuotoneIcon,
} as const;

export function SockIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SockIcon as Sock };
