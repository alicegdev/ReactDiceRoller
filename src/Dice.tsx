import React from "react";
import { useState } from "react";

interface DiceProps {
  onRoll: (result: number) => void;
}

const Dice: React.FC<DiceProps> = ({ onRoll }) => {
  const [rollResult, setRollResult] = useState<number>(0);

  const rollDice = () => {
    const result = Math.floor(Math.random() * 6) + 1;
    setRollResult(result);
    onRoll(result);
  };
  
    return (
      <div>
        {rollResult > 0 && `Résultat du dé : ${rollResult }`}
        </div>
  );
  
};

export default Dice;
