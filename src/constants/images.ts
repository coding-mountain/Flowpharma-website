import { DeRiskedPath } from "../app/components/DeRiskedPath";

const filterPath = (path:string) => {
  path = `.` + path
// FOR REGUALAR USE
  // return new URL (path, import.meta.url).href
// FOR BUILD IMAGE FIX
return new URL (path, import.meta.url).href
}

export const IMAGES = {
  homepage: {
    bg: filterPath("/assets/images/home-bg.png"),
    logo: filterPath("/assets/images/logo.png"),
    logoWhite: filterPath("/assets/images/logoWhite.png"),
    patentProtection1: filterPath("/assets/images/patentProtection1.png"),
    patentProtection2: filterPath("/assets/images/patentProtection2.png"),
    flowVax: filterPath("/assets/images/flowVax.png"),
  },

  ourTeams: {
    team1: filterPath("/assets/images/team1.png"),
    team2: filterPath("/assets/images/team2.png"),
    team3: filterPath("/assets/images/team3.png"),
    team4: filterPath("/assets/images/team4.png"),
    team5: filterPath("/assets/images/team5.png"),
    team6: filterPath("/assets/images/team6.png"),
    team7: filterPath("/assets/images/team7.png"),
    team8: filterPath("/assets/images/team8.png"),
    team9: filterPath("/assets/images/team9.png"),
    team10: filterPath("/assets/images/team10.png"),
    team11: filterPath("/assets/images/team11.png"),
    team12: filterPath("/assets/images/team12.png"),
    team13: filterPath("/assets/images/team13.png"),
    team14: filterPath("/assets/images/team14.png"),
    team15: filterPath("/assets/images/team15.png"),
    team16: filterPath("/assets/images/team16.png"),
    team17: filterPath("/assets/images/team17.png"),
    blank: filterPath("/assets/images/blank.png"),
  },

  safe: {
    safe1: filterPath("/assets/images/safe1.png"),
    safe2: filterPath("/assets/images/safe2.png"),
    safe3: filterPath("/assets/images/safe3.png"),
    safe4: filterPath("/assets/images/safe4.png"),
    safe5: filterPath("/assets/images/safe5.png"),
    safe6: filterPath("/assets/images/safe6.png"),
    safe7: filterPath("/assets/images/safe7.png"),
    safe8: filterPath("/assets/images/safe8.png"),
    safe9: filterPath("/assets/images/safe9.png"),
    safe10: filterPath("/assets/images/safe10.png"),
    safe11: filterPath("/assets/images/safe11.png"),
    safe12: filterPath("/assets/images/safe12.png"),
  },

  deRiskedPath: {
    image1: filterPath("/assets/images/deRisk.png"),
    image2: filterPath("/assets/images/fundingChallenges.png"),
  },
};
