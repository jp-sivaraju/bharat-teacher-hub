
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Star, Shield, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const verificationPlans = [
  {
    id: 'basic',
    name: 'Basic Verification',
    price: '₹499',
    duration: '3-5 business days',
    features: [
      'Identity Verification',
      'Educational Qualification Check',
      'Basic Background Check',
      'Verified Badge on Profile'
    ],
    icon: Shield,
    popular: false
  },
  {
    id: 'premium',
    name: 'Premium Verification',
    price: '₹999',
    duration: '2-3 business days',
    features: [
      'All Basic Verification features',
      'Employment History Verification',
      'Professional Reference Check',
      'Criminal Background Check',
      'Priority Support',
      'Premium Verified Badge'
    ],
    icon: Star,
    popular: true
  },
  {
    id: 'expert',
    name: 'Expert Verification',
    price: '₹1,999',
    duration: '1-2 business days',
    features: [
      'All Premium Verification features',
      'Skill Assessment Test',
      'Video Interview Verification',
      'Teaching Demo Evaluation',
      'Expert Certified Badge',
      'Priority Job Matching',
      'Dedicated Account Manager'
    ],
    icon: Award,
    popular: false
  }
];

export const VerificationPlans = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <div className="p-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <Link to="/teacher-dashboard">
              <Button variant="outline" className="mb-4">
                ← Back to Dashboard
              </Button>
            </Link>
          </div>

          <div className="text-center space-y-4 mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
              Verification Plans
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Choose a verification plan that suits your needs and boost your credibility with potential employers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {verificationPlans.map((plan) => {
              const Icon = plan.icon;
              return (
                <Card 
                  key={plan.id} 
                  className={`border-2 ${plan.popular ? 'border-orange-300 shadow-xl' : 'border-gray-200'} relative`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-orange-500 to-blue-600 text-white">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-orange-500 to-blue-600' 
                          : 'bg-gray-100'
                      }`}>
                        <Icon className={`w-8 h-8 ${plan.popular ? 'text-white' : 'text-gray-600'}`} />
                      </div>
                    </div>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-orange-600">{plan.price}</div>
                      <div className="text-sm text-gray-600">Processing: {plan.duration}</div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      className={`w-full ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700' 
                          : ''
                      }`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      Choose {plan.name}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <div className="bg-blue-50 rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Why Get Verified?
              </h3>
              <p className="text-blue-700">
                Verified teachers get 3x more profile views and are 5x more likely to be hired. 
                Stand out from the competition and build trust with potential employers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
