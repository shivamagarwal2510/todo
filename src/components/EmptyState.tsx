import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';
import { FilterType } from '../types/todo';

interface EmptyStateProps {
  filter: FilterType;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ filter }) => {
  const getMessage = () => {
    switch (filter) {
      case 'active':
        return {
          icon: <CheckCircle2 size={48} className="text-green-400" />,
          title: 'All caught up!',
          subtitle: 'No active todos. Time to add some new tasks or take a break.',
        };
      case 'completed':
        return {
          icon: <Circle size={48} className="text-gray-400" />,
          title: 'No completed todos',
          subtitle: 'Complete some tasks to see them here.',
        };
      default:
        return {
          icon: <Circle size={48} className="text-blue-400" />,
          title: 'Ready to get started?',
          subtitle: 'Add your first todo above to begin organizing your tasks.',
        };
    }
  };

  const { icon, title, subtitle } = getMessage();

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-gray-500 max-w-sm">
        {subtitle}
      </p>
    </div>
  );
};
