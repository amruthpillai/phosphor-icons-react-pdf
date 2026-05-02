import { CigaretteSlashIcon as CigaretteSlashBoldIcon } from "../bold/CigaretteSlash";
import { CigaretteSlashIcon as CigaretteSlashDuotoneIcon } from "../duotone/CigaretteSlash";
import { CigaretteSlashIcon as CigaretteSlashFillIcon } from "../fill/CigaretteSlash";
import { CigaretteSlashIcon as CigaretteSlashLightIcon } from "../light/CigaretteSlash";
import { CigaretteSlashIcon as CigaretteSlashRegularIcon } from "../regular/CigaretteSlash";
import { CigaretteSlashIcon as CigaretteSlashThinIcon } from "../thin/CigaretteSlash";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CigaretteSlashThinIcon,
	light: CigaretteSlashLightIcon,
	regular: CigaretteSlashRegularIcon,
	bold: CigaretteSlashBoldIcon,
	fill: CigaretteSlashFillIcon,
	duotone: CigaretteSlashDuotoneIcon,
} as const;

export function CigaretteSlashIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CigaretteSlashIcon as CigaretteSlash };
