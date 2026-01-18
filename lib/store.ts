import { create } from "zustand";

type FrameData = {
  text: string;
  num: number;
  time: number;
  selected: boolean;
};

type VideoStore = {
  data: FrameData[];
};

export const useVideoStore = create<VideoStore>((set) => ({
  data: [
    {
      text: "Embrace the lush",
      num: 3,
      time: 0.53,
      selected: false,
    },
    {
      text: "green",
      num: 1,
      time: 0.25,
      selected: false,
    },
    {
      text: "canopies",
      num: 1,
      time: 0.25,
      selected: false,
    },
    {
      text: "of",
      num: 1,
      time: 0.24,
      selected: false,
    },
    {
      text: "Karnataka's",
      num: 1,
      time: 0.27,
      selected: false,
    },
    {
      text: "forests home to majestic",
      num: 4,
      time: 0.51,
      selected: false,
    },
    {
      text: "tigers 🐅 vibrant",
      num: 3,
      time: 0.75,
      selected: false,
    },
    {
      text: "elephants",
      num: 1,
      time: 0.25,
      selected: false,
    },
    {
      text: "🐘",
      num: 1,
      time: 0.24,
      selected: false,
    },
    {
      text: "and diverse bird",
      num: 3,
      time: 0.77,
      selected: false,
    },
    {
      text: "species",
      num: 1,
      time: 0.25,
      selected: false,
    },
    {
      text: "🦜",
      num: 1,
      time: 0.25,
      selected: false,
    },
    {
      text: "Let's unite to",
      num: 3,
      time: 0.74,
      selected: false,
    },
    {
      text: "safeguard these precious",
      num: 3,
      time: 0.77,
      selected: false,
    },
    {
      text: "habitats",
      num: 1,
      time: 0.25,
      selected: false,
    },
    {
      text: "preserving",
      num: 1,
      time: 0.25,
      selected: false,
    },
    {
      text: "the",
      num: 1,
      time: 0.25,
      selected: false,
    },
    {
      text: "delicate balance of",
      num: 3,
      time: 0.76,
      selected: false,
    },
    {
      text: "nature and protecting",
      num: 3,
      time: 0.59,
      selected: false,
    },
    {
      text: "our",
      num: 1,
      time: 0.22,
      selected: false,
    },
    {
      text: "wildlife",
      num: 1,
      time: 0.2,
      selected: false,
    },
    {
      text: "for",
      num: 1,
      time: 0.24,
      selected: false,
    },
    {
      text: "generations",
      num: 1,
      time: 0.25,
      selected: false,
    },
    {
      text: "to",
      num: 1,
      time: 0.24,
      selected: false,
    },
    {
      text: "come",
      num: 1,
      time: 0.27,
      selected: false,
    },
    {
      text: "Together we can",
      num: 3,
      time: 0.97,
      selected: false,
    },
    {
      text: "be",
      num: 1,
      time: 0.29,
      selected: false,
    },
    {
      text: "the",
      num: 1,
      time: 0.25,
      selected: false,
    },
    {
      text: "voice for the",
      num: 3,
      time: 0.51,
      selected: false,
    },
    {
      text: "voiceless",
      num: 1,
      time: 0.24,
      selected: false,
    },
    {
      text: "and",
      num: 1,
      time: 0.27,
      selected: false,
    },
    {
      text: "ensure a harmonious",
      num: 3,
      time: 0.75,
      selected: false,
    },
    {
      text: "coexistence",
      num: 1,
      time: 0.25,
      selected: false,
    },
    {
      text: "with our natural",
      num: 3,
      time: 0.5,
      selected: false,
    },
    {
      text: "world Let's protect",
      num: 3,
      time: 0.5,
      selected: false,
    },
    {
      text: "Karnataka's forests and",
      num: 3,
      time: 1.01,
      selected: false,
    },
    {
      text: "wildlife",
      num: 1,
      time: 0.24,
      selected: false,
    },
    {
      text: "our shared heritage",
      num: 3,
      time: 0.52,
      selected: false,
    },
    {
      text: "our responsibility",
      num: 3,
      time: 0.45,
      selected: false,
    },
  ],
  //   updateData: (newData) => set({ data: newData }),
  //   toggleSelect: (index) =>
  //     set((state) => {
  //       const newData = state.data.map((item, i) => {
  //         if (i === index) {
  //           // Toggle the current item's selected state and ensure it's the only one selected
  //           return { ...item, selected: !item.selected };
  //         } else {
  //           // Make sure all other items are not selected
  //           return { ...item, selected: false };
  //         }
  //       });
  //       return { data: newData };
  //     }),
  //   updateText: (index, newText) =>
  //     set((state) => {
  //       const newData = state.data.map((item, i) => {
  //         if (i === index) {
  //           return { ...item, text: newText };
  //         }
  //         return item;
  //       });
  //       return { data: newData };
  //     }),
}));
