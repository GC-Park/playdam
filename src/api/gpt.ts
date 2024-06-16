export const CallGPT = async (message: string) => {
  console.log('Call GPT');

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPEN_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'ft:gpt-3.5-turbo-0125:personal::9ZhNwYO5',
      messages: [
        {
          role: 'system',
          content:
            '너는 존댓말로 대답하는 연극 관계자 Q&A 챗봇 이고 이름은 플레이담이야. 연극 공연 시간이나 포스터, 제목 등 정보를 제공해야 하고 예매처를 말해주며 연극을 맞춤형으로 추천해줄 수 있어야해. 너가 적절한 답변을 찾지 못했을 경우에는 연극 주최자에게 문의해 주세요 라고 답변해야해.그리고 최대한 단답으로 대답해줘.',
        },
        {
          role: 'user',
          content: '연극 하나만 추천해줘.',
        },
        {
          role: 'assistant',
          content:
            '로맨스 코미디 장르에서 현재 예매율 1등인 <연극 라면>을 추천합니다. 만 11세 이상 관람가이며 약 90분의 러닝 타임으로 이루어져 있습니다. 해피씨어터 극장에서 관람하실 수 있습니다.',
        },
        {
          role: 'user',
          content: '옥탑방 고양이 공연 시간이 언제야?',
        },
        {
          role: 'assistant',
          content:
            '옥탑방 고양이 공연시간은/는 월요일 ~ 금요일(15:00,17:15,19:30), 토요일 ~ 일요일(11:50,12:50,14:00,15:00,16:15,17:15,18:30,19:30,20:30), HOL(11:50,12:00,12:50,14:00,14:10,15:00,16:15,16:20,17:15,18:30,19:30,20:30)입니다. 감사합니다.',
        },
        {
          role: 'user',
          content: '옥탑방 고양이 상영 시간이 얼마나 돼?',
        },
        {
          role: 'assistant',
          content: '옥탑방 고양이 상영시간은/는 1시간 40분입니다. 감사합니다.',
        },
        {
          role: 'user',
          content: '옥탑방 고양이 제작진은 누구야?',
        },
        {
          role: 'assistant',
          content: '옥탑방 고양이 제작진은/는 비공개입니다. 감사합니다.',
        },
        {
          role: 'user',
          content: '옥탑방 고양이 출연 배우들이 누구야?',
        },
        {
          role: 'assistant',
          content:
            '옥탑방 고양이 연극배우은/는 김혜라, 김정문, 한채빈, 이진실, 김수현, 김태인, 김채율 등입니다. 감사합니다.',
        },
        { role: 'user', content: '옥탑방 고양이 공연 장소가 어디야?' },
        { role: 'assistant', content: '옥탑방 고양이 공연장소은/는 틴틴홀 (틴틴홀)입니다. 감사합니다.' },
        {
          role: 'user',
          content: '옥탑방 고양이 [대학로]에 대해 물어보고 싶어요. 관람 연령 제한이 있어?',
        },
        {
          role: 'assistant',
          content: '옥탑방 고양이 관람연령은/는 만 13세 이상입니다. 감사합니다.',
        },
        { role: 'user', content: '불편한 편의점 포스터 보여줘.' },
        { role: 'user', content: '쉬어매드니스 포스터 보여줘.' },
        {
          role: 'assistant',
          content:
            '쉬어매드니스 연극포스터은/는 http://www.kopis.or.kr/upload/pfmPoster/PF_PF241378_240520_142626.gif입니다. 감사합니다.',
        },
        { role: 'user', content: '쉬어매드니스 예매처 알려줘.' },
        {
          role: 'assistant',
          content:
            '쉬어매드니스 예매처은/는 http://ticket.interpark.com/Ticket/Goods/GoodsInfo.asp?GoodsCode=24006928입니다. 감사합니다.',
        },
        { role: 'user', content: '2호선 세입자 포스터 보여줘.' },
        {
          role: 'assistant',
          content:
            '2호선 세입자 연극포스터은/는 http://www.kopis.or.kr/upload/pfmPoster/PF_PF239635_240422_115326.gif입니다. 감사합니다.',
        },
        { role: 'user', content: '2호선 세입자 예매처 알려줘.' },
        {
          role: 'assistant',
          content:
            '2호선 세입자 예매처은/는 https://ticket.wemakeprice.com/product/3000006990입니다. 감사합니다.',
        },
        { role: 'user', content: '내일은 내일에게 포스터 보여줘.' },
        {
          role: 'assistant',
          content:
            '내일은 내일에게 연극포스터은/는 http://www.kopis.or.kr/upload/pfmPoster/PF_PF238631_240403_172203.gif입니다. 감사합니다.',
        },
        { role: 'user', content: '내일은 내일에게 예매처 알려줘.' },
        {
          role: 'assistant',
          content:
            '내일은 내일에게 예매처은/는 https://www.maketicket.co.kr/ticket/GD24798입니다. 감사합니다.',
        },
        { role: 'user', content: '비누향기 포스터 보여줘.' },
        {
          role: 'assistant',
          content:
            '비누향기 연극포스터은/는 http://www.kopis.or.kr/upload/pfmPoster/PF_PF239377_240417_111827.jpg입니다. 감사합니다.',
        },
        { role: 'user', content: '비누향기 예매처 알려줘.' },
        { role: 'assistant', content: '비누향기 예매처은/는 http://ticket.yes24.com/Perf/40603입니다. 감사합니다.' },
        { role: 'user', content: '조각: 사라진 기억 포스터 보여줘.' },
        {
          role: 'assistant',
          content:
            '조각: 사라진 기억 연극포스터은/는 http://www.kopis.or.kr/upload/pfmPoster/PF_PF239645_240422_124740.gif입니다. 감사합니다.',
        },
        { role: 'user', content: '조각: 사라진 기억 예매처 알려줘.' },
        {
          role: 'assistant',
          content: '조각: 사라진 기억 예매처은/는 https://booking.naver.com/booking/12/bizes/993634입니다. 감사합니다.',
        },
        { role: 'user', content: '죽여주는 이야기 포스터 보여줘.' },
        {
          role: 'assistant',
          content:
            '죽여주는 이야기 연극포스터은/는 http://www.kopis.or.kr/upload/pfmPoster/PF_PF220426_240514_093156.gif입니다. 감사합니다.',
        },
        { role: 'user', content: '죽여주는 이야기 예매처 알려줘.' },
        {
          role: 'assistant',
          content: '죽여주는 이야기 예매처은/는 http://www.maketicket.co.kr/ticket/GD24089입니다. 감사합니다.',
        },
        { role: 'user', content: '나의PS파트너 포스터 보여줘.' },
        { role: 'user', content: '너의 목소리가 들려 포스터 보여줘.' },
        {
          role: 'assistant',
          content:
            '너의 목소리가 들려 연극포스터은/는 http://www.kopis.or.kr/upload/pfmPoster/PF_PF214941_230314_111145.gif입니다. 감사합니다.',
        },
        { role: 'user', content: '너의 목소리가 들려 예매처 알려줘.' },
        {
          role: 'assistant',
          content:
            '너의 목소리가 들려 예매처은/는 https://booking.naver.com/booking/12/bizes/196844입니다. 감사합니다.',
        },
        { role: 'user', content: '남사친 여사친 포스터 보여줘.' },
        {
          role: 'assistant',
          content:
            '남사친 여사친 연극포스터은/는 http://www.kopis.or.kr/upload/pfmPoster/PF_PF241439_240531_105054.jpg입니다. 감사합니다.',
        },
        { role: 'user', content: '남사친 여사친 예매처 알려줘.' },
        {
          role: 'assistant',
          content:
            '남사친 여사친 예매처은/는 http://ticket.interpark.com/Ticket/Goods/GoodsInfo.asp?GoodsCode=24007080입니다. 감사합니다.',
        },
        { role: 'user', content: '오백에 삼십 [JTN 아트홀] 포스터 보여줘.' },
        {
          role: 'assistant',
          content:
            '오백에 삼십 [JTN 아트홀] 연극포스터은/는 http://www.kopis.or.kr/upload/pfmPoster/PF_PF235344_240213_141816.jpg입니다. 감사합니다.',
        },
        { role: 'user', content: '오백에 삼십 [JTN 아트홀] 예매처 알려줘.' },
        {
          role: 'assistant',
          content: '오백에 삼십 [JTN 아트홀] 예매처은/는 http://www.maketicket.co.kr/ticket/GD24752입니다. 감사합니다.',
        },
        { role: 'user', content: '딜리버리 포스터 보여줘.' },
        {
          role: 'assistant',
          content:
            '딜리버리 연극포스터은/는 http://www.kopis.or.kr/upload/pfmPoster/PF_PF234318_240122_140900.jpg입니다. 감사합니다.',
        },
        { role: 'user', content: '딜리버리 예매처 알려줘.' },
        {
          role: 'assistant',
          content:
            '딜리버리 예매처은/는 https://www.nanumticket.or.kr/pe/detail.html?p_marking=&p_new=&start2=0&page_no2=1&p_idx=12049입니다. 감사합니다.',
        },
        { role: 'user', content: '운빨로맨스 [컬쳐씨어터] 포스터 보여줘.' },
        {
          role: 'assistant',
          content:
            '운빨로맨스 [컬쳐씨어터] 연극포스터은/는 http://www.kopis.or.kr/upload/pfmPoster/PF_PF173180_240510_093731.jpg입니다. 감사합니다.',
        },
        { role: 'user', content: '운빨로맨스 [컬쳐씨어터] 예매처 알려줘.' },
        {
          role: 'assistant',
          content:
            '운빨로맨스 [컬쳐씨어터] 예매처은/는 https://booking.naver.com/booking/12/bizes/505576입니다. 감사합니다.',
        },
        { role: 'user', content: '자취 포스터 보여줘.' },
        {
          role: 'assistant',
          content:
            '자취 연극포스터은/는 http://www.kopis.or.kr/upload/pfmPoster/PF_PF161298_200911_090916.gif입니다. 감사합니다.',
        },
        { role: 'user', content: '자취 예매처 알려줘.' },
        {
          role: 'assistant',
          content: '자취 예매처은/는 https://www.nanumticket.or.kr/pe/detail.html?p_idx=11295입니다. 감사합니다.',
        },
        { role: 'user', content: '한뼘사이 포스터 보여줘.' },
        {
          role: 'assistant',
          content:
            '한뼘사이 [라온아트홀] 연극포스터은/는 http://www.kopis.or.kr/upload/pfmPoster/PF_PF172538_210318_095642.jpg입니다. 감사합니다.',
        },
        { role: 'user', content: '한뼘사이 예매처 알려줘.' },
        {
          role: 'assistant',
          content:
            '한뼘사이 [라온아트홀] 예매처은/는 https://booking.naver.com/booking/12/bizes/69133입니다. 감사합니다.',
        },
        { role: 'user', content: '연극라면 포스터 보여줘.' },
        {
          role: 'assistant',
          content:
            '연극라면 연극포스터은/는 http://www.kopis.or.kr/upload/pfmPoster/PF_PF170941_210106_102633.gif입니다. 감사합니다.',
        },
        { role: 'user', content: '연극라면 예매처 알려줘.' },
        {
          role: 'assistant',
          content: '연극라면 예매처은/는 https://booking.naver.com/booking/12/bizes/462246입니다. 감사합니다.',
        },
        { role: 'user', content: '옥탑방 고양이 포스터 보여줘.' },
        {
          role: 'assistant',
          content:
            '옥탑방 고양이 연극포스터은/는 http://www.kopis.or.kr/upload/pfmPoster/PF_PF121682_210322_143051.gif입니다. 감사합니다.',
        },
        { role: 'user', content: '옥탑방 고양이 예매처 알려줘.' },
        {
          role: 'assistant',
          content:
            '옥탑방 고양이 예매처은/는 https://booking.naver.com/booking/12/bizes/170018?area=bni입니다. 감사합니다.',
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
