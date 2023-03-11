export const generateResponse = (input: string): string => {
  const responses = [
    'I am not sure what you mean.',
    'That is an interesting thought.',
    'Can you tell me more about that?',
    'I see what you mean.',
    'Interesting, please go on.',
    'That is a good point.',
    'I need more information before I can respond to that.',
  ];

  const randomIndex = Math.floor(Math.random() * responses.length);
  const randomResponse = responses[randomIndex];

  if (input.endsWith('?')) {
    return `${randomResponse} What do you think?`;
  } else if (input.endsWith('!')) {
    return `${randomResponse} That's exciting!`;
  } else {
    return `${randomResponse} Tell me more.`;
  }
};
