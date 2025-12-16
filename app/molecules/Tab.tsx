import { Button } from "../atom/Button";
import { TabProps } from "../types/interface";
import { motion } from "framer-motion";
export const Tab = ({ activeTab, tabs, onClick }: TabProps) => {
  return (
    <div className="flex rounded-[30px] bg-grey-100 w-fit">
      {tabs.map((tab, index) => {
        const isActive = activeTab.toLowerCase() === tab.toLowerCase();
        return (
          <div className="relative " key={index}>
            {isActive && (
              <motion.div
                layout
                layoutId="tabId"
                className="bg-green-100  font-medium text-sm capitalize text-white rounded-[30px] w-full h-full absolute"
                transition={{
                  ease: "easeInOut",
                  duration: 0.7,
                }}
              />
            )}
            <Button
              isDisable={isActive}
              onClick={() => onClick(tab)}
              text={tab}
              style={`px-4 py-2 inherit transition easeInOut duration-500 delay-300 relative ${
                isActive ? "text-white " : " text-grey-400"
              } `}
            />
          </div>
        );
      })}
    </div>
  );
};
