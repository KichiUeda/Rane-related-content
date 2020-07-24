import React from "react";
import { render } from "@testing-library/react";

import Card from "../client/components/Card";
import Carousel from "../client/components/Carousel";

describe("front end tests", () => {
  const cardData = [
    {
      coverImage: "https://example.com/img.jpg",
      title: "A cool game",
      price: {
        price: 49,
        promotion: 4,
      },
      systemIcons: {
        platforms: [
          [
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370318/platformicons/SteamTransWhite_jqsk2l.png",
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370318/platformicons/SteamTransMed_a8lxui.png",
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370318/platformicons/SteamTransDark_gqamod.png",
          ],
        ],
        os: [
          [
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370319/platformicons/WindowsTransWhite_jyl6ij.png",
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370319/platformicons/WindowsTransMed_wyuamc.png",
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370318/platformicons/WindowsTransDark_tsafuk.png",
          ],
          [
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370318/platformicons/Oculus_RiftTransWhite_darswl.png",
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370318/platformicons/Oculus_RiftTransMed_gkmjnz.png",
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370318/platformicons/Oculus_RiftTransDark_l9eeo7.png",
          ],
          [
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370317/platformicons/HTC_ViveTransWhite_ald4ph.png",
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370317/platformicons/HTC_ViveTransMed_eflsfn.png",
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370317/platformicons/HTC_ViveTransDark_vomszh.png",
          ],
          [
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370319/platformicons/WinMixRealityTransWhite_zegdij.png",
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370319/platformicons/WinMixRealityTransMed_gpiksf.png",
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370319/platformicons/WinMixRealityTransDark_irly4n.png",
          ],
        ],
      },
    },
    {
      coverImage: "https://example.com/img.jpg",
      title: "A cool game 2",
      price: {
        price: 49,
        promotion: 4,
      },
      systemIcons: {
        platforms: [
          [
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370318/platformicons/SteamTransWhite_jqsk2l.png",
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370318/platformicons/SteamTransMed_a8lxui.png",
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370318/platformicons/SteamTransDark_gqamod.png",
          ],
        ],
        os: [
          [
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370319/platformicons/WindowsTransWhite_jyl6ij.png",
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370319/platformicons/WindowsTransMed_wyuamc.png",
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370318/platformicons/WindowsTransDark_tsafuk.png",
          ],
          [
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370318/platformicons/Oculus_RiftTransWhite_darswl.png",
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370318/platformicons/Oculus_RiftTransMed_gkmjnz.png",
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370318/platformicons/Oculus_RiftTransDark_l9eeo7.png",
          ],
          [
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370317/platformicons/HTC_ViveTransWhite_ald4ph.png",
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370317/platformicons/HTC_ViveTransMed_eflsfn.png",
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370317/platformicons/HTC_ViveTransDark_vomszh.png",
          ],
          [
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370319/platformicons/WinMixRealityTransWhite_zegdij.png",
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370319/platformicons/WinMixRealityTransMed_gpiksf.png",
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370319/platformicons/WinMixRealityTransDark_irly4n.png",
          ],
        ],
      },
    },
    {
      coverImage: "https://example.com/img.jpg",
      title: "A cool game 3",
      price: {
        price: 49,
        promotion: 4,
      },
      systemIcons: {
        platforms: [
          [
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370318/platformicons/SteamTransWhite_jqsk2l.png",
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370318/platformicons/SteamTransMed_a8lxui.png",
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370318/platformicons/SteamTransDark_gqamod.png",
          ],
        ],
        os: [
          [
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370319/platformicons/WindowsTransWhite_jyl6ij.png",
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370319/platformicons/WindowsTransMed_wyuamc.png",
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370318/platformicons/WindowsTransDark_tsafuk.png",
          ],
          [
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370318/platformicons/Oculus_RiftTransWhite_darswl.png",
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370318/platformicons/Oculus_RiftTransMed_gkmjnz.png",
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370318/platformicons/Oculus_RiftTransDark_l9eeo7.png",
          ],
          [
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370317/platformicons/HTC_ViveTransWhite_ald4ph.png",
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370317/platformicons/HTC_ViveTransMed_eflsfn.png",
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370317/platformicons/HTC_ViveTransDark_vomszh.png",
          ],
          [
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370319/platformicons/WinMixRealityTransWhite_zegdij.png",
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370319/platformicons/WinMixRealityTransMed_gpiksf.png",
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370319/platformicons/WinMixRealityTransDark_irly4n.png",
          ],
        ],
      },
    },
    {
      coverImage: "https://example.com/img.jpg",
      title: "A cool game 4",
      price: {
        price: 49,
        promotion: 4,
      },
      systemIcons: {
        platforms: [
          [
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370318/platformicons/SteamTransWhite_jqsk2l.png",
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370318/platformicons/SteamTransMed_a8lxui.png",
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370318/platformicons/SteamTransDark_gqamod.png",
          ],
        ],
        os: [
          [
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370319/platformicons/WindowsTransWhite_jyl6ij.png",
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370319/platformicons/WindowsTransMed_wyuamc.png",
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370318/platformicons/WindowsTransDark_tsafuk.png",
          ],
          [
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370318/platformicons/Oculus_RiftTransWhite_darswl.png",
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370318/platformicons/Oculus_RiftTransMed_gkmjnz.png",
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370318/platformicons/Oculus_RiftTransDark_l9eeo7.png",
          ],
          [
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370317/platformicons/HTC_ViveTransWhite_ald4ph.png",
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370317/platformicons/HTC_ViveTransMed_eflsfn.png",
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370317/platformicons/HTC_ViveTransDark_vomszh.png",
          ],
          [
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370319/platformicons/WinMixRealityTransWhite_zegdij.png",
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370319/platformicons/WinMixRealityTransMed_gpiksf.png",
            "https://res.cloudinary.com/overview/image/upload/t_icon/v1595370319/platformicons/WinMixRealityTransDark_irly4n.png",
          ],
        ],
      },
    },
  ];
  describe("Card component", () => {
    /*
        View <title>
            Cover
            Title - Star
            Platforms - Price
    */
    test("It renders to the screen", () => {
      const { getByLabelText, getByTestId } = render(<Card {...cardData} />);

      expect(getByLabelText(/View/i)).toBeTruthy();
      expect(getByTestId("cover-image")).toBeTruthy();
      expect(getByTestId("title-span")).toBeTruthy();
      expect(getByTestId("star-icon")).toBeTruthy();
      expect(getByTestId("platforms")).toBeTruthy();
      expect(getByTestId("price-div")).toBeTruthy();
    });
  });

  describe("Carousel component", () => {
    /*
        < card card card >
    */
    test("It renders to the screen", () => {
      const { getByLabelText, getByTestId } = render(
        <Carousel cardData={cardData} />
      );

      expect(getByTestId("carousel-component")).toBeTruthy();
      expect(getByLabelText(/Scroll left/i)).toBeTruthy();
      expect(getByLabelText(/Scroll right/i)).toBeTruthy();
    });
    test("It renders the correct number of cards", () => {
      const { queryAllByLabelText } = render(<Carousel cardData={cardData} />);

      const cards = queryAllByLabelText(/View/i);

      expect(cards.length).toBe(4);
    });
  });
});
