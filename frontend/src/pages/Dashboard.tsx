import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { authService, User } from '../services/AuthService';
import { analyticsService, AnalyticsData } from '../services/AnalyticsService';
import { AnimatedButton } from '../components/AnimatedButton';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [analyticsLoading, setAnalyticsLoading] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      if (!authService.isAuthenticated()) {
        navigate('/login');
        return;
      }

      try {
        const userData = authService.getCurrentUserFromStorage();
        if (userData) {
          setUser(userData);
        } else {
          const freshUserData = await authService.getCurrentUser();
          setUser(freshUserData);
        }
        
        loadAnalytics();
      } catch (error) {
        navigate('/login');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [navigate]);

  const loadAnalytics = async () => {
    setAnalyticsLoading(true);
    try {
      const data = await analyticsService.getAnalytics();
      setAnalytics(data);
    } catch (error) {
      console.error('Failed to load analytics:', error);
    } finally {
      setAnalyticsLoading(false);
    }
  };

  const handleLogout = () => {
    authService.logout();
    navigate('/login');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <nav className="bg-white/10 backdrop-blur-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-white text-xl font-bold">Enterprise Platform</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-slate-300">{user?.firstName} {user?.lastName}</span>
              <AnimatedButton
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all"
              >
                Logout
              </AnimatedButton>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">Welcome to Dashboard</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
            >
              <h3 className="text-xl font-semibold text-white mb-2">Profile Information</h3>
              <div className="space-y-2 text-slate-300">
                <p><span className="font-medium">Email:</span> {user?.email}</p>
                <p><span className="font-medium">Role:</span> {user?.role}</p>
                <p><span className="font-medium">Department:</span> {user?.department || 'N/A'}</p>
                <p><span className="font-medium">Job Title:</span> {user?.jobTitle || 'N/A'}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
            >
              <h3 className="text-xl font-semibold text-white mb-2">Account Status</h3>
              <div className="space-y-2 text-slate-300">
                <p><span className="font-medium">Active:</span> {user?.isActive ? 'Yes' : 'No'}</p>
                <p><span className="font-medium">Email Verified:</span> {user?.isEmailVerified ? 'Yes' : 'No'}</p>
                <p><span className="font-medium">Last Login:</span> {user?.lastLoginAt ? new Date(user.lastLoginAt).toLocaleString() : 'Never'}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
            >
              <h3 className="text-xl font-semibold text-white mb-2">Quick Actions</h3>
              <div className="space-y-3">
                <AnimatedButton className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all">
                  View Leads
                </AnimatedButton>
                <AnimatedButton className="w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all">
                  Analytics
                </AnimatedButton>
                <AnimatedButton className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all">
                  Settings
                </AnimatedButton>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Analytics Overview</h3>
            {analyticsLoading ? (
              <p className="text-slate-300">Loading analytics...</p>
            ) : analytics ? (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-slate-400 text-sm">Total Leads</p>
                    <p className="text-2xl font-bold text-white">{analytics.totalLeads}</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-slate-400 text-sm">New Leads</p>
                    <p className="text-2xl font-bold text-blue-400">{analytics.newLeads}</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-slate-400 text-sm">Qualified</p>
                    <p className="text-2xl font-bold text-green-400">{analytics.qualifiedLeads}</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-slate-400 text-sm">Closed Won</p>
                    <p className="text-2xl font-bold text-purple-400">{analytics.closedWonLeads}</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-slate-400 text-sm">Conversion Rate</p>
                  <p className="text-2xl font-bold text-yellow-400">{analytics.conversionRate}%</p>
                </div>
              </div>
            ) : (
              <p className="text-slate-300">No analytics data available.</p>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
