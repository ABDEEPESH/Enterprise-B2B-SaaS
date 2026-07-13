import axios, { AxiosInstance } from 'axios';

interface Tenant {
  id: string;
  name: string;
  slug: string;
  domain?: string;
  status: string;
  plan: string;
  maxUsers: number;
  maxLeads: number;
  logoUrl?: string;
  primaryColor?: string;
  contactEmail?: string;
  contactPhone?: string;
  billingAddress?: string;
  trialEndDate?: string;
  createdAt: string;
  updatedAt: string;
}

interface TenantCreateRequest {
  name: string;
  slug: string;
  domain?: string;
  contactEmail?: string;
  contactPhone?: string;
  billingAddress?: string;
  plan?: string;
}

class TenantService {
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
      
      const tenantId = localStorage.getItem('tenant_id');
      if (tenantId && config.headers) {
        config.headers['X-Tenant-ID'] = tenantId;
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

  async createTenant(tenantData: TenantCreateRequest): Promise<Tenant> {
    const response = await this.api.post<Tenant>('/tenants', tenantData);
    return response.data;
  }

  async getTenantById(id: string): Promise<Tenant> {
    const response = await this.api.get<Tenant>(`/tenants/${id}`);
    return response.data;
  }

  async getTenantBySlug(slug: string): Promise<Tenant> {
    const response = await this.api.get<Tenant>(`/tenants/slug/${slug}`);
    return response.data;
  }

  async getAllTenants(): Promise<Tenant[]> {
    const response = await this.api.get<Tenant[]>('/tenants');
    return response.data;
  }

  async updateTenant(id: string, tenantData: TenantCreateRequest): Promise<Tenant> {
    const response = await this.api.put<Tenant>(`/tenants/${id}`, tenantData);
    return response.data;
  }

  async deleteTenant(id: string): Promise<void> {
    await this.api.delete(`/tenants/${id}`);
  }

  setCurrentTenant(tenantId: string) {
    localStorage.setItem('tenant_id', tenantId);
  }

  getCurrentTenant(): string | null {
    return localStorage.getItem('tenant_id');
  }

  clearCurrentTenant() {
    localStorage.removeItem('tenant_id');
  }
}

export const tenantService = new TenantService();
export type { Tenant, TenantCreateRequest };
