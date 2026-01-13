import {TracingBeam} from "@/components/ui/tracing-beam";
import {Separator} from "@/components/ui/separator";

export default function OldResume(): JSX.Element {
  return (
    <>
      <TracingBeam className="px-6 pb-20">
        <div className="min-h-screen h-auto flex flex-col lg:flex-row justify-center items-center px-4 space-x-3 pt-4">
          {/* Resume Card */}
          <div className="w-full max-w-4xl bg-white dark:bg-neutral-900 shadow-lg rounded-lg p-6">
            {/* Header Section: Name & Title */}
            <div className="text-center mb-6">
              <h1 className="text-3xl font-semibold text-neutral-800 dark:text-white">
                Rhammi Oussama
              </h1>
              <p className="text-xl text-neutral-600 dark:text-neutral-300">
                Programmer Analyst
              </p>
              <div className="text-sm mt-2 space-x-3 text-gray-600">
                <a href="tel:+918299837402">
                  <i className="fas fa-phone"></i> 8299837402
                </a>
                <a href="mailto:oussamarhammi2020@hotmail.com">
                  <i className="fas fa-envelope"></i>{" "}
                  oussamarhammi2020@hotmail.com
                </a>
                <a href="https://www.linkedin.com/in/oussama-rhammi-252177106/">
                  <i className="fab fa-linkedin"></i> rhammi oussama
                </a>
              </div>
            </div>
            <Separator className="my-4" />
          </div>
        </div>
      </TracingBeam>
    </>
  );
}
