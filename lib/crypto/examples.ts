/**
 * USAGE EXAMPLES for Crypto Handler Functions
 * 
 * This file demonstrates how to use the crypto utilities
 * for handling encrypted user data in localStorage
 */

import { setUserData, getUserData, clearUserData } from './storage';

// Example 1: Login API Call - Store user data after successful login
export async function handleLogin(email: string, password: string) {
  try {
    // Call your login API
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok && data.token) {
      // Store encrypted user data in localStorage
      setUserData({
        token: data.token,
        role: data.role, // 'seeker' or 'recruiter'
        userId: data.userId,
        email: data.email,
        name: data.name,
        // ... any other user data you need
      });

      return { success: true, data };
    } else {
      return { success: false, error: data.message };
    }
  } catch (error) {
    console.error('Login error:', error);
    return { success: false, error: 'Login failed' };
  }
}

// Example 2: Get stored user data (e.g., for API calls or auth checks)
export function getStoredUserData() {
  const userData = getUserData();
  
  if (!userData) {
    // No user data found - user not logged in
    return null;
  }

  return {
    token: userData.token,
    role: userData.role,
    userId: userData.userId,
    email: userData.email,
    name: userData.name,
  };
}

// Example 3: Make authenticated API call using stored token
export async function makeAuthenticatedRequest(url: string, options: RequestInit = {}) {
  const userData = getUserData();

  if (!userData || !userData.token) {
    throw new Error('User not authenticated');
  }

  const headers = {
    ...options.headers,
    'Authorization': `Bearer ${userData.token}`,
    'Content-Type': 'application/json',
  };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  return response;
}

// Example 4: Logout - Clear user data
export function handleLogout() {
  clearUserData();
  // Optionally redirect to login page
  // window.location.href = '/login';
}

// Example 5: Check if user is authenticated
export function isAuthenticated(): boolean {
  const userData = getUserData();
  return userData !== null && userData.token !== undefined;
}

// Example 6: Get user role
export function getUserRole(): 'seeker' | 'recruiter' | null {
  const userData = getUserData();
  return userData?.role || null;
}

