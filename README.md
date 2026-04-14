# Enterprise B2B SaaS Platform

A massive, enterprise-grade, 20+ page web application with a secure Java backend. This platform demonstrates industry-standard engineering patterns and serves as a comprehensive B2B SaaS solution.

## Architecture Overview

### Technology Stack

#### Frontend
- **React (Vite)** - Modern React development with fast HMR
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework with enterprise design system
- **Framer Motion** - Sophisticated animations and micro-interactions
- **React Router v6** - Client-side routing for 20+ pages
- **Axios** - HTTP client with interceptors
- **React Hook Form + Zod** - Form validation and management
- **Lucide React** - Beautiful icon system
- **Radix UI** - Accessible component primitives

#### Backend
- **Pure Java 21** - No Lombok, manual constructors, getters, setters
- **Spring Boot 3.x** - Modern Spring framework
- **Spring Security** - Enterprise-grade security
- **MongoDB** - NoSQL database with Spring Data MongoDB
- **Jakarta Validation** - Comprehensive DTO validation
- **Docker** - Containerized deployment

### Project Structure

```
enterprise-platform/
|
|--- backend/                 # Spring Boot Java application
|   |--- src/
|   |   |--- main/
|   |   |   |--- java/com/enterprise/platform/
|   |   |   |   |--- B2bSaasPlatformApplication.java
|   |   |   |   |--- config/          # Security and MongoDB config
|   |   |   |   |--- controller/      # REST API endpoints
|   |   |   |   |--- domain/          # Pure Java entities
|   |   |   |   |--- dto/             # Data transfer objects
|   |   |   |   |--- exception/       # Custom exceptions
|   |   |   |   |--- service/         # Business logic
|   |   |--- main/resources/
|   |   |   |--- application.yml     # Configuration
|   |--- Dockerfile                 # Production deployment
|   |--- pom.xml                    # Maven dependencies
|
|--- frontend/                # React TypeScript application
|   |--- src/
|   |   |--- components/            # Reusable UI components
|   |   |--- pages/                 # 20+ functional pages
|   |   |--- services/              # API services
|   |   |--- styles/                # Global styles
|   |   |--- utils/                 # Utility functions
|   |--- package.json              # NPM dependencies
|   |--- vite.config.ts            # Vite configuration
|   |--- tailwind.config.js        # Tailwind configuration
|
|--- README.md                  # This file
```

## Features

### Backend Features
- **Pure Java 21 Implementation** - No Lombok, manual memory management
- **Comprehensive Lead Management API** - Full CRUD operations with validation
- **Enterprise Security** - Spring Security with JWT support
- **MongoDB Integration** - Scalable NoSQL data storage
- **DTO Pattern** - Clean data transfer with validation
- **Custom Exceptions** - Proper error handling
- **Pagination Support** - Efficient data retrieval
- **CORS Configuration** - Secure cross-origin requests
- **Docker Deployment** - Production-ready containerization

### Frontend Features
- **20+ Functional Pages** - Complete B2B SaaS website
- **Master Layout System** - Premium navigation and footer
- **Advanced UI Components** - AnimatedButton, ServiceCard, Navbar
- **Framer Motion Animations** - Stagger-fade entries, button effects
- **Responsive Design** - Mobile-first approach
- **Type Safety** - Full TypeScript implementation
- **Axios Interceptors** - Advanced API communication
- **Form Validation** - React Hook Form with Zod schemas
- **Enterprise UI/UX** - Stripe-inspired design system

### Pages Included
#### Core Pages (5)
- Home, About, Process, Pricing, Contact

#### Service Pages (5)
- Strategy, Design, Development, Cloud, Security

#### Industry Pages (5)
- FinTech, HealthTech, E-commerce, Logistics, AI

#### Legal/Resources (5)
- Blog Index, Blog Post Template, Privacy, Terms, Careers

#### Utility Pages (2)
- Thank You, 404 Not Found

## Quick Start

