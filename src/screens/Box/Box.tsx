import React from "react";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

export const Box = (): JSX.Element => {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-white to-[#baf1f9] overflow-hidden">
      <div className="flex flex-row w-full h-screen">
        <div className="flex flex-col justify-center px-[125px] w-1/2">
          <h1 className="[font-family:'Akira_Expanded-SuperBold',Helvetica] font-bold text-black text-[85.1px] leading-normal mb-[52px]">
            Welcome to <br />
            Codemia!
          </h1>

          <p className="[font-family:'Big_Shoulders_Text',Helvetica] font-normal text-black text-[46.2px] leading-normal opacity-[0.59] mb-[100px]">
            Code smarter. Evaluate faster.
          </p>

          <div className="flex flex-col gap-[47px] max-w-[729px]">
            <div className="flex flex-col gap-2">
              <Label htmlFor="username" className="sr-only">
                Username
              </Label>
              <Input
                id="username"
                type="text"
                placeholder="Username"
                className="h-[105px] bg-white rounded-[36px] border-4 border-solid border-black [font-family:'Be_Vietnam',Helvetica] font-normal text-black text-3xl px-10"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="password" className="sr-only">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                className="h-[105px] bg-white rounded-[36px] border-4 border-solid border-black [font-family:'Be_Vietnam',Helvetica] font-normal text-black text-3xl px-10"
              />
            </div>
          </div>

          <p className="[font-family:'Be_Vietnam',Helvetica] font-normal text-[25px] leading-normal mt-[60px] text-center">
            <span className="text-black">Can&apos;t Login? </span>
            <button className="text-[#008cff] hover:underline bg-transparent border-none cursor-pointer">
              Contact us
            </button>
          </p>
        </div>

        <div className="flex items-center justify-center w-1/2">
          <img
            className="w-full max-w-[1018px] h-auto object-contain"
            alt="Codemia mascot illustration"
            src="/group-22.png"
          />
        </div>
      </div>
    </div>
  );
};
