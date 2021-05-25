import { FC, useState } from "react";
import { HiCheck, HiHand, HiX } from "react-icons/hi";

const ScorekeeperScreen: FC = () => {
  const [activeButton, setActiveButton] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [confirming, setConfirming] = useState(false);
  //   const [timeExpired, setTimeExpired] = useState(false);
  const handleButtonClick = (btnId: string) => {
    setConfirming(true);
    setActiveButton(btnId);
  };
  const handleConfirmClick = (confirm: boolean) => {
    if (confirm) {
      // api request
      setShowSuccessMessage(true);
      setConfirming(false);
      console.log(showSuccessMessage);
    } else {
      setConfirming(false);
    }
  };
  return (
    <div className="grid grid-cols-6 grid-rows-6 min-h-screen gap-4 select-none">
      <div className="flex col-start-2 col-span-4 h-full items-center justify-center">
        <p className="font-semibold text-gray-900 text-4xl select-none">
          Sam Roehrich
        </p>
      </div>
      <div className="h-full flex items-center justify-center w-full">
        <HiHand className="h-full w-6 text-red-500 select-none" />
      </div>
      <div className="col-span-full h-full flex items-center justify-center">
        <div>
          <div>
            <div>
              <p className="font-extrabold text-gray-900 text-9xl select-none">
                3:45
              </p>
            </div>
          </div>
        </div>
      </div>
      {confirming === false ? (
        <>
          <div className="bg-yellow-300 col-span-full row-span-2 flex items-center">
            <div className="w-1/2 h-full border-r-2 flex items-center justify-center cursor-pointer group transition active:bg-green-300">
              <div onClick={() => handleButtonClick("Attempt")}>
                <p className="text-gray-900 font-bold text-4xl select-none">
                  Attempt
                </p>
              </div>
            </div>
            <div className="w-1/2 h-full border-l-2 flex items-center justify-center cursor-pointer active:bg-green-300 group transition">
              <div onClick={() => handleButtonClick("Zone")}>
                <p className="text-gray-900 font-bold text-4xl select-none">
                  Zone
                </p>
              </div>
            </div>
          </div>
          <div className="bg-indigo-500 col-span-full row-span-2 flex items-center justify-center cursor-pointer active:bg-green-300 group transition">
            <div onClick={() => handleButtonClick("Top")}>
              <p className="text-gray-900 font-bold text-4xl select-none">
                Top
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="col-span-full flex items-center justify-center">
            <p className="text-4xl font-semibold text-red-500 select-none">
              Confirming: {activeButton}
            </p>
          </div>
          <div className="row-span-3 col-span-full flex flex-col space-y-2">
            <div className="bg-red-500 col-span-full flex items-center justify-center h-1/2">
              <HiX
                className="text-8xl select-none"
                onClick={() => handleConfirmClick(false)}
              />
            </div>
            <div className="bg-indigo-500 col-span-full flex items-center justify-center h-1/2">
              <HiCheck
                className="text-8xl select-none"
                onClick={() => handleConfirmClick(true)}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ScorekeeperScreen;
