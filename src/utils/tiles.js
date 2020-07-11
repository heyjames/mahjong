const tiles = [
  { type: "bamboo", label: "Bamboo 1 1", code: "bam1-1", img: "", prevOwner: "", currOwner: "" },
  { type: "bamboo", label: "Bamboo 1 2", code: "bam1-2", img: "", prevOwner: "", currOwner: "" },
  { type: "bamboo", label: "Bamboo 1 3", code: "bam1-3", img: "", prevOwner: "", currOwner: "" },
  { type: "bamboo", label: "Bamboo 1 4", code: "bam1-4", img: "", prevOwner: "", currOwner: "" },

  { type: "bamboo", label: "Bamboo 2 1", code: "bam2-1", img: "", prevOwner: "", currOwner: "" },
  { type: "bamboo", label: "Bamboo 2 2", code: "bam2-2", img: "", prevOwner: "", currOwner: "" },
  { type: "bamboo", label: "Bamboo 2 3", code: "bam2-3", img: "", prevOwner: "", currOwner: "" },
  { type: "bamboo", label: "Bamboo 2 4", code: "bam2-4", img: "", prevOwner: "", currOwner: "" },

  { type: "bamboo", label: "Bamboo 3 1", code: "bam3-1", img: "", prevOwner: "", currOwner: "" },
  { type: "bamboo", label: "Bamboo 3 2", code: "bam3-2", img: "", prevOwner: "", currOwner: "" },
  { type: "bamboo", label: "Bamboo 3 3", code: "bam3-3", img: "", prevOwner: "", currOwner: "" },
  { type: "bamboo", label: "Bamboo 3 4", code: "bam3-4", img: "", prevOwner: "", currOwner: "" },

  { type: "bamboo", label: "Bamboo 4 1", code: "bam4-1", img: "", prevOwner: "", currOwner: "" },
  { type: "bamboo", label: "Bamboo 4 2", code: "bam4-2", img: "", prevOwner: "", currOwner: "" },
  { type: "bamboo", label: "Bamboo 4 3", code: "bam4-3", img: "", prevOwner: "", currOwner: "" },
  { type: "bamboo", label: "Bamboo 4 4", code: "bam4-4", img: "", prevOwner: "", currOwner: "" },

  { type: "bamboo", label: "Bamboo 5 1", code: "bam5-1", img: "", prevOwner: "", currOwner: "" },
  { type: "bamboo", label: "Bamboo 5 2", code: "bam5-2", img: "", prevOwner: "", currOwner: "" },
  { type: "bamboo", label: "Bamboo 5 3", code: "bam5-3", img: "", prevOwner: "", currOwner: "" },
  { type: "bamboo", label: "Bamboo 5 4", code: "bam5-4", img: "", prevOwner: "", currOwner: "" },

  { type: "bamboo", label: "Bamboo 6 1", code: "bam6-1", img: "", prevOwner: "", currOwner: "" },
  { type: "bamboo", label: "Bamboo 6 2", code: "bam6-2", img: "", prevOwner: "", currOwner: "" },
  { type: "bamboo", label: "Bamboo 6 3", code: "bam6-3", img: "", prevOwner: "", currOwner: "" },
  { type: "bamboo", label: "Bamboo 6 4", code: "bam6-4", img: "", prevOwner: "", currOwner: "" },

  { type: "bamboo", label: "Bamboo 7 1", code: "bam7-1", img: "", prevOwner: "", currOwner: "" },
  { type: "bamboo", label: "Bamboo 7 2", code: "bam7-2", img: "", prevOwner: "", currOwner: "" },
  { type: "bamboo", label: "Bamboo 7 3", code: "bam7-3", img: "", prevOwner: "", currOwner: "" },
  { type: "bamboo", label: "Bamboo 7 4", code: "bam7-4", img: "", prevOwner: "", currOwner: "" },

  { type: "bamboo", label: "Bamboo 8 1", code: "bam8-1", img: "", prevOwner: "", currOwner: "" },
  { type: "bamboo", label: "Bamboo 8 2", code: "bam8-2", img: "", prevOwner: "", currOwner: "" },
  { type: "bamboo", label: "Bamboo 8 3", code: "bam8-3", img: "", prevOwner: "", currOwner: "" },
  { type: "bamboo", label: "Bamboo 8 4", code: "bam8-4", img: "", prevOwner: "", currOwner: "" },

  { type: "bamboo", label: "Bamboo 9 1", code: "bam9-1", img: "", prevOwner: "", currOwner: "" },
  { type: "bamboo", label: "Bamboo 9 2", code: "bam9-2", img: "", prevOwner: "", currOwner: "" },
  { type: "bamboo", label: "Bamboo 9 3", code: "bam9-3", img: "", prevOwner: "", currOwner: "" },
  { type: "bamboo", label: "Bamboo 9 4", code: "bam9-4", img: "", prevOwner: "", currOwner: "" },

  { type: "character", label: "Ten Thousand 1 1", code: "cha1-1", img: "", prevOwner: "", currOwner: "" },
  { type: "character", label: "Ten Thousand 1 2", code: "cha1-2", img: "", prevOwner: "", currOwner: "" },
  { type: "character", label: "Ten Thousand 1 3", code: "cha1-3", img: "", prevOwner: "", currOwner: "" },
  { type: "character", label: "Ten Thousand 1 4", code: "cha1-4", img: "", prevOwner: "", currOwner: "" },

  { type: "character", label: "Ten Thousand 2 1", code: "cha2-1", img: "", prevOwner: "", currOwner: "" },
  { type: "character", label: "Ten Thousand 2 2", code: "cha2-2", img: "", prevOwner: "", currOwner: "" },
  { type: "character", label: "Ten Thousand 2 3", code: "cha2-3", img: "", prevOwner: "", currOwner: "" },
  { type: "character", label: "Ten Thousand 2 4", code: "cha2-4", img: "", prevOwner: "", currOwner: "" },

  { type: "character", label: "Ten Thousand 3 1", code: "cha3-1", img: "", prevOwner: "", currOwner: "" },
  { type: "character", label: "Ten Thousand 3 2", code: "cha3-2", img: "", prevOwner: "", currOwner: "" },
  { type: "character", label: "Ten Thousand 3 3", code: "cha3-3", img: "", prevOwner: "", currOwner: "" },
  { type: "character", label: "Ten Thousand 3 4", code: "cha3-4", img: "", prevOwner: "", currOwner: "" },

  { type: "character", label: "Ten Thousand 4 1", code: "cha4-1", img: "", prevOwner: "", currOwner: "" },
  { type: "character", label: "Ten Thousand 4 2", code: "cha4-2", img: "", prevOwner: "", currOwner: "" },
  { type: "character", label: "Ten Thousand 4 3", code: "cha4-3", img: "", prevOwner: "", currOwner: "" },
  { type: "character", label: "Ten Thousand 4 4", code: "cha4-4", img: "", prevOwner: "", currOwner: "" },

  { type: "character", label: "Ten Thousand 5 1", code: "cha5-1", img: "", prevOwner: "", currOwner: "" },
  { type: "character", label: "Ten Thousand 5 2", code: "cha5-2", img: "", prevOwner: "", currOwner: "" },
  { type: "character", label: "Ten Thousand 5 3", code: "cha5-3", img: "", prevOwner: "", currOwner: "" },
  { type: "character", label: "Ten Thousand 5 4", code: "cha5-4", img: "", prevOwner: "", currOwner: "" },

  { type: "character", label: "Ten Thousand 6 1", code: "cha6-1", img: "", prevOwner: "", currOwner: "" },
  { type: "character", label: "Ten Thousand 6 2", code: "cha6-2", img: "", prevOwner: "", currOwner: "" },
  { type: "character", label: "Ten Thousand 6 3", code: "cha6-3", img: "", prevOwner: "", currOwner: "" },
  { type: "character", label: "Ten Thousand 6 4", code: "cha6-4", img: "", prevOwner: "", currOwner: "" },

  { type: "character", label: "Ten Thousand 7 1", code: "cha7-1", img: "", prevOwner: "", currOwner: "" },
  { type: "character", label: "Ten Thousand 7 2", code: "cha7-2", img: "", prevOwner: "", currOwner: "" },
  { type: "character", label: "Ten Thousand 7 3", code: "cha7-3", img: "", prevOwner: "", currOwner: "" },
  { type: "character", label: "Ten Thousand 7 4", code: "cha7-4", img: "", prevOwner: "", currOwner: "" },

  { type: "character", label: "Ten Thousand 8 1", code: "cha8-1", img: "", prevOwner: "", currOwner: "" },
  { type: "character", label: "Ten Thousand 8 2", code: "cha8-2", img: "", prevOwner: "", currOwner: "" },
  { type: "character", label: "Ten Thousand 8 3", code: "cha8-3", img: "", prevOwner: "", currOwner: "" },
  { type: "character", label: "Ten Thousand 8 4", code: "cha8-4", img: "", prevOwner: "", currOwner: "" },

  { type: "character", label: "Ten Thousand 9 1", code: "cha9-1", img: "", prevOwner: "", currOwner: "" },
  { type: "character", label: "Ten Thousand 9 2", code: "cha9-2", img: "", prevOwner: "", currOwner: "" },
  { type: "character", label: "Ten Thousand 9 3", code: "cha9-3", img: "", prevOwner: "", currOwner: "" },
  { type: "character", label: "Ten Thousand 9 4", code: "cha9-4", img: "", prevOwner: "", currOwner: "" },

  { type: "dot", label: "Barrel 1 1", code: "dot1-1", img: "", prevOwner: "", currOwner: "" },
  { type: "dot", label: "Barrel 1 2", code: "dot1-2", img: "", prevOwner: "", currOwner: "" },
  { type: "dot", label: "Barrel 1 3", code: "dot1-3", img: "", prevOwner: "", currOwner: "" },
  { type: "dot", label: "Barrel 1 4", code: "dot1-4", img: "", prevOwner: "", currOwner: "" },

  { type: "dot", label: "Barrel 2 1", code: "dot2-1", img: "", prevOwner: "", currOwner: "" },
  { type: "dot", label: "Barrel 2 2", code: "dot2-2", img: "", prevOwner: "", currOwner: "" },
  { type: "dot", label: "Barrel 2 3", code: "dot2-3", img: "", prevOwner: "", currOwner: "" },
  { type: "dot", label: "Barrel 2 4", code: "dot2-4", img: "", prevOwner: "", currOwner: "" },

  { type: "dot", label: "Barrel 3 1", code: "dot3-1", img: "", prevOwner: "", currOwner: "" },
  { type: "dot", label: "Barrel 3 2", code: "dot3-2", img: "", prevOwner: "", currOwner: "" },
  { type: "dot", label: "Barrel 3 3", code: "dot3-3", img: "", prevOwner: "", currOwner: "" },
  { type: "dot", label: "Barrel 3 4", code: "dot3-4", img: "", prevOwner: "", currOwner: "" },

  { type: "dot", label: "Barrel 4 1", code: "dot4-1", img: "", prevOwner: "", currOwner: "" },
  { type: "dot", label: "Barrel 4 2", code: "dot4-2", img: "", prevOwner: "", currOwner: "" },
  { type: "dot", label: "Barrel 4 3", code: "dot4-3", img: "", prevOwner: "", currOwner: "" },
  { type: "dot", label: "Barrel 4 4", code: "dot4-4", img: "", prevOwner: "", currOwner: "" },

  { type: "dot", label: "Barrel 5 1", code: "dot5-1", img: "", prevOwner: "", currOwner: "" },
  { type: "dot", label: "Barrel 5 2", code: "dot5-2", img: "", prevOwner: "", currOwner: "" },
  { type: "dot", label: "Barrel 5 3", code: "dot5-3", img: "", prevOwner: "", currOwner: "" },
  { type: "dot", label: "Barrel 5 4", code: "dot5-4", img: "", prevOwner: "", currOwner: "" },

  { type: "dot", label: "Barrel 6 1", code: "dot6-1", img: "", prevOwner: "", currOwner: "" },
  { type: "dot", label: "Barrel 6 2", code: "dot6-2", img: "", prevOwner: "", currOwner: "" },
  { type: "dot", label: "Barrel 6 3", code: "dot6-3", img: "", prevOwner: "", currOwner: "" },
  { type: "dot", label: "Barrel 6 4", code: "dot6-4", img: "", prevOwner: "", currOwner: "" },

  { type: "dot", label: "Barrel 7 1", code: "dot7-1", img: "", prevOwner: "", currOwner: "" },
  { type: "dot", label: "Barrel 7 2", code: "dot7-2", img: "", prevOwner: "", currOwner: "" },
  { type: "dot", label: "Barrel 7 3", code: "dot7-3", img: "", prevOwner: "", currOwner: "" },
  { type: "dot", label: "Barrel 7 4", code: "dot7-4", img: "", prevOwner: "", currOwner: "" },

  { type: "dot", label: "Barrel 8 1", code: "dot8-1", img: "", prevOwner: "", currOwner: "" },
  { type: "dot", label: "Barrel 8 2", code: "dot8-2", img: "", prevOwner: "", currOwner: "" },
  { type: "dot", label: "Barrel 8 3", code: "dot8-3", img: "", prevOwner: "", currOwner: "" },
  { type: "dot", label: "Barrel 8 4", code: "dot8-4", img: "", prevOwner: "", currOwner: "" },

  { type: "dot", label: "Barrel 9 1", code: "dot9-1", img: "", prevOwner: "", currOwner: "" },
  { type: "dot", label: "Barrel 9 2", code: "dot9-2", img: "", prevOwner: "", currOwner: "" },
  { type: "dot", label: "Barrel 9 3", code: "dot9-3", img: "", prevOwner: "", currOwner: "" },
  { type: "dot", label: "Barrel 9 4", code: "dot9-4", img: "", prevOwner: "", currOwner: "" },

  { type: "direction", label: "North 1", code: "dirN1", img: "", prevOwner: "", currOwner: "" },
  { type: "direction", label: "North 2", code: "dirN2", img: "", prevOwner: "", currOwner: "" },
  { type: "direction", label: "North 3", code: "dirN3", img: "", prevOwner: "", currOwner: "" },
  { type: "direction", label: "North 4", code: "dirN4", img: "", prevOwner: "", currOwner: "" },

  { type: "direction", label: "South 1", code: "dirS1", img: "", prevOwner: "", currOwner: "" },
  { type: "direction", label: "South 2", code: "dirS2", img: "", prevOwner: "", currOwner: "" },
  { type: "direction", label: "South 3", code: "dirS3", img: "", prevOwner: "", currOwner: "" },
  { type: "direction", label: "South 4", code: "dirS4", img: "", prevOwner: "", currOwner: "" },

  { type: "direction", label: "West 1", code: "dirW1", img: "", prevOwner: "", currOwner: "" },
  { type: "direction", label: "West 2", code: "dirW2", img: "", prevOwner: "", currOwner: "" },
  { type: "direction", label: "West 3", code: "dirW3", img: "", prevOwner: "", currOwner: "" },
  { type: "direction", label: "West 4", code: "dirW4", img: "", prevOwner: "", currOwner: "" },

  { type: "direction", label: "East 1", code: "dirE1", img: "", prevOwner: "", currOwner: "" },
  { type: "direction", label: "East 2", code: "dirE2", img: "", prevOwner: "", currOwner: "" },
  { type: "direction", label: "East 3", code: "dirE3", img: "", prevOwner: "", currOwner: "" },
  { type: "direction", label: "East 4", code: "dirE4", img: "", prevOwner: "", currOwner: "" },

  { type: "cardinal", label: "Red Center 1", code: "carR1", img: "", prevOwner: "", currOwner: "" },
  { type: "cardinal", label: "Red Center 2", code: "carR2", img: "", prevOwner: "", currOwner: "" },
  { type: "cardinal", label: "Red Center 3", code: "carR3", img: "", prevOwner: "", currOwner: "" },
  { type: "cardinal", label: "Red Center 4", code: "carR4", img: "", prevOwner: "", currOwner: "" },

  { type: "cardinal", label: "Green Fat Choi 1", code: "carG1", img: "", prevOwner: "", currOwner: "" },
  { type: "cardinal", label: "Green Fat Choi 2", code: "carG2", img: "", prevOwner: "", currOwner: "" },
  { type: "cardinal", label: "Green Fat Choi 3", code: "carG3", img: "", prevOwner: "", currOwner: "" },
  { type: "cardinal", label: "Green Fat Choi 4", code: "carG4", img: "", prevOwner: "", currOwner: "" },

  { type: "cardinal", label: "White Board 1", code: "carW1", img: "", prevOwner: "", currOwner: "" },
  { type: "cardinal", label: "White Board 2", code: "carW2", img: "", prevOwner: "", currOwner: "" },
  { type: "cardinal", label: "White Board 3", code: "carW3", img: "", prevOwner: "", currOwner: "" },
  { type: "cardinal", label: "White Board 4", code: "carW4", img: "", prevOwner: "", currOwner: "" },

  { type: "flower", label: "Flower 1", code: "flo1", img: "", prevOwner: "", currOwner: "" },
  { type: "flower", label: "Flower 2", code: "flo2", img: "", prevOwner: "", currOwner: "" },
  { type: "flower", label: "Flower 3", code: "flo3", img: "", prevOwner: "", currOwner: "" },
  { type: "flower", label: "Flower 4", code: "flo4", img: "", prevOwner: "", currOwner: "" },

  { type: "season", label: "Season 1", code: "sea1", img: "", prevOwner: "", currOwner: "" },
  { type: "season", label: "Season 2", code: "sea2", img: "", prevOwner: "", currOwner: "" },
  { type: "season", label: "Season 3", code: "sea3", img: "", prevOwner: "", currOwner: "" },
  { type: "season", label: "Season 4", code: "sea4", img: "", prevOwner: "", currOwner: "" }
];

export default tiles;