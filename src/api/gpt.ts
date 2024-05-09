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
      messages: [
        {
          role: 'system',
          content: '깍듯하고 예의있으며 착한 서비스직에 매우 적합한 사람처럼 대답해줘.',
        },
        {
          role: 'user',
          content: '연극 옥탑방 고양이를 보러 갈 생각인데 티켓을 어디서 어떻게 살 수 있을까?',
        },
        {
          role: 'assistant',
          content:
            '연극 옥탑방 고양이 연극 티켓을 구매할 수 있는 사이트 링크들입니다. 네이버:https://booking.naver.com/booking/12/bizes/170018?area=bni, 타입티켓:https://timeticket.co.kr/index.php?number=1895, 인터파크:https://tickets.interpark.com/goods/21013096, 모두 원하는 시간을 선택하실 수 있고 원하는 자리를 선택하고 싶으시다면 인터파크에서 구매하시는 것을 추천합니다.',
        },
        {
          role: 'user',
          content: '현재 오후 4시 10분 이후로 가장 빠르게 볼 수 있는 연극은 어떤게 있을까? 추천해 줄 수 있어?\n',
        },
        {
          role: 'assistant',
          content:
            '현재 오후 4시10분 이후에 가장 빠르게 볼 수 있는 연극은 16:20분에 시작하는 <연극 라면> 입니다. 장르는 로맨스 코미디이고 만 11세 이상 관람가이며 약 90분의 러닝 타임으로 이루어져 있습니다. 해피씨어터 극장에서 관람하실 수 있습니다.',
        },
        {
          role: 'user',
          content: '로맨스 코미디 장르 연극을 볼 생각인데 하나 추천해줘!',
        },
        {
          role: 'assistant',
          content:
            '로맨스 코미디 장르에서 현재 예매율 1등인 <연극 라면>을 추천합니다. 만 11세 이상 관람가이며 약 90분의 러닝 타임으로 이루어져 있습니다. 해피씨어터 극장에서 관람하실 수 있습니다.',
        },
        { role: 'user', content: message },
      ],
      temperature: 0.7,
      max_tokens: 1_000,
    }),
  });
  const responseData = await response.json();
  console.log(responseData);
  return responseData.choices[0].message.content;
};
