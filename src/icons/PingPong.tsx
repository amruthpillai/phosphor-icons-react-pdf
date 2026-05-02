import { PingPongIcon as PingPongBoldIcon } from "../bold/PingPong";
import { PingPongIcon as PingPongDuotoneIcon } from "../duotone/PingPong";
import { PingPongIcon as PingPongFillIcon } from "../fill/PingPong";
import { PingPongIcon as PingPongLightIcon } from "../light/PingPong";
import { PingPongIcon as PingPongRegularIcon } from "../regular/PingPong";
import { PingPongIcon as PingPongThinIcon } from "../thin/PingPong";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PingPongThinIcon,
	light: PingPongLightIcon,
	regular: PingPongRegularIcon,
	bold: PingPongBoldIcon,
	fill: PingPongFillIcon,
	duotone: PingPongDuotoneIcon,
} as const;

export function PingPongIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PingPongIcon as PingPong };
