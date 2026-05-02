import { NotificationIcon as NotificationBoldIcon } from "../bold/Notification";
import { NotificationIcon as NotificationDuotoneIcon } from "../duotone/Notification";
import { NotificationIcon as NotificationFillIcon } from "../fill/Notification";
import { NotificationIcon as NotificationLightIcon } from "../light/Notification";
import { NotificationIcon as NotificationRegularIcon } from "../regular/Notification";
import { NotificationIcon as NotificationThinIcon } from "../thin/Notification";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NotificationThinIcon,
	light: NotificationLightIcon,
	regular: NotificationRegularIcon,
	bold: NotificationBoldIcon,
	fill: NotificationFillIcon,
	duotone: NotificationDuotoneIcon,
} as const;

export function NotificationIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NotificationIcon as Notification };
