import { SphereIcon as SphereBoldIcon } from "../bold/Sphere";
import { SphereIcon as SphereDuotoneIcon } from "../duotone/Sphere";
import { SphereIcon as SphereFillIcon } from "../fill/Sphere";
import { SphereIcon as SphereLightIcon } from "../light/Sphere";
import { SphereIcon as SphereRegularIcon } from "../regular/Sphere";
import { SphereIcon as SphereThinIcon } from "../thin/Sphere";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SphereThinIcon,
	light: SphereLightIcon,
	regular: SphereRegularIcon,
	bold: SphereBoldIcon,
	fill: SphereFillIcon,
	duotone: SphereDuotoneIcon,
} as const;

export function SphereIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SphereIcon as Sphere };
