import CryptoJS from 'crypto-js';

// Secret key for encryption (you can move this to .env.local for production)
const SECRET_KEY = process.env.NEXT_PUBLIC_ENCRYPTION_KEY || 'fasthirely-secret-key-2025';

/**
 * Check if we're running in the browser (client-side)
 */
function isClient(): boolean {
  return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
}

/**
 * Encrypt and store user data in localStorage
 * @param data - Object containing user data (token, role, etc.)
 * @example
 * setUserData({ token: 'abc123', role: 'seeker', userId: '123' })
 */
export function setUserData(data: Record<string, any>): void {
  if (!isClient()) {
    console.warn('localStorage is not available. This function must be called on the client side.');
    return;
  }

  try {
    const dataString = JSON.stringify(data);
    const encrypted = CryptoJS.AES.encrypt(dataString, SECRET_KEY).toString();
    localStorage.setItem('userData', encrypted);
  } catch (error) {
    console.error('Error storing user data:', error);
    throw error;
  }
}

/**
 * Decrypt and retrieve user data from localStorage
 * @returns Decrypted user data object or null if not found/invalid
 * @example
 * const userData = getUserData();
 * // Returns: { token: 'abc123', role: 'seeker', userId: '123' } or null
 */
export function getUserData(): Record<string, any> | null {
  if (!isClient()) {
    return null;
  }

  try {
    const encrypted = localStorage.getItem('userData');
    if (!encrypted) {
      return null;
    }

    const decrypted = CryptoJS.AES.decrypt(encrypted, SECRET_KEY);
    const decryptedString = decrypted.toString(CryptoJS.enc.Utf8);
    
    if (!decryptedString) {
      // Invalid or corrupted data
      localStorage.removeItem('userData');
      return null;
    }

    return JSON.parse(decryptedString);
  } catch (error) {
    console.error('Error retrieving user data:', error);
    // Clear corrupted data
    localStorage.removeItem('userData');
    return null;
  }
}

/**
 * Clear all user data from localStorage
 * @example
 * clearUserData()
 */
export function clearUserData(): void {
  if (!isClient()) {
    return;
  }

  try {
    localStorage.removeItem('userData');
  } catch (error) {
    console.error('Error clearing user data:', error);
  }
}

