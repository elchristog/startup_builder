import React, { useState } from 'react';
import LoginPage from './login/LoginPage';
import CustomerDashboard from './customers/CustomerDashboard';
import TeamWorkspace from './team/TeamWorkspace';

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);

  if (!currentUser) {
    return <LoginPage onLogin={(user) => setCurrentUser(user)} />;
  }

  if (currentUser.role === 'team') {
    return <TeamWorkspace user={currentUser} onLogout={() => setCurrentUser(null)} />;
  }

  return <CustomerDashboard user={currentUser} onLogout={() => setCurrentUser(null)} />;
}
