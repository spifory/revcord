import type { User } from "discord.js";

/**
 * Formats the Discord username to display the nickname, global name, or username.
 * Excluding the discriminator if it is 0 to account for bots.
 * @param author The message author.
 * @returns The formatted user name
 */
export function formatDiscordName(author: User): string {
    let name = author.displayName;

    // Accounting for bots
    if (author.discriminator !== "0") {
        name += `#${author.discriminator}`
    }

    return name
};