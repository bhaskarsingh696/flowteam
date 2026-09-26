import { useEffect, useState } from 'react';
import { apiFetch } from './lib/apiClient';

function App() {
  const [status, setStatus] = useState('loading');
  const [dbStatus, setDbStatus] = useState(null);

  useEffect(() => {
    apiFetch('/api/health')
      .then((body) => {
        setStatus('connected');
        setDbStatus(body.data.db);
      })
      .catch(() => {
        setStatus('error');
      });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">FlowTeam</h1>
        {status === 'loading' && (
          <p className="text-gray-500">Checking server connection…</p>
        )}
        {status === 'connected' && (
          <p className="text-green-600 font-medium">
            ✅ Connected to server — database: {dbStatus}
          </p>
        )}
        {status === 'error' && (
          <p className="text-red-600 font-medium">❌ Could not reach the server</p>
        )}
      </div>
    </div>
  );
}

export default App;