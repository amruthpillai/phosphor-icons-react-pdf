import { IdentificationBadgeIcon as IdentificationBadgeBoldIcon } from "../bold/IdentificationBadge";
import { IdentificationBadgeIcon as IdentificationBadgeDuotoneIcon } from "../duotone/IdentificationBadge";
import { IdentificationBadgeIcon as IdentificationBadgeFillIcon } from "../fill/IdentificationBadge";
import { IdentificationBadgeIcon as IdentificationBadgeLightIcon } from "../light/IdentificationBadge";
import { IdentificationBadgeIcon as IdentificationBadgeRegularIcon } from "../regular/IdentificationBadge";
import { IdentificationBadgeIcon as IdentificationBadgeThinIcon } from "../thin/IdentificationBadge";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: IdentificationBadgeThinIcon,
	light: IdentificationBadgeLightIcon,
	regular: IdentificationBadgeRegularIcon,
	bold: IdentificationBadgeBoldIcon,
	fill: IdentificationBadgeFillIcon,
	duotone: IdentificationBadgeDuotoneIcon,
} as const;

export function IdentificationBadgeIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { IdentificationBadgeIcon as IdentificationBadge };
