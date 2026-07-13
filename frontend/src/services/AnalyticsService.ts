import axios, { AxiosInstance } from 'axios';

interface AnalyticsData {
  periodStart: string;
  periodEnd: string;
  totalLeads: number;
  newLeads: number;
  qualifiedLeads: number;
  closedWonLeads: number;
  conversionRate: number;
  leadsByIndustry: Record<string, number>;
  leadsBySource: Record<string, number>;
  leadsByStatus: Record<string, number>;
  averageDealSize: number;
  totalRevenue: number;
}

class AnalyticsService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api/v1',
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    this.api.interceptors.request.use((config) => {
      const token = localStorage.getItem('auth_token');
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    this.api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          localStorage.removeItem('auth_token');
          localStorage.removeItem('user');
          window.location.href = '/login';
        }
        return Promise.reject(error);
      }
    );
  }

  async getAnalytics(startDate?: string, endDate?: string): Promise<AnalyticsData> {
    const params: any = {};
    if (startDate) params.startDate = startDate;
    if (endDate) params.endDate = endDate;

    const response = await this.api.get<AnalyticsData>('/analytics', { params });
    return response.data;
  }
}

export const analyticsService = new AnalyticsService();
export type { AnalyticsData };
