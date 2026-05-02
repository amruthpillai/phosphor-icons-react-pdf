import { PuzzlePieceIcon as PuzzlePieceBoldIcon } from "../bold/PuzzlePiece";
import { PuzzlePieceIcon as PuzzlePieceDuotoneIcon } from "../duotone/PuzzlePiece";
import { PuzzlePieceIcon as PuzzlePieceFillIcon } from "../fill/PuzzlePiece";
import { PuzzlePieceIcon as PuzzlePieceLightIcon } from "../light/PuzzlePiece";
import { PuzzlePieceIcon as PuzzlePieceRegularIcon } from "../regular/PuzzlePiece";
import { PuzzlePieceIcon as PuzzlePieceThinIcon } from "../thin/PuzzlePiece";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PuzzlePieceThinIcon,
	light: PuzzlePieceLightIcon,
	regular: PuzzlePieceRegularIcon,
	bold: PuzzlePieceBoldIcon,
	fill: PuzzlePieceFillIcon,
	duotone: PuzzlePieceDuotoneIcon,
} as const;

export function PuzzlePieceIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PuzzlePieceIcon as PuzzlePiece };
