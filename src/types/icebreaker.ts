export interface ChatResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}

export interface CategoryButtonProps {
  category: string;
  isSelected: boolean;
  onClick: () => void;
}

export interface DisplayPanelProps {
  icebreaker: string;
  error: string | null;
  loading: boolean;
  onGenerate: () => void;
}

export interface CategoryPanelProps {
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
  categories: Record<string, string>;
}