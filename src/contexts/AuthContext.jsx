import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  // Mocking the logged-in user state
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mock user login - for demonstration, setting as Admin
    // In production, this would be an API call to verify a token
    const mockUser = {
      _id: '12345',
      name: 'Prabesh Prabhu',
      email: 'prabesh@iskconpokhara.org',
      role: 'Admin', // Change to 'Editor' or 'Viewer' to test RBAC
      departments: ['Management']
    };
    setCurrentUser(mockUser);
    setIsLoading(false);
  }, []);

  const value = {
    currentUser,
    isAdmin: currentUser?.role === 'Admin',
    isEditor: currentUser?.role === 'Editor',
    isViewer: currentUser?.role === 'Viewer',
    login: (user) => setCurrentUser(user),
    logout: () => setCurrentUser(null)
  };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};
