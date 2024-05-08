export const CallGPT = async (message: string) => {
  console.log('Call GPT');

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPEN_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
      temperature: 0.7,
      max_tokens: 1_000,
    }),
  });
  const responseData = await response.json();
  console.log(responseData);
  return responseData.choices[0].message.content;
};
