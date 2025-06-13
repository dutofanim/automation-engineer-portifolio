# EmailJS Setup Instructions

## EmailJS Configuration Required

To complete the email functionality, you need to set up EmailJS:

### 1. Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Note your **Service ID**

### 3. Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Message from {{from_name}}

Hello {{to_name}},

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

Best regards,
Portfolio Contact Form
```

4. Note your **Template ID**

### 4. Get Public Key
1. Go to "Account" > "General"
2. Find your **Public Key**

### 5. Update App.jsx
Replace these placeholders in the `handleFormSubmit` function:
- `YOUR_SERVICE_ID` with your actual Service ID
- `YOUR_TEMPLATE_ID` with your actual Template ID  
- `YOUR_PUBLIC_KEY` with your actual Public Key

### Example Configuration:
```javascript
const serviceId = 'service_abc123'
const templateId = 'template_xyz789'
const publicKey = 'user_def456'
```

## Testing
1. After updating the configuration, test the form
2. Check your email for received messages
3. Verify form clearing works after successful submission

## Security Note
The public key is safe to use in frontend code as it's designed for client-side use.

