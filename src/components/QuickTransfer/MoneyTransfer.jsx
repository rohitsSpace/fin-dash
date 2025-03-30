import React, { useState } from "react";
import { SendIcon } from "../icons";
import {
  AmountInput,
  InputContainer,
  SendButton,
  TransferContainer,
} from "./styles";

const MoneyTransfer = () => {
  const [amount, setAmount] = useState("525.50");

  const handleSend = () => {
    alert(`Sending $${amount}`);
  };

  return (
    <TransferContainer>
      <InputContainer>
        <AmountInput
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="0.00"
        />
      </InputContainer>
      <SendButton onClick={handleSend}>
        Send <SendIcon />
      </SendButton>
    </TransferContainer>
  );
};

export default MoneyTransfer;
