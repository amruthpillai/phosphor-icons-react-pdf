import { ChatCenteredIcon as ChatCenteredBoldIcon } from "../bold/ChatCentered";
import { ChatCenteredIcon as ChatCenteredDuotoneIcon } from "../duotone/ChatCentered";
import { ChatCenteredIcon as ChatCenteredFillIcon } from "../fill/ChatCentered";
import { ChatCenteredIcon as ChatCenteredLightIcon } from "../light/ChatCentered";
import { ChatCenteredIcon as ChatCenteredRegularIcon } from "../regular/ChatCentered";
import { ChatCenteredIcon as ChatCenteredThinIcon } from "../thin/ChatCentered";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ChatCenteredThinIcon,
	light: ChatCenteredLightIcon,
	regular: ChatCenteredRegularIcon,
	bold: ChatCenteredBoldIcon,
	fill: ChatCenteredFillIcon,
	duotone: ChatCenteredDuotoneIcon,
} as const;

export function ChatCenteredIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ChatCenteredIcon as ChatCentered };
