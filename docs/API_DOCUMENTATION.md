# API Documentation for Digital Banking Platform

## Introduction
This documentation provides comprehensive details about the REST API endpoints for the Digital Banking Platform. Each endpoint includes information on the required parameters, request formats, response formats, and error handling.

## Authentication
All API requests require authentication. Users must include a valid API key or token in the request headers.

## Endpoints

### 1. **Get Account Details**
- **Endpoint:** `GET /api/v1/accounts/{accountId}`  
- **Description:** Retrieve details of a specific account.  
- **Parameters:**  
  - `accountId`: The unique identifier of the account (required).  
- **Response:**  
  - 200 OK: Returns account details.  
  - 404 Not Found: If the account does not exist.  

### 2. **Create Transfer**
- **Endpoint:** `POST /api/v1/transfers`  
- **Description:** Initiate a fund transfer between two accounts.  
- **Request Body:**  
  ```json
  {
      "fromAccountId": "string",
      "toAccountId": "string",
      "amount": number
  }
  ```  
- **Response:**  
  - 201 Created: Transfer successfully initiated.  
  - 400 Bad Request: If the request body is invalid.  

### 3. **Get Transaction History**
- **Endpoint:** `GET /api/v1/accounts/{accountId}/transactions`  
- **Description:** Retrieve transaction history for a specific account.  
- **Parameters:**  
  - `accountId`: The unique identifier of the account (required).  
- **Response:**  
  - 200 OK: Returns a list of transactions.  
  - 404 Not Found: If the account does not exist.  

### Error Handling
Error responses are standardized with the structure:
```json
{
    "errorCode": "string",
    "message": "string"
}
```

## Conclusion
Refer to this documentation for a complete list of endpoints and their specifications. For any additional information, please contact the support team.