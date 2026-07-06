import React from 'react';
import './App.css';

function VocabularyCard({ word }) {
  return (
    <div className="word-card">
      <div className="word-card__info">
        <div className="word-kaz">{word.kaz}</div>
        <div className="word-rus">{word.rus}</div>
      </div>
    </div>
  );
}

export default VocabularyCard;