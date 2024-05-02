import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Step />
    </div>
  );
}
function Step() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
    console.log(step);
  }
  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
    console.log(step);
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen((open) => !open)}>
        <div>{isOpen ? `${"×"}` : "o"}</div>
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step} : {messages[step - 1]}
          </p>
          <div className="buttons">
            <Button
              textColor="#fff"
              bgColor="#7950f3"
              text="Previous"
              handler={handlePrevious}
            >
              <span>👈</span>Previous
            </Button>
            <Button
              textColor={"#fff"}
              bgColor={"#7950f3"}
              text="Next"
              handler={handleNext}
            >
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ textColor, bgColor, handler, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={handler}
    >
      {children}
    </button>
  );
}
