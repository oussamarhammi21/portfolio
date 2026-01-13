import React from "react";
import { Card } from "@/components/ui/card";
import { CardBody } from "@/components/ui/3d-card";
import { Separator } from "@/components/ui/separator";

export default function About(): JSX.Element {
  return (
    <div className="flex justify-center items-center">
      <Card className="flex flex-col items-center sm:my-5 max-w-4xl">
        <CardBody className="w-full p-8 h-auto sm:mx-10 z-20">
          <div className="text-center mb-6">
            <h1 className="text-neutral-500 dark:text-neutral-400 font-semibold tracking-[1em] text-lg sm:text-xl">
              ABOUT ME
            </h1>
          </div>
          
          <p className="leading-7 mb-6">
            Passionate computer science professional with expertise in software development, AI systems, and cybersecurity. My technical journey has equipped me with a versatile skill set for modern technology challenges.
          </p>

          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3 text-neutral-700 dark:text-neutral-300">
              Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-neutral-50 dark:bg-neutral-900 p-3 rounded">
                <h3 className="font-medium mb-1">Technical Skills</h3>
                <ul className="text-sm text-neutral-600 dark:text-neutral-400">
                  <li>• Software Development</li>
                  <li>• AI Model Design</li>
                  <li>• Active Directory & Security</li>
                  <li>• Game Development</li>
                </ul>
              </div>
              <div className="bg-neutral-50 dark:bg-neutral-900 p-3 rounded">
                <h3 className="font-medium mb-1">Professional Attributes</h3>
                <ul className="text-sm text-neutral-600 dark:text-neutral-400">
                  <li>• Bilingual (French/English)</li>
                  <li>• Strong Problem Solver</li>
                  <li>• Excellent Team Player</li>
                  <li>• Project Management</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="leading-7 mb-6">
            Throughout my academic and professional journey, I have developed strong analytical skills and the ability to organize work efficiently. My motivation and adaptability allow me to tackle complex technical challenges while maintaining high standards of quality.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg mb-6">
            <p className="leading-7 text-center font-medium">
              Currently exploring opportunities in Software Engineering, AI Development, and IT Security where I can contribute my expertise and grow professionally.
            </p>
          </div>

          <Separator className="my-6" />
          <div className="text-center text-sm text-neutral-500 dark:text-neutral-400">
            Available for full-time positions and challenging projects
          </div>
        </CardBody>
      </Card>
    </div>
  );
}