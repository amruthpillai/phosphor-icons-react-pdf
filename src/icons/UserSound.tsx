import { UserSoundIcon as UserSoundBoldIcon } from "../bold/UserSound";
import { UserSoundIcon as UserSoundDuotoneIcon } from "../duotone/UserSound";
import { UserSoundIcon as UserSoundFillIcon } from "../fill/UserSound";
import { UserSoundIcon as UserSoundLightIcon } from "../light/UserSound";
import { UserSoundIcon as UserSoundRegularIcon } from "../regular/UserSound";
import { UserSoundIcon as UserSoundThinIcon } from "../thin/UserSound";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: UserSoundThinIcon,
	light: UserSoundLightIcon,
	regular: UserSoundRegularIcon,
	bold: UserSoundBoldIcon,
	fill: UserSoundFillIcon,
	duotone: UserSoundDuotoneIcon,
} as const;

export function UserSoundIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { UserSoundIcon as UserSound };
