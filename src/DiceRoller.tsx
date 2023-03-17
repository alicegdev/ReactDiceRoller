import React, { useState } from 'react';
import BonusScoreAnalysis from './BonusScoreAnalysis';

const DiceRoller: React.FC = () => {
  const [numDice, setNumDice] = useState<number>(5);
  const [diceRolls, setDiceRolls] = useState<number[]>([]);
  const [diceValuesOccurences, setDiceValuesOccurences] = useState<number[]>([]);

  const rollDice = () => {
    let diceValueOccurence = [0, 0, 0, 0, 0];
    let diceIndex = 0
    let diceValues = [];
    while (diceIndex < numDice) {
      let diceValue = Math.floor(Math.random() * (6 - 1) + 1);
      // chaque valeur de dé prend la position avec un offset de -1 dans le tableau
      // et on lui incrémente 1 si on la trouve
      diceValueOccurence[diceValue - 1] += 1;
      diceValues.push(diceValue);
      diceIndex++;
    }
    setDiceRolls(diceValues);
    setDiceValuesOccurences(diceValueOccurence);
    return diceValueOccurence;
  };
    
  return (
    <div>
      <label htmlFor="numDice">Nombre de dés :</label>
      <input type="number" id="numDice" value={numDice} onChange={(e) => setNumDice(parseInt(e.target.value))} />
      <button onClick={rollDice}>Lancer les dés</button>
      <div style={{ display: 'flex' }}>
        <p>Les résultats des dés sont :</p>
        <ul>
        {diceRolls.map((diceRoll, i) => (
        <li key={i} className={'title-'+i}>{diceRoll}</li>
        ))}
      </ul>    
      </div>
    </div>
  );
};

export default DiceRoller;
