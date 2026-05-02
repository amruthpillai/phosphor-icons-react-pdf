import { TicketIcon as TicketBoldIcon } from "../bold/Ticket";
import { TicketIcon as TicketDuotoneIcon } from "../duotone/Ticket";
import { TicketIcon as TicketFillIcon } from "../fill/Ticket";
import { TicketIcon as TicketLightIcon } from "../light/Ticket";
import { TicketIcon as TicketRegularIcon } from "../regular/Ticket";
import { TicketIcon as TicketThinIcon } from "../thin/Ticket";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TicketThinIcon,
	light: TicketLightIcon,
	regular: TicketRegularIcon,
	bold: TicketBoldIcon,
	fill: TicketFillIcon,
	duotone: TicketDuotoneIcon,
} as const;

export function TicketIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TicketIcon as Ticket };
