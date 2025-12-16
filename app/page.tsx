"use client";
import { useState } from "react";
import { CryptoExchangePage } from "./templates/CryptoExchangePage";
import { RecipientDetailsPage } from "./templates/RecipientDetailsPage";
import { SendConfirmationPage } from "./templates/SendConfirmationPage";

export default function Home() {
  const [currentStep, setCurrentStep] = useState<'exchange' | 'recipient' | 'send'>('exchange');

  const handleConvertNow = () => {
    setCurrentStep('recipient');
  };

  const handleRecipientNext = () => {
    setCurrentStep('send');
  };

  const handleBackToExchange = () => {
    setCurrentStep('exchange');
  };

  const handleBackToRecipient = () => {
    setCurrentStep('recipient');
  };

  const handleSendConfirmation = () => {
    // This would typically navigate to success page or complete the transaction
    console.log('Transaction confirmed!');
    // For demo, go back to start
    setCurrentStep('exchange');
  };

  if (currentStep === 'send') {
    return (
      <SendConfirmationPage
        onConfirm={handleSendConfirmation}
        onBack={handleBackToRecipient}
      />
    );
  }

  if (currentStep === 'recipient') {
    return (
      <RecipientDetailsPage
        onNext={handleRecipientNext}
        onBack={handleBackToExchange}
      />
    );
  }

  return <CryptoExchangePage onConvertNow={handleConvertNow} />;
}
