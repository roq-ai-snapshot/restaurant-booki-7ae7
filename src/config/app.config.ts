interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Chef'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View restaurant details',
    'View table details',
    'Reserve a table',
    'View menu details',
    'Cancel reservation',
  ],
  ownerAbilities: [
    'Manage restaurant profile',
    'Manage restaurant tables',
    'Invite and remove Chefs',
    'Manage reservations',
  ],
};
