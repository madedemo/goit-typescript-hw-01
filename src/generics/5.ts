export enum UseRole {
    ADMIN = 'admin',
    EDITOR = 'editor',
    GUEST = 'guest',
}

type UserRoles = Record<UserRole, string>

const RoleDescriptions: UserRoles = {
    [UseRole.ADMIN]: 'Administrator',
    [UseRole.EDITOR]: 'Editor',
    [UseRole.GUEST]: 'Guest',
};

export { };
