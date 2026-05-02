import { ClubIcon as ClubBoldIcon } from "../bold/Club";
import { ClubIcon as ClubDuotoneIcon } from "../duotone/Club";
import { ClubIcon as ClubFillIcon } from "../fill/Club";
import { ClubIcon as ClubLightIcon } from "../light/Club";
import { ClubIcon as ClubRegularIcon } from "../regular/Club";
import { ClubIcon as ClubThinIcon } from "../thin/Club";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ClubThinIcon,
	light: ClubLightIcon,
	regular: ClubRegularIcon,
	bold: ClubBoldIcon,
	fill: ClubFillIcon,
	duotone: ClubDuotoneIcon,
} as const;

export function ClubIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ClubIcon as Club };