### Prerequisites
- **Java 21** - Backend development
- **Node.js 18+** - Frontend development
- **MongoDB** - Database (local or cloud)
- **Maven 3.9+** - Java build tool
- **Docker** - Container deployment (optional)

### Environment Setup

#### Backend Setup
```bash
# Navigate to backend directory
cd backend

# Copy environment template
cp .env.example .env

# Update .env with your MongoDB connection string
# MONGODB_URI=mongodb://localhost:27017/enterprise_b2b_platform

# Install dependencies and run
mvn clean install
mvn spring-boot:run
```

The backend will start on `http://localhost:8080`

#### Frontend Setup
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Copy environment template
cp .env.example .env.local

# Start development server
npm run dev
```

The frontend will start on `http://localhost:5173`

### Docker Deployment

#### Backend Docker Setup
```bash
# Build and run backend container
cd backend
docker build -t enterprise-backend .
docker run -p 8080:8080 --env-file .env enterprise-backend
```

#### Production Deployment
```bash
# Build for production
cd frontend
npm run build

# Deploy to Vercel (frontend)
vercel --prod

# Deploy backend container
docker push your-registry/enterprise-backend:latest
```

## API Documentation

### Lead Management Endpoints

#### Create Lead
```http
POST /api/v1/leads
Content-Type: application/json

{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john.doe@company.com",
  "company_name": "Tech Corp",
  "phone": "+1234567890",
  "job_title": "CTO",
  "company_size": "51-200",
  "industry": "fintech",
  "service_interest": "development",
  "budget_range": "100k-250k",
  "timeline": "3-6-months",
  "message": "Interested in enterprise solutions"
}
```

#### Get All Leads (Paginated)
```http
GET /api/v1/leads?page=0&size=20&sortBy=createdAt&sortDirection=desc
```

#### Get Lead by ID
```http
GET /api/v1/leads/{id}
```

#### Update Lead Status
```http
PATCH /api/v1/leads/{id}/status?status=QUALIFIED
```

#### Get Lead Statistics
```http
GET /api/v1/leads/statistics
```

### Response Format
```json
{
  "id": "60f7b3b3b3b3b3b3b3b3b3b3",
  "first_name": "John",
  "last_name": "Doe",
  "email": "john.doe@company.com",
  "company_name": "Tech Corp",
  "status": "NEW",
  "priority": "MEDIUM",
  "created_at": "2024-04-14T10:30:00.000Z",
  "updated_at": "2024-04-14T10:30:00.000Z"
}
```

## Development Guide

### Backend Development Patterns

#### Pure Java 21 Implementation
```java
// Example: Pure Java entity without Lombok
public class Lead {
    private String id;
    private String firstName;
    private String email;
    
    // Default constructor
    public Lead() {
        this.id = UUID.randomUUID().toString();
    }
    
    // Parameterized constructor
    public Lead(String firstName, String email) {
        this();
        this.firstName = firstName;
        this.email = email;
    }
    
    // Manual getters and setters
    public String getId() {
        return id;
    }
    
    public void setId(String id) {
        this.id = id;
    }
    
    // Manual equals, hashCode, and toString
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Lead lead = (Lead) o;
        return Objects.equals(id, lead.id);
    }
    
    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
```

#### DTO Validation Pattern
```java
public class LeadCreateRequest {
    @NotBlank(message = "First name is required")
    @Size(min = 2, max = 50, message = "First name must be between 2 and 50 characters")
    private String firstName;
    
    @NotBlank(message = "Email is required")
    @Email(message = "Please provide a valid email address")
    private String email;
    
    // Manual getters and setters...
}
```

### Frontend Development Patterns

#### Component Structure
```typescript
// Example: Advanced AnimatedButton component
interface AnimatedButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  disabled = false
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        'font-medium rounded-lg transition-all duration-200',
        variants[variant],
        sizes[size]
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  )
}
```

