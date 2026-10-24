import {TracingBeam} from "@/components/ui/tracing-beam";
import axios from "axios";
import {Table, TableBody, TableCell, TableRow,} from "@/components/ui/table";
import {useEffect, useState} from "react";
import {formatDate} from "@/utils/utils";
import {GitHubRepo} from "@/types/GitHubAPIProps";
import GitHubCalendar from 'react-github-calendar'
import { useTheme } from "@/components/theme-provider";

export default function Stats(): JSX.Element {
  const [gitHubData, setGitHubData] = useState<GitHubRepo>();
  const { theme } = useTheme();

  useEffect(() => {
    const fetchGithub = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/repos/oussamarhammi21/portfolio"
        );
        setGitHubData(response.data);
      } catch (error) {
        console.error("Error fetching repository data:", error);
      }
    };
    fetchGithub();
  }, []);

  return (
    <>
        <div className="min-h-min flex flex-col justify-center items-center p-4 space-x-4 mt-10">
          
      <TracingBeam >
          <h1 className="text-3xl mt-5">STATS</h1>
          <br />
          <div className="container w-full my-2">
            <div className="mt-4">
              <h2 className="text-lg mb-4 font-bold uppercase tracking-widest">
                Some stats about me
              </h2>
              <Table className="w-full">
                <TableBody>
                  <TableRow className="min-w-full">
                    <TableCell className="font-medium text-left">
                      Current City
                    </TableCell>
                    <TableCell className="text-left">
                      Montreal, Quebec Canada
                    </TableCell>
                  </TableRow>
                  <TableRow className="min-w-full">
                    <TableCell className="font-medium text-left">
                      Countries Visited
                    </TableCell>
                    <TableCell className="text-left">06</TableCell>
                  </TableRow>
                  <TableRow className="min-w-full">
                    <TableCell className="font-medium text-left">
                      Nationality
                    </TableCell>
                    <TableCell className="text-left">Canadian</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            {/* Stats about site */}
            {gitHubData && (
              <div className="mt-8">
                <h2 className="text-lg mb-4 font-bold uppercase tracking-widest">
                  Some stats about this site
                </h2>
                <Table className="w-full">
                  <TableBody>
                    <TableRow className="min-w-full">
                      <TableCell className="font-medium text-left">
                        Open issues
                      </TableCell>
                      <TableCell className="text-left">
                        {gitHubData.open_issues}
                      </TableCell>
                    </TableRow>
                    <TableRow className="min-w-full">
                      <TableCell className="font-medium text-left">
                        Stars this repository has on github
                      </TableCell>
                      <TableCell className="text-left">
                        {gitHubData.stargazers_count}
                      </TableCell>
                    </TableRow>
                    <TableRow className="min-w-full">
                      <TableCell className="font-medium text-left">
                        Number of forks
                      </TableCell>
                      <TableCell className="text-left">
                        {gitHubData.forks_count}
                      </TableCell>
                    </TableRow>
                    <TableRow className="min-w-full">
                      <TableCell className="font-medium text-left">
                        Last updated at
                      </TableCell>
                      <TableCell className="text-left">
                        {formatDate(gitHubData?.updated_at ?? "")}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            )}
            <div className="mt-10">
              <h2 className="text-lg mb-4 font-bold uppercase tracking-widest">
                GitHub Contribution Calendar</h2>
              <GitHubCalendar username="oussamarhammi21" blockSize={11} blockRadius={4}
                  colorScheme={theme === "light" ? "light" : "dark"} />
              </div>
          </div>
          </TracingBeam>
        </div>
    </>
  );
}
