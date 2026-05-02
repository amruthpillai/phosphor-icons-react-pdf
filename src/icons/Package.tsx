import { PackageIcon as PackageBoldIcon } from "../bold/Package";
import { PackageIcon as PackageDuotoneIcon } from "../duotone/Package";
import { PackageIcon as PackageFillIcon } from "../fill/Package";
import { PackageIcon as PackageLightIcon } from "../light/Package";
import { PackageIcon as PackageRegularIcon } from "../regular/Package";
import { PackageIcon as PackageThinIcon } from "../thin/Package";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PackageThinIcon,
	light: PackageLightIcon,
	regular: PackageRegularIcon,
	bold: PackageBoldIcon,
	fill: PackageFillIcon,
	duotone: PackageDuotoneIcon,
} as const;

export function PackageIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PackageIcon as Package };
