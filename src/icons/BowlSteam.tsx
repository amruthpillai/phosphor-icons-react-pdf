import { BowlSteamIcon as BowlSteamBoldIcon } from "../bold/BowlSteam";
import { BowlSteamIcon as BowlSteamDuotoneIcon } from "../duotone/BowlSteam";
import { BowlSteamIcon as BowlSteamFillIcon } from "../fill/BowlSteam";
import { BowlSteamIcon as BowlSteamLightIcon } from "../light/BowlSteam";
import { BowlSteamIcon as BowlSteamRegularIcon } from "../regular/BowlSteam";
import { BowlSteamIcon as BowlSteamThinIcon } from "../thin/BowlSteam";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BowlSteamThinIcon,
	light: BowlSteamLightIcon,
	regular: BowlSteamRegularIcon,
	bold: BowlSteamBoldIcon,
	fill: BowlSteamFillIcon,
	duotone: BowlSteamDuotoneIcon,
} as const;

export function BowlSteamIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BowlSteamIcon as BowlSteam };
