# Crypto Handler

This folder contains utilities for encrypting and storing user data securely in localStorage.

## Functions

### `setUserData(data)`
Encrypts and stores user data in localStorage.

**Parameters:**
- `data` (object): User data object containing token, role, etc.

**Example:**
```typescript
import { setUserData } from '@/lib/crypto';

setUserData({
  token: 'abc123',
  role: 'seeker',
  userId: '123',
  email: 'user@example.com'
});
```

### `getUserData()`
Decrypts and retrieves user data from localStorage.

**Returns:** User data object or `null` if not found/invalid

**Example:**
```typescript
import { getUserData } from '@/lib/crypto';

const userData = getUserData();
if (userData) {
  console.log(userData.token);
  console.log(userData.role);
}
```

### `clearUserData()`
Clears all encrypted user data from localStorage.

**Example:**
```typescript
import { clearUserData } from '@/lib/crypto';

clearUserData(); // Logout
```

## Usage in Login

```typescript
import { setUserData } from '@/lib/crypto';

// After successful login API call
const response = await fetch('/api/login', {
  method: 'POST',
  body: JSON.stringify({ email, password })
});

const data = await response.json();

if (data.token) {
  setUserData({
    token: data.token,
    role: data.role,
    userId: data.userId,
    email: data.email
  });
}
```

## Security Note

For production, add this to `.env.local`:
```
NEXT_PUBLIC_ENCRYPTION_KEY=your-strong-secret-key-here
```

