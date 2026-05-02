import { ChatsCircleIcon as ChatsCircleBoldIcon } from "../bold/ChatsCircle";
import { ChatsCircleIcon as ChatsCircleDuotoneIcon } from "../duotone/ChatsCircle";
import { ChatsCircleIcon as ChatsCircleFillIcon } from "../fill/ChatsCircle";
import { ChatsCircleIcon as ChatsCircleLightIcon } from "../light/ChatsCircle";
import { ChatsCircleIcon as ChatsCircleRegularIcon } from "../regular/ChatsCircle";
import { ChatsCircleIcon as ChatsCircleThinIcon } from "../thin/ChatsCircle";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ChatsCircleThinIcon,
	light: ChatsCircleLightIcon,
	regular: ChatsCircleRegularIcon,
	bold: ChatsCircleBoldIcon,
	fill: ChatsCircleFillIcon,
	duotone: ChatsCircleDuotoneIcon,
} as const;

export function ChatsCircleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ChatsCircleIcon as ChatsCircle };
