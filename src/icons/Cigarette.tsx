import { CigaretteIcon as CigaretteBoldIcon } from "../bold/Cigarette";
import { CigaretteIcon as CigaretteDuotoneIcon } from "../duotone/Cigarette";
import { CigaretteIcon as CigaretteFillIcon } from "../fill/Cigarette";
import { CigaretteIcon as CigaretteLightIcon } from "../light/Cigarette";
import { CigaretteIcon as CigaretteRegularIcon } from "../regular/Cigarette";
import { CigaretteIcon as CigaretteThinIcon } from "../thin/Cigarette";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CigaretteThinIcon,
	light: CigaretteLightIcon,
	regular: CigaretteRegularIcon,
	bold: CigaretteBoldIcon,
	fill: CigaretteFillIcon,
	duotone: CigaretteDuotoneIcon,
} as const;

export function CigaretteIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CigaretteIcon as Cigarette };
