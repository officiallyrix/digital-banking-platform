CREATE TABLE users (  
  id SERIAL PRIMARY KEY,  
  email VARCHAR(255) UNIQUE NOT NULL,  
  password_hash VARCHAR(255) NOT NULL,  
  first_name VARCHAR(100),  
  last_name VARCHAR(100),  
  date_of_birth DATE,  
  phone_number VARCHAR(20),  
  address TEXT,  
  city VARCHAR(100),  
  country VARCHAR(100),  
  postal_code VARCHAR(20),  
  kyc_verified BOOLEAN DEFAULT FALSE,  
  two_factor_enabled BOOLEAN DEFAULT FALSE,  
  biometric_enabled BOOLEAN DEFAULT FALSE,  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,  
  last_login TIMESTAMP,  
  account_status VARCHAR(50) DEFAULT 'active'  
);  

CREATE INDEX idx_users_email ON users(email);