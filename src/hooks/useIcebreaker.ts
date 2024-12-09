import { useState } from 'react';
import { ChatResponse } from '../types/icebreaker';

export const useIcebreaker = (selectedCategory: string) => {
  const [icebreaker, setIcebreaker] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previousIcebreakers, setPreviousIcebreakers] = useState<string[]>([]);

  const categories = {
    dare: 'Give a one liner dare. Should be funny and sometimes related to the social media. Response should be less than 25 words. Don\'t mention here\'s another one',
    icebreaker: 'Generate a icebreaker question. Response should be less than 25 words. Don\'t mention here\'s another one',
    joke: 'Generate a joke. Response should be less than 25 words. Don\'t mention here\'s another one',
    thisthat: 'Generate a this or that question. Response should be less than 25 words, Don\'t mention this or that in the response'
  };

  const generateIcebreaker = async () => {
    const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
    const API_URL = 'https://api.groq.com/openai/v1/chat/completions';

    if (!GROQ_API_KEY) {
      setError('Groq API key is missing. Please set VITE_GROQ_API_KEY in your environment.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messages: [
            {
              role: 'system',
              content: `${categories[selectedCategory as keyof typeof categories]}. Max words: 20`
            },
            {
              role: 'user',
              content: `Generate a unique response. Previously used responses: ${previousIcebreakers.join(', ')}`
            }
          ],
          model: 'llama3-8b-8192'
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Something went wrong');
      }

      const data: ChatResponse = await response.json();
      const generatedIcebreaker = data.choices[0]?.message?.content.trim() || 'No icebreaker generated';

      if (previousIcebreakers.includes(generatedIcebreaker)) {
        throw new Error('Duplicate icebreaker generated');
      }

      setIcebreaker(generatedIcebreaker);
      setPreviousIcebreakers(prev => [...prev, generatedIcebreaker].slice(-10));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      console.error('API call error:', err);
    } finally {
      setLoading(false);
    }
  };

  return {
    icebreaker,
    loading,
    error,
    generateIcebreaker,
    categories
  };
};