import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

// Fisher-Yates shuffle algorithm
const shuffleArray = (array: any[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const questions = [
  {
    text: 'Which planet has the most visible rings?',
    options: ['Mars', 'Saturn', 'Venus'],
    correct: 'Saturn',
  },
  {
    text: 'Which is the closest planet to the Sun?',
    options: ['Mercury', 'Venus', 'Earth'],
    correct: 'Mercury',
  },
  {
    text: 'Which planet is known as the Red Planet?',
    options: ['Jupiter', 'Mars', 'Uranus'],
    correct: 'Mars',
  },
  {
    text: 'Which planet is the largest?',
    options: ['Earth', 'Jupiter', 'Saturn'],
    correct: 'Jupiter',
  },
];

export default function QuizScreen() {
  const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
  };

  const [question, setQuestion] = useState({
    ...getRandomQuestion(),
    shuffledOptions: shuffleArray(getRandomQuestion().options)
  });
  const [selected, setSelected] = useState<string | null>(null);

  const handleAnswer = (option: string) => {
    setSelected(option);
    const isCorrect = option === question.correct;
    Alert.alert(isCorrect ? '✅ Correct!' : '❌ Wrong!', `Answer: ${question.correct}`);
  };

  const refreshQuiz = () => {
    setSelected(null);
    const randomQuestion = getRandomQuestion();
    setQuestion({
      ...randomQuestion,
      shuffledOptions: shuffleArray(randomQuestion.options)
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}> Test Your Knowledge</Text>
      <Text style={styles.question}>{question.text}</Text>

      {question.shuffledOptions.map((option) => (
        <TouchableOpacity
          key={option}
          style={[
            styles.option,
            selected === option && {
              backgroundColor: option === question.correct ? 'green' : 'red',
            },
          ]}
          onPress={() => handleAnswer(option)}
          disabled={!!selected}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.refreshButton} onPress={refreshQuiz}>
        <Text style={styles.refreshText}>🔄 Refresh Quiz</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    alignItems: 'center',
    backgroundColor: '#fff',
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  question: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  option: {
    backgroundColor: '#eee',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    width: '100%',
  },
  optionText: {
    fontSize: 16,
    textAlign: 'center',
  },
  refreshButton: {
    marginTop: 30,
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
  },
  refreshText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
