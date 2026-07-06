import React, { useState } from "react";
import SearchBar from "./SearchBar.jsx";
import VocabularyCard from "./VocabularyCard.jsx";

const fixedWords = [
  { kaz: 'Сәлем', rus: 'Привет' },
  { kaz: 'Мектеп', rus: 'Школа' },
  { kaz: 'Кітап', rus: 'Книга' },
  { kaz: 'Гүл', rus: 'Цветок' },
  { kaz: 'Алма', rus: 'Яблоко' },
  { kaz: 'Дос', rus: 'Друг' },
  { kaz: 'Нан', rus: 'Хлеб' },
  { kaz: 'Су', rus: 'Вода' },
  { kaz: 'Жақсы', rus: 'Хорошо' },
  { kaz: 'Рақмет', rus: 'Спасибо' },
  { kaz: 'Бала', rus: 'Ребенок' },
  { kaz: 'Тіл', rus: 'Язык' },
  { kaz: 'Отан', rus: 'Родина' },
  { kaz: 'Қала', rus: 'Город' },
  { kaz: 'Әуежай', rus: 'Аэропорт' },
  { kaz: 'Күн', rus: 'День / Солнце' },
  { comment: 'Отбасы', kaz: 'Отбасы', rus: 'Семья' },
  { kaz: 'Жұмыс', rus: 'Работа' }
];

function Vocabulary() {
  const [query, setQuery] = useState('');
  const filteredWords = fixedWords.filter((word) =>
    word.kaz.toLowerCase().includes(query.toLowerCase()) ||
    word.rus.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="App vocabulary-page">
      <div className="vocabulary-header">
        <div>
          <h1 className="vocabulary-title">Жаңа сөздерді үйрену / Изучение новых слов 🦆</h1>
        </div>
        <SearchBar query={query} handleFilter={setQuery} />
      </div>
      
      <div className="word-grid">
        {filteredWords.map((word, index) => (
          <VocabularyCard key={index} word={word} />
        ))}
      </div>
    </div>
  );
}

export default Vocabulary;