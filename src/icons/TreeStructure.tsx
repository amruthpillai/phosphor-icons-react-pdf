import { TreeStructureIcon as TreeStructureBoldIcon } from "../bold/TreeStructure";
import { TreeStructureIcon as TreeStructureDuotoneIcon } from "../duotone/TreeStructure";
import { TreeStructureIcon as TreeStructureFillIcon } from "../fill/TreeStructure";
import { TreeStructureIcon as TreeStructureLightIcon } from "../light/TreeStructure";
import { TreeStructureIcon as TreeStructureRegularIcon } from "../regular/TreeStructure";
import { TreeStructureIcon as TreeStructureThinIcon } from "../thin/TreeStructure";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TreeStructureThinIcon,
	light: TreeStructureLightIcon,
	regular: TreeStructureRegularIcon,
	bold: TreeStructureBoldIcon,
	fill: TreeStructureFillIcon,
	duotone: TreeStructureDuotoneIcon,
} as const;

export function TreeStructureIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TreeStructureIcon as TreeStructure };
