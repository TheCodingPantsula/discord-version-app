import { Server, Member, Porfile } from "@prisma/client"


export type ServerWithMembersWithProfiles = Server & {
    members: (Member & { profile: Porfile })[];
};