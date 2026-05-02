import { MailboxIcon as MailboxBoldIcon } from "../bold/Mailbox";
import { MailboxIcon as MailboxDuotoneIcon } from "../duotone/Mailbox";
import { MailboxIcon as MailboxFillIcon } from "../fill/Mailbox";
import { MailboxIcon as MailboxLightIcon } from "../light/Mailbox";
import { MailboxIcon as MailboxRegularIcon } from "../regular/Mailbox";
import { MailboxIcon as MailboxThinIcon } from "../thin/Mailbox";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MailboxThinIcon,
	light: MailboxLightIcon,
	regular: MailboxRegularIcon,
	bold: MailboxBoldIcon,
	fill: MailboxFillIcon,
	duotone: MailboxDuotoneIcon,
} as const;

export function MailboxIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MailboxIcon as Mailbox };
