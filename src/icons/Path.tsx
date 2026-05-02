import { PathIcon as PathBoldIcon } from "../bold/Path";
import { PathIcon as PathDuotoneIcon } from "../duotone/Path";
import { PathIcon as PathFillIcon } from "../fill/Path";
import { PathIcon as PathLightIcon } from "../light/Path";
import { PathIcon as PathRegularIcon } from "../regular/Path";
import { PathIcon as PathThinIcon } from "../thin/Path";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PathThinIcon,
	light: PathLightIcon,
	regular: PathRegularIcon,
	bold: PathBoldIcon,
	fill: PathFillIcon,
	duotone: PathDuotoneIcon,
} as const;

export function PathIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PathIcon as Path };
