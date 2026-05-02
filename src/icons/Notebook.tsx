import { NotebookIcon as NotebookBoldIcon } from "../bold/Notebook";
import { NotebookIcon as NotebookDuotoneIcon } from "../duotone/Notebook";
import { NotebookIcon as NotebookFillIcon } from "../fill/Notebook";
import { NotebookIcon as NotebookLightIcon } from "../light/Notebook";
import { NotebookIcon as NotebookRegularIcon } from "../regular/Notebook";
import { NotebookIcon as NotebookThinIcon } from "../thin/Notebook";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NotebookThinIcon,
	light: NotebookLightIcon,
	regular: NotebookRegularIcon,
	bold: NotebookBoldIcon,
	fill: NotebookFillIcon,
	duotone: NotebookDuotoneIcon,
} as const;

export function NotebookIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NotebookIcon as Notebook };
