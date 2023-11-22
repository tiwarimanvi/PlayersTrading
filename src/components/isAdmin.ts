// isAdmin.ts

const ADMIN_WALLET_ADDRESS = 'tz1Tve8tP2pbCJKXVhJpyhM1AD9qiaGHC9yZ';

export const isAdmin = (userWalletAddress: string | undefined): boolean => {
  return userWalletAddress === ADMIN_WALLET_ADDRESS;
};
