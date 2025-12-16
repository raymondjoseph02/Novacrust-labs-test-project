# Crypto Exchange Application

A modern, responsive cryptocurrency exchange interface built with Next.js, TypeScript, and Tailwind CSS following atomic design principles.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

## 📋 Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [User Flow](#user-flow)
- [Features](#features)
- [Component Structure](#component-structure)
- [Validation](#validation)
- [Loading States](#loading-states)
- [Development Guide](#development-guide)
- [Tech Stack](#tech-stack)

## 🎯 Overview

This application provides a seamless cryptocurrency exchange experience with three main functionalities:
- **Crypto to Cash**: Convert cryptocurrency to fiat currency
- **Cash to Crypto**: Purchase cryptocurrency with fiat currency  
- **Crypto to Fiat Loan**: Get fiat loans backed by crypto assets

## 🏗️ Architecture

### Atomic Design Structure

The application follows atomic design principles with a clear component hierarchy:

```
app/
├── atom/           # Basic building blocks
├── molecules/      # Simple component groups
├── organisms/      # Complex UI sections
├── templates/      # Page layouts
└── types/          # TypeScript interfaces
```

### Directory Structure

```
├── app/
│   ├── atom/
│   │   ├── AmountInput.tsx       # Numeric input with validation
│   │   ├── Button.tsx            # Button with loading states
│   │   ├── CurrencyDropdown.tsx  # Currency selection dropdown
│   │   ├── PhoneInput.tsx        # Phone input with country codes
│   │   ├── Select.tsx            # Generic select dropdown
│   │   └── TextInput.tsx         # Text input with validation
│   ├── molecules/
│   │   ├── CurrencyInputPanel.tsx # Amount + Currency selector
│   │   ├── Tab.tsx               # Tab navigation component
│   │   └── WalletSelector.tsx    # Wallet selection interface
│   ├── organisms/
│   │   ├── CryptoExchangeForm.tsx    # Main conversion form
│   │   ├── RecipientDetailsForm.tsx  # Email/phone collection
│   │   └── SendConfirmationForm.tsx  # Transaction confirmation
│   ├── templates/
│   │   ├── CryptoExchangePage.tsx    # Landing page layout
│   │   ├── RecipientDetailsPage.tsx  # Details form layout
│   │   └── SendConfirmationPage.tsx  # Confirmation layout
│   ├── types/
│   │   └── interface.tsx         # TypeScript type definitions
│   ├── data.tsx                  # Static data (currencies, wallets)
│   └── page.tsx                  # Main navigation controller
```

## 🔄 User Flow

### Complete Transaction Journey

```
Landing Page → Select Transaction Type → Fill Conversion Details → 
Form Validation → Click 'Convert Now' → Loading State (2s) → 
Recipient Details Page → Enter Email & Phone → Real-time Validation → 
Click 'Next' → Loading State (1.5s) → Send Confirmation Page → 
Copy Wallet Address → Confirm Transaction → Loading State (3s) → 
Transaction Complete
```

### Step-by-Step Process

#### Step 1: Crypto Exchange Form
1. **Tab Selection**: Choose transaction type
   - Crypto to cash
   - Cash to crypto  
   - Crypto to fiat loan

2. **Amount Entry**: 
   - Enter amount to pay (validation: positive numbers only)
   - Amount automatically validates on input

3. **Currency Selection**:
   - Select "pay" currency from dropdown
   - Select "receive" currency from dropdown  
   - Currencies cannot be the same

4. **Wallet Configuration**:
   - Choose "Pay from" wallet source
   - Choose "Pay to" destination wallet

5. **Form Validation**: Button enables only when:
   - All amounts are valid positive numbers
   - All currency selections are made
   - Different currencies selected for pay/receive
   - Both wallet options selected

6. **Submission**: Click "Convert now" triggers 2-second loading

#### Step 2: Recipient Details Form
1. **Email Input**:
   - Enter recipient email address
   - Real-time email format validation
   - Visual feedback (red/green borders)

2. **Phone Input**:
   - Select country code (+234 Nigeria default)
   - Enter phone number (10-15 digits)
   - Automatic format cleaning (removes spaces, dashes)
   - Real-time phone validation

3. **Form Validation**: Button enables only when:
   - Valid email format entered
   - Valid phone number (10-15 digits)

4. **Submission**: Click "Next" triggers 1.5-second loading

#### Step 3: Send Confirmation
1. **Wallet Address Display**:
   - Shows crypto wallet address
   - Copy-to-clipboard functionality
   - Address: `4LiV4YjbxsL6739MKghUd`

2. **Transaction Summary**:
   - Amount to send: 100 ETH
   - Network: ETH
   - Wallet: Other

3. **Important Warning**:
   - Network compatibility notice
   - USDT/CELO network requirements

4. **Final Confirmation**: Click "I have sent it" triggers 3-second loading

## ✨ Features

### Form Validation
- **Real-time validation** with visual feedback
- **Email validation** using regex patterns
- **Phone validation** supporting international formats
- **Amount validation** ensuring positive numeric input
- **Currency validation** preventing same currency selection

### Loading States
- **Button spinners** with white rotating indicators
- **Disabled states** during processing
- **Visual feedback** through color changes
- **Different durations** based on operation complexity

### User Experience
- **Click-outside-to-close** dropdown functionality
- **Keyboard navigation** support
- **Responsive design** for all screen sizes
- **Intuitive navigation** with back button support

### Security Features
- **Input sanitization** removing malicious characters
- **Validation on both client** for immediate feedback
- **Type safety** with TypeScript throughout

## 🧩 Component Structure

### Atoms (Basic Components)

#### AmountInput
```typescript
interface AmountInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
}
```
- Numeric input with validation
- Only allows positive numbers and decimals
- Real-time validation feedback

#### Button
```typescript
interface ButtonProps {
  text: string;
  onClick: () => void;
  style?: string;
  isDisable: boolean;
  isLoading?: boolean;
}
```
- Loading state with spinner
- Disabled state handling
- Customizable styling

#### CurrencyDropdown
- Searchable dropdown for currencies
- Fixed dimensions (264px × 244px)
- Click-outside-to-close functionality

#### PhoneInput
- Country code selection
- Phone number validation
- International format support

#### TextInput
- Email/text input with validation
- Visual validation feedback
- Error/success states

### Molecules (Component Groups)

#### CurrencyInputPanel
- Combines AmountInput + CurrencyDropdown
- Manages amount and currency state
- Provides labeled input sections

#### Tab
- Navigation between transaction types
- Active state management
- Click handling for tab switching

#### WalletSelector
- Wallet selection interface
- Dropdown with wallet options
- Icon support for different wallets

### Organisms (Complex Sections)

#### CryptoExchangeForm
- Complete conversion interface
- Form validation logic
- Loading state management
- Tab navigation integration

#### RecipientDetailsForm
- Email and phone collection
- Comprehensive validation
- Progressive form enabling

#### SendConfirmationForm
- Transaction confirmation interface
- Copy-to-clipboard functionality
- Final submission handling

### Templates (Page Layouts)

#### CryptoExchangePage
- Landing page layout
- Form container with background
- Responsive design structure

#### RecipientDetailsPage
- Details form layout
- Centered form presentation
- Navigation handling

#### SendConfirmationPage
- Confirmation interface layout
- Transaction summary presentation
- Final step handling

## ✅ Validation

### Email Validation
```typescript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```
- Standard email format validation
- Real-time feedback
- Visual border color changes

### Phone Validation  
```typescript
const phoneRegex = /^\d{10,15}$/;
const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
```
- 10-15 digit validation
- Automatic format cleaning
- International number support

### Amount Validation
```typescript
const numericRegex = /^\d*\.?\d*$/;
```
- Positive numbers only
- Decimal support
- Real-time input filtering

### Form State Validation
- **Complete form validation** before submission
- **Cross-field validation** (different currencies)
- **Dynamic button states** based on validity

## ⏳ Loading States

### Implementation Details

#### Button Loading State
```typescript
{isLoading && (
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
  </div>
)}
```

#### Loading Durations
- **Conversion Form**: 2 seconds (API simulation)
- **Recipient Details**: 1.5 seconds (validation)  
- **Send Confirmation**: 3 seconds (blockchain simulation)

#### State Management
```typescript
const handleSubmission = async () => {
  setIsLoading(true);
  try {
    await simulatedAPICall();
    onSuccess();
  } catch (error) {
    handleError(error);
  } finally {
    setIsLoading(false);
  }
};
```

## 💾 Data Management

### Cryptocurrency Data
```typescript
export const cryptocurrencies = [
  {
    symbol: "ETH",
    name: "Ethereum", 
    icon: <img src="/images/eth.png" className="w-6 h-6 rounded-full" />
  },
  // Additional currencies...
];
```

### Wallet Configuration
```typescript
export const wallets = [
  {
    label: "Metamask",
    icon: <div className="w-6 h-6 bg-orange-500 rounded-full">🦊</div>,
    value: "metamask"
  },
  // Additional wallets...
];
```

### Transaction Types
```typescript
export const tabs = [
  "Crypto to cash", 
  "Cash to crypto", 
  "Crypto to fiat loan"
];
```

## 🎨 Styling

### Design System
- **Colors**: Green primary (`green-100`), gray neutrals
- **Typography**: Outfit font family
- **Spacing**: Consistent padding/margin scale  
- **Borders**: Rounded corners (`rounded-[30px]`)
- **Shadows**: Subtle shadow system

### Responsive Design
- **Mobile-first** approach
- **Flexible layouts** with CSS Grid/Flexbox
- **Consistent spacing** across breakpoints
- **Touch-friendly** interactive elements

## 🧪 Development Guide

### Getting Started
1. **Clone the repository**
2. **Install dependencies**: `npm install`
3. **Start development server**: `npm run dev`
4. **Open [http://localhost:3000](http://localhost:3000)**

### Development Workflow
1. **Create atomic components** in `/app/atom/`
2. **Combine into molecules** in `/app/molecules/`
3. **Build organisms** in `/app/organisms/`
4. **Design templates** in `/app/templates/`
5. **Update navigation** in `/app/page.tsx`

### Code Standards
- **TypeScript** for type safety
- **Atomic design** principles
- **Component composition** over inheritance
- **Props interface** for all components
- **Error handling** in async operations

### Testing
```bash
npm run build    # Test production build
npm run lint     # Check code quality
```

## 📱 Tech Stack

### Core Technologies
- **Next.js 16.0.10** - React framework
- **React 19.2.1** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Styling framework

### Development Tools  
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Framer Motion** - Animations
- **Lucide React** - Icon library

### Build Tools
- **Turbopack** - Fast bundler
- **TypeScript compiler** - Type checking
- **Static generation** - Optimized builds

## 🚀 Deployment

### Production Build
```bash
npm run build
npm start
```

### Environment Setup
- **Node.js 18+** required
- **npm 9+** recommended
- **Modern browser** support

### Performance Optimizations
- **Static generation** for fast loading
- **Image optimization** with Next.js Image
- **Code splitting** for smaller bundles
- **CSS optimization** with Tailwind

## 🤝 Contributing

### Development Process
1. **Fork the repository**
2. **Create feature branch**: `git checkout -b feature/amazing-feature`
3. **Follow atomic design** principles
4. **Add TypeScript types** for new components
5. **Test thoroughly** before submission
6. **Commit changes**: `git commit -m 'Add amazing feature'`
7. **Push to branch**: `git push origin feature/amazing-feature`
8. **Open Pull Request**

### Code Guidelines
- **Atomic design** component organization
- **TypeScript** for all new code
- **Responsive design** considerations
- **Accessibility** best practices
- **Performance** optimization

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For questions or support, please open an issue in the repository or contact the development team.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
