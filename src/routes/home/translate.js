export const dictionaries = [
  {
    word: 'dusting',
    pronoun: "'dʌstiɳ",
    type: 'noun',
    mean: 'Việc quét bụi',
    example: {
      en: 'He is dusting',
      vi: 'Anh ấy đang quét nhà',
    },
  },
  {
    word: 'ironing',
    pronoun: "'aiəniη",
    type: 'noun',
    mean: 'Việc ủi đồ',
    example: {
      en: 'I must ironing tonight',
      vi: 'Tôi phải ủi đồ tối nay',
    },
  },
  {
    word: 'cooking',
    pronoun: "'kukiɳ",
    type: 'noun',
    mean: 'nấu ăn',
    example: {
      en: 'I love cooking',
      vi: 'Tôi thích nấu ăn',
    },
  },
  {
    word: 'countryside',
    type: 'noun',
    pronoun: "'kʌntrisaid",
    mean: 'nông thôn, miền quê',
    example: {
      en:
        'Urban areas are often slightly warmer than the surrounding countryside',
      vi: 'Khu vực thành phố thường ấm hơn một chút so với vùng nông thôn',
    },
  },
  {
    word: 'village',
    type: 'noun',
    mean: 'làng quê',
    example: {
      en: 'Many people come from the village to work in the town.',
      vi: 'Nhiều người từ vùng quê lên thị trấn làm việc',
    },
  },
  {
    word: 'wipe',
    type: 'verb',
    mean: 'lau chùi, làm khô, làm sạch',
    example: {
      en: 'She uses clean tissue to wipe the table',
      vi: 'Cô ấy dùng khăn giấy để lau chùi bàn',
    },
  },
  {
    word: 'sweep',
    type: 'verb',
    mean: 'quét dọn',
    example: {
      en: 'The kid is sweeping',
      vi: 'Cậu bé đang quét nhà',
    },
  },
  {
    word: 'honest',
    type: 'adj',
    mean: 'Thực thà, trung thực, thành thật',
    example: {
      en: 'He had an honest face',
      vi: 'Anh ta có khuôn mặt thực thà',
    },
  },
  {
    word: 'reliable',
    type: 'adj',
    mean: 'đáng tin cậy',
    example: {
      en: "Gideon is very reliable- if he says he'll do something, he'll do it",
      vi:
        'Gideon rất đáng tin cậy- nếu anh ấy nói anh ấy sẽ làm việc gì đó, anh ấy sẽ làm nó',
    },
  },
  {
    word: 'rude',
    type: 'adj',
    mean: 'bất lịch sự, thô lỗ',
    example: {
      en: "He's got bad manners- he's rude to everyone",
      vi:
        'Anh ấy có cách cư xử không lịch sự- anh ấy thô lỗ với tất cả mọi người',
    },
  },
  {
    word: 'selfish',
    type: 'adj',
    mean: 'ích kỷ',
    example: {
      en: "Wonmen don't like selfish men",
      vi: 'Phụ nữ không thích đàn ông ích kỷ',
    },
  },
  {
    word: 'sensitive',
    type: 'adj',
    mean: 'nhạy cảm',
    example: {
      en: 'Her reply showed that she was very sensitive to criticism',
      vi:
        'Câu trả lời của cô ấy cho thấy cô ấy đã quá nhạy cảm với những lời chỉ trích ',
    },
  },
  {
    word: 'stubborn',
    type: 'adj',
    mean: 'bướng bỉnh, ngoan cố',
    example: {
      en: 'His girlfriend is a stubborn girl',
      vi: 'Bạn gái của anh ấy là một cô gái bướng bỉnh',
    },
  },
  {
    word: 'patient',
    type: 'adj',
    mean: 'Kiên nhẫn, nhẫn nại, bền chí',
    example: {
      en: 'Be patient with her- she is very young.',
      vi: 'Hãy kiên nhẫn với cô ấy- cô ấy còn rất trẻ',
    },
  },
  {
    word: 'humorous',
    type: 'adj',
    mean: 'hài hước',
    example: {
      en: 'Her boyfriend is very humorous',
      vi: 'Bạn trai của cô ấy rất hài hước',
    },
  },
  {
    word: 'sincere',
    type: 'adj',
    mean: 'chân thành',
    example: {
      en: 'He seems so sincere.',
      vi: 'Anh ấy dường như rất chân thành.',
    },
  },
  {
    word: 'generous',
    type: 'adj',
    mean: 'rộng lượng',
    example: {
      en: 'He is very generous man.',
      vi: 'Anh ấy là người đàn ông rất rộng lượng.',
    },
  },
  {
    word: 'honest',
    type: 'adj',
    mean: 'thật thà, trung thực, thành thật',
    example: {
      en: 'He had an honest face.',
      vi: 'Anh ấy có một gương mặt trung thực.',
    },
  },
  {
    word: 'kind',
    type: 'adj',
    mean: 'tử tế, tốt bụng',
    example: {
      en: "She's a very kind anh thoughtful person.",
      vi: 'Cô ấy là một người rất tốt bụng và chu đáo.',
    },
  },
];
export default (start) => dictionaries.slice(start, start + 5);
