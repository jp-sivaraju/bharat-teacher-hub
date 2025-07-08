
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, Shield, Crown, ArrowLeft } from 'lucide-react';

export const VerificationPlans = () => {
  const plans = [
    {
      name: 'Basic Verification',
      price: '₹999',
      duration: 'One-time',
      features: [
        'Identity Verification',
        'Education Qualification Check',
        'Basic Profile Badge',
        'Standard Support'
      ],
      icon: Shield,
      popular: false
    },
    {
      name: 'Professional Verification',
      price: '₹1,999',
      duration: 'One-time',
      features: [
        'Everything in Basic',
        'Work Experience Verification',
        'Skills Assessment',
        'Premium Profile Badge',
        'Priority Support',
        'Featured Profile Listing'
      ],
      icon: Star,
      popular: true
    },
    {
      name: 'Premium Verification',
      price: '₹3,999',
      duration: 'One-time',
      features: [
        'Everything in Professional',
        'Video Interview Assessment',
        'Background Check',
        'Gold Profile Badge',
        'VIP Support',
        'Top Priority in Search Results',
        'Personal Career Consultant'
      ],
      icon: Crown,
      popular: false
    }
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100">
      <div className="bg-gradient-to-r from-orange-500 to-amber-600 text-white p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Verification Plans</h1>
              <p className="text-orange-100 mt-1">Get verified and stand out to employers</p>
            </div>
          </div>
          <Link to="/">
            <Button variant="secondary" className="bg-white/20 hover:bg-white/30">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Choose Your Verification Level
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Verified profiles get 5x more job opportunities and higher response rates from employers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card 
                key={index}
                className={`relative ${plan.popular ? 'border-orange-500 border-2 transform scale-105' : 'border-gray-200'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-orange-500 text-white">Most Popular</Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      plan.popular ? 'bg-orange-500' : 'bg-gray-500'
                    }`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.duration}</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${plan.popular 
                      ? 'bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700' 
                      : 'bg-gray-600 hover:bg-gray-700'
                    }`}
                  >
                    Get Verified
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Get Verified?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">Build Trust</h4>
                  <p className="text-gray-600">Show employers you're authentic and qualified</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">Stand Out</h4>
                  <p className="text-gray-600">Get priority placement in search results</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Crown className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">More Opportunities</h4>
                  <p className="text-gray-600">Access to premium job postings</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
