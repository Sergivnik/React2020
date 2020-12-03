import React from "react";
import "./buttonPushMe.sass";

export function ButtonPushMe({ getPush }) {
  const onPushMe = () => {
    return getPush({ name: "Кнопка", content: "satisfaction!!" });
  };
  return (
    <div>
      <button className="buttonPushMe" onClick={onPushMe}>
        PushMe
      </button>
    </div>
  );
}
