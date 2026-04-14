import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios'
import toast from 'react-hot-toast'

// Types for API requests and responses
export interface LeadCreateRequest {
  first_name: string
  last_name: string
  email: string
  phone?: string
  company_name: string
  job_title?: string
  company_size?: string
  industry?: string
  service_interest?: string
  budget_range?: string
  timeline?: string
  message?: string
  source?: string
}

export interface LeadResponse {
  id: string
  first_name: string
  last_name: string
  email: string
  phone?: string
  company_name: string
  job_title?: string
  company_size?: string
  industry?: string
  service_interest?: string
  budget_range?: string
  timeline?: string
  message?: string
  source?: string
  status?: string
  assigned_to?: string
  priority?: string
  tags?: string
  created_at: string
  updated_at: string
}

export interface LeadStatistics {
  totalLeads: number
  newLeads: number
  qualifiedLeads: number
  closedWonLeads: number
  highPriorityLeads: number
  urgentLeads: number
}

export interface PaginatedResponse<T> {
  content: T[]
  totalElements: number
  totalPages: number
  size: number
  number: number
  first: boolean
  last: boolean
  empty: boolean
}

class LeadService {
  private api: AxiosInstance

  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8081/api/v1',
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    this.setupInterceptors()
  }

  private setupInterceptors() {
    // Request interceptor
    this.api.interceptors.request.use(
      (config) => {
        // Add auth token if available
        const token = localStorage.getItem('auth_token')
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`
        }

        // Add request timestamp
        if (config.params) {
          config.params._timestamp = Date.now()
        } else {
          config.params = { _timestamp: Date.now() }
        }

        // Log request in development
        if (import.meta.env.DEV) {
          console.log(`API Request: ${config.method?.toUpperCase()} ${config.url}`, {
            params: config.params,
            data: config.data,
          })
        }

        return config
      },
      (error: AxiosError) => {
        console.error('❌ Request Error:', error)
        return Promise.reject(error)
      }
    )

    // Response interceptor
    this.api.interceptors.response.use(
      (response: AxiosResponse) => {
        // Log response in development
        if (import.meta.env.DEV) {
          console.log(`API Response: ${response.config.method?.toUpperCase()} ${response.config.url}`, {
            status: response.status,
            data: response.data,
          })
        }

        return response
      },
      (error: AxiosError) => {
        // Handle different error types
        if (error.response) {
          // Server responded with error status
          const { status, data } = error.response as any
          
          switch (status) {
            case 400:
              // Validation errors
              if (data?.validationErrors) {
                const validationErrors = Object.values(data.validationErrors).flat()
                toast.error(`Validation Error: ${validationErrors.join(', ')}`)
              } else {
                toast.error(data?.message || 'Invalid request data')
              }
              break
            
            case 401:
              toast.error('Authentication required. Please log in.')
              // Redirect to login or refresh token
              this.handleUnauthorized()
              break
            
            case 403:
              toast.error('You do not have permission to perform this action.')
              break
            
            case 404:
              toast.error('The requested resource was not found.')
              break
            
            case 503:
              toast.error(data?.message || 'Server is starting up or database is connecting. Please try again in a moment.')
              break
            
            case 409:
              toast.error(data?.message || 'Resource conflict. The resource may already exist.')
              break
            
            case 429:
              toast.error('Too many requests. Please try again later.')
              break
            
            case 500:
              toast.error('Internal server error. Please try again later.')
              break
            
            default:
              toast.error(data?.message || 'An unexpected error occurred.')
          }
        } else if (error.request) {
          // Network error
          toast.error('Network error. Please check your internet connection.')
        } else {
          // Other error
          toast.error('An unexpected error occurred.')
        }

        // Log error in development
        if (import.meta.env.DEV) {
          console.error('API Error:', {
            message: error.message,
            response: error.response?.data,
            config: error.config,
          })
        }

        return Promise.reject(error)
      }
    )
  }

  private handleUnauthorized() {
    // Clear stored auth data
    localStorage.removeItem('auth_token')
    localStorage.removeItem('user_data')
    
    // Redirect to login page (if not already there)
    if (!window.location.pathname.includes('/login')) {
      window.location.href = '/login'
    }
  }

  // Lead CRUD operations
  async createLead(leadData: LeadCreateRequest): Promise<LeadResponse> {
    const response = await this.api.post<LeadResponse>('/leads', leadData)
    toast.success('Lead created successfully!')
    return response.data
  }

  async getLeadById(id: string): Promise<LeadResponse> {
    const response = await this.api.get<LeadResponse>(`/leads/${id}`)
    return response.data
  }

  async getAllLeads(page = 0, size = 20, sortBy = 'createdAt', sortDirection = 'desc'): Promise<PaginatedResponse<LeadResponse>> {
    const response = await this.api.get<PaginatedResponse<LeadResponse>>('/leads', {
      params: { page, size, sortBy, sortDirection }
    })
    return response.data
  }

  async getLeadsByStatus(status: string, page = 0, size = 20): Promise<PaginatedResponse<LeadResponse>> {
    const response = await this.api.get<PaginatedResponse<LeadResponse>>(`/leads/status/${status}`, {
      params: { page, size }
    })
    return response.data
  }

  async getLeadsByPriority(priority: string, page = 0, size = 20): Promise<PaginatedResponse<LeadResponse>> {
    const response = await this.api.get<PaginatedResponse<LeadResponse>>(`/leads/priority/${priority}`, {
      params: { page, size }
    })
    return response.data
  }

  async getLeadsByIndustry(industry: string, page = 0, size = 20): Promise<PaginatedResponse<LeadResponse>> {
    const response = await this.api.get<PaginatedResponse<LeadResponse>>(`/leads/industry/${industry}`, {
      params: { page, size }
    })
    return response.data
  }

  async searchLeads(searchTerm: string, page = 0, size = 20): Promise<PaginatedResponse<LeadResponse>> {
    const response = await this.api.get<PaginatedResponse<LeadResponse>>('/leads/search', {
      params: { searchTerm, page, size }
    })
    return response.data
  }

  async updateLeadStatus(id: string, status: string): Promise<LeadResponse> {
    const response = await this.api.patch<LeadResponse>(`/leads/${id}/status`, null, {
      params: { status }
    })
    toast.success('Lead status updated successfully!')
    return response.data
  }

  async assignLead(id: string, assignedTo: string): Promise<LeadResponse> {
    const response = await this.api.patch<LeadResponse>(`/leads/${id}/assign`, null, {
      params: { assignedTo }
    })
    toast.success('Lead assigned successfully!')
    return response.data
  }

  async updateLeadPriority(id: string, priority: string): Promise<LeadResponse> {
    const response = await this.api.patch<LeadResponse>(`/leads/${id}/priority`, null, {
      params: { priority }
    })
    toast.success('Lead priority updated successfully!')
    return response.data
  }

  async deleteLead(id: string): Promise<void> {
    await this.api.delete(`/leads/${id}`)
    toast.success('Lead deleted successfully!')
  }

  async getLeadStatistics(): Promise<LeadStatistics> {
    const response = await this.api.get<LeadStatistics>('/leads/statistics')
    return response.data
  }

  // Utility methods
  async healthCheck(): Promise<{ status: string; timestamp: string }> {
    const response = await this.api.get('/actuator/health')
    return response.data
  }

  // Method to update auth token
  setAuthToken(token: string) {
    localStorage.setItem('auth_token', token)
    this.api.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }

  // Method to clear auth token
  clearAuthToken() {
    localStorage.removeItem('auth_token')
    delete this.api.defaults.headers.common['Authorization']
  }

  // Method to check if user is authenticated
  isAuthenticated(): boolean {
    return !!localStorage.getItem('auth_token')
  }
}

// Create singleton instance
const leadService = new LeadService()

export default leadService
