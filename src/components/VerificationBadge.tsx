import React from 'react';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';

interface VerificationBadgeProps {
  status: 'verified' | 'pending' | 'not-verified';
  size?: 'sm' | 'md' | 'lg';
}

export const VerificationBadge: React.FC<VerificationBadgeProps> = ({ 
  status, 
  size = 'md' 
}) => {
  const getStatusConfig = () => {
    switch (status) {
      case 'verified':
        return {
          icon: CheckCircle,
          text: 'Verified',
          variant: 'default' as const,
          className: 'bg-green-100 text-green-800 border-green-300'
        };
      case 'pending':
        return {
          icon: Clock,
          text: 'Waiting for Verification',
          variant: 'secondary' as const,
          className: 'bg-yellow-100 text-yellow-800 border-yellow-300'
        };
      case 'not-verified':
        return {
          icon: AlertCircle,
          text: 'Not Verified',
          variant: 'outline' as const,
          className: 'bg-red-100 text-red-800 border-red-300'
        };
    }
  };

  const config = getStatusConfig();
  const Icon = config.icon;
  
  const iconSize = size === 'sm' ? 'w-3 h-3' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4';

  return (
    <Badge variant={config.variant} className={`${config.className} flex items-center space-x-1`}>
      <Icon className={iconSize} />
      <span>{config.text}</span>
    </Badge>
  );
};