#### API Service Pattern
```typescript
// LeadService with Axios interceptors
class LeadService {
  private api: AxiosInstance

  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_API_BASE_URL,
      timeout: 30000
    })
    this.setupInterceptors()
  }

  private setupInterceptors() {
    // Request interceptor for auth and logging
    this.api.interceptors.request.use((config) => {
      const token = localStorage.getItem('auth_token')
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    })

    // Response interceptor for error handling
    this.api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          this.handleUnauthorized()
        }
        return Promise.reject(error)
      }
    )
  }
}
```

## Testing

### Backend Testing
```bash
# Run all tests
mvn test

# Run with coverage
mvn test jacoco:report

# Run specific test class
mvn test -Dtest=LeadServiceTest
```

### Frontend Testing
```bash
# Run unit tests
npm test

# Run with coverage
npm run test:coverage

# Run E2E tests (if configured)
npm run test:e2e
```

## Deployment

### Production Environment Variables

#### Backend (.env)
```env
MONGODB_URI=mongodb://username:password@cluster-host:27017/enterprise_b2b_platform_prod?authSource=admin&ssl=true&replicaSet=rs0
JWT_SECRET=your-production-jwt-secret-key-minimum-32-characters
SPRING_PROFILES_ACTIVE=prod
CORS_ALLOWED_ORIGINS=https://your-vercel-domain.vercel.app
```

#### Frontend (.env.local)
```env
VITE_API_BASE_URL=https://your-backend-domain.com/api/v1
VITE_APP_NAME=Enterprise Platform
VITE_ENABLE_ANALYTICS=true
```

### Docker Production Deployment
```bash
# Build production image
docker build -t enterprise-backend:latest .

# Run with environment variables
docker run -d \
  --name enterprise-backend \
  -p 8080:8080 \
  --env-file .env \
  enterprise-backend:latest
```

### Vercel Frontend Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
cd frontend
vercel --prod

# Set environment variables in Vercel dashboard
```

## Monitoring and Logging

### Backend Monitoring
- **Spring Boot Actuator** - Health checks and metrics
- **Prometheus Metrics** - Performance monitoring
- **Application Logs** - Structured logging with file rotation

### Frontend Monitoring
- **Error Reporting** - Optional Sentry integration
- **Performance Monitoring** - Web Vitals tracking
- **Analytics** - Google Analytics integration (optional)

## Security Considerations

### Backend Security
- **JWT Authentication** - Secure token-based auth
- **CORS Configuration** - Restricted cross-origin requests
- **Input Validation** - Comprehensive DTO validation
- **SQL Injection Prevention** - Parameterized queries
- **HTTPS Enforcement** - SSL/TLS in production

### Frontend Security
- **Content Security Policy** - XSS prevention
- **Environment Variables** - Sensitive data protection
- **Input Sanitization** - Form validation and sanitization
- **Secure Cookies** - HttpOnly and Secure flags

## Contributing

1. **Fork the repository**
2. **Create feature branch** - `git checkout -b feature/amazing-feature`
3. **Commit changes** - Use conventional commit messages
4. **Push to branch** - `git push origin feature/amazing-feature`
5. **Open Pull Request**

### Code Style
- **Backend** - Follow Java conventions, use Checkstyle
- **Frontend** - ESLint + Prettier configuration
- **Commits** - Conventional Commits specification

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions:
- **Email**: contact@enterprise-platform.com
- **Documentation**: Check this README and inline code comments
- **Issues**: Create GitHub issues for bug reports and feature requests

## Roadmap

### Phase 1 (Current)
- [x] Basic lead management system
- [x] 20+ functional pages
- [x] Enterprise UI/UX design
- [x] Docker deployment

### Phase 2 (Planned)
- [ ] User authentication and authorization
- [ ] Advanced analytics dashboard
- [ ] Email notification system
- [ ] Multi-tenant support

### Phase 3 (Future)
- [ ] Real-time collaboration features
- [ ] Advanced reporting system
- [ ] Mobile applications
- [ ] AI-powered insights

---

**Built with enterprise-grade standards for production deployment.**
