import { FilePlusIcon as FilePlusBoldIcon } from "../bold/FilePlus";
import { FilePlusIcon as FilePlusDuotoneIcon } from "../duotone/FilePlus";
import { FilePlusIcon as FilePlusFillIcon } from "../fill/FilePlus";
import { FilePlusIcon as FilePlusLightIcon } from "../light/FilePlus";
import { FilePlusIcon as FilePlusRegularIcon } from "../regular/FilePlus";
import { FilePlusIcon as FilePlusThinIcon } from "../thin/FilePlus";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FilePlusThinIcon,
	light: FilePlusLightIcon,
	regular: FilePlusRegularIcon,
	bold: FilePlusBoldIcon,
	fill: FilePlusFillIcon,
	duotone: FilePlusDuotoneIcon,
} as const;

export function FilePlusIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FilePlusIcon as FilePlus };
