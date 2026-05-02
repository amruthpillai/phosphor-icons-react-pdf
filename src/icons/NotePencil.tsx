import { NotePencilIcon as NotePencilBoldIcon } from "../bold/NotePencil";
import { NotePencilIcon as NotePencilDuotoneIcon } from "../duotone/NotePencil";
import { NotePencilIcon as NotePencilFillIcon } from "../fill/NotePencil";
import { NotePencilIcon as NotePencilLightIcon } from "../light/NotePencil";
import { NotePencilIcon as NotePencilRegularIcon } from "../regular/NotePencil";
import { NotePencilIcon as NotePencilThinIcon } from "../thin/NotePencil";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NotePencilThinIcon,
	light: NotePencilLightIcon,
	regular: NotePencilRegularIcon,
	bold: NotePencilBoldIcon,
	fill: NotePencilFillIcon,
	duotone: NotePencilDuotoneIcon,
} as const;

export function NotePencilIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NotePencilIcon as NotePencil };
