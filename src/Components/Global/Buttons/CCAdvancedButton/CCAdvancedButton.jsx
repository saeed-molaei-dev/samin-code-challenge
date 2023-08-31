import React from "react";
import { CiTrash } from "react-icons/ci";
import { FiPlus, FiMinus } from "react-icons/fi";
import "./CCAdvancedButton.scss";

function CCAdvancedButton({ count, onPlus, onMinus, onDeleted }) {
  return (
    <div className="cc-advanced-button">
      <FiPlus onClick={onPlus} />
      <span>{count}</span>
      <FiMinus onClick={onMinus} />
      <CiTrash onClick={onDeleted} />
    </div>
  );
}

export default CCAdvancedButton;
