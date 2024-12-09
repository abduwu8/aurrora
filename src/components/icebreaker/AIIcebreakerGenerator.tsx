import React, { useState } from 'react';
import { DisplayPanel } from './DisplayPanel';
import { CategoryPanel } from './CategoryPanel';
import { useIcebreaker } from '../../hooks/useIcebreaker';

export const AIIcebreakerGenerator: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Dare');
  const {
    icebreaker,
    loading,
    error,
    generateIcebreaker,
    categories
  } = useIcebreaker(selectedCategory);

  return (
    <div className="flex flex-col lg:flex-row lg:space-x-4 p-4 w-full max-w-7xl mx-auto items-start">
      <DisplayPanel
        icebreaker={icebreaker}
        error={error}
        loading={loading}
        onGenerate={generateIcebreaker}
      />
      <CategoryPanel
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
        categories={categories}
      />
    </div>
  );
};