import { PaperclipIcon as PaperclipBoldIcon } from "../bold/Paperclip";
import { PaperclipIcon as PaperclipDuotoneIcon } from "../duotone/Paperclip";
import { PaperclipIcon as PaperclipFillIcon } from "../fill/Paperclip";
import { PaperclipIcon as PaperclipLightIcon } from "../light/Paperclip";
import { PaperclipIcon as PaperclipRegularIcon } from "../regular/Paperclip";
import { PaperclipIcon as PaperclipThinIcon } from "../thin/Paperclip";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PaperclipThinIcon,
	light: PaperclipLightIcon,
	regular: PaperclipRegularIcon,
	bold: PaperclipBoldIcon,
	fill: PaperclipFillIcon,
	duotone: PaperclipDuotoneIcon,
} as const;

export function PaperclipIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PaperclipIcon as Paperclip };
